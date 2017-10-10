flask_reveal
============

The Easiest Way to Present Online

![reveal1](https://user-images.githubusercontent.com/841395/31399109-c5bc613e-adb0-11e7-9ad8-0710164385e4.png)
![reveal2](https://user-images.githubusercontent.com/841395/31399110-c5f48e9c-adb0-11e7-9fae-5eef840ca440.png)
![reveal3](https://user-images.githubusercontent.com/841395/31399111-c63c43cc-adb0-11e7-9d77-68358f9a9559.png)
![reveal4](https://user-images.githubusercontent.com/841395/31399113-c68439de-adb0-11e7-85dd-c8c00cb30c2b.png)
![reveal5](https://user-images.githubusercontent.com/841395/31399114-c6be7ec8-adb0-11e7-9241-b6405be5b6.png)

This is a backend implement like [slid.es](http://slid.es), Use [flask](https://github.com/mitsuhiko/flask)/[mongoengine](https://github.com/MongoEngine/mongoengine)

First say thank to [hakimel](https://github.com/hakimel) and his [reveal.js](https://github.com/hakimel/reveal.js)

I Use [python-social-auth](https://github.com/omab/python-social-auth) for social auth, but it do not support mongoengine ,and I rewrote some code to achieve my thoughts

About
=====

* default, with This you can use Your Bitbucket/Google/Github/Instagram/Linkdln/Trello/Tumblr/Stackoverflow Account by oauth/oauth2 login
* You can create/edit/delete/save your HTML or markdown presentation

Usage
=====

You must edit the settings.py with your settings, a example settings has exist:

    cp settings.py.example settings.py

Add social app's Client_ID & Client_Secret to setting file. And start the server, You can use Django's style:

    python manage.py runserver -t 0.0.0.0 -p 80

