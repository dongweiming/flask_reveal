"""Flask SQLAlchemy ORM models for Social Auth"""
import datetime
from mongoengine import Document, IntField, StringField, \
                        ReferenceField, DateTimeField, \
                        ObjectIdField, DictField, BooleanField, SequenceField
from flask.ext.login import UserMixin
from flask import session


from social.utils import setting_name, module_member
from social.storage.mongoengine_orm import MongoengineUserMixin, \
                                          MongoengineAssociationMixin, \
                                          MongoengineNonceMixin, \
                                          BaseMongoengineStorage
from social.apps.flask_app.fields import JSONType


class User(Document, UserMixin):
    username = StringField(max_length=200)
    email = StringField(max_length=200)
    active = BooleanField(default=True)

    def is_active(self):
        return self.active

class FlaskStorage(BaseMongoengineStorage):
    user = None
    nonce = None
    association = None


class UserSocialAuth(Document, MongoengineUserMixin):
    #id = StringField(primary_key=True)   
    user = ReferenceField(User, dbref=True)
    provider = StringField(max_length=32)
    uid = StringField(max_length=255)
    extra_data = DictField()
    meta = {
        'indexes': ['uid']
        }

    @classmethod
    def username_max_length(cls):
        return User.username.max_length

    @classmethod
    def user_model(cls):
        return User

    @classmethod
    def _del_session(cls, qs):
        session.clear()
        #session.pop(username, None)

class Nonce(Document, MongoengineNonceMixin):
    id = StringField(primary_key=True)
    server_url = StringField(max_length=255)
    timestamp = IntField()
    salt = StringField(max_length=40)

class Association(Document, MongoengineAssociationMixin):
    id = StringField(primary_key=True)
    server_url = StringField(max_length=255)
    handle = StringField(max_length=255)
    secret = StringField(max_length=255)  # base64 encoded
    issued = IntField()
    lifetime = IntField()
    assoc_type = StringField(max_length=64)

class DjangoStorage(BaseMongoengineStorage):
    FlaskStorage.user = UserSocialAuth
    FlaskStorage.nonce = Nonce
    FlaskStorage.association = Association
