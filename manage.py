# coding=utf-8

import sys
from flask.ext.script import Server, Manager, Shell
sys.path.append('..')
from social.apps.flask_app.models import User, UserSocialAuth
from flask_reveal import app, db, models


manager = Manager(app)
manager.add_command('runserver', Server())
manager.add_command('shell', Shell(make_context=lambda: {
    'app': app,
    'db': db,
    'models': models,
    'user': User,
    'auth': UserSocialAuth
}))


#@manager.command
# def syncdb():
#   from flask_reveal.models import User
#   from social.apps.flask_app import models
# create index

if __name__ == '__main__':
    manager.run()
