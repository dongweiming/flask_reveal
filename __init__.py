import sys
import os

from flask import Flask, g, request, render_template, \
                    redirect, url_for, jsonify, _app_ctx_stack
from flask.ext import login
from flask.ext.mongoengine import MongoEngine
from social.apps.flask_app.routes import social_auth
from social.apps.flask_app.template_filters import backends
from social.apps.flask_app.models import User

#Your setting file
import settings

def static(filename):
    filepath = os.path.join(os.path.dirname(__file__), 'static', filename)
    last_modification = '%d' % os.path.getmtime(filepath)
    return url_for('static', filename=filename) + '?' + last_modification

def create_app():
    app = Flask(__name__)
    app.config.from_object(settings)
    @app.context_processor
    def inject_static():
        return dict(static=static)
    return app

app = create_app()
db = MongoEngine()
db.init_app(app)

app.register_blueprint(social_auth)

login_manager = login.LoginManager()
login_manager.login_view = 'main'
login_manager.login_message = ''
login_manager.setup_app(app)

from flask_reveal import routes

@app.template_filter('bool')
def bool_filter(s):
    return str(s).lower()

@login_manager.user_loader
def load_user(userid):
    try:
        return User.objects(id=userid).first()
    except (TypeError, ValueError):
        pass


@app.before_request
def global_user():
    g.user = login.current_user



@app.context_processor
def inject_user():
    try:
        return {'user': g.user}
    except AttributeError:
        return {'user': None}
app.jinja_env.filters['bool'] = bool_filter
app.context_processor(backends)
