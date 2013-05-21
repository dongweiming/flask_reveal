#encoding=utf-8

import datetime
from mongoengine import Document, IntField, StringField, \
						BooleanField, ObjectIdField, DateTimeField


class Logic(Document):
    tid = IntField(min_value=1)
    username = StringField(max_length=200)
    pubtime = DateTimeField(default=datetime.datetime.now)
    uptime = DateTimeField()
    transition = StringField(max_length=200, default="default")
    data = StringField(default="<section><h1>Untitled</h1></section>")
    description = StringField(default="")
    title = StringField(max_length=200)
    should_loop = BooleanField(default=False)
    published = BooleanField(default=True)
    rolling_links = BooleanField(default=True)
    theme_font = StringField(max_length=200, default="league")
    rtl = BooleanField(default=False)
    theme_color = StringField(max_length=200, default="grey-blue")
    center = BooleanField(default=False)

