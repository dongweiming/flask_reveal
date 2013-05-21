#encoding=utf-8


from flask import render_template, request, redirect, session, jsonify
from flask_reveal import app
from social.apps.flask_app.utils import login_required
from social.apps.flask_app.models import User, UserSocialAuth
from models import Logic
from mongoengine import ValidationError

def checkuser(username):
	try:
		qs = User.objects(username=username, id=session.get('user_id'))
		match = UserSocialAuth.objects(user__in=qs).first()
	except ValidationError:
		return False
	if not match:
		return False
	if match.provider == session.get('social_auth_last_login_backend'):
		return match
	else:
		return False

def comb(immutablemultidict):
	query = {}
	for k, v in immutablemultidict.iteritems():
		query.update({k[5:-1]:v})
	return query

def get_gravatar(user):
	import urllib, hashlib
	domain = 'http://'+ request.url.split('/')[2] + '/'
	email = user[0].email
	if not email:
		email = 'ciici123@hotmail.com'
	default = "static/images/default-profile-picture.png"
	size = 140
	gravatar_url = "http://www.gravatar.com/avatar/" + hashlib.md5(email.lower()).hexdigest() + "?"
	gravatar_url += urllib.urlencode({'d':default, 's':str(size)})
	return gravatar_url

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/<string:username>/')
#@login_required
def home(username):
	if checkuser(username):
		decks = Logic.objects(username=username).order_by("+pubtime")
		if not decks:
			return render_template("home.html")
	else:
		decks = Logic.objects(username=username, published=True).order_by("+pubtime")
		if not decks:
			user = User.objects(username=username)
			if user:
				gravatar_url = get_gravatar(user)
				return render_template("noyet.html", username=username, img=gravatar_url, 
					msg='{} hasn"t published any decks yet :'.format(username))
			return render_template("404.html")
	return render_template("home.html", decks=decks, username=username)

@app.route('/<string:username>/<string:title>')
#@login_required
def deck(username, title):
	if checkuser(username):
		deck = Logic.objects(username=username, title=title)
		if not deck:
			return render_template("home.html")
		other_deck = Logic.objects(username=username, title__ne=title)[:4]
		deck = deck[0]

	else:
		deck = Logic.objects(username=username, title=title, published=True)
		if not deck:
			user = User.objects(username=username)
			if len(user):
				gravatar_url = get_gravatar(user)
				return render_template("noyet.html", username=username, img=gravatar_url, 
					msg='{} hasn"t published any decks yet :'.format(username))
			return render_template("404.html")
		other_deck = Logic.objects(username=username, title__ne=title, published=True)[:4]
		deck = deck[0]
	return render_template("deck.html", username=username, data=deck, other=other_deck)

@app.route('/<string:username>/<string:title>/edit')
@login_required
def edit(username, title):
	user = User.objects(username=username)
	gravatar_url = get_gravatar(user)
	if not checkuser(username):
		return render_template("noyet.html", username=username, img=gravatar_url, 
					msg='You hasn"t operating authority yet :')
	qs = Logic.objects(username=username, title=title)
	if not qs:
		return render_template("noyet.html", username=username, img=gravatar_url, 
			msg='{You hasn"t published this deck!')
	return render_template("edit.html", data=qs[0], username=username)

@app.route('/api/decks/<deskname>', methods=['PUT'])
#@login_required
def deck_api(deskname):
	ppt = request.form
	up = {}
	for k, v in comb(ppt).iteritems():
		up['set__{}'.format(k)] = v
	Logic.objects(tid=deskname[:-5]).update(upsert=True, **up)
	return jsonify(message=1)

@app.route('/<string:username>/new')
@login_required
def new(username):
	gid = Logic.objects.count() + 1
	uid = Logic.objects(username=username).count() + 1
	if checkuser(username):
		deskname = Logic.objects(username=username).order_by("+pubtime")
		new_desk = 'desk-' + str(uid)
		Logic(title=new_desk, tid=gid, username=username).save()
	else:
		user = User.objects(username=username)
		if len(user):
			gravatar_url = get_gravatar(user)
			return render_template("noyet.html", username=username, img=gravatar_url, 
					msg='You do not has edit {} authority yet :('.format(username))
	return redirect('/{}/{}/edit'.format(username, new_desk))

@app.route('/login_redir')
def login_redir():
	openid_username = request.args.get('openid_username', None)
	claimid = request.args.get('claimid', '/')
	if not openid_username:
		return redirect(claimid)

@app.route('/tos')
@login_required
def done():
    return render_template('tos.html')