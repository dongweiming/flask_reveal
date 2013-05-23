"""MongoDB models for Social Auth"""
import base64
import six
from sqlalchemy.exc import IntegrityError

from social.exceptions import NotAllowedToDisconnect
from social.storage.base import UserMixin, AssociationMixin, NonceMixin, \
    BaseStorage


class MongoengineMixin(object):

    @classmethod
    def _new_instance(cls, model, *args, **kwargs):
        return cls._save_instance(model(*args, **kwargs))

    @classmethod
    def _save_instance(cls, instance):
        return instance.save()

    @classmethod
    def _del_session(cls, pk):
        raise NotImplementedError('Implement in subclass')


class MongoengineUserMixin(MongoengineMixin, UserMixin):

    """Social Auth association model"""
    @classmethod
    def changed(cls, user):
        cls._save_instance(user)

    def set_extra_data(self, extra_data=None):
        if super(MongoengineUserMixin, self).set_extra_data(extra_data):
            self._save_instance(self)

    @classmethod
    def disconnect(cls, name, user, association_id=None):
        if association_id is not None:
            qs = cls.user_model().objects(username=association_id)
        else:
            qs = cls.objects(provider__ne=backend_name)
        if qs.count() == 0:
            raise NotAllowedToDisconnect()
        cls._del_session(qs)

    @classmethod
    def user_query(cls):
        return cls._session().query(cls.user_model())

    @classmethod
    def user_exists(cls, username):
        """
        Return True/False if a User instance exists with the given arguments.
        Arguments are directly passed to filter() manager method.
        """
        return cls.user_model().objects.filter(username=username).count() > 0

    @classmethod
    def get_username(cls, user):
        return getattr(user, 'username', None)

    @classmethod
    def create_user(cls, username, email=None):
        return cls._new_instance(cls.user_model(), username=username,
                                 email=email)

    @classmethod
    def get_user(cls, pk):
        return cls._get_session(pk)

    @classmethod
    def get_name(cls, pk):
        return cls.user_model().objects(pk=pk)[0].username

    @classmethod
    def get_social_auth(cls, provider, uid):
        if not isinstance(uid, six.string_types):
            uid = str(uid)
        try:
            return cls.objects.filter(provider=provider,
                                      uid=uid).first()
        except IndexError:
            return None

    @classmethod
    def get_social_auth_for_user(cls, user):
        qs = cls.user_model().objects(username=user.username)
        user.provider = cls.objects(user__in=qs)[0].provider
        return user

    @classmethod
    def create_social_auth(cls, user, uid, provider):
        if not isinstance(uid, six.string_types):
            uid = str(uid)
        return cls._new_instance(cls, user=user, uid=uid, provider=provider)


class MongoengineNonceMixin(NonceMixin):

    @classmethod
    def use(cls, server_url, timestamp, salt):
        kwargs = {'server_url': server_url, 'timestamp': timestamp,
                  'salt': salt}
        try:
            return cls.objects.filter(**kwargs)
        except IndexError:
            return cls._new_instance(cls, **kwargs)


class MongoengineAssociationMixin(AssociationMixin):

    @classmethod
    def store(cls, server_url, association):
        # Don't use get_or_create because issued cannot be null
        try:
            assoc = cls.objects.filter(server_url=server_url,
                                       handle=association.handle)[0]
        except IndexError:
            assoc = cls(server_url=server_url,
                        handle=association.handle)
        assoc.secret = base64.encodestring(association.secret)
        assoc.issued = association.issued
        assoc.lifetime = association.lifetime
        assoc.assoc_type = association.assoc_type
        cls._save_instance(assoc)

    @classmethod
    def get(cls, *args, **kwargs):
        return cls.objects.filter(*args, **kwargs)

    @classmethod
    def remove(cls, ids_to_delete):
        cls.objects.filter(cls.id.in_(ids_to_delete)).delete()


class BaseMongoengineStorage(BaseStorage):
    user = MongoengineUserMixin
    nonce = MongoengineNonceMixin
    association = MongoengineAssociationMixin

    @classmethod
    def is_integrity_error(cls, exception):
        return exception.__class__ is IntegrityError
