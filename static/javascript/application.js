/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function(e, t) {
	function P(e) {
		var t = e.length,
		n = b.type(e);
		return b.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
	}
	function B(e) {
		var t = H[e] = {};
		return b.each(e.match(E) || [],
		function(e, n) {
			t[n] = !0
		}),
		t
	}
	function I(e, n, r, i) {
		if (!b.acceptData(e)) return;
		var s, o, u = b.expando,
		a = typeof n == "string",
		f = e.nodeType,
		c = f ? b.cache: e,
		h = f ? e[u] : e[u] && u;
		if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
		h || (f ? e[u] = h = l.pop() || b.guid++:h = u),
		c[h] || (c[h] = {},
		f || (c[h].toJSON = b.noop));
		if (typeof n == "object" || typeof n == "function") i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n);
		return s = c[h],
		i || (s.data || (s.data = {}), s = s.data),
		r !== t && (s[b.camelCase(n)] = r),
		a ? (o = s[n], o == null && (o = s[b.camelCase(n)])) : o = s,
		o
	}
	function q(e, t, n) {
		if (!b.acceptData(e)) return;
		var r, i, s, o = e.nodeType,
		u = o ? b.cache: e,
		a = o ? e[b.expando] : b.expando;
		if (!u[a]) return;
		if (t) {
			s = n ? u[a] : u[a].data;
			if (s) {
				b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t in s ? t = [t] : t = t.split(" "));
				for (r = 0, i = t.length; r < i; r++) delete s[t[r]];
				if (! (n ? U: b.isEmptyObject)(s)) return
			}
		}
		if (!n) {
			delete u[a].data;
			if (!U(u[a])) return
		}
		o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
	}
	function R(e, n, r) {
		if (r === t && e.nodeType === 1) {
			var i = "data-" + n.replace(F, "-$1").toLowerCase();
			r = e.getAttribute(i);
			if (typeof r == "string") {
				try {
					r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null: +r + "" === r ? +r: j.test(r) ? b.parseJSON(r) : r
				} catch(s) {}
				b.data(e, n, r)
			} else r = t
		}
		return r
	}
	function U(e) {
		var t;
		for (t in e) {
			if (t === "data" && b.isEmptyObject(e[t])) continue;
			if (t !== "toJSON") return ! 1
		}
		return ! 0
	}
	function it() {
		return ! 0
	}
	function st() {
		return ! 1
	}
	function ct(e, t) {
		do e = e[t];
		while (e && e.nodeType !== 1);
		return e
	}
	function ht(e, t, n) {
		t = t || 0;
		if (b.isFunction(t)) return b.grep(e,
		function(e, r) {
			var i = !!t.call(e, r, e);
			return i === n
		});
		if (t.nodeType) return b.grep(e,
		function(e) {
			return e === t === n
		});
		if (typeof t == "string") {
			var r = b.grep(e,
			function(e) {
				return e.nodeType === 1
			});
			if (at.test(t)) return b.filter(t, r, !n);
			t = b.filter(t, r)
		}
		return b.grep(e,
		function(e) {
			return b.inArray(e, t) >= 0 === n
		})
	}
	function pt(e) {
		var t = dt.split("|"),
		n = e.createDocumentFragment();
		if (n.createElement) while (t.length) n.createElement(t.pop());
		return n
	}
	function Mt(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function _t(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type,
		e
	}
	function Dt(e) {
		var t = Ct.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"),
		e
	}
	function Pt(e, t) {
		var n, r = 0;
		for (; (n = e[r]) != null; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
	}
	function Ht(e, t) {
		if (t.nodeType !== 1 || !b.hasData(e)) return;
		var n, r, i, s = b._data(e),
		o = b._data(t, s),
		u = s.events;
		if (u) {
			delete o.handle,
			o.events = {};
			for (n in u) for (r = 0, i = u[n].length; r < i; r++) b.event.add(t, n, u[n][r])
		}
		o.data && (o.data = b.extend({},
		o.data))
	}
	function Bt(e, t) {
		var n, r, i;
		if (t.nodeType !== 1) return;
		n = t.nodeName.toLowerCase();
		if (!b.support.noCloneEvent && t[b.expando]) {
			i = b._data(t);
			for (r in i.events) b.removeEvent(t, r, i.handle);
			t.removeAttribute(b.expando)
		}
		if (n === "script" && t.text !== e.text) _t(t).text = e.text,
		Dt(t);
		else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML),
		b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
		else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked,
		t.value !== e.value && (t.value = e.value);
		else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
		else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
	}
	function jt(e, n) {
		var r, s, o = 0,
		u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!u) for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++) ! n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
		return n === t || n && b.nodeName(e, n) ? b.merge([e], u) : u
	}
	function Ft(e) {
		xt.test(e.type) && (e.defaultChecked = e.checked)
	}
	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
		r = t,
		i = en.length;
		while (i--) {
			t = en[i] + n;
			if (t in e) return t
		}
		return r
	}
	function nn(e, t) {
		return e = t || e,
		b.css(e, "display") === "none" || !b.contains(e.ownerDocument, e)
	}
	function rn(e, t) {
		var n, r, i, s = [],
		o = 0,
		u = e.length;
		for (; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			s[o] = b._data(r, "olddisplay"),
			n = r.style.display,
			t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && b._data(r, "olddisplay", i ? n: b.css(r, "display")))
		}
		for (o = 0; o < u; o++) {
			r = e[o];
			if (!r.style) continue;
			if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "": "none"
		}
		return e
	}
	function sn(e, t, n) {
		var r = $t.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function on(e, t, n, r, i) {
		var s = n === (r ? "border": "content") ? 4 : t === "width" ? 1 : 0,
		o = 0;
		for (; s < 4; s += 2) n === "margin" && (o += b.css(e, n + Zt[s], !0, i)),
		r ? (n === "content" && (o -= b.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
		return o
	}
	function un(e, t, n) {
		var r = !0,
		i = t === "width" ? e.offsetWidth: e.offsetHeight,
		s = qt(e),
		o = b.support.boxSizing && b.css(e, "boxSizing", !1, s) === "border-box";
		if (i <= 0 || i == null) {
			i = Rt(e, t, s);
			if (i < 0 || i == null) i = e.style[t];
			if (Jt.test(i)) return i;
			r = o && (b.support.boxSizingReliable || i === e.style[t]),
			i = parseFloat(i) || 0
		}
		return i + on(e, t, n || (o ? "border": "content"), r, s) + "px"
	}
	function an(e) {
		var t = s,
		n = Qt[e];
		if (!n) {
			n = fn(e, t);
			if (n === "none" || !n) It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
			t = (It[0].contentWindow || It[0].contentDocument).document,
			t.write("<!doctype html><html><body>"),
			t.close(),
			n = fn(e, t),
			It.detach();
			Qt[e] = n
		}
		return n
	}
	function fn(e, t) {
		var n = b(t.createElement(e)).appendTo(t.body),
		r = b.css(n[0], "display");
		return n.remove(),
		r
	}
	function vn(e, t, n, r) {
		var i;
		if (b.isArray(t)) b.each(t,
		function(t, i) {
			n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t: "") + "]", i, n, r)
		});
		else if (!n && b.type(t) === "object") for (i in t) vn(e + "[" + i + "]", t[i], n, r);
		else r(e, t)
	}
	function _n(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			var r, i = 0,
			s = t.toLowerCase().match(E) || [];
			if (b.isFunction(n)) while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function Dn(e, t, n, r) {
		function o(u) {
			var a;
			return i[u] = !0,
			b.each(e[u] || [],
			function(e, u) {
				var f = u(t, n, r);
				if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f),
				o(f),
				!1;
				if (s) return ! (a = f)
			}),
			a
		}
		var i = {},
		s = e === An;
		return o(t.dataTypes[0]) || !i["*"] && o("*")
	}
	function Pn(e, n) {
		var r, i, s = b.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((s[i] ? e: r || (r = {}))[i] = n[i]);
		return r && b.extend(!0, e, r),
		e
	}
	function Hn(e, n, r) {
		var i, s, o, u, a = e.contents,
		f = e.dataTypes,
		l = e.responseFields;
		for (u in l) u in r && (n[l[u]] = r[u]);
		while (f[0] === "*") f.shift(),
		s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
		if (s) for (u in a) if (a[u] && a[u].test(s)) {
			f.unshift(u);
			break
		}
		if (f[0] in r) o = f[0];
		else {
			for (u in r) {
				if (!f[0] || e.converters[u + " " + f[0]]) {
					o = u;
					break
				}
				i || (i = u)
			}
			o = o || i
		}
		if (o) return o !== f[0] && f.unshift(o),
		r[o]
	}
	function Bn(e, t) {
		var n, r, i, s, o = {},
		u = 0,
		a = e.dataTypes.slice(),
		f = a[0];
		e.dataFilter && (t = e.dataFilter(t, e.dataType));
		if (a[1]) for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
		for (; r = a[++u];) if (r !== "*") {
			if (f !== "*" && f !== r) {
				i = o[f + " " + r] || o["* " + r];
				if (!i) for (n in o) {
					s = n.split(" ");
					if (s[1] === r) {
						i = o[f + " " + s[0]] || o["* " + s[0]];
						if (i) {
							i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
							break
						}
					}
				}
				if (i !== !0) if (i && e["throws"]) t = i(t);
				else try {
					t = i(t)
				} catch(l) {
					return {
						state: "parsererror",
						error: i ? l: "No conversion from " + f + " to " + r
					}
				}
			}
			f = r
		}
		return {
			state: "success",
			data: t
		}
	}
	function zn() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	}
	function Wn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}
	function Yn() {
		return setTimeout(function() {
			Xn = t
		}),
		Xn = b.now()
	}
	function Zn(e, t) {
		b.each(t,
		function(t, n) {
			var r = (Gn[t] || []).concat(Gn["*"]),
			i = 0,
			s = r.length;
			for (; i < s; i++) if (r[i].call(e, t, n)) return
		})
	}
	function er(e, t, n) {
		var r, i, s = 0,
		o = Qn.length,
		u = b.Deferred().always(function() {
			delete a.elem
		}),
		a = function() {
			if (i) return ! 1;
			var t = Xn || Yn(),
			n = Math.max(0, f.startTime + f.duration - t),
			r = n / f.duration || 0,
			s = 1 - r,
			o = 0,
			a = f.tweens.length;
			for (; o < a; o++) f.tweens[o].run(s);
			return u.notifyWith(e, [f, s, n]),
			s < 1 && a ? n: (u.resolveWith(e, [f]), !1)
		},
		f = u.promise({
			elem: e,
			props: b.extend({},
			t),
			opts: b.extend(!0, {
				specialEasing: {}
			},
			n),
			originalProperties: t,
			originalOptions: n,
			startTime: Xn || Yn(),
			duration: n.duration,
			tweens: [],
			createTween: function(t, n) {
				var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
				return f.tweens.push(r),
				r
			},
			stop: function(t) {
				var n = 0,
				r = t ? f.tweens.length: 0;
				if (i) return this;
				i = !0;
				for (; n < r; n++) f.tweens[n].run(1);
				return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
				this
			}
		}),
		l = f.props;
		tr(l, f.opts.specialEasing);
		for (; s < o; s++) {
			r = Qn[s].call(f, e, l, f.opts);
			if (r) return r
		}
		return Zn(f, l),
		b.isFunction(f.opts.start) && f.opts.start.call(e, f),
		b.fx.timer(b.extend(a, {
			elem: e,
			anim: f,
			queue: f.opts.queue
		})),
		f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
	}
	function tr(e, t) {
		var n, r, i, s, o;
		for (i in e) {
			r = b.camelCase(i),
			s = t[r],
			n = e[i],
			b.isArray(n) && (s = n[1], n = e[i] = n[0]),
			i !== r && (e[r] = n, delete e[i]),
			o = b.cssHooks[r];
			if (o && "expand" in o) {
				n = o.expand(n),
				delete e[r];
				for (i in n) i in e || (e[i] = n[i], t[i] = s)
			} else t[r] = s
		}
	}
	function nr(e, t, n) {
		var r, i, s, o, u, a, f, l, c, h = this,
		p = e.style,
		d = {},
		v = [],
		m = e.nodeType && nn(e);
		n.queue || (l = b._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
			l.unqueued || c()
		}), l.unqueued++, h.always(function() {
			h.always(function() {
				l.unqueued--,
				b.queue(e, "fx").length || l.empty.fire()
			})
		})),
		e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], b.css(e, "display") === "inline" && b.css(e, "float") === "none" && (!b.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? p.display = "inline-block": p.zoom = 1)),
		n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function() {
			p.overflow = n.overflow[0],
			p.overflowX = n.overflow[1],
			p.overflowY = n.overflow[2]
		}));
		for (i in t) {
			o = t[i];
			if ($n.exec(o)) {
				delete t[i],
				a = a || o === "toggle";
				if (o === (m ? "hide": "show")) continue;
				v.push(i)
			}
		}
		s = v.length;
		if (s) {
			u = b._data(e, "fxshow") || b._data(e, "fxshow", {}),
			"hidden" in u && (m = u.hidden),
			a && (u.hidden = !m),
			m ? b(e).show() : h.done(function() {
				b(e).hide()
			}),
			h.done(function() {
				var t;
				b._removeData(e, "fxshow");
				for (t in d) b.style(e, t, d[t])
			});
			for (i = 0; i < s; i++) r = v[i],
			f = h.createTween(r, m ? u[r] : 0),
			d[r] = u[r] || b.style(e, r),
			r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0))
		}
	}
	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	function ir(e, t) {
		var n, r = {
			height: e
		},
		i = 0;
		t = t ? 1 : 0;
		for (; i < 4; i += 2 - t) n = Zt[i],
		r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e),
		r
	}
	function sr(e) {
		return b.isWindow(e) ? e: e.nodeType === 9 ? e.defaultView || e.parentWindow: !1
	}
	var n, r, i = typeof t,
	s = e.document,
	o = e.location,
	u = e.jQuery,
	a = e.$,
	f = {},
	l = [],
	c = "1.9.1",
	h = l.concat,
	p = l.push,
	d = l.slice,
	v = l.indexOf,
	m = f.toString,
	g = f.hasOwnProperty,
	y = c.trim,
	b = function(e, t) {
		return new b.fn.init(e, t, r)
	},
	w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	E = /\S+/g,
	S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	N = /^[\],:{}\s]*$/,
	C = /(?:^|:|,)(?:\s*\[)+/g,
	k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	A = /^-ms-/,
	O = /-([\da-z])/gi,
	M = function(e, t) {
		return t.toUpperCase()
	},
	_ = function(e) {
		if (s.addEventListener || e.type === "load" || s.readyState === "complete") D(),
		b.ready()
	},
	D = function() {
		s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
	};
	b.fn = b.prototype = {
		jquery: c,
		constructor: b,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if (typeof e == "string") {
				e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = x.exec(e);
				if (i && (i[1] || !n)) {
					if (i[1]) {
						n = n instanceof b ? n[0] : n,
						b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: s, !0));
						if (T.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
						return this
					}
					o = s.getElementById(i[2]);
					if (o && o.parentNode) {
						if (o.id !== i[2]) return r.find(e);
						this.length = 1,
						this[0] = o
					}
					return this.context = s,
					this.selector = e,
					this
				}
				return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return d.call(this)
		},
		get: function(e) {
			return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = b.merge(this.constructor(), e);
			return t.prevObject = this,
			t.context = this.context,
			t
		},
		each: function(e, t) {
			return b.each(this, e, t)
		},
		ready: function(e) {
			return b.ready.promise().done(e),
			this
		},
		slice: function() {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(e) {
			var t = this.length,
			n = +e + (e < 0 ? t: 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(b.map(this,
			function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: p,
		sort: [].sort,
		splice: [].splice
	},
	b.fn.init.prototype = b.fn,
	b.extend = b.fn.extend = function() {
		var e, n, r, i, s, o, u = arguments[0] || {},
		a = 1,
		f = arguments.length,
		l = !1;
		typeof u == "boolean" && (l = u, u = arguments[1] || {},
		a = 2),
		typeof u != "object" && !b.isFunction(u) && (u = {}),
		f === a && (u = this, --a);
		for (; a < f; a++) if ((s = arguments[a]) != null) for (i in s) {
			e = u[i],
			r = s[i];
			if (u === r) continue;
			l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e: []) : o = e && b.isPlainObject(e) ? e: {},
			u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r)
		}
		return u
	},
	b.extend({
		noConflict: function(t) {
			return e.$ === b && (e.$ = a),
			t && e.jQuery === b && (e.jQuery = u),
			b
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? b.readyWait++:b.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? --b.readyWait: b.isReady) return;
			if (!s.body) return setTimeout(b.ready);
			b.isReady = !0;
			if (e !== !0 && --b.readyWait > 0) return;
			n.resolveWith(s, [b]),
			b.fn.trigger && b(s).trigger("ready").off("ready")
		},
		isFunction: function(e) {
			return b.type(e) === "function"
		},
		isArray: Array.isArray ||
		function(e) {
			return b.type(e) === "array"
		},
		isWindow: function(e) {
			return e != null && e == e.window
		},
		isNumeric: function(e) {
			return ! isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? f[m.call(e)] || "object": typeof e
		},
		isPlainObject: function(e) {
			if (!e || b.type(e) !== "object" || e.nodeType || b.isWindow(e)) return ! 1;
			try {
				if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(n) {
				return ! 1
			}
			var r;
			for (r in e);
			return r === t || g.call(e, r)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return ! 1;
			return ! 0
		},
		error: function(e) {
			throw new Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || typeof e != "string") return null;
			typeof t == "boolean" && (n = t, t = !1),
			t = t || s;
			var r = T.exec(e),
			i = !n && [];
			return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
		},
		parseJSON: function(t) {
			if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
			if (t === null) return t;
			if (typeof t == "string") {
				t = b.trim(t);
				if (t && N.test(t.replace(k, "@").replace(L, "]").replace(C, ""))) return (new Function("return " + t))()
			}
			b.error("Invalid JSON: " + t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || typeof n != "string") return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch(s) {
				r = t
			}
			return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + n),
			r
		},
		noop: function() {},
		globalEval: function(t) {
			t && b.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(A, "ms-").replace(O, M)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
			s = e.length,
			o = P(e);
			if (n) if (o) for (; i < s; i++) {
				r = t.apply(e[i], n);
				if (r === !1) break
			} else for (i in e) {
				r = t.apply(e[i], n);
				if (r === !1) break
			} else if (o) for (; i < s; i++) {
				r = t.call(e[i], i, e[i]);
				if (r === !1) break
			} else for (i in e) {
				r = t.call(e[i], i, e[i]);
				if (r === !1) break
			}
			return e
		},
		trim: y && !y.call("﻿ ") ?
		function(e) {
			return e == null ? "": y.call(e)
		}: function(e) {
			return e == null ? "": (e + "").replace(S, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return e != null && (P(Object(e)) ? b.merge(n, typeof e == "string" ? [e] : e) : p.call(n, e)),
			n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (v) return v.call(t, e, n);
				r = t.length,
				n = n ? n < 0 ? Math.max(0, r + n) : n: 0;
				for (; n < r; n++) if (n in t && t[n] === e) return n
			}
			return - 1
		},
		merge: function(e, n) {
			var r = n.length,
			i = e.length,
			s = 0;
			if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
			else while (n[s] !== t) e[i++] = n[s++];
			return e.length = i,
			e
		},
		grep: function(e, t, n) {
			var r, i = [],
			s = 0,
			o = e.length;
			n = !!n;
			for (; s < o; s++) r = !!t(e[s], s),
			n !== r && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
			s = e.length,
			o = P(e),
			u = [];
			if (o) for (; i < s; i++) r = t(e[i], i, n),
			r != null && (u[u.length] = r);
			else for (i in e) r = t(e[i], i, n),
			r != null && (u[u.length] = r);
			return h.apply([], u)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, s;
			return typeof n == "string" && (s = e[n], n = e, e = s),
			b.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(d.call(arguments)))
			},
			i.guid = e.guid = e.guid || b.guid++, i) : t
		},
		access: function(e, n, r, i, s, o, u) {
			var a = 0,
			f = e.length,
			l = r == null;
			if (b.type(r) === "object") {
				s = !0;
				for (a in r) b.access(e, n, a, r[a], !0, o, u)
			} else if (i !== t) {
				s = !0,
				b.isFunction(i) || (u = !0),
				l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
					return l.call(b(e), n)
				}));
				if (n) for (; a < f; a++) n(e[a], r, u ? i: i.call(e[a], a, n(e[a], r)))
			}
			return s ? e: l ? n.call(e) : f ? n(e[0], r) : o
		},
		now: function() {
			return (new Date).getTime()
		}
	}),
	b.ready.promise = function(t) {
		if (!n) {
			n = b.Deferred();
			if (s.readyState === "complete") setTimeout(b.ready);
			else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1),
			e.addEventListener("load", _, !1);
			else {
				s.attachEvent("onreadystatechange", _),
				e.attachEvent("onload", _);
				var r = !1;
				try {
					r = e.frameElement == null && s.documentElement
				} catch(i) {}
				r && r.doScroll &&
				function o() {
					if (!b.isReady) {
						try {
							r.doScroll("left")
						} catch(e) {
							return setTimeout(o, 50)
						}
						D(),
						b.ready()
					}
				} ()
			}
		}
		return n.promise(t)
	},
	b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(e, t) {
		f["[object " + t + "]"] = t.toLowerCase()
	}),
	r = b(s);
	var H = {};
	b.Callbacks = function(e) {
		e = typeof e == "string" ? H[e] || B(e) : b.extend({},
		e);
		var n, r, i, s, o, u, a = [],
		f = !e.once && [],
		l = function(t) {
			r = e.memory && t,
			i = !0,
			o = u || 0,
			u = 0,
			s = a.length,
			n = !0;
			for (; a && o < s; o++) if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
				r = !1;
				break
			}
			n = !1,
			a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
		},
		c = {
			add: function() {
				if (a) {
					var t = a.length; (function i(t) {
						b.each(t,
						function(t, n) {
							var r = b.type(n);
							r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
						})
					})(arguments),
					n ? s = a.length: r && (u = t, l(r))
				}
				return this
			},
			remove: function() {
				return a && b.each(arguments,
				function(e, t) {
					var r;
					while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1),
					n && (r <= s && s--, r <= o && o--)
				}),
				this
			},
			has: function(e) {
				return e ? b.inArray(e, a) > -1 : !!a && !!a.length
			},
			empty: function() {
				return a = [],
				this
			},
			disable: function() {
				return a = f = r = t,
				this
			},
			disabled: function() {
				return ! a
			},
			lock: function() {
				return f = t,
				r || c.disable(),
				this
			},
			locked: function() {
				return ! f
			},
			fireWith: function(e, t) {
				return t = t || [],
				t = [e, t.slice ? t.slice() : t],
				a && (!i || f) && (n ? f.push(t) : l(t)),
				this
			},
			fire: function() {
				return c.fireWith(this, arguments),
				this
			},
			fired: function() {
				return !! i
			}
		};
		return c
	},
	b.extend({
		Deferred: function(e) {
			var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]],
			n = "pending",
			r = {
				state: function() {
					return n
				},
				always: function() {
					return i.done(arguments).fail(arguments),
					this
				},
				then: function() {
					var e = arguments;
					return b.Deferred(function(n) {
						b.each(t,
						function(t, s) {
							var o = s[0],
							u = b.isFunction(e[t]) && e[t];
							i[s[1]](function() {
								var e = u && u.apply(this, arguments);
								e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				promise: function(e) {
					return e != null ? b.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			b.each(t,
			function(e, s) {
				var o = s[2],
				u = s[3];
				r[s[1]] = o.add,
				u && o.add(function() {
					n = u
				},
				t[e ^ 1][2].disable, t[2][2].lock),
				i[s[0]] = function() {
					return i[s[0] + "With"](this === i ? r: this, arguments),
					this
				},
				i[s[0] + "With"] = o.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when: function(e) {
			var t = 0,
			n = d.call(arguments),
			r = n.length,
			i = r !== 1 || e && b.isFunction(e.promise) ? r: 0,
			s = i === 1 ? e: b.Deferred(),
			o = function(e, t, n) {
				return function(r) {
					t[e] = this,
					n[e] = arguments.length > 1 ? d.call(arguments) : r,
					n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
				}
			},
			u,
			a,
			f;
			if (r > 1) {
				u = new Array(r),
				a = new Array(r),
				f = new Array(r);
				for (; t < r; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
			}
			return i || s.resolveWith(f, n),
			s.promise()
		}
	}),
	b.support = function() {
		var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
		p.setAttribute("className", "t"),
		p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
		n = p.getElementsByTagName("*"),
		r = p.getElementsByTagName("a")[0];
		if (!n || !r || !n.length) return {};
		u = s.createElement("select"),
		f = u.appendChild(s.createElement("option")),
		o = p.getElementsByTagName("input")[0],
		r.style.cssText = "top:1px;float:left;opacity:.5",
		t = {
			getSetAttribute: p.className !== "t",
			leadingWhitespace: p.firstChild.nodeType === 3,
			tbody: !p.getElementsByTagName("tbody").length,
			htmlSerialize: !!p.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: r.getAttribute("href") === "/a",
			opacity: /^0.5/.test(r.style.opacity),
			cssFloat: !!r.style.cssFloat,
			checkOn: !!o.value,
			optSelected: f.selected,
			enctype: !!s.createElement("form").enctype,
			html5Clone: s.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			boxModel: s.compatMode === "CSS1Compat",
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		},
		o.checked = !0,
		t.noCloneChecked = o.cloneNode(!0).checked,
		u.disabled = !0,
		t.optDisabled = !f.disabled;
		try {
			delete p.test
		} catch(d) {
			t.deleteExpando = !1
		}
		o = s.createElement("input"),
		o.setAttribute("value", ""),
		t.input = o.getAttribute("value") === "",
		o.value = "t",
		o.setAttribute("type", "radio"),
		t.radioValue = o.value === "t",
		o.setAttribute("checked", "t"),
		o.setAttribute("name", "t"),
		a = s.createDocumentFragment(),
		a.appendChild(o),
		t.appendChecked = o.checked,
		t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
		p.attachEvent && (p.attachEvent("onclick",
		function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).click());
		for (h in {
			submit: !0,
			change: !0,
			focusin: !0
		}) p.setAttribute(l = "on" + h, "t"),
		t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
		return p.style.backgroundClip = "content-box",
		p.cloneNode(!0).style.backgroundClip = "",
		t.clearCloneStyle = p.style.backgroundClip === "content-box",
		b(function() {
			var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			a = s.getElementsByTagName("body")[0];
			if (!a) return;
			n = s.createElement("div"),
			n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
			a.appendChild(n).appendChild(p),
			p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
			o = p.getElementsByTagName("td"),
			o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
			c = o[0].offsetHeight === 0,
			o[0].style.display = "",
			o[1].style.display = "none",
			t.reliableHiddenOffsets = c && o[0].offsetHeight === 0,
			p.innerHTML = "",
			p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
			t.boxSizing = p.offsetWidth === 4,
			t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1,
			e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
				width: "4px"
			}).width === "4px", r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
			typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)),
			a.removeChild(n),
			n = p = o = r = null
		}),
		n = u = a = f = r = o = null,
		t
	} ();
	var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	F = /([A-Z])/g;
	b.extend({
		cache: {},
		expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando],
			!!e && !U(e)
		},
		data: function(e, t, n) {
			return I(e, t, n)
		},
		removeData: function(e, t) {
			return q(e, t)
		},
		_data: function(e, t, n) {
			return I(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return q(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return ! 1;
			var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
			return ! t || t !== !0 && e.getAttribute("classid") === t
		}
	}),
	b.fn.extend({
		data: function(e, n) {
			var r, i, s = this[0],
			o = 0,
			u = null;
			if (e === t) {
				if (this.length) {
					u = b.data(s);
					if (s.nodeType === 1 && !b._data(s, "parsedAttrs")) {
						r = s.attributes;
						for (; o < r.length; o++) i = r[o].name,
						i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
						b._data(s, "parsedAttrs", !0)
					}
				}
				return u
			}
			return typeof e == "object" ? this.each(function() {
				b.data(this, e)
			}) : b.access(this,
			function(n) {
				if (n === t) return s ? R(s, e, b.data(s, e)) : null;
				this.each(function() {
					b.data(this, e, n)
				})
			},
			null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				b.removeData(this, e)
			})
		}
	}),
	b.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue",
			r = b._data(e, t),
			n && (!r || b.isArray(n) ? r = b._data(e, t, b.makeArray(n)) : r.push(n)),
			r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = b.queue(e, t),
			r = n.length,
			i = n.shift(),
			s = b._queueHooks(e, t),
			o = function() {
				b.dequeue(e, t)
			};
			i === "inprogress" && (i = n.shift(), r--),
			s.cur = i,
			i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
			!r && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return b._data(e, n) || b._data(e, n, {
				empty: b.Callbacks("once memory").add(function() {
					b._removeData(e, t + "queue"),
					b._removeData(e, n)
				})
			})
		}
	}),
	b.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return typeof e != "string" && (n = e, e = "fx", r--),
			arguments.length < r ? b.queue(this[0], e) : n === t ? this: this.each(function() {
				var t = b.queue(this, e, n);
				b._queueHooks(this, e),
				e === "fx" && t[0] !== "inprogress" && b.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				b.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = b.fx ? b.fx.speeds[e] || e: e,
			t = t || "fx",
			this.queue(t,
			function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
			s = b.Deferred(),
			o = this,
			u = this.length,
			a = function() {--i || s.resolveWith(o, [o])
			};
			typeof e != "string" && (n = e, e = t),
			e = e || "fx";
			while (u--) r = b._data(o[u], e + "queueHooks"),
			r && r.empty && (i++, r.empty.add(a));
			return a(),
			s.promise(n)
		}
	});
	var z, W, X = /[\t\r\n]/g,
	V = /\r/g,
	$ = /^(?:input|select|textarea|button|object)$/i,
	J = /^(?:a|area)$/i,
	K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	Q = /^(?:checked|selected)$/i,
	G = b.support.getSetAttribute,
	Y = b.support.input;
	b.fn.extend({
		attr: function(e, t) {
			return b.access(this, b.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				b.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return b.access(this, b.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = b.propFix[e] || e,
			this.each(function() {
				try {
					this[e] = t,
					delete this[e]
				} catch(n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, s, o = 0,
			u = this.length,
			a = typeof e == "string" && e;
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).addClass(e.call(this, t, this.className))
			});
			if (a) {
				t = (e || "").match(E) || [];
				for (; o < u; o++) {
					n = this[o],
					r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : " ");
					if (r) {
						s = 0;
						while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						n.className = b.trim(r)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, s, o = 0,
			u = this.length,
			a = arguments.length === 0 || typeof e == "string" && e;
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).removeClass(e.call(this, t, this.className))
			});
			if (a) {
				t = (e || "").match(E) || [];
				for (; o < u; o++) {
					n = this[o],
					r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : "");
					if (r) {
						s = 0;
						while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? b.trim(r) : ""
					}
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
			r = typeof t == "boolean";
			return b.isFunction(e) ? this.each(function(n) {
				b(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if (n === "string") {
					var s, o = 0,
					u = b(this),
					a = t,
					f = e.match(E) || [];
					while (s = f[o++]) a = r ? a: !u.hasClass(s),
					u[a ? "addClass": "removeClass"](s)
				} else if (n === i || n === "boolean") this.className && b._data(this, "__className__", this.className),
				this.className = this.className || e === !1 ? "": b._data(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
			n = 0,
			r = this.length;
			for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return ! 0;
			return ! 1
		},
		val: function(e) {
			var n, r, i, s = this[0];
			if (!arguments.length) {
				if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()],
				r && "get" in r && (n = r.get(s, "value")) !== t ? n: (n = s.value, typeof n == "string" ? n.replace(V, "") : n == null ? "": n);
				return
			}
			return i = b.isFunction(e),
			this.each(function(n) {
				var s, o = b(this);
				if (this.nodeType !== 1) return;
				i ? s = e.call(this, n, o.val()) : s = e,
				s == null ? s = "": typeof s == "number" ? s += "": b.isArray(s) && (s = b.map(s,
				function(e) {
					return e == null ? "": e + ""
				})),
				r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
				if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
			})
		}
	}),
	b.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return ! t || t.specified ? e.value: e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
					i = e.selectedIndex,
					s = e.type === "select-one" || i < 0,
					o = s ? null: [],
					u = s ? i + 1 : r.length,
					a = i < 0 ? u: s ? i: 0;
					for (; a < u; a++) {
						n = r[a];
						if ((n.selected || a === i) && (b.support.optDisabled ? !n.disabled: n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
							t = b(n).val();
							if (s) return t;
							o.push(t)
						}
					}
					return o
				},
				set: function(e, t) {
					var n = b.makeArray(t);
					return b(e).find("option").each(function() {
						this.selected = b.inArray(b(this).val(), n) >= 0
					}),
					n.length || (e.selectedIndex = -1),
					n
				}
			}
		},
		attr: function(e, n, r) {
			var s, o, u, a = e.nodeType;
			if (!e || a === 3 || a === 8 || a === 2) return;
			if (typeof e.getAttribute === i) return b.prop(e, n, r);
			o = a !== 1 || !b.isXMLDoc(e),
			o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W: z));
			if (r === t) return s && o && "get" in s && (u = s.get(e, n)) !== null ? u: (typeof e.getAttribute !== i && (u = e.getAttribute(n)), u == null ? t: u);
			if (r !== null) return s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u: (e.setAttribute(n, r + ""), r);
			b.removeAttr(e, n)
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
			s = t && t.match(E);
			if (s && e.nodeType === 1) while (n = s[i++]) r = b.propFix[n] || n,
			K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""),
			e.removeAttribute(G ? n: r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!b.support.radioValue && t === "radio" && b.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, r) {
			var i, s, o, u = e.nodeType;
			if (!e || u === 3 || u === 8 || u === 2) return;
			return o = u !== 1 || !b.isXMLDoc(e),
			o && (n = b.propFix[n] || n, s = b.propHooks[n]),
			r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i: e[n] = r: s && "get" in s && (i = s.get(e, n)) !== null ? i: e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}),
	W = {
		get: function(e, n) {
			var r = b.prop(e, n),
			i = typeof r == "boolean" && e.getAttribute(n),
			s = typeof r == "boolean" ? Y && G ? i != null: Q.test(n) ? e[b.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
			return s && s.value !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0,
			n
		}
	};
	if (!Y || !G) b.attrHooks.value = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return b.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
		},
		set: function(e, t, n) {
			if (!b.nodeName(e, "input")) return z && z.set(e, t, n);
			e.defaultValue = t
		}
	};
	G || (z = b.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "": r.specified) ? r.value: t
		},
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
			i.value = n += "",
			r === "value" || n === e.getAttribute(r) ? n: t
		}
	},
	b.attrHooks.contenteditable = {
		get: z.get,
		set: function(e, t, n) {
			z.set(e, t === "" ? !1 : t, n)
		}
	},
	b.each(["width", "height"],
	function(e, t) {
		b.attrHooks[t] = b.extend(b.attrHooks[t], {
			set: function(e, n) {
				if (n === "") return e.setAttribute(t, "auto"),
				n
			}
		})
	})),
	b.support.hrefNormalized || (b.each(["href", "src", "width", "height"],
	function(e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			get: function(e) {
				var r = e.getAttribute(n, 2);
				return r == null ? t: r
			}
		})
	}), b.each(["href", "src"],
	function(e, t) {
		b.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})),
	b.support.style || (b.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}),
	b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
			null
		}
	})),
	b.support.enctype || (b.propFix.enctype = "encoding"),
	b.support.checkOn || b.each(["radio", "checkbox"],
	function() {
		b.valHooks[this] = {
			get: function(e) {
				return e.getAttribute("value") === null ? "on": e.value
			}
		}
	}),
	b.each(["radio", "checkbox"],
	function() {
		b.valHooks[this] = b.extend(b.valHooks[this], {
			set: function(e, t) {
				if (b.isArray(t)) return e.checked = b.inArray(b(e).val(), t) >= 0
			}
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
	et = /^key/,
	tt = /^(?:mouse|contextmenu)|click/,
	nt = /^(?:focusinfocus|focusoutblur)$/,
	rt = /^([^.]*)(?:\.(.+)|)$/;
	b.event = {
		global: {},
		add: function(e, n, r, s, o) {
			var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
			if (!y) return;
			r.handler && (l = r, r = l.handler, o = l.selector),
			r.guid || (r.guid = b.guid++),
			(a = y.events) || (a = y.events = {}),
			(h = y.handle) || (h = y.handle = function(e) {
				return typeof b === i || !!e && b.event.triggered === e.type ? t: b.event.dispatch.apply(h.elem, arguments)
			},
			h.elem = e),
			n = (n || "").match(E) || [""],
			f = n.length;
			while (f--) {
				u = rt.exec(n[f]) || [],
				v = g = u[1],
				m = (u[2] || "").split(".").sort(),
				c = b.event.special[v] || {},
				v = (o ? c.delegateType: c.bindType) || v,
				c = b.event.special[v] || {},
				p = b.extend({
					type: v,
					origType: g,
					data: s,
					handler: r,
					guid: r.guid,
					selector: o,
					needsContext: o && b.expr.match.needsContext.test(o),
					namespace: m.join(".")
				},
				l);
				if (! (d = a[v])) {
					d = a[v] = [],
					d.delegateCount = 0;
					if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
				}
				c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
				o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
				b.event.global[v] = !0
			}
			e = null
		},
		remove: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
			if (!m || !(l = m.events)) return;
			t = (t || "").match(E) || [""],
			f = t.length;
			while (f--) {
				u = rt.exec(t[f]) || [],
				p = v = u[1],
				d = (u[2] || "").split(".").sort();
				if (!p) {
					for (p in l) b.event.remove(e, p + t[f], n, r, !0);
					continue
				}
				c = b.event.special[p] || {},
				p = (r ? c.delegateType: c.bindType) || p,
				h = l[p] || [],
				u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
				a = s = h.length;
				while (s--) o = h[s],
				(i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
				a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && b.removeEvent(e, p, m.handle), delete l[p])
			}
			b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
		},
		trigger: function(n, r, i, o) {
			var u, a, f, l, c, h, p, d = [i || s],
			v = g.call(n, "type") ? n.type: n,
			m = g.call(n, "namespace") ? n.namespace.split(".") : [];
			f = h = i = i || s;
			if (i.nodeType === 3 || i.nodeType === 8) return;
			if (nt.test(v + b.event.triggered)) return;
			v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()),
			a = v.indexOf(":") < 0 && "on" + v,
			n = n[b.expando] ? n: new b.Event(v, typeof n == "object" && n),
			n.isTrigger = !0,
			n.namespace = m.join("."),
			n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
			n.result = t,
			n.target || (n.target = i),
			r = r == null ? [n] : b.makeArray(r, [n]),
			c = b.event.special[v] || {};
			if (!o && c.trigger && c.trigger.apply(i, r) === !1) return;
			if (!o && !c.noBubble && !b.isWindow(i)) {
				l = c.delegateType || v,
				nt.test(l + v) || (f = f.parentNode);
				for (; f; f = f.parentNode) d.push(f),
				h = f;
				h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
			}
			p = 0;
			while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l: c.bindType || v,
			u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"),
			u && u.apply(f, r),
			u = a && f[a],
			u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
			n.type = v;
			if (!o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !b.nodeName(i, "a")) && b.acceptData(i) && a && i[v] && !b.isWindow(i)) {
				h = i[a],
				h && (i[a] = null),
				b.event.triggered = v;
				try {
					i[v]()
				} catch(y) {}
				b.event.triggered = t,
				h && (i[a] = h)
			}
			return n.result
		},
		dispatch: function(e) {
			e = b.event.fix(e);
			var n, r, i, s, o, u = [],
			a = d.call(arguments),
			f = (b._data(this, "events") || {})[e.type] || [],
			l = b.event.special[e.type] || {};
			a[0] = e,
			e.delegateTarget = this;
			if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
			u = b.event.handlers.call(this, e, f),
			n = 0;
			while ((s = u[n++]) && !e.isPropagationStopped()) {
				e.currentTarget = s.elem,
				o = 0;
				while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i,
				e.data = i.data,
				r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a),
				r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
			}
			return l.postDispatch && l.postDispatch.call(this, e),
			e.result
		},
		handlers: function(e, n) {
			var r, i, s, o, u = [],
			a = n.delegateCount,
			f = e.target;
			if (a && f.nodeType && (!e.button || e.type !== "click")) for (; f != this; f = f.parentNode || this) if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
				s = [];
				for (o = 0; o < a; o++) i = n[o],
				r = i.selector + " ",
				s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length),
				s[r] && s.push(i);
				s.length && u.push({
					elem: f,
					handlers: s
				})
			}
			return a < n.length && u.push({
				elem: this,
				handlers: n.slice(a)
			}),
			u
		},
		fix: function(e) {
			if (e[b.expando]) return e;
			var t, n, r, i = e.type,
			o = e,
			u = this.fixHooks[i];
			u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks: et.test(i) ? this.keyHooks: {}),
			r = u.props ? this.props.concat(u.props) : this.props,
			e = new b.Event(o),
			t = r.length;
			while (t--) n = r[t],
			e[n] = o[n];
			return e.target || (e.target = o.srcElement || s),
			e.target.nodeType === 3 && (e.target = e.target.parentNode),
			e.metaKey = !!e.metaKey,
			u.filter ? u.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode: t.keyCode),
				e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, u = n.button,
				a = n.fromElement;
				return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
				!e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement: a),
				!e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0),
				e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					if (b.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(),
					!1
				}
			},
			focus: {
				trigger: function() {
					if (this !== s.activeElement && this.focus) try {
						return this.focus(),
						!1
					} catch(e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === s.activeElement && this.blur) return this.blur(),
					!1
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = b.extend(new b.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	b.removeEvent = s.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}: function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	},
	b.Event = function(e, t) {
		if (! (this instanceof b.Event)) return new b.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it: st) : this.type = e,
		t && b.extend(this, t),
		this.timeStamp = e && e.timeStamp || b.now(),
		this[b.expando] = !0
	},
	b.Event.prototype = {
		isDefaultPrevented: st,
		isPropagationStopped: st,
		isImmediatePropagationStopped: st,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it;
			if (!e) return;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it;
			if (!e) return;
			e.stopPropagation && e.stopPropagation(),
			e.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it,
			this.stopPropagation()
		}
	},
	b.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(e, t) {
		b.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
				i = e.relatedTarget,
				s = e.handleObj;
				if (!i || i !== r && !b.contains(r, i)) e.type = s.origType,
				n = s.handler.apply(this, arguments),
				e.type = t;
				return n
			}
		}
	}),
	b.support.submitBubbles || (b.event.special.submit = {
		setup: function() {
			if (b.nodeName(this, "form")) return ! 1;
			b.event.add(this, "click._submit keypress._submit",
			function(e) {
				var n = e.target,
				r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form: t;
				r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit",
				function(e) {
					e._submit_bubble = !0
				}), b._data(r, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			if (b.nodeName(this, "form")) return ! 1;
			b.event.remove(this, "._submit")
		}
	}),
	b.support.changeBubbles || (b.event.special.change = {
		setup: function() {
			if (Z.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") b.event.add(this, "propertychange._change",
				function(e) {
					e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}),
				b.event.add(this, "click._change",
				function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1),
					b.event.simulate("change", this, e, !0)
				});
				return ! 1
			}
			b.event.add(this, "beforeactivate._change",
			function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change",
				function(e) {
					this.parentNode && !e.isSimulated && !e.isTrigger && b.event.simulate("change", this.parentNode, e, !0)
				}), b._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return b.event.remove(this, "._change"),
			!Z.test(this.nodeName)
		}
	}),
	b.support.focusinBubbles || b.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(e, t) {
		var n = 0,
		r = function(e) {
			b.event.simulate(t, e.target, b.event.fix(e), !0)
		};
		b.event.special[t] = {
			setup: function() {
				n++===0 && s.addEventListener(e, r, !0)
			},
			teardown: function() {--n === 0 && s.removeEventListener(e, r, !0)
			}
		}
	}),
	b.fn.extend({
		on: function(e, n, r, i, s) {
			var o, u;
			if (typeof e == "object") {
				typeof n != "string" && (r = r || n, n = t);
				for (o in e) this.on(o, n, r, e[o], s);
				return this
			}
			r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
			if (i === !1) i = st;
			else if (!i) return this;
			return s === 1 && (u = i, i = function(e) {
				return b().off(e),
				u.apply(this, arguments)
			},
			i.guid = u.guid || (u.guid = b.guid++)),
			this.each(function() {
				b.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, s;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
			b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
			this;
			if (typeof e == "object") {
				for (s in e) this.off(s, n, e[s]);
				return this
			}
			if (n === !1 || typeof n == "function") r = n,
			n = t;
			return r === !1 && (r = st),
			this.each(function() {
				b.event.remove(this, e, r, n)
			})
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		trigger: function(e, t) {
			return this.each(function() {
				b.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return b.event.trigger(e, t, n, !0)
		}
	}),
	function(e, t) {
		function rt(e) {
			return J.test(e + "")
		}
		function it() {
			var e, t = [];
			return e = function(n, r) {
				return t.push(n += " ") > i.cacheLength && delete e[t.shift()],
				e[n] = r
			}
		}
		function st(e) {
			return e[w] = !0,
			e
		}
		function ot(e) {
			var t = c.createElement("div");
			try {
				return e(t)
			} catch(n) {
				return ! 1
			} finally {
				t = null
			}
		}
		function ut(e, t, n, r) {
			var i, s, o, u, a, f, h, v, m, y; (t ? t.ownerDocument || t: E) !== c && l(t),
			t = t || c,
			n = n || [];
			if (!e || typeof e != "string") return n;
			if ((u = t.nodeType) !== 1 && u !== 9) return [];
			if (!p && !r) {
				if (i = K.exec(e)) if (o = i[1]) {
					if (u === 9) {
						s = t.getElementById(o);
						if (!s || !s.parentNode) return n;
						if (s.id === o) return n.push(s),
						n
					} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s),
					n
				} else {
					if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)),
					n;
					if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)),
					n
				}
				if (S.qsa && !d.test(e)) {
					h = !0,
					v = w,
					m = t,
					y = u === 9 && e;
					if (u === 1 && t.nodeName.toLowerCase() !== "object") {
						f = ht(e),
						(h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v),
						v = "[id='" + v + "'] ",
						a = f.length;
						while (a--) f[a] = v + pt(f[a]);
						m = $.test(e) && t.parentNode || t,
						y = f.join(",")
					}
					if (y) try {
						return _.apply(n, D.call(m.querySelectorAll(y), 0)),
						n
					} catch(b) {} finally {
						h || t.removeAttribute("id")
					}
				}
			}
			return Et(e.replace(R, "$1"), t, n, r)
		}
		function at(e, t) {
			var n = t && e,
			r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
			if (r) return r;
			if (n) while (n = n.nextSibling) if (n === t) return - 1;
			return e ? 1 : -1
		}
		function ft(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return n === "input" && t.type === e
			}
		}
		function lt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return (n === "input" || n === "button") && t.type === e
			}
		}
		function ct(e) {
			return st(function(t) {
				return t = +t,
				st(function(n, r) {
					var i, s = e([], n.length, t),
					o = s.length;
					while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		function ht(e, t) {
			var n, r, s, o, u, a, f, l = C[e + " "];
			if (l) return t ? 0 : l.slice(0);
			u = e,
			a = [],
			f = i.preFilter;
			while (u) {
				if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u),
				a.push(s = []);
				n = !1;
				if (r = z.exec(u)) n = r.shift(),
				s.push({
					value: n,
					type: r[0].replace(R, " ")
				}),
				u = u.slice(n.length);
				for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
					value: n,
					type: o,
					matches: r
				}), u = u.slice(n.length));
				if (!n) break
			}
			return t ? u.length: u ? ut.error(e) : C(e, a).slice(0)
		}
		function pt(e) {
			var t = 0,
			n = e.length,
			r = "";
			for (; t < n; t++) r += e[t].value;
			return r
		}
		function dt(e, t, n) {
			var i = t.dir,
			s = n && i === "parentNode",
			o = T++;
			return t.first ?
			function(t, n, r) {
				while (t = t[i]) if (t.nodeType === 1 || s) return e(t, n, r)
			}: function(t, n, u) {
				var a, f, l, c = x + " " + o;
				if (u) {
					while (t = t[i]) if (t.nodeType === 1 || s) if (e(t, n, u)) return ! 0
				} else while (t = t[i]) if (t.nodeType === 1 || s) {
					l = t[w] || (t[w] = {});
					if ((f = l[i]) && f[0] === c) {
						if ((a = f[1]) === !0 || a === r) return a === !0
					} else {
						f = l[i] = [c],
						f[1] = e(t, n, u) || r;
						if (f[1] === !0) return ! 0
					}
				}
			}
		}
		function vt(e) {
			return e.length > 1 ?
			function(t, n, r) {
				var i = e.length;
				while (i--) if (!e[i](t, n, r)) return ! 1;
				return ! 0
			}: e[0]
		}
		function mt(e, t, n, r, i) {
			var s, o = [],
			u = 0,
			a = e.length,
			f = t != null;
			for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s),
			f && t.push(u);
			return o
		}
		function gt(e, t, n, r, i, s) {
			return r && !r[w] && (r = gt(r)),
			i && !i[w] && (i = gt(i, s)),
			st(function(s, o, u, a) {
				var f, l, c, h = [],
				p = [],
				d = o.length,
				v = s || wt(t || "*", u.nodeType ? [u] : u, []),
				m = e && (s || !t) ? mt(v, h, e, u, a) : v,
				g = n ? i || (s ? e: d || r) ? [] : o: m;
				n && n(m, g, u, a);
				if (r) {
					f = mt(g, p),
					r(f, [], u, a),
					l = f.length;
					while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
				}
				if (s) {
					if (i || e) {
						if (i) {
							f = [],
							l = g.length;
							while (l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = mt(g === o ? g.splice(d, g.length) : g),
				i ? i(null, o, g, a) : _.apply(o, g)
			})
		}
		function yt(e) {
			var t, n, r, s = e.length,
			o = i.relative[e[0].type],
			u = o || i.relative[" "],
			a = o ? 1 : 0,
			l = dt(function(e) {
				return e === t
			},
			u, !0),
			c = dt(function(e) {
				return P.call(t, e) > -1
			},
			u, !0),
			h = [function(e, n, r) {
				return ! o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
			}];
			for (; a < s; a++) if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
			else {
				n = i.filter[e[a].type].apply(null, e[a].matches);
				if (n[w]) {
					r = ++a;
					for (; r < s; r++) if (i.relative[e[r].type]) break;
					return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
				}
				h.push(n)
			}
			return vt(h)
		}
		function bt(e, t) {
			var n = 0,
			s = t.length > 0,
			o = e.length > 0,
			u = function(u, a, l, h, p) {
				var d, v, m, g = [],
				y = 0,
				b = "0",
				w = u && [],
				E = p != null,
				S = f,
				T = u || o && i.find.TAG("*", p && a.parentNode || a),
				N = x += S == null ? 1 : Math.random() || .1;
				E && (f = a !== c && a, r = n);
				for (; (d = T[b]) != null; b++) {
					if (o && d) {
						v = 0;
						while (m = e[v++]) if (m(d, a, l)) {
							h.push(d);
							break
						}
						E && (x = N, r = ++n)
					}
					s && ((d = !m && d) && y--, u && w.push(d))
				}
				y += b;
				if (s && b !== y) {
					v = 0;
					while (m = t[v++]) m(w, g, a, l);
					if (u) {
						if (y > 0) while (b--) ! w[b] && !g[b] && (g[b] = M.call(h));
						g = mt(g)
					}
					_.apply(h, g),
					E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
				}
				return E && (x = N, f = S),
				w
			};
			return s ? st(u) : u
		}
		function wt(e, t, n) {
			var r = 0,
			i = t.length;
			for (; r < i; r++) ut(e, t[r], n);
			return n
		}
		function Et(e, t, n, r) {
			var s, o, a, f, l, c = ht(e);
			if (!r && c.length === 1) {
				o = c[0] = c[0].slice(0);
				if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
					t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
					if (!t) return n;
					e = e.slice(o.shift().value.length)
				}
				s = V.needsContext.test(e) ? 0 : o.length;
				while (s--) {
					a = o[s];
					if (i.relative[f = a.type]) break;
					if (l = i.find[f]) if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
						o.splice(s, 1),
						e = r.length && pt(o);
						if (!e) return _.apply(n, D.call(r, 0)),
						n;
						break
					}
				}
			}
			return u(e, c)(r, t, p, n, $.test(e)),
			n
		}
		function St() {}
		var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date),
		E = e.document,
		S = {},
		x = 0,
		T = 0,
		N = it(),
		C = it(),
		k = it(),
		L = typeof t,
		A = 1 << 31,
		O = [],
		M = O.pop,
		_ = O.push,
		D = O.slice,
		P = O.indexOf ||
		function(e) {
			var t = 0,
			n = this.length;
			for (; t < n; t++) if (this[t] === e) return t;
			return - 1
		},
		H = "[\\x20\\t\\r\\n\\f]",
		B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		j = B.replace("w", "w#"),
		F = "([*^$|!~]?=)",
		I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
		q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
		R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
		U = new RegExp("^" + H + "*," + H + "*"),
		z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
		W = new RegExp(q),
		X = new RegExp("^" + j + "$"),
		V = {
			ID: new RegExp("^#(" + B + ")"),
			CLASS: new RegExp("^\\.(" + B + ")"),
			NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
			TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + I),
			PSEUDO: new RegExp("^" + q),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
			needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
		},
		$ = /[\x20\t\r\n\f]*[+~]/,
		J = /^[^{]+\{\s*\[native code/,
		K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Q = /^(?:input|select|textarea|button)$/i,
		G = /^h\d$/i,
		Y = /'|\\/g,
		Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
		et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
		tt = function(e, t) {
			var n = "0x" + t - 65536;
			return n !== n ? t: n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
		};
		try {
			D.call(E.documentElement.childNodes, 0)[0].nodeType
		} catch(nt) {
			D = function(e) {
				var t, n = [];
				while (t = this[e++]) n.push(t);
				return n
			}
		}
		o = ut.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? t.nodeName !== "HTML": !1
		},
		l = ut.setDocument = function(e) {
			var n = e ? e.ownerDocument || e: E;
			if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
			c = n,
			h = n.documentElement,
			p = o(n),
			S.tagNameNoComments = ot(function(e) {
				return e.appendChild(n.createComment("")),
				!e.getElementsByTagName("*").length
			}),
			S.attributes = ot(function(e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return t !== "boolean" && t !== "string"
			}),
			S.getByClassName = ot(function(e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
				!e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
			}),
			S.getByName = ot(function(e) {
				e.id = w + 0,
				e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>",
				h.insertBefore(e, h.firstChild);
				var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
				return S.getIdNotName = !n.getElementById(w),
				h.removeChild(e),
				t
			}),
			i.attrHandle = ot(function(e) {
				return e.innerHTML = "<a href='#'></a>",
				e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
			}) ? {}: {
				href: function(e) {
					return e.getAttribute("href", 2)
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			},
			S.getIdNotName ? (i.find.ID = function(e, t) {
				if (typeof t.getElementById !== L && !p) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			},
			i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (i.find.ID = function(e, n) {
				if (typeof n.getElementById !== L && !p) {
					var r = n.getElementById(e);
					return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t: []
				}
			},
			i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
					return n && n.value === t
				}
			}),
			i.find.TAG = S.tagNameNoComments ?
			function(e, t) {
				if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
			}: function(e, t) {
				var n, r = [],
				i = 0,
				s = t.getElementsByTagName(e);
				if (e === "*") {
					while (n = s[i++]) n.nodeType === 1 && r.push(n);
					return r
				}
				return s
			},
			i.find.NAME = S.getByName &&
			function(e, t) {
				if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
			},
			i.find.CLASS = S.getByClassName &&
			function(e, t) {
				if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
			},
			v = [],
			d = [":focus"];
			if (S.qsa = rt(n.querySelectorAll)) ot(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>",
				e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
				e.querySelectorAll(":checked").length || d.push(":checked")
			}),
			ot(function(e) {
				e.innerHTML = "<input type='hidden' i=''/>",
				e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"),
				e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
				e.querySelectorAll("*,:x"),
				d.push(",.*:")
			});
			return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
				S.disconnectedMatch = m.call(e, "div"),
				m.call(e, "[s!='']:x"),
				v.push("!=", q)
			}),
			d = new RegExp(d.join("|")),
			v = new RegExp(v.join("|")),
			g = rt(h.contains) || h.compareDocumentPosition ?
			function(e, t) {
				var n = e.nodeType === 9 ? e.documentElement: e,
				r = t && t.parentNode;
				return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
			}: function(e, t) {
				if (t) while (t = t.parentNode) if (t === e) return ! 0;
				return ! 1
			},
			y = h.compareDocumentPosition ?
			function(e, t) {
				var r;
				if (e === t) return a = !0,
				0;
				if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
				return e.compareDocumentPosition ? -1 : 1
			}: function(e, t) {
				var r, i = 0,
				s = e.parentNode,
				o = t.parentNode,
				u = [e],
				f = [t];
				if (e === t) return a = !0,
				0;
				if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
				if (s === o) return at(e, t);
				r = e;
				while (r = r.parentNode) u.unshift(r);
				r = t;
				while (r = r.parentNode) f.unshift(r);
				while (u[i] === f[i]) i++;
				return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
			},
			a = !1,
			[0, 0].sort(y),
			S.detectDuplicates = a,
			c
		},
		ut.matches = function(e, t) {
			return ut(e, null, null, t)
		},
		ut.matchesSelector = function(e, t) { (e.ownerDocument || e) !== c && l(e),
			t = t.replace(Z, "='$1']");
			if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
				var n = m.call(e, t);
				if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
			} catch(r) {}
			return ut(t, c, null, [e]).length > 0
		},
		ut.contains = function(e, t) {
			return (e.ownerDocument || e) !== c && l(e),
			g(e, t)
		},
		ut.attr = function(e, t) {
			var n;
			return (e.ownerDocument || e) !== c && l(e),
			p || (t = t.toLowerCase()),
			(n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
		},
		ut.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		},
		ut.uniqueSort = function(e) {
			var t, n = [],
			r = 1,
			i = 0;
			a = !S.detectDuplicates,
			e.sort(y);
			if (a) {
				for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
				while (i--) e.splice(n[i], 1)
			}
			return e
		},
		s = ut.getText = function(e) {
			var t, n = "",
			r = 0,
			i = e.nodeType;
			if (!i) for (; t = e[r]; r++) n += s(t);
			else if (i === 1 || i === 9 || i === 11) {
				if (typeof e.textContent == "string") return e.textContent;
				for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
			} else if (i === 3 || i === 4) return e.nodeValue;
			return n
		},
		i = ut.selectors = {
			cacheLength: 50,
			createPseudo: st,
			match: V,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(et, tt),
					e[3] = (e[4] || e[5] || "").replace(et, tt),
					e[2] === "~=" && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(),
					e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]),
					e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return V.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					return e === "*" ?
					function() {
						return ! 0
					}: (e = e.replace(et, tt).toLowerCase(),
					function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS: function(e) {
					var t = N[e + " "];
					return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e,
					function(e) {
						return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = ut.attr(r, e);
						return i == null ? t === "!=": t ? (i += "", t === "=" ? i === n: t === "!=" ? i !== n: t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice( - n.length) === n: t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var s = e.slice(0, 3) !== "nth",
					o = e.slice( - 4) !== "last",
					u = t === "of-type";
					return r === 1 && i === 0 ?
					function(e) {
						return !! e.parentNode
					}: function(t, n, a) {
						var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling",
						m = t.parentNode,
						g = u && t.nodeName.toLowerCase(),
						y = !a && !u;
						if (m) {
							if (s) {
								while (v) {
									c = t;
									while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) return ! 1;
									d = v = e === "only" && !d && "nextSibling"
								}
								return ! 0
							}
							d = [o ? m.firstChild: m.lastChild];
							if (o && y) {
								l = m[w] || (m[w] = {}),
								f = l[e] || [],
								p = f[0] === x && f[1],
								h = f[0] === x && f[2],
								c = p && m.childNodes[p];
								while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (c.nodeType === 1 && ++h && c === t) {
									l[e] = [x, p, h];
									break
								}
							} else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
							else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) && ++h) {
								y && ((c[w] || (c[w] = {}))[e] = [x, h]);
								if (c === t) break
							}
							return h -= i,
							h === r || h % r === 0 && h / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
					return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
						var i, s = r(e, t),
						o = s.length;
						while (o--) i = P.call(e, s[o]),
						e[i] = !(n[i] = s[o])
					}) : function(e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: st(function(e) {
					var t = [],
					n = [],
					r = u(e.replace(R, "$1"));
					return r[w] ? st(function(e, t, n, i) {
						var s, o = r(e, null, i, []),
						u = e.length;
						while (u--) if (s = o[u]) e[u] = !(t[u] = s)
					}) : function(e, i, s) {
						return t[0] = e,
						r(t, null, s, n),
						!n.pop()
					}
				}),
				has: st(function(e) {
					return function(t) {
						return ut(e, t).length > 0
					}
				}),
				contains: st(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
					}
				}),
				lang: st(function(e) {
					return X.test(e || "") || ut.error("unsupported lang: " + e),
					e = e.replace(et, tt).toLowerCase(),
					function(t) {
						var n;
						do
						if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
						n === e || n.indexOf(e + "-") === 0;
						while ((t = t.parentNode) && t.nodeType === 1);
						return ! 1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === h
				},
				focus: function(e) {
					return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && !!e.checked || t === "option" && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return ! 1;
					return ! 0
				},
				parent: function(e) {
					return ! i.pseudos.empty(e)
				},
				header: function(e) {
					return G.test(e.nodeName)
				},
				input: function(e) {
					return Q.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && e.type === "button" || t === "button"
				},
				text: function(e) {
					var t;
					return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
				},
				first: ct(function() {
					return [0]
				}),
				last: ct(function(e, t) {
					return [t - 1]
				}),
				eq: ct(function(e, t, n) {
					return [n < 0 ? n + t: n]
				}),
				even: ct(function(e, t) {
					var n = 0;
					for (; n < t; n += 2) e.push(n);
					return e
				}),
				odd: ct(function(e, t) {
					var n = 1;
					for (; n < t; n += 2) e.push(n);
					return e
				}),
				lt: ct(function(e, t, n) {
					var r = n < 0 ? n + t: n;
					for (; --r >= 0;) e.push(r);
					return e
				}),
				gt: ct(function(e, t, n) {
					var r = n < 0 ? n + t: n;
					for (; ++r < t;) e.push(r);
					return e
				})
			}
		};
		for (n in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) i.pseudos[n] = ft(n);
		for (n in {
			submit: !0,
			reset: !0
		}) i.pseudos[n] = lt(n);
		u = ut.compile = function(e, t) {
			var n, r = [],
			i = [],
			s = k[e + " "];
			if (!s) {
				t || (t = ht(e)),
				n = t.length;
				while (n--) s = yt(t[n]),
				s[w] ? r.push(s) : i.push(s);
				s = k(e, bt(i, r))
			}
			return s
		},
		i.pseudos.nth = i.pseudos.eq,
		i.filters = St.prototype = i.pseudos,
		i.setFilters = new St,
		l(),
		ut.attr = b.attr,
		b.find = ut,
		b.expr = ut.selectors,
		b.expr[":"] = b.expr.pseudos,
		b.unique = ut.uniqueSort,
		b.text = ut.getText,
		b.isXMLDoc = ut.isXML,
		b.contains = ut.contains
	} (e);
	var ot = /Until$/,
	ut = /^(?:parents|prev(?:Until|All))/,
	at = /^.[^:#\[\.,]*$/,
	ft = b.expr.match.needsContext,
	lt = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	b.fn.extend({
		find: function(e) {
			var t, n, r, i = this.length;
			if (typeof e != "string") return r = this,
			this.pushStack(b(e).filter(function() {
				for (t = 0; t < i; t++) if (b.contains(r[t], this)) return ! 0
			}));
			n = [];
			for (t = 0; t < i; t++) b.find(e, this[t], n);
			return n = this.pushStack(i > 1 ? b.unique(n) : n),
			n.selector = (this.selector ? this.selector + " ": "") + e,
			n
		},
		has: function(e) {
			var t, n = b(e, this),
			r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++) if (b.contains(this, n[t])) return ! 0
			})
		},
		not: function(e) {
			return this.pushStack(ht(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(ht(this, e, !0))
		},
		is: function(e) {
			return !! e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			var n, r = 0,
			i = this.length,
			s = [],
			o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
			for (; r < i; r++) {
				n = this[r];
				while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
					if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
						s.push(n);
						break
					}
					n = n.parentNode
				}
			}
			return this.pushStack(s.length > 1 ? b.unique(s) : s)
		},
		index: function(e) {
			return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function(e, t) {
			var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
			r = b.merge(this.get(), n);
			return this.pushStack(b.unique(r))
		},
		addBack: function(e) {
			return this.add(e == null ? this.prevObject: this.prevObject.filter(e))
		}
	}),
	b.fn.andSelf = b.fn.addBack,
	b.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t: null
		},
		parents: function(e) {
			return b.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return b.dir(e, "parentNode", n)
		},
		next: function(e) {
			return ct(e, "nextSibling")
		},
		prev: function(e) {
			return ct(e, "previousSibling")
		},
		nextAll: function(e) {
			return b.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return b.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return b.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return b.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return b.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return b.sibling(e.firstChild)
		},
		contents: function(e) {
			return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: b.merge([], e.childNodes)
		}
	},
	function(e, t) {
		b.fn[e] = function(n, r) {
			var i = b.map(this, t, n);
			return ot.test(e) || (r = n),
			r && typeof r == "string" && (i = b.filter(r, i)),
			i = this.length > 1 && !lt[e] ? b.unique(i) : i,
			this.length > 1 && ut.test(e) && (i = i.reverse()),
			this.pushStack(i)
		}
	}),
	b.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"),
			t.length === 1 ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
		},
		dir: function(e, n, r) {
			var i = [],
			s = e[n];
			while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r))) s.nodeType === 1 && i.push(s),
			s = s[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	});
	var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	vt = / jQuery\d+="(?:null|\d+)"/g,
	mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
	gt = /^\s+/,
	yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	bt = /<([\w:]+)/,
	wt = /<tbody/i,
	Et = /<|&#?\w+;/,
	St = /<(?:script|style|link)/i,
	xt = /^(?:checkbox|radio)$/i,
	Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
	Nt = /^$|\/(?:java|ecma)script/i,
	Ct = /^true\/(.*)/,
	kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	Lt = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	At = pt(s),
	Ot = At.appendChild(s.createElement("div"));
	Lt.optgroup = Lt.option,
	Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead,
	Lt.th = Lt.td,
	b.fn.extend({
		text: function(e) {
			return b.access(this,
			function(e) {
				return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
			},
			null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]),
				t.map(function() {
					var e = this;
					while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return b.isFunction(e) ? this.each(function(t) {
				b(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = b(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = b.isFunction(e);
			return this.each(function(n) {
				b(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0,
			function(e) { (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0,
			function(e) { (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = 0;
			for (; (n = this[r]) != null; r++) if (!e || b.filter(e, [n]).length > 0) ! t && n.nodeType === 1 && b.cleanData(jt(n)),
			n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; (e = this[t]) != null; t++) {
				e.nodeType === 1 && b.cleanData(jt(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && b.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = e == null ? !1 : e,
			t = t == null ? e: t,
			this.map(function() {
				return b.clone(this, e, t)
			})
		},
		html: function(e) {
			return b.access(this,
			function(e) {
				var n = this[0] || {},
				r = 0,
				i = this.length;
				if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
				if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(yt, "<$1></$2>");
					try {
						for (; r < i; r++) n = this[r] || {},
						n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
						n = 0
					} catch(s) {}
				}
				n && this.empty().append(e)
			},
			null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = b.isFunction(e);
			return ! t && typeof e != "string" && (e = b(e).not(this).detach()),
			this.domManip([e], !0,
			function(e) {
				var t = this.nextSibling,
				n = this.parentNode;
				n && (b(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, r) {
			e = h.apply([], e);
			var i, s, o, u, a, f, l = 0,
			c = this.length,
			p = this,
			d = c - 1,
			v = e[0],
			m = b.isFunction(v);
			if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v))) return this.each(function(i) {
				var s = p.eq(i);
				m && (e[0] = v.call(this, i, n ? s.html() : t)),
				s.domManip(e, n, r)
			});
			if (c) {
				f = b.buildFragment(e, this[0].ownerDocument, !1, this),
				i = f.firstChild,
				f.childNodes.length === 1 && (f = i);
				if (i) {
					n = n && b.nodeName(i, "tr"),
					u = b.map(jt(f, "script"), _t),
					o = u.length;
					for (; l < c; l++) s = f,
					l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))),
					r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
					if (o) {
						a = u[u.length - 1].ownerDocument,
						b.map(u, Dt);
						for (l = 0; l < o; l++) s = u[l],
						Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
							url: s.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")))
					}
					f = i = null
				}
			}
			return this
		}
	}),
	b.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(e, t) {
		b.fn[e] = function(e) {
			var n, r = 0,
			i = [],
			s = b(e),
			o = s.length - 1;
			for (; r <= o; r++) n = r === o ? this: this.clone(!0),
			b(s[r])[t](n),
			p.apply(i, n.get());
			return this.pushStack(i)
		}
	}),
	b.extend({
		clone: function(e, t, n) {
			var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
			b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
			if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
				r = jt(s),
				u = jt(e);
				for (o = 0; (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
			}
			if (t) if (n) {
				u = u || jt(e),
				r = r || jt(s);
				for (o = 0; (i = u[o]) != null; o++) Ht(i, r[o])
			} else Ht(e, s);
			return r = jt(s, "script"),
			r.length > 0 && Pt(r, !a && jt(e, "script")),
			r = u = i = null,
			s
		},
		buildFragment: function(e, t, n, r) {
			var i, s, o, u, a, f, l, c = e.length,
			h = pt(t),
			p = [],
			d = 0;
			for (; d < c; d++) {
				s = e[d];
				if (s || s === 0) if (b.type(s) === "object") b.merge(p, s.nodeType ? [s] : s);
				else if (!Et.test(s)) p.push(t.createTextNode(s));
				else {
					u = u || h.appendChild(t.createElement("div")),
					a = (bt.exec(s) || ["", ""])[1].toLowerCase(),
					l = Lt[a] || Lt._default,
					u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2],
					i = l[0];
					while (i--) u = u.lastChild; ! b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
					if (!b.support.tbody) {
						s = a === "table" && !wt.test(s) ? u.firstChild: l[1] === "<table>" && !wt.test(s) ? u: 0,
						i = s && s.childNodes.length;
						while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
					}
					b.merge(p, u.childNodes),
					u.textContent = "";
					while (u.firstChild) u.removeChild(u.firstChild);
					u = h.lastChild
				}
			}
			u && h.removeChild(u),
			b.support.appendChecked || b.grep(jt(p, "input"), Ft),
			d = 0;
			while (s = p[d++]) {
				if (r && b.inArray(s, r) !== -1) continue;
				o = b.contains(s.ownerDocument, s),
				u = jt(h.appendChild(s), "script"),
				o && Pt(u);
				if (n) {
					i = 0;
					while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
				}
			}
			return u = null,
			h
		},
		cleanData: function(e, t) {
			var n, r, s, o, u = 0,
			a = b.expando,
			f = b.cache,
			c = b.support.deleteExpando,
			h = b.event.special;
			for (; (n = e[u]) != null; u++) if (t || b.acceptData(n)) {
				s = n[a],
				o = s && f[s];
				if (o) {
					if (o.events) for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
					f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
				}
			}
		}
	});
	var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
	zt = /opacity\s*=\s*([^)]*)/,
	Wt = /^(top|right|bottom|left)$/,
	Xt = /^(none|table(?!-c[ea]).+)/,
	Vt = /^margin/,
	$t = new RegExp("^(" + w + ")(.*)$", "i"),
	Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
	Kt = new RegExp("^([+-])=(" + w + ")", "i"),
	Qt = {
		BODY: "block"
	},
	Gt = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	Yt = {
		letterSpacing: 0,
		fontWeight: 400
	},
	Zt = ["Top", "Right", "Bottom", "Left"],
	en = ["Webkit", "O", "Moz", "ms"];
	b.fn.extend({
		css: function(e, n) {
			return b.access(this,
			function(e, n, r) {
				var i, s, o = {},
				u = 0;
				if (b.isArray(n)) {
					s = qt(e),
					i = n.length;
					for (; u < i; u++) o[n[u]] = b.css(e, n[u], !1, s);
					return o
				}
				return r !== t ? b.style(e, n, r) : b.css(e, n)
			},
			e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			var t = typeof e == "boolean";
			return this.each(function() { (t ? e: nn(this)) ? b(this).show() : b(this).hide()
			})
		}
	}),
	b.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Rt(e, "opacity");
						return n === "" ? "1": n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": b.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(e, n, r, i) {
			if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
			var s, o, u, a = b.camelCase(n),
			f = e.style;
			n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)),
			u = b.cssHooks[n] || b.cssHooks[a];
			if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s: f[n];
			o = typeof r,
			o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
			if (r == null || o === "number" && isNaN(r)) return;
			o === "number" && !b.cssNumber[a] && (r += "px"),
			!b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
			if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
				f[n] = r
			} catch(l) {}
		},
		css: function(e, n, r, i) {
			var s, o, u, a = b.camelCase(n);
			return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)),
			u = b.cssHooks[n] || b.cssHooks[a],
			u && "get" in u && (o = u.get(e, !0, r)),
			o === t && (o = Rt(e, n, i)),
			o === "normal" && n in Yt && (o = Yt[n]),
			r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
		},
		swap: function(e, t, n, r) {
			var i, s, o = {};
			for (s in t) o[s] = e.style[s],
			e.style[s] = t[s];
			i = n.apply(e, r || []);
			for (s in t) e.style[s] = o[s];
			return i
		}
	}),
	e.getComputedStyle ? (qt = function(t) {
		return e.getComputedStyle(t, null)
	},
	Rt = function(e, n, r) {
		var i, s, o, u = r || qt(e),
		a = u ? u.getPropertyValue(n) || u[n] : t,
		f = e.style;
		return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)),
		a
	}) : s.documentElement.currentStyle && (qt = function(e) {
		return e.currentStyle
	},
	Rt = function(e, n, r) {
		var i, s, o, u = r || qt(e),
		a = u ? u[n] : t,
		f = e.style;
		return a == null && f && f[n] && (a = f[n]),
		Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em": a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)),
		a === "" ? "auto": a
	}),
	b.each(["height", "width"],
	function(e, t) {
		b.cssHooks[t] = {
			get: function(e, n, r) {
				if (n) return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt,
				function() {
					return un(e, t, r)
				}) : un(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && qt(e);
				return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
			}
		}
	}),
	b.support.opacity || (b.cssHooks.opacity = {
		get: function(e, t) {
			return zt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
		},
		set: function(e, t) {
			var n = e.style,
			r = e.currentStyle,
			i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")": "",
			s = r && r.filter || n.filter || "";
			n.zoom = 1;
			if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
				n.removeAttribute("filter");
				if (t === "" || r && !r.filter) return
			}
			n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
		}
	}),
	b(function() {
		b.support.reliableMarginRight || (b.cssHooks.marginRight = {
			get: function(e, t) {
				if (t) return b.swap(e, {
					display: "inline-block"
				},
				Rt, [e, "marginRight"])
			}
		}),
		!b.support.pixelPosition && b.fn.position && b.each(["top", "left"],
		function(e, t) {
			b.cssHooks[t] = {
				get: function(e, n) {
					if (n) return n = Rt(e, t),
					Jt.test(n) ? b(e).position()[t] + "px": n
				}
			}
		})
	}),
	b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none"
	},
	b.expr.filters.visible = function(e) {
		return ! b.expr.filters.hidden(e)
	}),
	b.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(e, t) {
		b.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
				i = {},
				s = typeof n == "string" ? n.split(" ") : [n];
				for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		},
		Vt.test(e) || (b.cssHooks[e + t].set = sn)
	});
	var ln = /%20/g,
	cn = /\[\]$/,
	hn = /\r?\n/g,
	pn = /^(?:submit|button|image|reset|file)$/i,
	dn = /^(?:input|select|textarea|keygen)/i;
	b.fn.extend({
		serialize: function() {
			return b.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = b.prop(this, "elements");
				return e ? b.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
			}).map(function(e, t) {
				var n = b(this).val();
				return n == null ? null: b.isArray(n) ? b.map(n,
				function(e) {
					return {
						name: t.name,
						value: e.replace(hn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(hn, "\r\n")
				}
			}).get()
		}
	}),
	b.param = function(e, n) {
		var r, i = [],
		s = function(e, t) {
			t = b.isFunction(t) ? t() : t == null ? "": t,
			i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
		if (b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e,
		function() {
			s(this.name, this.value)
		});
		else for (r in e) vn(r, e[r], n, s);
		return i.join("&").replace(ln, "+")
	},
	b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(e, t) {
		b.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}),
	b.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var mn, gn, yn = b.now(),
	bn = /\?/,
	wn = /#.*$/,
	En = /([?&])_=[^&]*/,
	Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	Tn = /^(?:GET|HEAD)$/,
	Nn = /^\/\//,
	Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	kn = b.fn.load,
	Ln = {},
	An = {},
	On = "*/".concat("*");
	try {
		gn = o.href
	} catch(Mn) {
		gn = s.createElement("a"),
		gn.href = "",
		gn = gn.href
	}
	mn = Cn.exec(gn.toLowerCase()) || [],
	b.fn.load = function(e, n, r) {
		if (typeof e != "string" && kn) return kn.apply(this, arguments);
		var i, s, o, u = this,
		a = e.indexOf(" ");
		return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)),
		b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"),
		u.length > 0 && b.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: n
		}).done(function(e) {
			s = arguments,
			u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
		}).complete(r &&
		function(e, t) {
			u.each(r, s || [e.responseText, t, e])
		}),
		this
	},
	b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(e, t) {
		b.fn[t] = function(e) {
			return this.on(t, e)
		}
	}),
	b.each(["get", "post"],
	function(e, n) {
		b[n] = function(e, r, i, s) {
			return b.isFunction(r) && (s = s || i, i = r, r = t),
			b.ajax({
				url: e,
				type: n,
				dataType: s,
				data: r,
				success: i
			})
		}
	}),
	b.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: gn,
			type: "GET",
			isLocal: xn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": On,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": b.parseJSON,
				"text xml": b.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
		},
		ajaxPrefilter: _n(Ln),
		ajaxTransport: _n(An),
		ajax: function(e, n) {
			function N(e, n, r, i) {
				var l, g, y, E, S, T = n;
				if (w === 2) return;
				w = 2,
				u && clearTimeout(u),
				f = t,
				o = i || "",
				x.readyState = e > 0 ? 4 : 0,
				r && (E = Hn(c, x, r));
				if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)),
				e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
				else {
					y = T;
					if (e || !T) T = "error",
					e < 0 && (e = 0)
				}
				x.status = e,
				x.statusText = (n || T) + "",
				l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]),
				x.statusCode(m),
				m = t,
				a && p.trigger(l ? "ajaxSuccess": "ajaxError", [x, c, l ? g: y]),
				v.fireWith(h, [x, T]),
				a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop"))
			}
			typeof e == "object" && (n = e, e = t),
			n = n || {};
			var r, i, s, o, u, a, f, l, c = b.ajaxSetup({},
			n),
			h = c.context || c,
			p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event,
			d = b.Deferred(),
			v = b.Callbacks("once memory"),
			m = c.statusCode || {},
			g = {},
			y = {},
			w = 0,
			S = "canceled",
			x = {
				readyState: 0,
				getResponseHeader: function(e) {
					var t;
					if (w === 2) {
						if (!l) {
							l = {};
							while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
						}
						t = l[e.toLowerCase()]
					}
					return t == null ? null: t
				},
				getAllResponseHeaders: function() {
					return w === 2 ? o: null
				},
				setRequestHeader: function(e, t) {
					var n = e.toLowerCase();
					return w || (e = y[n] = y[n] || e, g[e] = t),
					this
				},
				overrideMimeType: function(e) {
					return w || (c.mimeType = e),
					this
				},
				statusCode: function(e) {
					var t;
					if (e) if (w < 2) for (t in e) m[t] = [m[t], e[t]];
					else x.always(e[x.status]);
					return this
				},
				abort: function(e) {
					var t = e || S;
					return f && f.abort(t),
					N(0, t),
					this
				}
			};
			d.promise(x).complete = v.add,
			x.success = x.done,
			x.error = x.fail,
			c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"),
			c.type = n.method || n.type || c.method || c.type,
			c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""],
			c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))),
			c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)),
			Dn(Ln, c, n, x);
			if (w === 2) return x;
			a = c.global,
			a && b.active++===0 && b.event.trigger("ajaxStart"),
			c.type = c.type.toUpperCase(),
			c.hasContent = !Tn.test(c.type),
			s = c.url,
			c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&": "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&": "?") + "_=" + yn++)),
			c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])),
			(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType),
			x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01": "") : c.accepts["*"]);
			for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
			if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
				S = "abort";
				for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) x[i](c[i]);
				f = Dn(An, c, n, x);
				if (!f) N( - 1, "No Transport");
				else {
					x.readyState = 1,
					a && p.trigger("ajaxSend", [x, c]),
					c.async && c.timeout > 0 && (u = setTimeout(function() {
						x.abort("timeout")
					},
					c.timeout));
					try {
						w = 1,
						f.send(g, N)
					} catch(T) {
						if (! (w < 2)) throw T;
						N( - 1, T)
					}
				}
				return x
			}
			return x.abort()
		},
		getScript: function(e, n) {
			return b.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return b.get(e, t, n, "json")
		}
	}),
	b.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return b.globalEval(e),
				e
			}
		}
	}),
	b.ajaxPrefilter("script",
	function(e) {
		e.cache === t && (e.cache = !1),
		e.crossDomain && (e.type = "GET", e.global = !1)
	}),
	b.ajaxTransport("script",
	function(e) {
		if (e.crossDomain) {
			var n, r = s.head || b("head")[0] || s.documentElement;
			return {
				send: function(t, i) {
					n = s.createElement("script"),
					n.async = !0,
					e.scriptCharset && (n.charset = e.scriptCharset),
					n.src = e.url,
					n.onload = n.onreadystatechange = function(e, t) {
						if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null,
						n.parentNode && n.parentNode.removeChild(n),
						n = null,
						t || i(200, "success")
					},
					r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var jn = [],
	Fn = /(=)\?(?=&|$)|\?\?/;
	b.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = jn.pop() || b.expando + "_" + yn++;
			return this[e] = !0,
			e
		}
	}),
	b.ajaxPrefilter("json jsonp",
	function(n, r, i) {
		var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url": typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
		if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
		a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&": "?") + n.jsonp + "=" + s),
		n.converters["script json"] = function() {
			return u || b.error(s + " was not called"),
			u[0]
		},
		n.dataTypes[0] = "json",
		o = e[s],
		e[s] = function() {
			u = arguments
		},
		i.always(function() {
			e[s] = o,
			n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)),
			u && b.isFunction(o) && o(u[0]),
			u = o = t
		}),
		"script"
	});
	var In, qn, Rn = 0,
	Un = e.ActiveXObject &&
	function() {
		var e;
		for (e in In) In[e](t, !0)
	};
	b.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return ! this.isLocal && zn() || Wn()
	}: zn,
	qn = b.ajaxSettings.xhr(),
	b.support.cors = !!qn && "withCredentials" in qn,
	qn = b.support.ajax = !!qn,
	qn && b.ajaxTransport(function(n) {
		if (!n.crossDomain || b.support.cors) {
			var r;
			return {
				send: function(i, s) {
					var o, u, a = n.xhr();
					n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
					if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
					n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
					!n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (u in i) a.setRequestHeader(u, i[u])
					} catch(f) {}
					a.send(n.hasContent && n.data || null),
					r = function(e, i) {
						var u, f, l, c;
						try {
							if (r && (i || a.readyState === 4)) {
								r = t,
								o && (a.onreadystatechange = b.noop, Un && delete In[o]);
								if (i) a.readyState !== 4 && a.abort();
								else {
									c = {},
									u = a.status,
									f = a.getAllResponseHeaders(),
									typeof a.responseText == "string" && (c.text = a.responseText);
									try {
										l = a.statusText
									} catch(h) {
										l = ""
									} ! u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
								}
							}
						} catch(p) {
							i || s( - 1, p)
						}
						c && s(u, l, c, f)
					},
					n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {},
					b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
	Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
	Kn = /queueHooks$/,
	Qn = [nr],
	Gn = {
		"*": [function(e, t) {
			var n, r, i = this.createTween(e, t),
			s = Jn.exec(t),
			o = i.cur(),
			u = +o || 0,
			a = 1,
			f = 20;
			if (s) {
				n = +s[2],
				r = s[3] || (b.cssNumber[e] ? "": "px");
				if (r !== "px" && u) {
					u = b.css(i.elem, e, !0) || n || 1;
					do a = a || ".5",
					u /= a,
					b.style(i.elem, e, u + r);
					while (a !== (a = i.cur() / o) && a !== 1 && --f)
				}
				i.unit = r,
				i.start = u,
				i.end = s[1] ? u + (s[1] + 1) * n: n
			}
			return i
		}]
	};
	b.Animation = b.extend(er, {
		tweener: function(e, t) {
			b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
			i = e.length;
			for (; r < i; r++) n = e[r],
			Gn[n] = Gn[n] || [],
			Gn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Qn.unshift(e) : Qn.push(e)
		}
	}),
	b.Tween = rr,
	rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, s) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = s || (b.cssNumber[n] ? "": "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : rr.propHooks._default.set(this),
			this
		}
	},
	rr.prototype.init.prototype = rr.prototype,
	rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
			},
			set: function(e) {
				b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	b.each(["toggle", "show", "hide"],
	function(e, t) {
		var n = b.fn[t];
		b.fn[t] = function(e, r, i) {
			return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}),
	b.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			},
			e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = b.isEmptyObject(e),
			s = b.speed(t, n, r),
			o = function() {
				var t = er(this, b.extend({},
				e), s);
				o.finish = function() {
					t.stop(!0)
				},
				(i || b._data(this, "finish")) && t.stop(!0)
			};
			return o.finish = o,
			i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop,
				t(r)
			};
			return typeof e != "string" && (r = n, n = e, e = t),
			n && e !== !1 && this.queue(e || "fx", []),
			this.each(function() {
				var t = !0,
				n = e != null && e + "queueHooks",
				s = b.timers,
				o = b._data(this);
				if (n) o[n] && o[n].stop && i(o[n]);
				else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
				for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1)); (t || !r) && b.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"),
			this.each(function() {
				var t, n = b._data(this),
				r = n[e + "queue"],
				i = n[e + "queueHooks"],
				s = b.timers,
				o = r ? r.length: 0;
				n.finish = !0,
				b.queue(this, e, []),
				i && i.cur && i.cur.finish && i.cur.finish.call(this);
				for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
				for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}),
	b.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(e, t) {
		b.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	b.speed = function(e, t, n) {
		var r = e && typeof e == "object" ? b.extend({},
		e) : {
			complete: n || !n && t || b.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !b.isFunction(t) && t
		};
		r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration: r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
		if (r.queue == null || r.queue === !0) r.queue = "fx";
		return r.old = r.complete,
		r.complete = function() {
			b.isFunction(r.old) && r.old.call(this),
			r.queue && b.dequeue(this, r.queue)
		},
		r
	},
	b.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return.5 - Math.cos(e * Math.PI) / 2
		}
	},
	b.timers = [],
	b.fx = rr.prototype.init,
	b.fx.tick = function() {
		var e, n = b.timers,
		r = 0;
		Xn = b.now();
		for (; r < n.length; r++) e = n[r],
		!e() && n[r] === e && n.splice(r--, 1);
		n.length || b.fx.stop(),
		Xn = t
	},
	b.fx.timer = function(e) {
		e() && b.timers.push(e) && b.fx.start()
	},
	b.fx.interval = 13,
	b.fx.start = function() {
		Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
	},
	b.fx.stop = function() {
		clearInterval(Vn),
		Vn = null
	},
	b.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	b.fx.step = {},
	b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
		return b.grep(b.timers,
		function(t) {
			return e === t.elem
		}).length
	}),
	b.fn.offset = function(e) {
		if (arguments.length) return e === t ? this: this.each(function(t) {
			b.offset.setOffset(this, e, t)
		});
		var n, r, s = {
			top: 0,
			left: 0
		},
		o = this[0],
		u = o && o.ownerDocument;
		if (!u) return;
		return n = u.documentElement,
		b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
			top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : s
	},
	b.offset = {
		setOffset: function(e, t, n) {
			var r = b.css(e, "position");
			r === "static" && (e.style.position = "relative");
			var i = b(e),
			s = i.offset(),
			o = b.css(e, "top"),
			u = b.css(e, "left"),
			a = (r === "absolute" || r === "fixed") && b.inArray("auto", [o, u]) > -1,
			f = {},
			l = {},
			c,
			h;
			a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0),
			b.isFunction(t) && (t = t.call(e, n, s)),
			t.top != null && (f.top = t.top - s.top + c),
			t.left != null && (f.left = t.left - s.left + h),
			"using" in t ? t.using.call(e, f) : i.css(f)
		}
	},
	b.fn.extend({
		position: function() {
			if (!this[0]) return;
			var e, t, n = {
				top: 0,
				left: 0
			},
			r = this[0];
			return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)),
			{
				top: t.top - n.top - b.css(r, "marginTop", !0),
				left: t.left - n.left - b.css(r, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s.documentElement;
				while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static") e = e.offsetParent;
				return e || s.documentElement
			})
		}
	}),
	b.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(e, n) {
		var r = /Y/.test(n);
		b.fn[e] = function(i) {
			return b.access(this,
			function(e, i, s) {
				var o = sr(e);
				if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
				o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s: b(o).scrollTop()) : e[i] = s
			},
			e, i, arguments.length, null)
		}
	}),
	b.each({
		Height: "height",
		Width: "width"
	},
	function(e, n) {
		b.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		},
		function(r, i) {
			b.fn[i] = function(i, s) {
				var o = arguments.length && (r || typeof i != "boolean"),
				u = r || (i === !0 || s === !0 ? "margin": "border");
				return b.access(this,
				function(n, r, i) {
					var s;
					return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
				},
				n, o ? i: t, o, null)
			}
		})
	}),
	e.jQuery = e.$ = b,
	typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
	function() {
		return b
	})
})(window),
function(e, t) {
	var n = function() {
		var t = e._data(document, "events");
		return t && t.click && e.grep(t.click,
		function(e) {
			return e.namespace === "rails"
		}).length
	};
	n() && e.error("jquery-ujs has already been loaded!");
	var r;
	e.rails = r = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
		disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with]",
		CSRFProtection: function(t) {
			var n = e('meta[name="csrf-token"]').attr("content");
			n && t.setRequestHeader("X-CSRF-Token", n)
		},
		fire: function(t, n, r) {
			var i = e.Event(n);
			return t.trigger(i, r),
			i.result !== !1
		},
		confirm: function(e) {
			return confirm(e)
		},
		ajax: function(t) {
			return e.ajax(t)
		},
		href: function(e) {
			return e.attr("href")
		},
		handleRemote: function(n) {
			var i, s, o, u, a, f, l, c;
			if (r.fire(n, "ajax:before")) {
				u = n.data("cross-domain"),
				a = u === t ? null: u,
				f = n.data("with-credentials") || null,
				l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
				if (n.is("form")) {
					i = n.attr("method"),
					s = n.attr("action"),
					o = n.serializeArray();
					var h = n.data("ujs:submit-button");
					h && (o.push(h), n.data("ujs:submit-button", null))
				} else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
				c = {
					type: i || "GET",
					data: o,
					dataType: l,
					beforeSend: function(e, i) {
						return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
						r.fire(n, "ajax:beforeSend", [e, i])
					},
					success: function(e, t, r) {
						n.trigger("ajax:success", [e, t, r])
					},
					complete: function(e, t) {
						n.trigger("ajax:complete", [e, t])
					},
					error: function(e, t, r) {
						n.trigger("ajax:error", [e, t, r])
					},
					crossDomain: a
				},
				f && (c.xhrFields = {
					withCredentials: f
				}),
				s && (c.url = s);
				var p = r.ajax(c);
				return n.trigger("ajax:send", p),
				p
			}
			return ! 1
		},
		handleMethod: function(n) {
			var i = r.href(n),
			s = n.data("method"),
			o = n.attr("target"),
			u = e("meta[name=csrf-token]").attr("content"),
			a = e("meta[name=csrf-param]").attr("content"),
			f = e('<form method="post" action="' + i + '"></form>'),
			l = '<input name="_method" value="' + s + '" type="hidden" />';
			a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'),
			o && f.attr("target", o),
			f.hide().append(l).appendTo("body"),
			f.submit()
		},
		disableFormElements: function(t) {
			t.find(r.disableSelector).each(function() {
				var t = e(this),
				n = t.is("button") ? "html": "val";
				t.data("ujs:enable-with", t[n]()),
				t[n](t.data("disable-with")),
				t.prop("disabled", !0)
			})
		},
		enableFormElements: function(t) {
			t.find(r.enableSelector).each(function() {
				var t = e(this),
				n = t.is("button") ? "html": "val";
				t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")),
				t.prop("disabled", !1)
			})
		},
		allowAction: function(e) {
			var t = e.data("confirm"),
			n = !1,
			i;
			return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
		},
		blankInputs: function(t, n, r) {
			var i = e(),
			s,
			o,
			u = n || "input,textarea",
			a = t.find(u);
			return a.each(function() {
				s = e(this),
				o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
				if (!o == !r) {
					if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return ! 0;
					i = i.add(s)
				}
			}),
			i.length ? i: !1
		},
		nonBlankInputs: function(e, t) {
			return r.blankInputs(e, t, !0)
		},
		stopEverything: function(t) {
			return e(t.target).trigger("ujs:everythingStopped"),
			t.stopImmediatePropagation(),
			!1
		},
		callFormSubmitBindings: function(n, r) {
			var i = n.data("events"),
			s = !0;
			return i !== t && i.submit !== t && e.each(i.submit,
			function(e, t) {
				if (typeof t.handler == "function") return s = t.handler(r)
			}),
			s
		},
		disableElement: function(e) {
			e.data("ujs:enable-with", e.html()),
			e.html(e.data("disable-with")),
			e.bind("click.railsDisable",
			function(e) {
				return r.stopEverything(e)
			})
		},
		enableElement: function(e) {
			e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)),
			e.unbind("click.railsDisable")
		}
	},
	r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
		e.crossDomain || r.CSRFProtection(n)
	}), e(document).delegate(r.linkDisableSelector, "ajax:complete",
	function() {
		r.enableElement(e(this))
	}), e(document).delegate(r.linkClickSelector, "click.rails",
	function(n) {
		var i = e(this),
		s = i.data("method"),
		o = i.data("params");
		if (!r.allowAction(i)) return r.stopEverything(n);
		i.is(r.linkDisableSelector) && r.disableElement(i);
		if (i.data("remote") !== t) {
			if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return ! 0;
			var u = r.handleRemote(i);
			return u === !1 ? r.enableElement(i) : u.error(function() {
				r.enableElement(i)
			}),
			!1
		}
		if (i.data("method")) return r.handleMethod(i),
		!1
	}), e(document).delegate(r.inputChangeSelector, "change.rails",
	function(t) {
		var n = e(this);
		return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
	}), e(document).delegate(r.formSubmitSelector, "submit.rails",
	function(n) {
		var i = e(this),
		s = i.data("remote") !== t,
		o = r.blankInputs(i, r.requiredInputSelector),
		u = r.nonBlankInputs(i, r.fileInputSelector);
		if (!r.allowAction(i)) return r.stopEverything(n);
		if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
		if (s) {
			if (u) {
				setTimeout(function() {
					r.disableFormElements(i)
				},
				13);
				var a = r.fire(i, "ajax:aborted:file", [u]);
				return a || setTimeout(function() {
					r.enableFormElements(i)
				},
				13),
				a
			}
			return ! e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
		}
		setTimeout(function() {
			r.disableFormElements(i)
		},
		13)
	}), e(document).delegate(r.formInputClickSelector, "click.rails",
	function(t) {
		var n = e(this);
		if (!r.allowAction(n)) return r.stopEverything(t);
		var i = n.attr("name"),
		s = i ? {
			name: i,
			value: n.val()
		}: null;
		n.closest("form").data("ujs:submit-button", s)
	}), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails",
	function(t) {
		this == t.target && r.disableFormElements(e(this))
	}), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails",
	function(t) {
		this == t.target && r.enableFormElements(e(this))
	}), e(function() {
		var t = e("meta[name=csrf-token]").attr("content"),
		n = e("meta[name=csrf-param]").attr("content");
		e('form input[name="' + n + '"]').val(t)
	}))
} (jQuery),
function() {
	var e = !1,
	t = /xyz/.test(function() {
		xyz
	}) ? /\b_super\b/: /.*/;
	this.Class = function() {},
	Class.extend = function(n) {
		function o() { ! e && this.init && this.init.apply(this, arguments)
		}
		var r = this.prototype;
		e = !0;
		var i = new this;
		e = !1;
		for (var s in n) i[s] = typeof n[s] == "function" && typeof r[s] == "function" && t.test(n[s]) ?
		function(e, t) {
			return function() {
				var n = this._super;
				this._super = r[e];
				var i = t.apply(this, arguments);
				return this._super = n,
				i
			}
		} (s, n[s]) : n[s];
		return o.prototype = i,
		o.constructor = o,
		o.extend = arguments.callee,
		o
	}
} (),
function(e) {
	typeof define == "function" ? define(function() {
		e()
	}) : e()
} (function(e) {
	if (!Function.prototype.bind) {
		var t = Array.prototype.slice;
		Function.prototype.bind = function() {
			function e() {
				if (this instanceof e) {
					var i = Object.create(n.prototype);
					return n.apply(i, r.concat(t.call(arguments))),
					i
				}
				return n.call.apply(n, r.concat(t.call(arguments)))
			}
			var n = this;
			if (typeof n.apply != "function" || typeof n.call != "function") return new TypeError;
			var r = t.call(arguments);
			return e.length = typeof n == "function" ? Math.max(n.length - r.length, 0) : 0,
			e
		}
	}
	var n = Function.prototype.call,
	r = Object.prototype,
	i = n.bind(r.hasOwnProperty),
	s,
	o,
	u,
	a,
	f;
	if (f = i(r, "__defineGetter__")) s = n.bind(r.__defineGetter__),
	o = n.bind(r.__defineSetter__),
	u = n.bind(r.__lookupGetter__),
	a = n.bind(r.__lookupSetter__);
	Array.isArray || (Array.isArray = function(e) {
		return Object.prototype.toString.call(e) === "[object Array]"
	}),
	Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
		for (var n = +this.length,
		r = 0; r < n; r++) r in this && e.call(t, this[r], r, this)
	}),
	Array.prototype.map || (Array.prototype.map = function(e, t) {
		var n = +this.length;
		if (typeof e != "function") throw new TypeError;
		for (var r = Array(n), i = 0; i < n; i++) i in this && (r[i] = e.call(t, this[i], i, this));
		return r
	}),
	Array.prototype.filter || (Array.prototype.filter = function(e, t) {
		for (var n = [], r = 0; r < this.length; r++) e.call(t, this[r]) && n.push(this[r]);
		return n
	}),
	Array.prototype.every || (Array.prototype.every = function(e, t) {
		for (var n = 0; n < this.length; n++) if (!e.call(t, this[n])) return ! 1;
		return ! 0
	}),
	Array.prototype.some || (Array.prototype.some = function(e, t) {
		for (var n = 0; n < this.length; n++) if (e.call(t, this[n])) return ! 0;
		return ! 1
	}),
	Array.prototype.reduce || (Array.prototype.reduce = function(e) {
		var t = +this.length;
		if (typeof e != "function") throw new TypeError;
		if (t === 0 && arguments.length === 1) throw new TypeError;
		var n = 0;
		if (arguments.length >= 2) var r = arguments[1];
		else do {
			if (n in this) {
				r = this[n++];
				break
			}
			if (++n >= t) throw new TypeError
		} while ( 1 );
		for (; n < t; n++) n in this && (r = e.call(null, r, this[n], n, this));
		return r
	}),
	Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
		var t = +this.length;
		if (typeof e != "function") throw new TypeError;
		if (t === 0 && arguments.length === 1) throw new TypeError;
		var n;
		t -= 1;
		if (arguments.length >= 2) n = arguments[1];
		else do {
			if (t in this) {
				n = this[t--];
				break
			}
			if (--t < 0) throw new TypeError
		} while ( 1 );
		for (; t >= 0; t--) t in this && (n = e.call(null, n, this[t], t, this));
		return n
	}),
	Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
		var n = this.length;
		if (!n) return - 1;
		var r = t || 0;
		if (r >= n) return - 1;
		for (r < 0 && (r += n); r < n; r++) if (r in this && e === this[r]) return r;
		return - 1
	}),
	Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e, t) {
		var n = this.length;
		if (!n) return - 1;
		var r = t || n;
		r < 0 && (r += n);
		for (r = Math.min(r, n - 1); r >= 0; r--) if (r in this && e === this[r]) return r;
		return - 1
	}),
	Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
		return e.__proto__ || e.constructor.prototype
	}),
	Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function(t, n) {
		if (typeof t != "object" && typeof t != "function" || t === null) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + t);
		if (!i(t, n)) return e;
		var s, o, l;
		s = {
			enumerable: !0,
			configurable: !0
		};
		if (f) {
			var c = t.__proto__;
			t.__proto__ = r,
			o = u(t, n),
			l = a(t, n),
			t.__proto__ = c;
			if (o || l) return o && (s.get = o),
			l && (s.set = l),
			s
		}
		return s.value = t[n],
		s
	}),
	Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
		return Object.keys(e)
	}),
	Object.create || (Object.create = function(e, t) {
		var n;
		if (e === null) n = {
			__proto__: null
		};
		else {
			if (typeof e != "object") throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
			n = function() {},
			n.prototype = e,
			n = new n,
			n.__proto__ = e
		}
		return typeof t != "undefined" && Object.defineProperties(n, t),
		n
	}),
	Object.defineProperty || (Object.defineProperty = function(e, t, n) {
		if (typeof e != "object" && typeof e != "function") throw new TypeError("Object.defineProperty called on non-object: " + e);
		if (typeof n != "object" || n === null) throw new TypeError("Property description must be an object: " + n);
		if (i(n, "value")) f && (u(e, t) || a(e, t)) && (e.__proto__ = r, delete e[t]),
		e[t] = n.value;
		else {
			if (!f) throw new TypeError("getters & setters can not be defined on this javascript engine");
			i(n, "get") && s(e, t, n.get),
			i(n, "set") && o(e, t, n.set)
		}
		return e
	}),
	Object.defineProperties || (Object.defineProperties = function(e, t) {
		for (var n in t) i(t, n) && Object.defineProperty(e, n, t[n]);
		return e
	}),
	Object.seal || (Object.seal = function(e) {
		return e
	}),
	Object.freeze || (Object.freeze = function(e) {
		return e
	});
	try {
		Object.freeze(function() {})
	} catch(l) {
		Object.freeze = function(e) {
			return function(t) {
				return typeof t == "function" ? t: e(t)
			}
		} (Object.freeze)
	}
	Object.preventExtensions || (Object.preventExtensions = function(e) {
		return e
	}),
	Object.isSealed || (Object.isSealed = function() {
		return ! 1
	}),
	Object.isFrozen || (Object.isFrozen = function() {
		return ! 1
	}),
	Object.isExtensible || (Object.isExtensible = function() {
		return ! 0
	});
	if (!Object.keys) {
		var c = !0,
		h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
		p = h.length,
		d;
		for (d in {
			toString: null
		}) c = !1;
		Object.keys = function g(e) {
			if (typeof e != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");
			var g = [],
			t;
			for (t in e) i(e, t) && g.push(t);
			if (c) for (t = 0; t < p; t++) {
				var n = h[t];
				i(e, n) && g.push(n)
			}
			return g
		}
	}
	Date.prototype.toISOString || (Date.prototype.toISOString = function() {
		return this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1) + "-" + this.getUTCDate() + "T" + this.getUTCHours() + ":" + this.getUTCMinutes() + ":" + this.getUTCSeconds() + "Z"
	}),
	Date.now || (Date.now = function() {
		return (new Date).getTime()
	}),
	Date.prototype.toJSON || (Date.prototype.toJSON = function() {
		if (typeof this.toISOString != "function") throw new TypeError;
		return this.toISOString()
	}),
	isNaN(Date.parse("T00:00")) && (Date = function(t) {
		var n = function(e, r, i, s, o, u, a) {
			var f = arguments.length;
			return this instanceof t ? (f = f === 1 && String(e) === e ? new t(n.parse(e)) : f >= 7 ? new t(e, r, i, s, o, u, a) : f >= 6 ? new t(e, r, i, s, o, u) : f >= 5 ? new t(e, r, i, s, o) : f >= 4 ? new t(e, r, i, s) : f >= 3 ? new t(e, r, i) : f >= 2 ? new t(e, r) : f >= 1 ? new t(e) : new t, f.constructor = n, f) : t.apply(this, arguments)
		},
		r = RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$"),
		i;
		for (i in t) n[i] = t[i];
		return n.now = t.now,
		n.UTC = t.UTC,
		n.prototype = t.prototype,
		n.prototype.constructor = n,
		n.parse = function(n) {
			var i = r.exec(n);
			if (i) {
				i.shift();
				for (var s = i[0] === e, o = 0; o < 10; o++) o !== 7 && (i[o] = +(i[o] || (o < 3 ? 1 : 0)), o === 1 && i[o]--);
				return s ? ((i[3] * 60 + i[4]) * 60 + i[5]) * 1e3 + i[6] : (s = (i[8] * 60 + i[9]) * 6e4, i[6] === "-" && (s = -s), t.UTC.apply(this, i.slice(0, 7)) + s)
			}
			return t.parse.apply(this, arguments)
		},
		n
	} (Date));
	if (!String.prototype.trim) {
		var v = /^\s\s*/,
		m = /\s\s*$/;
		String.prototype.trim = function() {
			return String(this).replace(v, "").replace(m, "")
		}
	}
}),
typeof document != "undefined" && !("classList" in document.createElement("a")) &&
function(e) {
	var t = "classList",
	n = "prototype",
	r = (e.HTMLElement || e.Element)[n],
	i = Object,
	s = String[n].trim ||
	function() {
		return this.replace(/^\s+|\s+$/g, "")
	},
	o = Array[n].indexOf ||
	function(e) {
		var t = 0,
		n = this.length;
		for (; t < n; t++) if (t in this && this[t] === e) return t;
		return - 1
	},
	u = function(e, t) {
		this.name = e,
		this.code = DOMException[e],
		this.message = t
	},
	a = function(e, t) {
		if (t === "") throw new u("SYNTAX_ERR", "An invalid or illegal string was specified");
		if (/\s/.test(t)) throw new u("INVALID_CHARACTER_ERR", "String contains an invalid character");
		return o.call(e, t)
	},
	f = function(e) {
		var t = s.call(e.className),
		n = t ? t.split(/\s+/) : [],
		r = 0,
		i = n.length;
		for (; r < i; r++) this.push(n[r]);
		this._updateClassName = function() {
			e.className = this.toString()
		}
	},
	l = f[n] = [],
	c = function() {
		return new f(this)
	};
	u[n] = Error[n],
	l.item = function(e) {
		return this[e] || null
	},
	l.contains = function(e) {
		return e += "",
		a(this, e) !== -1
	},
	l.add = function(e) {
		e += "",
		a(this, e) === -1 && (this.push(e), this._updateClassName())
	},
	l.remove = function(e) {
		e += "";
		var t = a(this, e);
		t !== -1 && (this.splice(t, 1), this._updateClassName())
	},
	l.toggle = function(e) {
		e += "",
		a(this, e) === -1 ? this.add(e) : this.remove(e)
	},
	l.toString = function() {
		return this.join(" ")
	};
	if (i.defineProperty) {
		var h = {
			get: c,
			enumerable: !0,
			configurable: !0
		};
		try {
			i.defineProperty(r, t, h)
		} catch(p) {
			p.number === -2146823252 && (h.enumerable = !1, i.defineProperty(r, t, h))
		}
	} else i[n].__defineGetter__ && r.__defineGetter__(t, c)
} (self),
function(e) {
	function t() {
		d || (d = !0, a(v,
		function(e) {
			c(e)
		}))
	}
	function n(t, n) {
		var r = e.createElement("script");
		r.type = "text/" + (t.type || "javascript"),
		r.src = t.src || t,
		r.async = !1,
		r.onreadystatechange = r.onload = function() {
			var e = r.readyState; ! n.done && (!e || /loaded|complete/.test(e)) && (n.done = !0, n())
		},
		(e.body || h).appendChild(r)
	}
	function r(e, t) {
		if (e.state == N) return t && t();
		if (e.state == T) return E.ready(e.name, t);
		if (e.state == x) return e.onpreload.push(function() {
			r(e, t)
		});
		e.state = T,
		n(e.url,
		function() {
			e.state = N,
			t && t(),
			a(g[e.name],
			function(e) {
				c(e)
			}),
			o() && d && a(g.ALL,
			function(e) {
				c(e)
			})
		})
	}
	function i(e, t) {
		e.state === undefined && (e.state = x, e.onpreload = [], n({
			src: e.url,
			type: "cache"
		},
		function() {
			s(e)
		}))
	}
	function s(e) {
		e.state = S,
		a(e.onpreload,
		function(e) {
			e.call()
		})
	}
	function o(e) {
		e = e || y;
		var t;
		for (var n in e) {
			if (e.hasOwnProperty(n) && e[n].state != N) return ! 1;
			t = !0
		}
		return t
	}
	function u(e) {
		return Object.prototype.toString.call(e) == "[object Function]"
	}
	function a(e, t) {
		if ( !! e) {
			typeof e == "object" && (e = [].slice.call(e));
			for (var n = 0; n < e.length; n++) t.call(e, e[n], n)
		}
	}
	function f(e) {
		var t;
		if (typeof e == "object") for (var n in e) e[n] && (t = {
			name: n,
			url: e[n]
		});
		else t = {
			name: l(e),
			url: e
		};
		var r = y[t.name];
		return r && r.url === t.url ? r: (y[t.name] = t, t)
	}
	function l(e) {
		var t = e.split("/"),
		n = t[t.length - 1],
		r = n.indexOf("?");
		return r != -1 ? n.substring(0, r) : n
	}
	function c(e) {
		e._done || (e(), e._done = 1)
	}
	var h = e.documentElement,
	p, d, v = [],
	m = [],
	g = {},
	y = {},
	b = e.createElement("script").async === !0 || "MozAppearance" in e.documentElement.style || window.opera,
	w = window.head_conf && head_conf.head || "head",
	E = window[w] = window[w] ||
	function() {
		E.ready.apply(null, arguments)
	},
	S = 1,
	x = 2,
	T = 3,
	N = 4;
	b ? E.js = function() {
		var e = arguments,
		t = e[e.length - 1],
		n = {};
		return u(t) || (t = null),
		a(e,
		function(i, s) {
			i != t && (i = f(i), n[i.name] = i, r(i, t && s == e.length - 2 ?
			function() {
				o(n) && c(t)
			}: null))
		}),
		E
	}: E.js = function() {
		var e = arguments,
		t = [].slice.call(e, 1),
		n = t[0];
		return p ? (n ? (a(t,
		function(e) {
			u(e) || i(f(e))
		}), r(f(e[0]), u(n) ? n: function() {
			E.js.apply(null, t)
		})) : r(f(e[0])), E) : (m.push(function() {
			E.js.apply(null, e)
		}), E)
	},
	E.ready = function(t, n) {
		if (t == e) return d ? c(n) : v.push(n),
		E;
		u(t) && (n = t, t = "ALL");
		if (typeof t != "string" || !u(n)) return E;
		var r = y[t];
		if (r && r.state == N || t == "ALL" && o() && d) return c(n),
		E;
		var i = g[t];
		return i ? i.push(n) : i = g[t] = [n],
		E
	},
	E.ready(e,
	function() {
		o() && a(g.ALL,
		function(e) {
			c(e)
		}),
		E.feature && E.feature("domloaded", !0)
	});
	if (window.addEventListener) e.addEventListener("DOMContentLoaded", t, !1),
	window.addEventListener("load", t, !1);
	else if (window.attachEvent) {
		e.attachEvent("onreadystatechange",
		function() {
			e.readyState === "complete" && t()
		});
		var C = 1;
		try {
			C = window.frameElement
		} catch(k) {} ! C && h.doScroll &&
		function() {
			try {
				h.doScroll("left"),
				t()
			} catch(e) {
				setTimeout(arguments.callee, 1);
				return
			}
		} (),
		window.attachEvent("onload", t)
	} ! e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", handler = function() {
		e.removeEventListener("DOMContentLoaded", handler, !1),
		e.readyState = "complete"
	},
	!1)),
	setTimeout(function() {
		p = !0,
		a(m,
		function(e) {
			e()
		})
	},
	300)
} (document),
function(e) {
	function n(e, t, n, r, i) {
		this._listener = t,
		this._isOnce = n,
		this.context = r,
		this._signal = e,
		this._priority = i || 0
	}
	var t = {
		VERSION: "0.6.1"
	};
	n.prototype = {
		active: !0,
		execute: function(e) {
			var t;
			return this.active && (t = this._listener.apply(this.context, e), this._isOnce && this.detach()),
			t
		},
		detach: function() {
			return this._signal.remove(this._listener)
		},
		getListener: function() {
			return this._listener
		},
		dispose: function() {
			this.detach(),
			this._destroy()
		},
		_destroy: function() {
			delete this._signal,
			delete this._isOnce,
			delete this._listener,
			delete this.context
		},
		isOnce: function() {
			return this._isOnce
		},
		toString: function() {
			return "[SignalBinding isOnce: " + this._isOnce + ", active: " + this.active + "]"
		}
	},
	t.Signal = function() {
		this._bindings = []
	},
	t.Signal.prototype = {
		_shouldPropagate: !0,
		active: !0,
		_registerListener: function(e, t, r, i) {
			if (typeof e != "function") throw new Error("listener is a required param of add() and addOnce() and should be a Function.");
			var s = this._indexOfListener(e),
			o;
			if (s !== -1) {
				o = this._bindings[s];
				if (o.isOnce() !== t) throw new Error("You cannot add" + (t ? "": "Once") + "() then add" + (t ? "Once": "") + "() the same listener without removing the relationship first.")
			} else o = new n(this, e, t, r, i),
			this._addBinding(o);
			return o
		},
		_addBinding: function(e) {
			var t = this._bindings.length;
			do--t;
			while (this._bindings[t] && e._priority <= this._bindings[t]._priority);
			this._bindings.splice(t + 1, 0, e)
		},
		_indexOfListener: function(e) {
			var t = this._bindings.length;
			while (t--) if (this._bindings[t]._listener === e) return t;
			return - 1
		},
		add: function(e, t, n) {
			return this._registerListener(e, !1, t, n)
		},
		addOnce: function(e, t, n) {
			return this._registerListener(e, !0, t, n)
		},
		remove: function(e) {
			if (typeof e != "function") throw new Error("listener is a required param of remove() and should be a Function.");
			var t = this._indexOfListener(e);
			return t !== -1 && (this._bindings[t]._destroy(), this._bindings.splice(t, 1)),
			e
		},
		removeAll: function() {
			var e = this._bindings.length;
			while (e--) this._bindings[e]._destroy();
			this._bindings.length = 0
		},
		getNumListeners: function() {
			return this._bindings.length
		},
		halt: function() {
			this._shouldPropagate = !1
		},
		dispatch: function(e) {
			if (!this.active) return;
			var t = Array.prototype.slice.call(arguments),
			n = this._bindings.slice(),
			r = this._bindings.length;
			this._shouldPropagate = !0;
			do r--;
			while (n[r] && this._shouldPropagate && n[r].execute(t) !== !1)
		},
		dispose: function() {
			this.removeAll(),
			delete this._bindings
		},
		toString: function() {
			return "[Signal active: " + this.active + " numListeners: " + this.getNumListeners() + "]"
		}
	},
	e.signals = t
} (window || global || this);
var JSON;
JSON || (JSON = {}),
function() {
	"use strict";
	function f(e) {
		return e < 10 ? "0" + e: e
	}
	function quote(e) {
		return escapable.lastIndex = 0,
		escapable.test(e) ? '"' + e.replace(escapable,
		function(e) {
			var t = meta[e];
			return typeof t == "string" ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
		}) + '"': '"' + e + '"'
	}
	function str(e, t) {
		var n, r, i, s, o = gap,
		u, a = t[e];
		a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)),
		typeof rep == "function" && (a = rep.call(t, e, a));
		switch (typeof a) {
		case "string":
			return quote(a);
		case "number":
			return isFinite(a) ? String(a) : "null";
		case "boolean":
		case "null":
			return String(a);
		case "object":
			if (!a) return "null";
			gap += indent,
			u = [];
			if (Object.prototype.toString.apply(a) === "[object Array]") {
				s = a.length;
				for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
				return i = u.length === 0 ? "[]": gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]": "[" + u.join(",") + "]",
				gap = o,
				i
			}
			if (rep && typeof rep == "object") {
				s = rep.length;
				for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i))
			} else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i));
			return i = u.length === 0 ? "{}": gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}": "{" + u.join(",") + "}",
			gap = o,
			i
		}
	}
	typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
		return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
	},
	String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
		return this.valueOf()
	});
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	gap, indent, meta = {
		"\b": "\\b",
		"	": "\\t",
		"\n": "\\n",
		"\f": "\\f",
		"\r": "\\r",
		'"': '\\"',
		"\\": "\\\\"
	},
	rep;
	typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
		var r;
		gap = "",
		indent = "";
		if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
		else typeof n == "string" && (indent = n);
		rep = t;
		if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
			"": e
		});
		throw new Error("JSON.stringify")
	}),
	typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
		function walk(e, t) {
			var n, r, i = e[t];
			if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r: delete i[n]);
			return reviver.call(e, t, i)
		}
		var j;
		text = String(text),
		cx.lastIndex = 0,
		cx.test(text) && (text = text.replace(cx,
		function(e) {
			return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
		}));
		if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
		typeof reviver == "function" ? walk({
			"": j
		},
		"") : j;
		throw new SyntaxError("JSON.parse")
	})
} (),
function(e) {
	function t(e, t, n, r) {
		var i = n.lang();
		return i[e].call ? i[e](n, r) : i[e][t]
	}
	function n(e, t) {
		return function(n) {
			return u(e.call(this, n), t)
		}
	}
	function r(e) {
		return function(t) {
			var n = e.call(this, t);
			return n + this.lang().ordinal(n)
		}
	}
	function i(e, t, n) {
		this._d = e,
		this._isUTC = !!t,
		this._a = e._a || null,
		this._lang = n || !1
	}
	function s(e) {
		var t = this._data = {},
		n = e.years || e.y || 0,
		r = e.months || e.M || 0,
		i = e.weeks || e.w || 0,
		s = e.days || e.d || 0,
		u = e.hours || e.h || 0,
		a = e.minutes || e.m || 0,
		f = e.seconds || e.s || 0,
		l = e.milliseconds || e.ms || 0;
		this._milliseconds = l + f * 1e3 + a * 6e4 + u * 36e5,
		this._days = s + i * 7,
		this._months = r + n * 12,
		t.milliseconds = l % 1e3,
		f += o(l / 1e3),
		t.seconds = f % 60,
		a += o(f / 60),
		t.minutes = a % 60,
		u += o(a / 60),
		t.hours = u % 24,
		s += o(u / 24),
		s += i * 7,
		t.days = s % 30,
		r += o(s / 30),
		t.months = r % 12,
		n += o(r / 12),
		t.years = n,
		this._lang = !1
	}
	function o(e) {
		return e < 0 ? Math.ceil(e) : Math.floor(e)
	}
	function u(e, t) {
		var n = e + "";
		while (n.length < t) n = "0" + n;
		return n
	}
	function a(e, t, n) {
		var r = t._milliseconds,
		i = t._days,
		s = t._months,
		o;
		r && e._d.setTime( + e + r * n),
		i && e.date(e.date() + i * n),
		s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
	}
	function f(e) {
		return Object.prototype.toString.call(e) === "[object Array]"
	}
	function l(e, t) {
		var n = Math.min(e.length, t.length),
		r = Math.abs(e.length - t.length),
		i = 0,
		s;
		for (s = 0; s < n; s++)~~e[s] !== ~~t[s] && i++;
		return i + r
	}
	function c(e, t, n, r) {
		var i, s, o = [];
		for (i = 0; i < 7; i++) o[i] = e[i] = e[i] == null ? i === 2 ? 1 : 0 : e[i];
		return e[7] = o[7] = t,
		e[8] != null && (o[8] = e[8]),
		e[3] += n || 0,
		e[4] += r || 0,
		s = new Date(0),
		t ? (s.setUTCFullYear(e[0], e[1], e[2]), s.setUTCHours(e[3], e[4], e[5], e[6])) : (s.setFullYear(e[0], e[1], e[2]), s.setHours(e[3], e[4], e[5], e[6])),
		s._a = o,
		s
	}
	function h(e, t) {
		var n, r, i = []; ! t && D && (t = require("./lang/" + e));
		for (n = 0; n < P.length; n++) t[P[n]] = t[P[n]] || M.en[P[n]];
		for (n = 0; n < 12; n++) r = k([2e3, n]),
		i[n] = new RegExp("^" + (t.months[n] || t.months(r, "")) + "|^" + (t.monthsShort[n] || t.monthsShort(r, "")).replace(".", ""), "i");
		return t.monthsParse = t.monthsParse || i,
		M[e] = t,
		t
	}
	function p(e) {
		var t = typeof e == "string" && e || e && e._lang || null;
		return t ? M[t] || h(t) : k
	}
	function d(e) {
		return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
	}
	function v(e) {
		var t = e.match(B),
		n,
		r;
		for (n = 0, r = t.length; n < r; n++) tt[t[n]] ? t[n] = tt[t[n]] : t[n] = d(t[n]);
		return function(i) {
			var s = "";
			for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
			return s
		}
	}
	function m(e, t) {
		function n(t) {
			return e.lang().longDateFormat[t] || t
		}
		var r = 5;
		while (r--&&j.test(t)) t = t.replace(j, n);
		return Y[t] || (Y[t] = v(t)),
		Y[t](e)
	}
	function g(e) {
		switch (e) {
		case "DDDD":
			return R;
		case "YYYY":
			return U;
		case "S":
		case "SS":
		case "SSS":
		case "DDD":
			return q;
		case "MMM":
		case "MMMM":
		case "dd":
		case "ddd":
		case "dddd":
		case "a":
		case "A":
			return z;
		case "Z":
		case "ZZ":
			return W;
		case "T":
			return X;
		case "MM":
		case "DD":
		case "YY":
		case "HH":
		case "hh":
		case "mm":
		case "ss":
		case "M":
		case "D":
		case "d":
		case "H":
		case "h":
		case "m":
		case "s":
			return I;
		default:
			return new RegExp(e.replace("\\", ""))
		}
	}
	function y(e, t, n, r) {
		var i, s;
		switch (e) {
		case "M":
		case "MM":
			n[1] = t == null ? 0 : ~~t - 1;
			break;
		case "MMM":
		case "MMMM":
			for (i = 0; i < 12; i++) if (p().monthsParse[i].test(t)) {
				n[1] = i,
				s = !0;
				break
			}
			s || (n[8] = !1);
			break;
		case "D":
		case "DD":
		case "DDD":
		case "DDDD":
			t != null && (n[2] = ~~t);
			break;
		case "YY":
			n[0] = ~~t + (~~t > 70 ? 1900 : 2e3);
			break;
		case "YYYY":
			n[0] = ~~Math.abs(t);
			break;
		case "a":
		case "A":
			r.isPm = (t + "").toLowerCase() === "pm";
			break;
		case "H":
		case "HH":
		case "h":
		case "hh":
			n[3] = ~~t;
			break;
		case "m":
		case "mm":
			n[4] = ~~t;
			break;
		case "s":
		case "ss":
			n[5] = ~~t;
			break;
		case "S":
		case "SS":
		case "SSS":
			n[6] = ~~ (("0." + t) * 1e3);
			break;
		case "Z":
		case "ZZ":
			r.isUTC = !0,
			i = (t + "").match(K),
			i && i[1] && (r.tzh = ~~i[1]),
			i && i[2] && (r.tzm = ~~i[2]),
			i && i[0] === "+" && (r.tzh = -r.tzh, r.tzm = -r.tzm)
		}
		t == null && (n[8] = !1)
	}
	function b(e, t) {
		var n = [0, 0, 1, 0, 0, 0, 0],
		r = {
			tzh: 0,
			tzm: 0
		},
		i = t.match(B),
		s,
		o;
		for (s = 0; s < i.length; s++) o = (g(i[s]).exec(e) || [])[0],
		o && (e = e.slice(e.indexOf(o) + o.length)),
		tt[i[s]] && y(i[s], o, n, r);
		return r.isPm && n[3] < 12 && (n[3] += 12),
		r.isPm === !1 && n[3] === 12 && (n[3] = 0),
		c(n, r.isUTC, r.tzh, r.tzm)
	}
	function w(e, t) {
		var n, r = e.match(F) || [],
		s,
		o = 99,
		u,
		a,
		f;
		for (u = 0; u < t.length; u++) a = b(e, t[u]),
		s = m(new i(a), t[u]).match(F) || [],
		f = l(r, s),
		f < o && (o = f, n = a);
		return n
	}
	function E(e) {
		var t = "YYYY-MM-DDT",
		n;
		if (V.exec(e)) {
			for (n = 0; n < 4; n++) if (J[n][1].exec(e)) {
				t += J[n][0];
				break
			}
			return W.exec(e) ? b(e, t + " Z") : b(e, t)
		}
		return new Date(e)
	}
	function S(e, t, n, r, i) {
		var s = i.relativeTime[e];
		return typeof s == "function" ? s(t || 1, !!n, e, r) : s.replace(/%d/i, t || 1)
	}
	function x(e, t, n) {
		var r = A(Math.abs(e) / 1e3),
		i = A(r / 60),
		s = A(i / 60),
		o = A(s / 24),
		u = A(o / 365),
		a = r < 45 && ["s", r] || i === 1 && ["m"] || i < 45 && ["mm", i] || s === 1 && ["h"] || s < 22 && ["hh", s] || o === 1 && ["d"] || o <= 25 && ["dd", o] || o <= 45 && ["M"] || o < 345 && ["MM", A(o / 30)] || u === 1 && ["y"] || ["yy", u];
		return a[2] = t,
		a[3] = e > 0,
		a[4] = n,
		S.apply({},
		a)
	}
	function T(e, t) {
		k.fn[e] = function(e) {
			var n = this._isUTC ? "UTC": "";
			return e != null ? (this._d["set" + n + t](e), this) : this._d["get" + n + t]()
		}
	}
	function N(e) {
		k.duration.fn[e] = function() {
			return this._data[e]
		}
	}
	function C(e, t) {
		k.duration.fn["as" + e] = function() {
			return + this / t
		}
	}
	var k, L = "1.7.2",
	A = Math.round,
	O, M = {},
	_ = "en",
	D = typeof module != "undefined" && module.exports,
	P = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
	H = /^\/?Date\((\-?\d+)/i,
	B = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
	j = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,
	F = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
	I = /\d\d?/,
	q = /\d{1,3}/,
	R = /\d{3}/,
	U = /\d{1,4}/,
	z = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
	W = /Z|[\+\-]\d\d:?\d\d/i,
	X = /T/i,
	V = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
	$ = "YYYY-MM-DDTHH:mm:ssZ",
	J = [["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /T\d\d:\d\d:\d\d/], ["HH:mm", /T\d\d:\d\d/], ["HH", /T\d\d/]],
	K = /([\+\-]|\d\d)/gi,
	Q = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
	G = {
		Milliseconds: 1,
		Seconds: 1e3,
		Minutes: 6e4,
		Hours: 36e5,
		Days: 864e5,
		Months: 2592e6,
		Years: 31536e6
	},
	Y = {},
	Z = "DDD w M D d".split(" "),
	et = "M D H h m s w".split(" "),
	tt = {
		M: function() {
			return this.month() + 1
		},
		MMM: function(e) {
			return t("monthsShort", this.month(), this, e)
		},
		MMMM: function(e) {
			return t("months", this.month(), this, e)
		},
		D: function() {
			return this.date()
		},
		DDD: function() {
			var e = new Date(this.year(), this.month(), this.date()),
			t = new Date(this.year(), 0, 1);
			return~~ ((e - t) / 864e5 + 1.5)
		},
		d: function() {
			return this.day()
		},
		dd: function(e) {
			return t("weekdaysMin", this.day(), this, e)
		},
		ddd: function(e) {
			return t("weekdaysShort", this.day(), this, e)
		},
		dddd: function(e) {
			return t("weekdays", this.day(), this, e)
		},
		w: function() {
			var e = new Date(this.year(), this.month(), this.date() - this.day() + 5),
			t = new Date(e.getFullYear(), 0, 4);
			return~~ ((e - t) / 864e5 / 7 + 1.5)
		},
		YY: function() {
			return u(this.year() % 100, 2)
		},
		YYYY: function() {
			return u(this.year(), 4)
		},
		a: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !0)
		},
		A: function() {
			return this.lang().meridiem(this.hours(), this.minutes(), !1)
		},
		H: function() {
			return this.hours()
		},
		h: function() {
			return this.hours() % 12 || 12
		},
		m: function() {
			return this.minutes()
		},
		s: function() {
			return this.seconds()
		},
		S: function() {
			return~~ (this.milliseconds() / 100)
		},
		SS: function() {
			return u(~~ (this.milliseconds() / 10), 2)
		},
		SSS: function() {
			return u(this.milliseconds(), 3)
		},
		Z: function() {
			var e = -this.zone(),
			t = "+";
			return e < 0 && (e = -e, t = "-"),
			t + u(~~ (e / 60), 2) + ":" + u(~~e % 60, 2)
		},
		ZZ: function() {
			var e = -this.zone(),
			t = "+";
			return e < 0 && (e = -e, t = "-"),
			t + u(~~ (10 * e / 6), 4)
		}
	};
	while (Z.length) O = Z.pop(),
	tt[O + "o"] = r(tt[O]);
	while (et.length) O = et.pop(),
	tt[O + O] = n(tt[O], 2);
	tt.DDDD = n(tt.DDD, 3),
	k = function(t, n) {
		if (t === null || t === "") return null;
		var r, s;
		return k.isMoment(t) ? new i(new Date( + t._d), t._isUTC, t._lang) : (n ? f(n) ? r = w(t, n) : r = b(t, n) : (s = H.exec(t), r = t === e ? new Date: s ? new Date( + s[1]) : t instanceof Date ? t: f(t) ? c(t) : typeof t == "string" ? E(t) : new Date(t)), new i(r))
	},
	k.utc = function(e, t) {
		return f(e) ? new i(c(e, !0), !0) : (typeof e == "string" && !W.exec(e) && (e += " +0000", t && (t += " Z")), k(e, t).utc())
	},
	k.unix = function(e) {
		return k(e * 1e3)
	},
	k.duration = function(e, t) {
		var n = k.isDuration(e),
		r = typeof e == "number",
		i = n ? e._data: r ? {}: e,
		o;
		return r && (t ? i[t] = e: i.milliseconds = e),
		o = new s(i),
		n && (o._lang = e._lang),
		o
	},
	k.humanizeDuration = function(e, t, n) {
		return k.duration(e, t === !0 ? null: t).humanize(t === !0 ? !0 : n)
	},
	k.version = L,
	k.defaultFormat = $,
	k.lang = function(e, t) {
		var n;
		if (!e) return _; (t || !M[e]) && h(e, t);
		if (M[e]) {
			for (n = 0; n < P.length; n++) k[P[n]] = M[e][P[n]];
			k.monthsParse = M[e].monthsParse,
			_ = e
		}
	},
	k.langData = p,
	k.isMoment = function(e) {
		return e instanceof i
	},
	k.isDuration = function(e) {
		return e instanceof s
	},
	k.lang("en", {
		months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		longDateFormat: {
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D YYYY",
			LLL: "MMMM D YYYY LT",
			LLLL: "dddd, MMMM D YYYY LT"
		},
		meridiem: function(e, t, n) {
			return e > 11 ? n ? "pm": "PM": n ? "am": "AM"
		},
		calendar: {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[last] dddd [at] LT",
			sameElse: "L"
		},
		relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		ordinal: function(e) {
			var t = e % 10;
			return~~ (e % 100 / 10) === 1 ? "th": t === 1 ? "st": t === 2 ? "nd": t === 3 ? "rd": "th"
		}
	}),
	k.fn = i.prototype = {
		clone: function() {
			return k(this)
		},
		valueOf: function() {
			return + this._d
		},
		unix: function() {
			return Math.floor( + this._d / 1e3)
		},
		toString: function() {
			return this._d.toString()
		},
		toDate: function() {
			return this._d
		},
		toArray: function() {
			var e = this;
			return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds(), !!this._isUTC]
		},
		isValid: function() {
			return this._a ? this._a[8] != null ? !!this._a[8] : !l(this._a, (this._a[7] ? k.utc(this._a) : k(this._a)).toArray()) : !isNaN(this._d.getTime())
		},
		utc: function() {
			return this._isUTC = !0,
			this
		},
		local: function() {
			return this._isUTC = !1,
			this
		},
		format: function(e) {
			return m(this, e ? e: k.defaultFormat)
		},
		add: function(e, t) {
			var n = t ? k.duration( + t, e) : k.duration(e);
			return a(this, n, 1),
			this
		},
		subtract: function(e, t) {
			var n = t ? k.duration( + t, e) : k.duration(e);
			return a(this, n, -1),
			this
		},
		diff: function(e, t, n) {
			var r = this._isUTC ? k(e).utc() : k(e).local(),
			i = (this.zone() - r.zone()) * 6e4,
			s = this._d - r._d - i,
			o = this.year() - r.year(),
			u = this.month() - r.month(),
			a = this.date() - r.date(),
			f;
			return t === "months" ? f = o * 12 + u + a / 30 : t === "years" ? f = o + (u + a / 30) / 12 : f = t === "seconds" ? s / 1e3: t === "minutes" ? s / 6e4: t === "hours" ? s / 36e5: t === "days" ? s / 864e5: t === "weeks" ? s / 6048e5: s,
			n ? f: A(f)
		},
		from: function(e, t) {
			return k.duration(this.diff(e)).lang(this._lang).humanize(!t)
		},
		fromNow: function(e) {
			return this.from(k(), e)
		},
		calendar: function() {
			var e = this.diff(k().sod(), "days", !0),
			t = this.lang().calendar,
			n = t.sameElse,
			r = e < -6 ? n: e < -1 ? t.lastWeek: e < 0 ? t.lastDay: e < 1 ? t.sameDay: e < 2 ? t.nextDay: e < 7 ? t.nextWeek: n;
			return this.format(typeof r == "function" ? r.apply(this) : r)
		},
		isLeapYear: function() {
			var e = this.year();
			return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
		},
		isDST: function() {
			return this.zone() < k([this.year()]).zone() || this.zone() < k([this.year(), 5]).zone()
		},
		day: function(e) {
			var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return e == null ? t: this.add({
				d: e - t
			})
		},
		startOf: function(e) {
			switch (e.replace(/s$/, "")) {
			case "year":
				this.month(0);
			case "month":
				this.date(1);
			case "day":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
			}
			return this
		},
		endOf: function(e) {
			return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
		},
		sod: function() {
			return this.clone().startOf("day")
		},
		eod: function() {
			return this.clone().endOf("day")
		},
		zone: function() {
			return this._isUTC ? 0 : this._d.getTimezoneOffset()
		},
		daysInMonth: function() {
			return k.utc([this.year(), this.month() + 1, 0]).date()
		},
		lang: function(t) {
			return t === e ? p(this) : (this._lang = t, this)
		}
	};
	for (O = 0; O < Q.length; O++) T(Q[O].toLowerCase(), Q[O]);
	T("year", "FullYear"),
	k.duration.fn = s.prototype = {
		weeks: function() {
			return o(this.days() / 7)
		},
		valueOf: function() {
			return this._milliseconds + this._days * 864e5 + this._months * 2592e6
		},
		humanize: function(e) {
			var t = +this,
			n = this.lang().relativeTime,
			r = x(t, !e, this.lang()),
			i = t <= 0 ? n.past: n.future;
			return e && (typeof i == "function" ? r = i(r) : r = i.replace(/%s/i, r)),
			r
		},
		lang: k.fn.lang
	};
	for (O in G) G.hasOwnProperty(O) && (C(O, G[O]), N(O.toLowerCase()));
	C("Weeks", 6048e5),
	D && (module.exports = k),
	typeof ender == "undefined" && (this.moment = k),
	typeof define == "function" && define.amd && define("moment", [],
	function() {
		return k
	})
}.call(this),
window.SL = function(e) {
	e = e.split(".");
	var t = SL;
	while (e.length) {
		var n = e.shift();
		t[n] || (t[n] = {}),
		t = t[n]
	}
	return t
},
$(function() {
	function e() {
		$("html").addClass("loaded").toggleClass("touch", SL.util.device.HAS_TOUCH).toggleClass("ua-chrome", /chrome/gi.test(navigator.userAgent)),
		SL.settings.init(),
		typeof SLConfig == "undefined" && (window.SLConfig = {}),
		t(),
		n(),
		r(),
		$(window).on("resize", t)
	}
	function t() {
		$("#container").css("min-height", window.innerHeight)
	}
	function n() {
		document.querySelector(".fb-like") && ($("body").append('<div id="fb-root"></div>'),
		function(e, t, n) {
			var r, i = e.getElementsByTagName(t)[0];
			if (e.getElementById(n)) return;
			r = e.createElement(t),
			r.id = n,
			r.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=178466085544080",
			i.parentNode.insertBefore(r, i)
		} (document, "script", "facebook-jssdk")),
		document.querySelector(".twitter-share-button") &&
		function(e, t, n) {
			var r, i = e.getElementsByTagName(t)[0];
			if (e.getElementById(n)) return;
			r = e.createElement(t),
			r.id = n,
			r.src = "//platform.twitter.com/widgets.js",
			i.parentNode.insertBefore(r, i)
		} (document, "script", "twitter-wjs");
		if (document.querySelector(".g-plusone")) {
			var e = document.createElement("script");
			e.type = "text/javascript",
			e.async = !0,
			e.src = "https://apis.google.com/js/plusone.js";
			var t = document.getElementsByTagName("script")[0];
			t.parentNode.insertBefore(e, t)
		}
	}
	function r() {
		var e = $("html");
		e.hasClass("home index") ? SL.view = new SL.views.home.Index: e.hasClass("users show") ? SL.view = new SL.views.users.Show: e.hasClass("decks show") ? SL.view = new SL.views.decks.Show: e.hasClass("decks edit") ? SL.view = new SL.views.decks.Edit: e.hasClass("decks embed") ? SL.view = new SL.views.decks.Embed: e.hasClass("decks present") ? SL.view = new SL.views.decks.Present: e.hasClass("registrations") && (e.hasClass("edit") || e.hasClass("update")) ? SL.view = new SL.views.devise.Edit: e.hasClass("registrations") || e.hasClass("sessions") || e.hasClass("passwords") ? SL.view = new SL.views.devise.All: e.hasClass("subscriptions new") ? SL.view = new SL.views.subscriptions.New: e.hasClass("subscriptions show") ? SL.view = new SL.views.subscriptions.Show: e.hasClass("subscriptions edit") ? SL.view = new SL.views.subscriptions.New: SL.view = new SL.views.Base
	}
	e()
}),
SL.analytics = {
	track: function(e, t) {
		typeof analytics != "undefined" && analytics.track(e, t)
	},
	trackLink: function(e, t, n) {
		typeof analytics != "undefined" && analytics.trackLink(e, t, n)
	},
	trackForm: function(e, t, n) {
		typeof analytics != "undefined" && analytics.trackForm(e, t, n)
	}
},
SL.config = {
	LOGIN_STATUS_INTERVAL: 6e4,
	UNSAVED_CHANGES_INTERVAL: 1e3,
	AUTOSAVE_INTERVAL: 3e3,
	DECK_DESCRIPTION_MAXLENGTH: 1e3,
	AJAX_UPDATE_USER: "/users.json",
	AJAX_SUBSCRIPTIONS: "/subscriptions",
	AJAX_SUBSCRIPTIONS_STATUS: "/account/details.json",
	AJAX_GET_USER: function(e) {
		return "/api/v1/users/" + e + ".json"
	},
	AJAX_CREATE_DECK: function(e) {
		return "/api/v1/decks.json"
	},
	AJAX_UPDATE_DECK: function(e, t) {
		return "/api/decks/" + t + ".json"
	},
	AJAX_EXPORT_DECK: function(e, t) {
		return "/" + e + "/" + t + "/export"
	},
	AJAX_GET_DECK_VERSIONS: function(e) {
		return "/api/v1/decks/" + e + "/versions.json"
	},
	AJAX_PREVIEW_DECK_VERSION: function(e, t, n) {
		return "/" + e + "/" + t + "/preview?version=" + n
	},
	AJAX_RESTORE_DECK_VERSION: function(e, t) {
		return "/api/v1/decks/" + e + "/versions/" + t + "/restore.json"
	},
	AJAX_CHECK_STATUS: "/api/v1/status.json",
	AJAX_IMAGE_UPLOAD: "/api/v1/media.json",
	SUBSCRIPTIONS_EDIT_URL: "/account/update_billing",
	SUBSCRIPTIONS_NEW_URL: "/account/upgrade",
	STATIC_ASSET_HOST: "/assets/"
},
SL.locale = {
	GENERIC_ERROR: ["Oops, something went wrong", "We ran into an unexpected error", "Something's wong, can you try that again?"],
	DECK_SAVE_SUCCESS: "Saved successfully",
	DECK_SAVE_ERROR: "Failed to save",
	NEW_SLIDE_TITLE: "Title",
	LEAVE_UNSAVED_DECK: "You will lose your unsaved changes.",
	REMOVE_PRO_CONFIRM: "Are you sure you want to downgrade your account?",
	REMOVE_PRO_SUCCESS: "Subscription canceled",
	DECK_RESTORE_CONFIRM: "Are you sure you want to roll back to this version from {#time} ago?",
	DECK_DELETE_CONFIRM: 'Are you sure you want to delete "{#title}"?',
	DECK_DELETE_SUCCESS: "Deck deleted",
	DECK_DELETE_ERROR: "Failed to delete",
	DECK_PUBLISH_WORKING: "Publishing...",
	DECK_PUBLISH_CONFIRM: 'Are you sure you want to make "{#title}" public?',
	DECK_PUBLISH_SUCCESS: "Deck published",
	DECK_PUBLISH_ERROR: "Failed to publish",
	DECK_UNPUBLISH_WORKING: "Unpublishing...",
	DECK_UNPUBLISH_CONFIRM: 'Are you sure you want to make "{#title}" private?',
	DECK_UNPUBLISH_SUCCESS: "Deck unpublished",
	DECK_UNPUBLISH_ERROR: "Failed to unpublish",
	DECK_EDIT_INVALID_TITLE: "Please enter a valid title",
	DECK_EDIT_INVALID_SLUG: "Please enter a valid URL",
	DECKSHARER_URL_TITLE: "Link",
	DECKSHARER_EMBED_TITLE: "Embed",
	DECKSHARER_PRIVATE_URL_NOTICE: "This deck is private but can be shared using the secret link above. To publicly share or embed your deck, please publish it first.",
	FORM_ERROR_REQUIRED: "Required",
	FORM_ERROR_USERNAME_TAKEN: ["That one's already taken :(", "Sorry, that's taken too"],
	BILLING_DETAILS_ERROR: "An error occured while fetching your billing details, please try again.",
	BILLING_DETAILS_NOHISTORY: "You haven't made any payments yet.",
	counter: {},
	get: function(e, t) {
		var n = SL.locale[e];
		typeof n == "object" && n.length && (typeof this.counter[e] == "number" ? this.counter[e] = (this.counter[e] + 1) % n.length: this.counter[e] = 0, n = n[this.counter[e]]);
		if (typeof t == "object") for (var r in t) n = n.replace("{#" + r + "}", t[r]);
		return typeof n == "string" ? n: ""
	}
},
SL.settings = {
	STORAGE_KEY: "slides-settings",
	STORAGE_VERSION: 1,
	EDITOR_AUTO_HIDE: "editorAutoHide",
	EDITOR_AUTO_SAVE: "editorAutoSave",
	init: function() {
		this.settings = {
			version: this.STORAGE_VERSION
		},
		this.settings[this.EDITOR_AUTO_HIDE] = !1,
		this.settings[this.EDITOR_AUTO_SAVE] = !1,
		this.changed = new signals.Signal,
		this.restore()
	},
	setValue: function(e, t) {
		typeof e == "object" ? $.extend(this.settings, e) : this.settings[e] = t,
		this.save(),
		this.changed.dispatch([e])
	},
	getValue: function(e) {
		return this.settings[e]
	},
	restore: function() {
		if (Modernizr.localstorage) {
			var e = localStorage.getItem(this.STORAGE_KEY);
			if (e) {
				var t = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
				t && t.version === this.STORAGE_VERSION ? (this.settings = t, this.changed.dispatch()) : this.save()
			}
		}
	},
	save: function() {
		Modernizr.localstorage && localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.settings))
	}
},
SL.util = {
	getQuery: function() {
		var e = {};
		return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,
		function(t) {
			e[t.split("=").shift()] = t.split("=").pop()
		}),
		e
	},
	isIE: function() {
		return navigator.userAgent.match(/MSIE\s[0-9]/gi)
	},
	getStaticAsset: function(e) {
		return e = e || "",
		e = e.replace(/^\//gi, ""),
		SL.config.STATIC_ASSET_HOST + e
	},
	toArray: function(e) {
		var t = [];
		for (var n = 0,
		r = e.length; n < r; n++) t.push(e[n]);
		return t
	},
	skipCSSTransitions: function(e) {
		e = e ? $(e) : $("html"),
		e.addClass("transitions-disabled"),
		setTimeout(function() {
			e.removeClass("transitions-disabled")
		},
		1)
	},
	setupReveal: function(e) {
		if (typeof Reveal != "undefined") {
			var t = {
				controls: !0,
				progress: !0,
				history: !1,
				mouseWheel: !1,
				margin: .05,
				rollingLinks: SLConfig.deck.rolling_links,
				center: SLConfig.deck.center,
				loop: SLConfig.deck.should_loop,
				rtl: SLConfig.deck.rtl,
				transition: SLConfig.deck.transition || "default",
				dependencies: [{
					src: "/static/javascript/marked.js",
					condition: function() {
						return !! document.querySelector(".reveal [data-markdown]")
					}
				},
				{
					src: "/static/javascript/markdown.js",
					condition: function() {
						return !! document.querySelector(".reveal [data-markdown]")
					}
				},
				{
					src: "/static/javascript/highlight.js",
					async: !0,
					callback: function() {
						hljs.initHighlightingOnLoad()
					}
				},
				{
					src: "/static/javascript/notes.js",
					async: !0,
					condition: function() {
						return !! document.body.classList
					}
				}]
			};
			$.extend(t, e),
			Reveal.initialize(t),
			e.openLinksInTabs && this.openLinksInTabs($(".reveal .slides"))
		}
	},
	openLinksInTabs: function(e) {
		e && e.find("a").each(function() {
			var e = $(this),
			t = e.attr("href");
			/^#/gi.test(t) === !1 && (/http|www/gi.test(t) ? e.attr("target", "_blank") : e.attr("target", "_top"))
		})
	}
},
SL.util.user = {
	isLoggedIn: function() {
		return typeof SLConfig == "object" && typeof SLConfig.current_user == "object"
	},
	isPro: function() {
		return SL.util.user.isLoggedIn() ? SLConfig.current_user.pro: null
	}
},
SL.util.device = {
	HAS_TOUCH: "ontouchstart" in window,
	IS_PHONE: /iphone|ipod|android/gi.test(navigator.userAgent),
	IS_TABLET: /ipad/gi.test(navigator.userAgent),
	isOpera: function() {
		return !! window.opera
	},
	supportedByEditor: function() {
		return Modernizr.history && Modernizr.csstransforms && !SL.util.device.isOpera()
	}
},
SL.util.trig = {
	distanceBetween: function(e, t) {
		var n = e.x - t.x,
		r = e.y - t.y;
		return Math.sqrt(n * n + r * r)
	}
},
SL.util.string = {
	slug: function(e) {
		return typeof e == "string" ? SL.util.string.trim(e).toLowerCase().replace(/\s/g, "-").replace(/[^\w-]/g, "") : ""
	},
	trim: function(e) {
		return SL.util.string.trimRight(SL.util.string.trimLeft(e))
	},
	trimLeft: function(e) {
		return typeof e == "string" ? e.replace(/^\s+/, "") : ""
	},
	trimRight: function(e) {
		return typeof e == "string" ? e.replace(/\s+$/, "") : ""
	},
	linkify: function(e) {
		return e && (e = e.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
		function(e) {
			var t = e;
			return t.match("^https?://") || (t = "http://" + t),
			'<a href="' + t + '">' + e + "</a>"
		})),
		e
	}
},
SL.util.validate = {
	username: function(e) {
		e = e || "";
		var t = [];
		return e.length < 2 && t.push("At least 2 characters"),
		/\s/gi.test(e) && t.push("No spaces please"),
		/^[\w-_]+$/gi.test(e) || t.push("Can only contain: A-Z, 0-9, - and _"),
		t
	},
	password: function(e) {
		e = e || "";
		var t = [];
		return e.length < 6 && t.push("At least 6 characters"),
		t
	},
	email: function(e) {
		e = e || "";
		var t = [];
		return /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/gi.test(e) || t.push("Please enter a valid email"),
		t
	},
	twitterhandle: function(e) {
		e = e || "";
		var t = [];
		return e.length > 15 && t.push("15 characters max"),
		/\s/gi.test(e) && t.push("No spaces please"),
		/^[\w-_]+$/gi.test(e) || t.push("Can only contain: A-Z, 0-9 and _"),
		t
	},
	url: function(e) {
		e = e || "";
		var t = [];
		return e.length < 4 && t.push("Please enter a valid URL"),
		/\s/gi.test(e) && t.push("No spaces please"),
		t
	},
	decktitle: function(e) {
		e = e || "";
		var t = [];
		return e.length === 0 && t.push("Can not be empty"),
		t
	},
	deckslug: function(e) {
		e = e || "";
		var t = [];
		return e.length === 0 && t.push("Can not be empty"),
		t
	}
},
SL.util.html = {
	indent: function(e) {
		var t = "",
		n = /(>)(<)(\/*)/g,
		r = 0,
		i = !1;
		return e = e.replace(/>(\r\n)+</g, "><"),
		e = e.replace(n, "$1\r\n$2$3"),
		jQuery.each(e.split("\r\n"),
		function(e, n) {
			n.match(/<pre>/) ? i = !0 : n.match(/<\/pre>/) && (i = !1);
			if (i) t += n;
			else {
				var s = 0;
				n.match(/.+<\/\w[^>]*>$/) ? s = 0 : n.match(/^<\/\w/) ? r !== 0 && (r -= 1) : n.match(/^<\w[^>]*[^\/]>.*$/) && !n.match(/^<(br|img).*>\s?$/) ? s = 1 : s = 0;
				var o = "";
				for (var u = 0; u < r; u++) o += "    ";
				t += o + n + "\r\n",
				r += s
			}
		}),
		t
	},
	trimCode: function(e) {
		$(e).find("pre code").each(function() {
			var e = $(this).parent("pre"),
			t = e.html(),
			n = $.trim(t);
			t !== n && e.html(n)
		})
	},
	removeAttributes: function(e, t) {
		e = $(e);
		var n = $.map(e.get(0).attributes,
		function(e) {
			return e.name
		});
		typeof t == "function" && (n = n.filter(t)),
		$.each(n,
		function(t, n) {
			e.removeAttr(n)
		})
	},
	removeClasses: function(e, t) {
		e = $(e);
		if (typeof t == "function") {
			var n = e.attr("class").split(" ").filter(t);
			$.each(n,
			function(t, n) {
				e.removeClass(n)
			})
		} else e.attr("class", "")
	}
},
SL("components").DeckSharer = Class.extend({
	DEFAULT_WIDTH: 576,
	DEFAULT_HEIGHT: 420,
	init: function() {
		this.onLinkOutputMouseDown = this.onLinkOutputMouseDown.bind(this),
		this.onEmbedOutputMouseDown = this.onEmbedOutputMouseDown.bind(this),
		this.onSizeChanged = this.onSizeChanged.bind(this),
		this.width = this.DEFAULT_WIDTH,
		this.height = this.DEFAULT_HEIGHT,
		this.domElement = $("<div>").addClass("decksharer")
	},
	build: function() {
		this.domElement.empty(),
		this.domElement.append(['<div class="url">', "<h3>" + SL.locale.get("DECKSHARER_URL_TITLE") + "</h3>", '<input type="text" name="url" readonly="readonly" />', "</div>"].join("")),
		this.linkOutputElement = this.domElement.find(".url input"),
		this.linkOutputElement.on("mousedown", this.onLinkOutputMouseDown),
		this.isPublished ? (this.domElement.append(['<div class="embed">', "<h3>" + SL.locale.get("DECKSHARER_EMBED_TITLE") + "</h3>", '<div class="size">', '<input type="text" name="width" maxlength="4" />', '<span class="symbol">x</span>', '<input type="text" name="height" maxlength="4" />', '<span class="symbol">=</span>', "</div>", '<textarea name="output" readonly="readonly"></textarea>', "</div>"].join("")), this.embedWidthElement = this.domElement.find(".embed .size input[name=width]"), this.embedHeightElement = this.domElement.find(".embed .size input[name=height]"), this.embedOutputElement = this.domElement.find(".embed textarea"), this.embedHeightElement.on("change keyup", this.onSizeChanged), this.embedWidthElement.on("change keyup", this.onSizeChanged), this.embedOutputElement.on("mousedown", this.onEmbedOutputMouseDown), this.embedWidthElement.val(this.width), this.embedHeightElement.val(this.height)) : this.domElement.append(['<div class="note">', "<p>", SL.locale.get("DECKSHARER_PRIVATE_URL_NOTICE"), "</p>", "</div>"].join(""))
	},
	render: function(e) {
		if (e && typeof e.slug != "string" || typeof e.user.username != "string") throw "Must specify username and slug of deck to embed.";
		this.data = e,
		this.isPublished = !!this.data.published || typeof this.data.published == "undefined" || typeof this.data.access_token != "string",
		this.build(),
		this.generateOutput()
	},
	appendTo: function(e) {
		$(e).append(this.domElement)
	},
	prependTo: function(e) {
		$(e).prepend(this.domElement)
	},
	generateOutput: function() {
		var e = "http://" + document.location.host + "/" + this.data.user.username + "/" + this.data.slug,
		t = e + "/embed"; ! this.isPublished && this.data.access_token && (e += "?token=" + this.data.access_token);
		var n = '<iframe src="' + t + '" width="' + this.width + '" height="' + this.height + '" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		this.embedOutputElement && this.embedOutputElement.text(n),
		this.linkOutputElement && this.linkOutputElement.val(e)
	},
	onEmbedOutputMouseDown: function(e) {
		e.preventDefault(),
		this.embedOutputElement.focus().select()
	},
	onLinkOutputMouseDown: function(e) {
		e.preventDefault(),
		this.linkOutputElement.focus().select()
	},
	onSizeChanged: function(e) {
		this.width = parseInt(this.embedWidthElement.val(), 10) || 1,
		this.height = parseInt(this.embedHeightElement.val(), 10) || 1,
		this.generateOutput()
	}
}),
SL("components").FormUnit = Class.extend({
	init: function(e) {
		this.domElement = $(e),
		this.inputElement = this.domElement.find("input"),
		this.errorElement = $('<div class="error">'),
		this.errorIcon = $('<span class="icon">!</span>').appendTo(this.errorElement),
		this.errorMessage = $('<p class="message">!</p>').appendTo(this.errorElement),
		this.validateType = this.domElement.attr("data-validate"),
		this.validateTimeout = -1,
		this.originalValue = this.inputElement.val(),
		this.originalError = this.domElement.attr("data-error-message"),
		this.asyncValidatedValue = null,
		this.clientErrors = [],
		this.serverErrors = [],
		this.inputElement.on("focus", this.onInputFocus.bind(this)),
		this.inputElement.on("blur", this.onInputBlur.bind(this)),
		this.inputElement.on("change", this.onInputChange.bind(this)),
		this.inputElement.on("keyup", this.onInputKeyUp.bind(this)),
		this.inputElement.on("invalid", this.onInputInvalid.bind(this)),
		this.domElement.parents("form").first().on("submit", this.onFormSubmit.bind(this)),
		this.originalError && (this.validate(), this.inputElement.focus()),
		this.domElement.data("controller", this)
	},
	validate: function(e) {
		clearTimeout(this.validateTimeout);
		var t = this.inputElement.val();
		if (typeof t != "string") {
			this.serverErrors = [],
			this.clientErrors = [],
			this.render();
			return
		}
		if (t === this.originalValue && this.originalValue && this.originalError) this.clientErrors = [this.originalError];
		else if (t.length) {
			var n = SL.util.validate[this.validateType];
			typeof n == "function" ? this.clientErrors = n(t) : console.log('Could not find validation method of type "' + this.validateType + '"')
		} else this.clientErrors = [],
		e && this.isRequired() && this.clientErrors.push(SL.locale.FORM_ERROR_REQUIRED);
		this.validateAsync(),
		this.render()
	},
	validateAsync: function() {
		if (this.validateType === "username") {
			var e = SLConfig && SLConfig.current_user ? SLConfig.current_user.username: "",
			t = this.inputElement.val();
			SL.util.validate.username(t).length === 0 && (e && t === e ? (this.asyncValidatedValue = e, this.serverErrors = []) : t !== this.asyncValidatedValue && $.ajax({
				url: SL.config.AJAX_GET_USER(t),
				type: "GET",
				context: this,
				statusCode: {
					200 : function() {
						this.serverErrors = [SL.locale.get("FORM_ERROR_USERNAME_TAKEN")]
					},
					404 : function() {
						this.serverErrors = []
					}
				}
			}).complete(function(e) {
				this.render(),
				this.asyncValidatedValue = t
			}))
		}
	},
	render: function() {
		var e = this.serverErrors.concat(this.clientErrors);
		e.length ? (this.domElement.addClass("has-error"), this.errorElement.appendTo(this.domElement), this.errorMessage.text(e[0]), setTimeout(function() {
			this.errorElement.addClass("visible")
		}.bind(this), 1)) : (this.domElement.removeClass("has-error"), this.errorElement.removeClass("visible").remove())
	},
	format: function() {
		if (this.validateType === "username") {
			var e = this.inputElement.val();
			e && this.inputElement.val(this.inputElement.val().toLowerCase())
		}
		if (this.validateType === "url") {
			var e = this.inputElement.val();
			/^http(s?):\/\//gi.test(e) === !1 && this.inputElement.val("http://" + e)
		}
	},
	beforeSubmit: function(e) {
		return this.validate(!0),
		this.clientErrors.length > 0 || this.serverErrors.length > 0 ? (this.inputElement.focus(), !1) : !0
	},
	isRequired: function() {
		return ! this.domElement.hasClass("hidden") && this.domElement.is("[data-required]")
	},
	isUnchanged: function() {
		return this.inputElement.val() === this.originalValue
	},
	onInputChange: function(e) {
		this.validate()
	},
	onInputKeyUp: function(e) {
		clearTimeout(this.validateTimeout);
		if (!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET && e.keyCode !== 13) {
			var t = 600;
			if (this.clientErrors.length || this.serverErrors.length) t = 300;
			this.validateTimeout = setTimeout(this.validate.bind(this), t)
		}
	},
	onInputFocus: function(e) {
		this.domElement.addClass("focused")
	},
	onInputBlur: function(e) {
		this.format(),
		this.domElement.removeClass("focused")
	},
	onInputInvalid: function(e) {
		return this.beforeSubmit(e)
	},
	onFormSubmit: function(e) {
		if (this.beforeSubmit(e) === !1) return e.preventDefault(),
		!1
	}
}),
SL("components").Header = Class.extend({
	init: function() {
		this.domElement = $(".global-header");
		if (SL.util.device.HAS_TOUCH) {
			var e = this.domElement.find(".profile");
			e.find(".dropdown-button").on("click",
			function(e) {
				e.preventDefault()
			}),
			e.find(".dropdown-button").on("touchstart",
			function(t) {
				e.hasClass("open") ? e.removeClass("open").addClass("closed") : e.removeClass("closed").addClass("open"),
				t.preventDefault()
			}.bind(this))
		}
		this.domElement.find(".logo-animation").on("contextmenu",
		function(e) {
			return window.location.href = "/about#media",
			!1
		}),
		$(window).on("resize", this.layout.bind(this)),
		this.layout()
	},
	layout: function() {
		this.domElement.find(".dropdown").each(function(e) {
			var t = $(this),
			n = t.find(".dropdown-list-inner");
			t.removeClass("right-aligned"),
			n.offset().left + n.outerWidth(!0) > window.innerWidth - 30 && t.addClass("right-aligned")
		})
	}
}),
SL.modal = function() {
	function n() {
		if (!SL.htmlEditor) try {
			SL.htmlEditor = ace.edit("ace-html"),
			SL.htmlEditor.setTheme("ace/theme/monokai"),
			SL.htmlEditor.setDisplayIndentGuides(!0),
			SL.htmlEditor.setShowPrintMargin(!1),
			SL.htmlEditor.getSession().setMode("ace/mode/html")
		} catch(t) {
			console.log("An error occurred while initializing the Ace editor.")
		}
		SL.htmlEditor.env.document.setValue(SL.util.html.indent($(Reveal.getCurrentSlide()).html())),
		SL.htmlEditor.focus(),
		e.find(".discard-changes").on("click", SL.modal.close),
		e.find(".save-changes").click(function(e) {
			SL.view.writeHTMLToCurrentSlide(SL.htmlEditor.env.document.getValue()),
			SL.modal.close()
		})
	}
	function r() {
		if (!SL.cssEditor) try {
			SL.cssEditor = ace.edit("ace-css"),
			SL.cssEditor.setTheme("ace/theme/monokai"),
			SL.cssEditor.setDisplayIndentGuides(!0),
			SL.cssEditor.setShowPrintMargin(!1),
			SL.cssEditor.getSession().setMode("ace/mode/css")
		} catch(t) {
			console.log("An error occurred while initializing the Ace editor.")
		}
		SL.cssEditor.env.document.setValue($("#deck-custom-css").html()),
		SL.cssEditor.focus(),
		e.find(".discard-changes").on("click", SL.modal.close),
		e.find(".save-changes").on("click",
		function(e) {
			$("#deck-custom-css").html(SLConfig.deck.css),
			SL.modal.close()
		})
	}
	function i() {
		e.find(".ignore").on("click",
		function(e) {
			SL.modal.close()
		}),
		e.find(".retry").on("click",
		function(e) {
			SL.view.checkLogin(!0)
		})
	}
	function s(t) {
		function i(e) {
			SL.modal.close()
		}
		var n = e.find(".share-deck"),
		r = n.data("decksharer");
		r || (r = new SL.components.DeckSharer, r.prependTo(n), n.data("decksharer", r)),
		r.render(t),
		n.find(".done").on("click", i)
	}
	function o(t) {
		function o(e) {
			SL.modal.close()
		}
		var n = e.find(".preview-deck"),
		r = n.find(".deck").empty(),
		i = n.find("footer").empty();
		n.addClass("loading");
		var s = $("<iframe>", {
			src: t.src,
			load: function() {
				n.removeClass("loading")
			}
		});
		s.appendTo(r),
		t.footer ? i.append(t.footer) : i.append('<button class="button done l">Close</button>'),
		n.find(".done").on("click", o)
	}
	function u(t) {
		var n = e.find(".preview-deck");
		n.find(".deck iframe").attr("src", ""),
		n.find(".deck").empty(),
		n.find("footer").empty()
	}
	var e = $("#modal"),
	t = $("#modal-cover");
	return modalBackgroundElement = $("#modal-background"),
	currentType = null,
	$(document).keyup(function(e) {
		e.keyCode === 27 && SL.modal.close()
	}),
	$("#modal .close").click(function() {
		SL.modal.close()
	}),
	{
		closeTimeout: null,
		open: function(u, a) {
			currentType = u;
			switch (u) {
			case "edit-css":
				r(a);
				break;
			case "edit-html":
				n(a);
				break;
			case "no-session":
				i(a);
				break;
			case "share-deck":
				s(a);
				break;
			case "preview-deck":
				o(a)
			}
			$("html").addClass("modal-open"),
			clearTimeout(this.closeTimeout),
			modalBackgroundElement.show(),
			e.find(">div").removeClass("visible"),
			e.find("." + u).addClass("visible"),
			e.add(t).click(function(e) {
				e.target === this && SL.modal.close()
			})
		},
		close: function() {
			$("html").removeClass("modal-open"),
			e.find(".create form").unbind(),
			e.find(".create form input[type=text]").unbind(),
			e.find(".create form input[type=submit]").unbind(),
			e.find(".save-changes").off(),
			e.find(".discard-changes").off(),
			this.closeTimeout = setTimeout(function() {
				modalBackgroundElement.hide(),
				e.find(">div").removeClass("visible");
				switch (currentType) {
				case "preview-deck":
					u()
				}
			},
			400)
		},
		isOpen: function(t) {
			var n = $("html").hasClass("modal-open");
			return n && t && (n = e.find("." + t).hasClass("visible")),
			n
		}
	}
} (),
SL.notify = function(e, t) {
	function s() {
		o(),
		i = setTimeout(function() {
			r.addClass("no-transition").fadeOut(600, u)
		},
		n)
	}
	function o() {
		clearTimeout(i),
		r.stop().css("opacity", "")
	}
	function u() {
		r.remove()
	}
	$(".notifications").length === 0 && $(document.body).append('<div class="notifications"></div>'),
	$(".notifications>p").last().html() === e && $(".notifications>p").last().remove();
	var n = 2500 + e.length * 15;
	t === "negative" && (n *= 1.5);
	var r = $("<p>").html(e).addClass(t || "").appendTo($(".notifications")).on("mouseover", o).on("mouseout", s).on("click", u),
	i = -1;
	setTimeout(function() {
		r.addClass("show"),
		s()
	},
	1)
},
SL("components").Resizer = Class.extend({
	init: function(e, t) {
		this.domElement = $(e),
		this.options = $.extend({
			padding: 10,
			preserveAspectRatio: !1
		},
		t),
		this.mouse = {
			x: 0,
			y: 0
		},
		this.origin = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		this.resizing = !1,
		this.domElement.length ? (this.onAnchorMouseDown = this.onAnchorMouseDown.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this), this.build(), this.bind(), this.layout()) : console.warn("Resizer: invalid resize target.")
	},
	build: function() {
		this.anchorN = $('<div class="editing-ui resizer-anchor" data-direction="n"></div>').appendTo(document.body),
		this.anchorE = $('<div class="editing-ui resizer-anchor" data-direction="e"></div>').appendTo(document.body),
		this.anchorS = $('<div class="editing-ui resizer-anchor" data-direction="s"></div>').appendTo(document.body),
		this.anchorW = $('<div class="editing-ui resizer-anchor" data-direction="w"></div>').appendTo(document.body)
	},
	bind: function() {
		this.resizeStarted = new signals.Signal,
		this.resizeEnded = new signals.Signal,
		this.getAnchors().on("mousedown", this.onAnchorMouseDown)
	},
	layout: function() {
		var e = this.domElement.offset(),
		t = Reveal.getScale(),
		n = e.left * t - this.options.padding,
		r = e.top * t - this.options.padding,
		i = this.domElement.outerWidth() * t + this.options.padding * 2;
		height = this.domElement.outerHeight() * t + this.options.padding * 2;
		var s = -this.anchorN.outerWidth() / 2;
		this.anchorN.css({
			left: n + i / 2 + s,
			top: r + s
		}),
		this.anchorE.css({
			left: n + i + s,
			top: r + height / 2 + s
		}),
		this.anchorS.css({
			left: n + i / 2 + s,
			top: r + height + s
		}),
		this.anchorW.css({
			left: n + s,
			top: r + height / 2 + s
		})
	},
	show: function() {
		this.getAnchors().addClass("visible")
	},
	hide: function() {
		this.getAnchors().removeClass("visible")
	},
	getOptions: function() {
		return this.options
	},
	getAnchors: function() {
		return this.anchorN.add(this.anchorE).add(this.anchorS).add(this.anchorW)
	},
	isResizing: function() {
		return this.resizing
	},
	onAnchorMouseDown: function(e) {
		var t = $(e.target).attr("data-direction");
		t && (e.preventDefault(), this.resizeDirection = t, this.origin.x = e.clientX, this.origin.y = e.clientY, this.origin.width = this.domElement.width(), this.origin.height = this.domElement.height(), this.resizing = !0, $(document).on("mousemove", this.onDocumentMouseMove), $(document).on("mouseup", this.onDocumentMouseUp), this.resizeStarted.dispatch())
	},
	onDocumentMouseMove: function(e) {
		this.mouse.x = e.clientX,
		this.mouse.y = e.clientY;
		if (this.resizing) {
			var t = this.mouse.x - this.origin.x,
			n = this.mouse.y - this.origin.y,
			r = "",
			i = "";
			this.options.preserveAspectRatio || (r = this.domElement.css("width"), i = this.domElement.css("height"));
			switch (this.resizeDirection) {
			case "e":
				r = this.origin.width + t;
				break;
			case "w":
				r = this.origin.width - t;
				break;
			case "s":
				i = this.origin.height + n;
				break;
			case "n":
				i = this.origin.height - n
			}
			this.domElement.css({
				width: r,
				height: i
			}),
			this.layout()
		}
	},
	onDocumentMouseUp: function(e) {
		this.resizing = !1,
		$(document).off("mousemove", this.onDocumentMouseMove),
		$(document).off("mouseup", this.onDocumentMouseUp),
		this.resizeEnded.dispatch()
	},
	destroy: function() {
		this.resizeStarted.dispose(),
		this.resizeEnded.dispose(),
		$(document).off("mousemove", this.onDocumentMouseMove),
		$(document).off("mouseup", this.onDocumentMouseUp),
		this.getAnchors().off("mousedown", this.onAnchorMouseDown),
		this.anchorN.remove(),
		this.anchorE.remove(),
		this.anchorS.remove(),
		this.anchorW.remove()
	}
}),
SL.components.Resizer.delegateOnHover = function(e, t, n) {
	function s(e) {
		r || (i = $(e.currentTarget), r = new SL.components.Resizer(i, n), r.show(), $(document).on("mousemove", o), $(document).on("mouseup", u))
	}
	function o(e) {
		if (r && !r.isResizing()) {
			var t = Reveal.getScale(),
			n = i.offset(),
			s = r.getOptions().padding * 2.5,
			a = {
				top: n.top * t - s,
				right: (n.left + i.outerWidth()) * t + s,
				bottom: (n.top + i.outerHeight()) * t + s,
				left: n.left * t - s
			};
			if (e.clientX < a.left || e.clientX > a.right || e.clientY < a.top || e.clientY > a.bottom) r.destroy(),
			r = null,
			$(document).off("mousemove", o),
			$(document).off("mouseup", u)
		}
	}
	function u(e) {
		setTimeout(function() {
			o(e)
		},
		1)
	}
	e.delegate(t, "mouseover", s);
	var r = null,
	i = null;
	return {
		layout: function() {
			r && r.layout()
		},
		destroy: function() {
			r && (r.destroy(), r = null, $(document).off("mousemove", o), $(document).off("mouseup", u)),
			e.undelegate(t, "mouseover", s)
		}
	}
},
SL.tooltip = function() {
	function i() {
		t = $("<div>").addClass("tooltip"),
		n = $("<p>").appendTo(t),
		$(document).on("keydown, mousedown",
		function(e) {
			SL.tooltip.hide()
		}),
		!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET && ($(document.body).delegate("[data-tooltip]", "mouseenter",
		function(e) {
			var t = $(e.target),
			n = t.data("tooltip"),
			r = t.data("tooltip-delay"),
			i = t.data("tooltip-direction"),
			o = t.data("tooltip-maxwidth"),
			u = t.data("tooltip-maxheight");
			n && s(n, {
				anchor: t,
				direction: i,
				delay: r,
				maxwidth: o,
				maxheight: u
			})
		}), $(document.body).delegate("[data-tooltip]", "mouseleave", o))
	}
	function s(i, o) {
		if (SL.util.device.IS_PHONE || SL.util.device.IS_TABLET) return;
		clearTimeout(r);
		if (typeof o.delay == "number") {
			r = setTimeout(s.bind(this, i, o), o.delay),
			delete o.delay;
			return
		}
		t.css("opacity", 0),
		t.appendTo(document.body),
		n.html(i),
		t.css("max-width", o.maxwidth ? o.maxwidth: null),
		t.css("max-height", o.maxheight ? o.maxheight: null);
		var u = o.direction || "t",
		a = 0,
		f = 0,
		l = 0,
		c = 0,
		h = t.outerWidth(),
		p = t.outerHeight();
		o.anchor ? (a = $(o.anchor).offset().left, f = $(o.anchor).offset().top, l = $(o.anchor).outerWidth(), c = $(o.anchor).outerHeight()) : o.x && o.y && (a = o.x, f = o.y),
		typeof o.ox == "number" && (a += o.ox),
		typeof o.oy == "number" && (f += o.oy);
		switch (u) {
		case "t":
			a += (l - h) / 2,
			f -= p + e;
			break;
		case "b":
			a += (l - h) / 2,
			f += c + e;
			break;
		case "l":
			a -= h + e,
			f += (c - p) / 2;
			break;
		case "r":
			a += l + e,
			f += (c - p) / 2
		}
		t.css({
			left: Math.round(a),
			top: Math.round(f)
		}).attr("direction", u),
		t.stop(!0, !0).animate({
			opacity: 1
		},
		{
			duration: 150
		})
	}
	function o() {
		clearTimeout(r),
		t.remove().stop(!0, !0)
	}
	var e = 10,
	t, n, r = -1;
	return i(),
	{
		show: function(e, t) {
			s(e, t)
		},
		hide: function() {
			o()
		},
		anchorTo: function(e, t, n) {
			var r = {};
			typeof t != "undefined" && (r["data-tooltip"] = t),
			typeof n.delay == "number" && (r["data-tooltip-delay"] = n.delay),
			typeof n.direction == "string" && (r["data-tooltip-direction"] = n.direction),
			$(e).attr(r)
		}
	}
} (),
SL("views").Base = Class.extend({
	init: function() {
		this.header = new SL.components.Header,
		this.handleLogos(),
		this.handleFlashNotes(),
		this.parseTimes(),
		this.parseLinks(),
		this.parseNotifications()
	},
	handleLogos: function() {
		setTimeout(function() {
			$(".logo-animation").addClass("open")
		},
		600)
	},
	handleFlashNotes: function() {
		setTimeout(function() {
			$(".flash-notification").animate({
				opacity: 0
			},
			300,
			function() {
				$(this).remove()
			})
		},
		3e3)
	},
	parseTimes: function() {
		$("time.ago").each(function() {
			var e = $(this).attr("datetime");
			e && $(this).text(moment(e).fromNow())
		}),
		$("time.date").each(function() {
			var e = $(this).attr("datetime");
			e && $(this).text(moment(e).format("MMM Do, YYYY"))
		})
	},
	parseLinks: function() {
		$(".linkify").each(function() {
			$(this).html(SL.util.string.linkify($(this).text()))
		})
	},
	parseNotifications: function() {
		var e = $(".flash-notification");
		e.length && SL.notify(e.remove().text())
	},
	showWarning: function(e, t) {
		if (!t || !SL.settings.getValue(t)) {
			var n = $('<div class="global-warning"></div>'),
			r = $('<span class="icon i-x"></span>').appendTo(n),
			i = $("<p>" + e + "</p>").appendTo(n);
			n.appendTo(document.body),
			n.on("click",
			function() {
				n.remove(),
				t && SL.settings.setValue(t, !0)
			})
		}
	},
	hideAddressBar: function() {
		SL.util.device.IS_PHONE && !/crios/gi.test(navigator.userAgent) && $(window).on("load orientationchange",
		function() {
			setTimeout(function() {
				window.scrollTo(0, 1)
			},
			10)
		})
	}
}),
SL("views.decks").Edit = SL.views.Base.extend({
	init: function() {
		this._super(),
		SL.util.device.supportedByEditor() || ($(document.body).append('<div class="not-supported"><h2>Not Supported</h2><p>We\'re sorry but the Slides editor doesn\'t currently support the browser you\'re using. Please consider changing to a more modern browser, such as <a href="https://www.google.com/chrome">Google Chrome</a> or <a href="https://www.mozilla.org/firefox/">Firefox</a>.</p><a class="skip" href="#">Continue anyway</a></div>'), $(".not-supported .skip").on("click",
		function() {
			$(".not-supported").remove()
		})),
		SLConfig.deck.theme_font = SLConfig.deck.theme_font || "league",
		SLConfig.deck.theme_color = SLConfig.deck.theme_color || "grey-blue",
		SLConfig.deck.transition = SLConfig.deck.transition || "default",
		SLConfig.deck.published = !!SLConfig.deck.published,
		this.addHorizontalSlideButton = $(".add-horizontal-slide"),
		this.addVerticalSlideButton = $(".add-vertical-slide"),
		this.exitPreviewButton = $(".exit-preview"),
		this.hasUnsavedChanges = !1,
		this.hasLoggedOut = !1,
		this.isEditing = !0,
		this.isSaving = !1,
		this.isNew = !SLConfig.deck.id,
		this.loadTime = Date.now(),
		this.savedConfig = JSON.parse(JSON.stringify(SLConfig)),
		this.sidebar = new SL.views.decks.edit.Sidebar,
		this.controllers = {
			media: new SL.views.decks.edit.MediaController(this)
		},
		this.modes = {
			arrange: new SL.views.decks.edit.modes.Arrange(this),
			preview: new SL.views.decks.edit.modes.Preview(this),
			fragment: new SL.views.decks.edit.modes.Fragment(this),
			absolute: new SL.views.decks.edit.modes.Absolute(this)
		},
		this.slideOptions = new SL.views.decks.edit.SlideOptions(this),
		this.setupToolbar(),
		this.setupReveal(),
		this.updateNavigationButtons(),
		this.updateEditableInstances(),
		this.changeInterval = setInterval(this.checkChanges.bind(this), SL.config.UNSAVED_CHANGES_INTERVAL),
		this.loginInterval = setInterval(this.checkLogin.bind(this), SL.config.LOGIN_STATUS_INTERVAL),
		this.saveInterval = setInterval(this.checkAutoSave.bind(this), SL.config.AUTOSAVE_INTERVAL),
		SLConfig.deck.data = this.getDeckAsString(),
		$("html").toggleClass("is-new", this.isNew),
		$("html").toggleClass("rtl", SLConfig.deck.rtl),
		this.bind()
	},
	setupToolbar: function() {
		SL.util.device.HAS_TOUCH && ($(".skriv [data-id=bold], .skriv [data-id=italic], .skriv [data-id=underline]").remove(), $(".skriv [data-id=divider]").first().remove()),
		this.toolbar = skriv.create(document.querySelector(".skriv"));
		var e = {
			direction: "b",
			delay: 500
		};
		SL.tooltip.anchorTo($(".skriv .action.removeFormat>button"), "Clear format", e),
		SL.tooltip.anchorTo($(".skriv .action.foregroundColor>button"), "Text color", e),
		SL.tooltip.anchorTo($(".skriv .action.backgroundColor>button"), "Text background color", e),
		SL.tooltip.anchorTo($(".skriv .action.image>button"), "Insert image", e),
		SL.tooltip.anchorTo($(".skriv .action.link>button"), "Insert link", e),
		SL.tooltip.anchorTo($(".skriv .action.unlink>button"), "Remove link", e)
	},
	setupReveal: function() {
		Reveal.initialize({
			controls: !0,
			progress: !1,
			history: !1,
			center: !1,
			touch: !1,
			fragments: !1,
			mouseWheel: !1,
			rollingLinks: !1,
			maxScale: 1,
			margin: .16,
			rtl: SLConfig.deck.rtl,
			loop: SLConfig.deck.should_loop,
			transition: SLConfig.deck.transition,
			dependencies: []
		}),
		Reveal.addEventListener("ready",
		function(e) {
			this.updateNavigationButtons(),
			this.formatSlide(e.currentSlide)
		}.bind(this)),
		Reveal.addEventListener("slidechanged",
		function(e) {
			this.updateNavigationButtons(),
			this.formatSlide(e.currentSlide),
			this.toolbar.setEditor(e.currentSlide)
		}.bind(this))
	},
	bind: function() {
		$(".reveal .slides").on("focus", "section.present", this.onSlideFocused.bind(this)),
		$(".reveal .slides").on("blur", "section.present", this.onSlideBlurred.bind(this)),
		$(".reveal .slides").on("keydown", "section", this.onSlideKeyDown.bind(this)),
		$(document).on("keydown", this.onDocumentKeyDown.bind(this)),
		$(window).on("keyup", this.onWindowKeyUp.bind(this)),
		$(window).on("beforeunload", this.onWindowBeforeUnload.bind(this)),
		$(window).on("resize", this.onWindowResize.bind(this)),
		this.addHorizontalSlideButton.on("click", this.onAddHorizontalSlideClicked.bind(this)),
		this.addVerticalSlideButton.on("click", this.onAddVerticalSlideClicked.bind(this)),
		this.exitPreviewButton.on("mousedown", this.onExitPreviewClicked.bind(this)),
		this.sidebar.saveClicked.add(this.save.bind(this)),
		this.sidebar.previewClicked.add(this.changeMode.bind(this, "preview")),
		this.toolbar.notified.add(SL.notify)
	},
	clearMode: function(e) {
		var t = this.getMode($("html").attr("data-mode"));
		t && t.isActive() && t.deactivate()
	},
	changeMode: function(e) {
		this.clearMode();
		var t = this.getMode(e);
		t && t.activate()
	},
	getMode: function(e) {
		return this.modes[e] ? this.modes[e] : null
	},
	checkChanges: function() {
		this.isSaving || (this.hasUnsavedChanges = this.getDeckAsString() !== SLConfig.deck.data || !!SLConfig.deck.dirty || !!this.isNew, this.hasUnsavedChanges ? this.sidebar.updateSaveButton("") : this.sidebar.updateSaveButton("disabled")),
		this.formatSlide($(".reveal .slides .present:not(.stack)"))
	},
	checkAutoSave: function() {
		this.sidebar.isAutoSaveOn() && this.hasUnsavedChanges && this.save()
	},
	checkLogin: function(e) { (this.hasUnsavedChanges && !SL.modal.isOpen("no-session") || e) && $.get(SL.config.AJAX_CHECK_STATUS).done(function(e) {
			e && e.user_signed_in ? this.onLoggedIn() : this.onLoggedOut()
		}.bind(this))
	},
	save: function(e) {
		this.isSaving || (this.isSaving = !0, this.sidebar.updateSaveButton("disabled saving"), $("html").attr("data-published", SLConfig.deck.published ? "true": "false"), this.isNew ? this.createDeck(e) : this.updateDeck(e))
	},
	createDeck: function(e) {
		var t = this.getDeckAsString(),
		n = SLConfig.deck.title;
		if (!n) {
			var r = $(Reveal.getSlide(0)).find("h1").text();
			r.toLowerCase() !== "untitled" && (n = $(Reveal.getSlide(0)).find("h1").text())
		}
		var i = {
			type: "POST",
			url: SL.config.AJAX_CREATE_DECK(SLConfig.current_user.username),
			context: this,
			data: {
				deck: {
					title: n,
					description: SLConfig.deck.description,
					data: SL.util.string.trim(t),
					published: SLConfig.deck.published,
					transition: SLConfig.deck.transition,
					theme_font: SLConfig.deck.theme_font,
					theme_color: SLConfig.deck.theme_color,
					rolling_links: SLConfig.deck.rolling_links,
					should_loop: SLConfig.deck.should_loop,
					center: SLConfig.deck.center,
					rtl: SLConfig.deck.rtl
				}
			}
		};
		SLConfig.deck.slug !== this.savedConfig.deck.slug && (i.data.deck.custom_slug = SLConfig.deck.slug),
		$.ajax(i).done(function(n) {
			$.extend(SLConfig.deck, n),
			SLConfig.deck.data = t,
			SLConfig.deck.dirty = !1,
			this.writeURL(),
			$("html").removeClass("is-new"),
			this.isNew = !1,
			this.onSaveSuccess(e, n)
		}).fail(function(t) {
			this.onSaveError(e, t)
		}).always(function(t) {
			this.onSaveFinished(e)
		})
	},
	onSaveSuccess: function(e, t) {
		this.savedConfig = JSON.parse(JSON.stringify(SLConfig)),
		t && t.deck && t.deck.sanitize_messages && t.deck.sanitize_messages.length ? SL.notify(t.deck.sanitize_messages[0], "negative") : this.sidebar.isAutoSaveOn() || SL.notify(SL.locale.get("DECK_SAVE_SUCCESS"), "positive"),
		e && e.apply(null, [!0])
	},
	onSaveError: function(e) {
		SL.notify(SL.locale.get("DECK_SAVE_ERROR"), "negative"),
		e && e.apply(null, [!1])
	},
	onSaveFinished: function(e) {
		this.sidebar.updatePublishButton(),
		this.isSaving = !1,
		this.checkChanges()
	},
	updateDeck: function(e) {
		var t = this.getDeckAsString(),
		n = {
			type: "PUT",
			url: SL.config.AJAX_UPDATE_DECK(SLConfig.deck.user.username, this.savedConfig ? this.savedConfig.deck.id: SLConfig.deck.id),
			context: this,
			data: {
				 deck: {
					title: SLConfig.deck.title,
					description: SLConfig.deck.description,
					data: SL.util.string.trim(t),
					published: SLConfig.deck.published,
					transition: SLConfig.deck.transition,
					theme_font: SLConfig.deck.theme_font,
					theme_color: SLConfig.deck.theme_color,
					rolling_links: SLConfig.deck.rolling_links,
					should_loop: SLConfig.deck.should_loop,
					center: SLConfig.deck.center,
					rtl: SLConfig.deck.rtl
				}
			}
		};
		SLConfig.deck.slug !== this.savedConfig.deck.slug && (n.data.deck.custom_slug = SLConfig.deck.slug),
		$.ajax(n).done(function(n) {
			n && n.deck && n.deck.slug && (SLConfig.deck.slug = n.deck.slug, this.writeURL()),
			SLConfig.deck.data = t,
			SLConfig.deck.dirty = !1,
			this.onSaveSuccess(e, n)
		}).fail(function(t) {
			this.onSaveError(e, t)
		}).always(function(t) {
			this.onSaveFinished(e)
		})
	},
	writeURL: function() {
		window.history && typeof window.history.replaceState == "function" && window.history.replaceState(null, SLConfig.deck.title, "/" + SLConfig.deck.user.username + "/" + SLConfig.deck.slug + "/edit")
	},
	publish: function() {
		SLConfig.deck.published = !0,
		this.save(),
		SL.analytics.track("Deck.edit: Publish")
	},
	unpublish: function() {
		SL.util.user.isPro() && (SLConfig.deck.published = !1, SL.analytics.track("Deck.edit: Unpublish"), this.save())
	},
	getDeckAsString: function() {
		var e = $(".reveal .slides").map(function() {
			var e = $(this).clone();
			return e.find("section").add(e).each(function(e) {
				e = $(this),
				SL.util.html.removeAttributes(e,
				function(e) {
					return /(class|style|contenteditable|data\-index\-.|data\-previous\-indexv)/gi.test(e)
				}),
				SL.util.html.trimCode(e),
				e.find("iframe").text("&nbsp;"),
				e.find("img").css("cursor", ""),
				e.find(".fragment").removeClass("visible"),
				e.find(".editing-ui").remove(),
				e.find('[src="' + skriv.actions.image.PLACEHOLDER + '"]').remove(),
				e.find('[href="' + skriv.actions.link.PLACEHOLDER + '"]').each(function() {
					$(this).replaceWith(this.childNodes)
				})
			}),
			e.wrap("<div>").html()
		}).toArray().join("");
		return e = SL.util.string.trim(e),
		e
	},
	getCurrentHorizontalSlide: function() {
		var e = $(Reveal.getCurrentSlide());
		return e.parent("section.stack").length && (e = e.parent("section.stack")),
		e
	},
	navigateToSlide: function(e) {
		if (e) {
			var t = Reveal.getIndices(e);
			setTimeout(function() {
				Reveal.slide(t.h, t.v)
			},
			1)
		}
	},
	updateEditableInstances: function() {
		this.isEditing && ($(".reveal .slides section.stack").removeAttr("contenteditable"), $(".reveal .slides section:not(.stack)").attr("contenteditable", "true"), this.toolbar.bind())
	},
	enableEditing: function() {
		this.isEditing = !0,
		this.updateEditableInstances()
	},
	disableEditing: function() {
		this.isEditing = !1,
		$(".reveal .slides section").removeAttr("contenteditable")
	},
	formatSlide: function(e) {
		e = $(e),
		e.length && Date.now() > this.loadTime + 1e3 && e.toggleClass("overflowing", e.get(0).scrollHeight > e.outerHeight() + 10),
		e.find("*").each(function(e, t) {
			t.style.fontFamily.match(/,/gi) && (t.style.fontFamily = null),
			t.style.fontSize.match(/px/gi) === null && (t.style.fontSize = null),
			t.style.lineHeight && (t.style.lineHeight = null),
			t.style.letterSpacing && (t.style.letterSpacing = null),
			t.getAttribute("class") === "" && t.removeAttribute("class"),
			t.getAttribute("style") === "" && t.removeAttribute("style")
		})
	},
	addVerticalSlide: function() {
		var e = this.getCurrentHorizontalSlide();
		e.hasClass("stack") || (e.wrapInner('<section class="present">'), e.addClass("stack"));
		var t = $('<section class="future"><h2>' + SL.locale.get("NEW_SLIDE_TITLE") + "</h2></section>"),
		n = e.find("section.present");
		n.length ? t.insertAfter(n) : e.append(t),
		this.updateEditableInstances(),
		this.navigateToSlide(t.get(0)),
		this.navigateToSlide(t.get(0))
	},
	addHorizontalSlide: function() {
		var e = SLConfig.deck.rtl ? "past": "future";
		$('<section class="' + e + '"><h2>Title</h2></section>').insertAfter(this.getCurrentHorizontalSlide()),
		this.updateEditableInstances(),
		SLConfig.deck.rtl ? setTimeout(Reveal.navigateLeft, 1) : setTimeout(Reveal.navigateRight, 1)
	},
	removeCurrentSlide: function() {
		$(".reveal .slides .present .present").remove().length === 0 ? $(".reveal .slides>section").length > 1 && $(".reveal .slides>.present").remove() : $(".reveal .slides .present>section").length === 1 && $(".reveal .slides .present>section:eq(0)").unwrap(),
		Reveal.slide(),
		this.updateNavigationButtons(),
		SL.analytics.track("Deck.edit: Remove slide")
	},
	updateNavigationButtons: function() {
		this.addHorizontalSlideButton.addClass("show"),
		this.addVerticalSlideButton.addClass("show")
	},
	writeHTMLToCurrentSlide: function(e) {
		Reveal.getCurrentSlide().innerHTML = e,
		SL.util.html.trimCode(Reveal.getCurrentSlide())
	},
	layout: function() {
		var e = $(".projector"),
		t = $(Reveal.getCurrentSlide()),
		n = {
			left: e.width() / 2 + t.outerWidth() / 2 * Reveal.getScale(),
			top: e.height() / 2 - t.outerHeight() / 2 * Reveal.getScale()
		};
		this.slideOptions.domElement.css(n)
	},
	onUserInput: function() {
		clearInterval(this.saveInterval),
		this.saveInterval = setInterval(this.checkAutoSave.bind(this), SL.config.AUTOSAVE_INTERVAL)
	},
	onLoggedIn: function() {
		this.hasLoggedOut && (this.hasLoggedOut = !1, SL.modal.close())
	},
	onLoggedOut: function() { ! this.getMode("arrange").isActive() && !this.hasLoggedOut && (this.hasLoggedOut = !0, SL.modal.open("no-session"))
	},
	onSlideFocused: function(e) {
		this.layout(),
		this.slideOptions.show()
	},
	onSlideBlurred: function(e) {
		this.slideOptions.hide()
	},
	onAddHorizontalSlideClicked: function(e) {
		e.preventDefault(),
		this.addHorizontalSlide()
	},
	onAddVerticalSlideClicked: function(e) {
		e.preventDefault(),
		this.addVerticalSlide()
	},
	onExitPreviewClicked: function(e) {
		this.changeMode(null)
	},
	onWindowKeyUp: function(e) {
		e.keyCode === 27 && $(".reveal .slides .present[contenteditable]").blur(),
		this.onUserInput()
	},
	onDocumentKeyDown: function(e) { (e.metaKey || e.ctrlKey) && e.keyCode === 83 && (this.hasUnsavedChanges && this.save(), e.preventDefault())
	},
	onWindowBeforeUnload: function(e) {
		if (this.hasUnsavedChanges) return SL.locale.get("LEAVE_UNSAVED_DECK")
	},
	onWindowResize: function(e) {
		this.layout()
	},
	onSlideKeyDown: function(e) {
		if (e.keyCode === 9 && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
			var t = $(e.target);
			t.is("section") && t.parents(".slides").length && e.preventDefault()
		}
	}
}),
SL("views.decks.edit").MediaController = Class.extend({
	init: function() {
		this.bind()
	},
	bind: function() {
		SL.components.Resizer.delegateOnHover($(".reveal"), "section[contenteditable] img", {
			preserveAspectRatio: !0
		}),
		SL.components.Resizer.delegateOnHover($(".reveal"), "section[contenteditable] video", {
			preserveAspectRatio: !0
		})
	}
}),
SL("views.decks.edit.modes").Base = Class.extend({
	init: function(e, t) {
		this.id = t,
		this.editor = e,
		this.active = !1,
		this.activated = new signals.Signal,
		this.deactivated = new signals.Signal,
		this.render(),
		this.bind()
	},
	bind: function() {},
	render: function() {},
	activate: function() {
		this.active = !0,
		$("html").attr("data-mode", this.id),
		this.activated.dispatch()
	},
	deactivate: function() {
		this.active = !1,
		$("html").removeAttr("data-mode"),
		this.deactivated.dispatch()
	},
	toggle: function() {
		this.isActive() ? this.deactivate() : this.activate()
	},
	isActive: function() {
		return this.active
	}
}),
SL("views.decks.edit.modes").Absolute = SL.views.decks.edit.modes.Base.extend({
	init: function(e) {
		this._super(e, "absolute"),
		this.onMakeElementRelative = this.onMakeElementRelative.bind(this),
		this.onElementMouseDown = this.onElementMouseDown.bind(this),
		this.onMouseMove = this.onMouseMove.bind(this),
		this.onMouseUp = this.onMouseUp.bind(this),
		this.slideOffset = {
			x: 0,
			y: 0
		},
		this.cursorOffset = {
			x: 0,
			y: 0
		}
	},
	render: function() {
		this._super(),
		this.toolbar = $('<div class="toolbar absolute-toolbar"><div class="inner"><p class="description">Drag elements to position them freely within the slide.</p><button class="button grey done">Done</button></div></div>').appendTo($(".projector"))
	},
	bind: function() {
		this._super(),
		this.toolbar.find(".done").on("click", this.deactivate.bind(this))
	},
	activate: function() {
		$(".reveal .slides section.present:not(.stack)>*").append('<div class="editing-ui absolute-controls"><div class="inner"><div class="make-relative-button">Make relative <span class="icon i-x"></span></div></div></div>'),
		$(".reveal .slides section .editing-ui .make-relative-button").on("mousedown", this.onMakeElementRelative),
		$(".reveal .slides section .editing-ui").on("mousedown", this.onElementMouseDown),
		this.resizerDelegate = SL.components.Resizer.delegateOnHover($(".reveal"), ".slides section .absolute-element"),
		this.editor.disableEditing(),
		this.editor.slideOptions.hide(),
		this._super()
	},
	deactivate: function() {
		$(".reveal .slides section .editing-ui .make-relative-button").off("mousedown", this.onMakeElementRelative),
		$(".reveal .slides section .editing-ui").off("mousedown", this.onElementMouseDown).remove(),
		this.resizerDelegate && (this.resizerDelegate.destroy(), this.resizerDelegate = null),
		this.editor.enableEditing(),
		this._super()
	},
	makeAbsoluteElement: function(e) {
		e.hasClass("absolute-element") || (e.addClass("absolute-element"), e.css({
			position: "absolute",
			width: this.dragTarget.width(),
			height: this.dragTarget.height()
		}))
	},
	unmakeAbsoluteElement: function(e) {
		e.hasClass("absolute-element") && (e.css({
			position: "",
			width: "",
			height: "",
			left: "",
			top: ""
		}), e.removeClass("absolute-element"))
	},
	findAbsoluteParent: function(e) {
		e = $(e);
		if (!e.parent().is("section")) var e = e.parents().filter(function(e, t) {
			return $(t).parent().is("section") && !$(t).is("section")
		});
		return e
	},
	onMakeElementRelative: function(e) {
		var t = this.findAbsoluteParent(e.target);
		if (t.length) return this.unmakeAbsoluteElement(t),
		!1
	},
	onElementMouseDown: function(e) {
		this.dragTarget = this.findAbsoluteParent(e.target);
		if (this.dragTarget.length) {
			var t = Reveal.getScale(),
			n = $(Reveal.getCurrentSlide()).offset(),
			r = this.dragTarget.offset();
			this.makeAbsoluteElement(this.dragTarget),
			this.cursorOffset = {
				x: r.left * t - e.clientX,
				y: r.top * t - e.clientY
			},
			this.slideOffset = {
				x: n.left * t,
				y: n.top * t
			},
			$(window).on("mousemove", this.onMouseMove),
			$(window).on("mouseup", this.onMouseUp),
			this.onMouseMove(e)
		} else this.dragTarget = null;
		return ! 1
	},
	onMouseMove: function(e) {
		var t = 2 - Reveal.getScale();
		return this.dragTarget.css({
			left: (e.clientX - this.slideOffset.x) * t + this.cursorOffset.x,
			top: (e.clientY - this.slideOffset.y) * t + this.cursorOffset.y
		}),
		this.resizerDelegate && this.resizerDelegate.layout(),
		!1
	},
	onMouseUp: function(e) {
		return this.dragTarget = null,
		$(window).off("mousemove", this.onMouseMove),
		$(window).off("mouseup", this.onMouseUp),
		!1
	}
}),
SL("views.decks.edit.modes").Arrange = SL.views.decks.edit.modes.Base.extend({
	init: function(e) {
		this._super(e, "arrange")
	},
	bind: function() {
		Reveal.addEventListener("overviewshown", this.onRevealOverviewShown.bind(this)),
		Reveal.addEventListener("overviewhidden", this.onRevealOverviewHidden.bind(this))
	},
	activate: function(e) {
		e || Reveal.toggleOverview(!0),
		this.editor.disableEditing(),
		this.editor.sidebar.updateArrangeButton("arranging");
		var t = ['<div class="arrange-controls editing-ui">', '<div class="move-left i-arrow-left-alt1"></div>', '<div class="move-right i-arrow-right-alt1"></div>', '<div class="move-up i-arrow-up-alt1"></div>', '<div class="move-down i-arrow-down-alt1"></div>', "</div>"].join("");
		$(".reveal .slides section:not(.stack)").append(t).addClass("disabled"),
		$(".reveal .slides section.stack").each(function(e, t) {
			$(t).find(".present").length === 0 && $(t).find("section").first().addClass("present")
		}),
		$(".reveal .slides section .move-left").on("click", this.onMoveSlideLeft.bind(this)),
		$(".reveal .slides section .move-right").on("click", this.onMoveSlideRight.bind(this)),
		$(".reveal .slides section .move-up").on("click", this.onMoveSlideUp.bind(this)),
		$(".reveal .slides section .move-down").on("click", this.onMoveSlideDown.bind(this)),
		SL.analytics.track("Deck.edit: Arrange", {
			state: "on"
		}),
		this._super()
	},
	deactivate: function(e) {
		e || Reveal.toggleOverview(!1),
		this.editor.enableEditing(),
		this.editor.sidebar.updateArrangeButton(),
		$(".reveal .slides section:not(.stack)").removeClass("disabled"),
		$(".reveal .slides section .arrange-controls").remove(),
		this.isActive() && SL.analytics.track("Deck.edit: Arrange", {
			state: "off"
		}),
		this._super()
	},
	onRevealOverviewShown: function() {
		this.editor.clearMode(),
		this.activate(!0)
	},
	onRevealOverviewHidden: function() {
		this.deactivate(!0)
	},
	onMoveSlideLeft: function(e) {
		var t = $(e.target).parents("section").first();
		t.parents("section.stack").length && (t = t.parents("section.stack"));
		var n = t.prev();
		t.length && n.length && (t.after(n), Reveal.slide(t.index()), Reveal.slide(t.index()), Reveal.toggleOverview(!0))
	},
	onMoveSlideRight: function(e) {
		var t = $(e.target).parents("section").first();
		t.parents("section.stack").length && (t = t.parents("section.stack"));
		var n = t.next();
		t.length && n.length && (t.before(n), Reveal.slide(t.index()), Reveal.slide(t.index()), Reveal.toggleOverview(!0))
	},
	onMoveSlideUp: function(e) {
		var t = $(e.target).parents("section").first(),
		n = t.prev();
		t.length && n.length && (t.after(n), Reveal.slide(t.parents("section.stack").index(), t.index()), Reveal.slide(t.parents("section.stack").index(), t.index()), Reveal.toggleOverview(!0))
	},
	onMoveSlideDown: function(e) {
		var t = $(e.target).parents("section").first(),
		n = t.next();
		t.length && n.length && (t.before(n), Reveal.slide(t.parents("section.stack").index(), t.index()), Reveal.slide(t.parents("section.stack").index(), t.index()), Reveal.toggleOverview(!0))
	}
}),
SL("views.decks.edit.modes").Fragment = SL.views.decks.edit.modes.Base.extend({
	init: function(e) {
		this._super(e, "fragment"),
		this.onFragmentMouseDown = this.onFragmentMouseDown.bind(this)
	},
	render: function() {
		this._super();
		var e = "Fragments are invisible until stepped through when<br>you present. Preview to see them in action.";
		this.toolbar = $('<div class="toolbar fragment-toolbar"><div class="inner"><p class="description">Click on elements to turn them into <u data-tooltip="' + e + '" data-tooltip-direction="b">fragments</u>.</p>' + '<button class="button grey done">Done</button>' + "</div>" + "</div>").appendTo($(".projector"))
	},
	bind: function() {
		this._super(),
		this.toolbar.find(".done").on("click", this.deactivate.bind(this))
	},
	activate: function() {
		$(".reveal .slides section:not(.stack)>*").append('<div class="editing-ui fragment-controls"><span class="icon i-check-alt"></span></div>'),
		$(".reveal .slides section .editing-ui").on("mousedown", this.onFragmentMouseDown),
		this.editor.disableEditing(),
		this.editor.slideOptions.hide(),
		this._super()
	},
	deactivate: function() {
		$(".reveal .slides section .editing-ui").off("mousedown", this.onFragmentMouseDown).remove(),
		this.editor.enableEditing(),
		this._super()
	},
	onFragmentMouseDown: function(e) {
		var t = $(e.target);
		return t.parent().is("section") || (t = t.parents().filter(function(e, t) {
			return $(t).parent().is("section") && !$(t).is("section")
		})),
		t.length && t.toggleClass("fragment"),
		!1
	}
}),
SL("views.decks.edit.modes").Preview = SL.views.decks.edit.modes.Base.extend({
	init: function(e) {
		this._super(e, "preview")
	},
	activate: function() {
		Reveal.isOverview() && Reveal.toggleOverview(!1),
		this.editor.disableEditing(),
		this.editor.sidebar.close(),
		SL.analytics.track("Deck.edit: Preview", {
			state: "on"
		}),
		this._super(),
		Reveal.configure({
			progress: !0,
			overview: !1,
			touch: !0,
			fragments: !0,
			center: SLConfig.deck.center
		});
		var e = Reveal.getIndices();
		Reveal.slide(e.h, e.v, 0)
	},
	deactivate: function() {
		this.editor.enableEditing(),
		this.isActive() && SL.analytics.track("Deck.edit: Preview", {
			state: "off"
		}),
		this._super(),
		Reveal.configure({
			progress: !1,
			overview: !0,
			touch: !1,
			center: !1,
			fragments: !1
		})
	}
}),
SL("views.decks.edit.panels").Base = Class.extend({
	init: function() {
		this.saved = !1,
		this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this),
		this.onSaveClicked = this.onSaveClicked.bind(this),
		this.onCancelClicked = this.onCancelClicked.bind(this),
		this.onCloseClicked = this.onCloseClicked.bind(this),
		this.bind(),
		this.createSignals()
	},
	bind: function() {
		this.domElement.find(".save").on("click", this.onSaveClicked),
		this.domElement.find(".cancel").on("click", this.onCancelClicked),
		this.domElement.find(".close").on("click", this.onCloseClicked)
	},
	createSignals: function() {
		this.onclose = new signals.Signal
	},
	buffer: function() {
		this.config = JSON.parse(JSON.stringify(SLConfig))
	},
	open: function(e) {
		this.saved = !1,
		this.domElement.addClass("visible"),
		$(document).on("keydown", this.onDocumentKeyDown)
	},
	close: function() {
		this.domElement.removeClass("visible"),
		$(document).off("keydown", this.onDocumentKeyDown),
		this.saved === !1 && this.revert()
	},
	revert: function() {
		this.buffer(),
		this.updateSelection(),
		this.applySelection()
	},
	save: function() {
		return this.saved = !0,
		!0
	},
	updateSelection: function() {},
	applySelection: function() {},
	onSaveClicked: function(e) {
		this.save() && this.onclose.dispatch()
	},
	onCancelClicked: function(e) {
		this.onclose.dispatch()
	},
	onCloseClicked: function(e) {
		this.onclose.dispatch()
	},
	onDocumentKeyDown: function(e) {
		e.keyCode === 27 && this.onclose.dispatch()
	}
}),
SL("views.decks.edit.panels").Migrate = SL.views.decks.edit.panels.Base.extend({
	init: function() {
		this.domElement = $(".sidebar-panel .migrate"),
		this.htmlOutputElement = this.domElement.find(".deck-html-contents"),
		this._super()
	},
	bind: function() {
		this._super(),
		this.domElement.find(".download-html").on("click", this.onDownloadClicked.bind(this)),
		this.htmlOutputElement.on("click", this.onHTMLOutputClicked.bind(this))
	},
	open: function(e) {
		this._super();
		var t = '<div class="slides">' + SL.view.getDeckAsString() + "</div>";
		this.htmlOutputElement.text(SL.util.html.indent(t))
	},
	close: function() {
		this._super()
	},
	onDownloadClicked: function(e) {
		window.open(SL.config.AJAX_EXPORT_DECK(SLConfig.deck.user.username, SLConfig.deck.slug)),
		this.onclose.dispatch(),
		SL.analytics.track("Deck.edit: Download as HTML")
	},
	onHTMLOutputClicked: function(e) {
		this.htmlOutputElement.select()
	}
}),
SL("views.decks.edit.panels").Revisions = SL.views.decks.edit.panels.Base.extend({
	init: function() {
		this.domElement = $(".sidebar-panel .revisions"),
		this.listElement = this.domElement.find(".version-list"),
		this._super()
	},
	reset: function() {
		this.listElement.empty(),
		this.domElement.attr("data-state", "loading")
	},
	open: function(e) {
		this.reset(),
		$.ajax({
			url: SL.config.AJAX_GET_DECK_VERSIONS(SLConfig.deck.id),
			context: this,
			success: function(e) {
				e.total > 0 ? (e.results.forEach(this.addVersion.bind(this)), this.domElement.attr("data-state", "populated")) : this.domElement.attr("data-state", "empty")
			},
			error: function(e) {
				SL.notify(SL.locale.get("GENERIC_ERROR")),
				this.domElement.attr("data-state", "error")
			}
		}),
		this._super()
	},
	addVersion: function(e) {
		var t = $("<li>").appendTo(this.listElement),
		n = $('<span class="text">').appendTo(t);
		n.append(moment(e.created_at).format("MMM DD, hh:mm a")),
		n.append(' <span class="de-em">(' + moment(e.created_at).fromNow() + ")</span>");
		var r = $('<div class="actions">').appendTo(t),
		i = $('<button class="button grey negative restore" data-tooltip="Restore" data-tooltip-delay="1000"><span class="icon i-undo"></button>').appendTo(r);
		i.on("click", this.onRestoreClicked.bind(this, e, i));
		var s = $('<a class="button preview grey" data-tooltip="Preview" data-tooltip-delay="1000"><span class="icon i-eye"></span></a>').appendTo(r);
		s.attr({
			href: SL.config.AJAX_PREVIEW_DECK_VERSION(SLConfig.deck.user.username, SLConfig.deck.slug, e.timestamp),
			target: "_blank"
		}),
		s.on("click", this.onPreviewClicked.bind(this, e, s))
	},
	onPreviewClicked: function(e, t, n) {
		var r = t.attr("href"),
		i = $("<span>"),
		s = $('<a href="' + r + '" target="_blank">Open in new tab</a>').appendTo(i),
		o = $('<button class="button grey negative restore l">Restore</button>').appendTo(i),
		u = $('<button class="button grey done l">Close</button>').appendTo(i);
		o.on("click", this.onRestoreClicked.bind(this, e, o)),
		SL.modal.open("preview-deck", {
			src: r,
			footer: i
		}),
		SL.analytics.track("Deck.edit: Revision preview"),
		n.preventDefault()
	},
	onRestoreClicked: function(e, t, n) {
		confirm(SL.locale.get("DECK_RESTORE_CONFIRM", {
			time: moment(e.created_at).fromNow()
		})) && (SL.analytics.track("Deck.edit: Revision restore"), $.ajax({
			type: "post",
			url: SL.config.AJAX_RESTORE_DECK_VERSION(SLConfig.deck.id, e.id),
			data: e,
			context: this,
			success: function(e) {
				window.location.reload()
			},
			error: function(e) {
				SL.notify(SL.locale.get("GENERIC_ERROR"))
			}
		})),
		n.preventDefault()
	}
}),
SL("views.decks.edit.panels").Settings = SL.views.decks.edit.panels.Base.extend({
	init: function() {
		this.domElement = $(".sidebar-panel .settings"),
		this.rtlToggle = this.domElement.find(".toggle[data-property=rtl]"),
		this.loopToggle = this.domElement.find(".toggle[data-property=should_loop]"),
		this.centerToggle = this.domElement.find(".toggle[data-property=center]"),
		this.rollingLinksToggle = this.domElement.find(".toggle[data-property=rolling_links]"),
		this.titleInput = this.domElement.find("#deck-input-title"),
		this.slug = this.domElement.find(".slug"),
		this.slugInput = this.domElement.find("#deck-input-slug"),
		this.slugPrefix = this.domElement.find(".slug .prefix"),
		this.descriptionInput = this.domElement.find("#deck-input-description"),
		this._super()
	},
	bind: function() {
		this._super(),
		this.domElement.find(".toggle").on("click", this.onToggleClicked.bind(this)),
		this.titleInput.on("keyup", this.onTitleKeyUp.bind(this)),
		this.slugInput.on("focus", this.onSlugFocus.bind(this)),
		this.slugInput.on("blur", this.onSlugBlur.bind(this)),
		this.descriptionInput.on("keypress", this.onDescriptionKeyPress.bind(this))
	},
	open: function(e) {
		this._super(),
		this.buffer(),
		this.updateSelection(),
		this.titleInput.val(this.config.deck.title),
		this.slugInput.val(this.config.deck.slug),
		this.descriptionInput.val(this.config.deck.description),
		this.slugPrefix.text(window.location.host + "/" + SLConfig.current_user.username + "/"),
		this.slugInput.css("text-indent", this.slugPrefix.width()),
		SLConfig.deck.published ? this.domElement.addClass("published") : this.domElement.removeClass("published")
	},
	close: function() {
		this._super()
	},
	save: function() {
		var e = this.titleInput.val(),
		t = this.slugInput.val(),
		n = this.descriptionInput.val();
		return e ? t ? (this._super(), SLConfig.deck.title = e, SLConfig.deck.description = n ? n.replace(/\n/g, " ") : "", SLConfig.deck.slug = t, SLConfig.deck.rtl = this.rtlToggle.hasClass("on"), SLConfig.deck.center = this.centerToggle.hasClass("on"), SLConfig.deck.should_loop = this.loopToggle.hasClass("on"), SLConfig.deck.rolling_links = this.rollingLinksToggle.hasClass("on"), SLConfig.deck.dirty = !0, SL.analytics.track("Deck.edit: Setting saved", {
			rtl: SLConfig.deck.rtl,
			center: SLConfig.deck.center,
			should_loop: SLConfig.deck.should_loop,
			rolling_links: SLConfig.deck.rolling_links
		}), $("html").toggleClass("rtl", SLConfig.deck.rtl), !0) : (SL.notify(SL.locale.get("DECK_EDIT_INVALID_SLUG"), "negative"), !1) : (SL.notify(SL.locale.get("DECK_EDIT_INVALID_TITLE"), "negative"), !1)
	},
	updateSelection: function() {
		this.rtlToggle.toggleClass("on", this.config.deck.rtl),
		this.loopToggle.toggleClass("on", this.config.deck.should_loop),
		this.centerToggle.toggleClass("on", this.config.deck.center),
		this.rollingLinksToggle.toggleClass("on", this.config.deck.rolling_links)
	},
	applySelection: function() {
		Reveal.configure({
			rtl: this.rtlToggle.hasClass("on"),
			loop: this.loopToggle.hasClass("on")
		})
	},
	generateSlug: function() {
		if (!SLConfig.deck.published && SLConfig.deck.slug === SL.util.string.slug(SLConfig.deck.title)) {
			var e = this.titleInput.val(),
			t = SL.util.string.slug(e);
			this.slugInput.val(t)
		}
	},
	onToggleClicked: function(e) {
		$(e.currentTarget).toggleClass("on"),
		this.applySelection()
	},
	onTitleKeyUp: function(e) {
		this.generateSlug()
	},
	onDescriptionKeyPress: function(e) {
		return e.keyCode == 13 ? !1 : this.descriptionInput.val().length < SL.config.DECK_DESCRIPTION_MAXLENGTH
	},
	onSlugFocus: function(e) {
		SL.tooltip.show("Changing the URL of your deck will break existing links to it.", {
			anchor: this.slugInput,
			direction: "r",
			maxwidth: 220
		})
	},
	onSlugBlur: function(e) {
		SL.tooltip.hide(),
		this.slugInput.val(SL.util.string.slug(this.slugInput.val()))
	}
}),
SL("views.decks.edit.panels").Share = SL.views.decks.edit.panels.Base.extend({
	init: function() {
		this.domElement = $(".sidebar-panel .share"),
		this.sharer = new SL.components.DeckSharer,
		this.sharer.appendTo(this.domElement.find(".contents")),
		this._super()
	},
	open: function(e) {
		this._super(),
		this.sharer.render(SLConfig.deck),
		this.domElement.find(".url input").addClass("xl")
	}
}),
SL("views.decks.edit.panels").Style = SL.views.decks.edit.panels.Base.extend({
	init: function() {
		this.domElement = $(".sidebar-panel .style"),
		this.hasRenderedThemes = !1,
		this.hasRenderedThemeColors = !1,
		this.hasRenderedThemeFonts = !1,
		this._super()
	},
	bind: function() {
		this._super(),
		this.domElement.find(".color li").on("click", this.onColorClicked.bind(this)),
		this.domElement.find(".font li").on("click", this.onFontClicked.bind(this)),
		this.domElement.find(".transition li").on("click", this.onTransitionClicked.bind(this)),
		this.domElement.find(".advanced-styles").on("click", this.onAdvancedStylesCLicked.bind(this))
	},
	renderColors: function() {
		this.hasRenderedThemeColors === !1 && (this.hasRenderedThemeColors = !0, this.domElement.find(".color li").each(function(e, t) {
			t = $(t),
			t.addClass("theme-color-" + t.attr("data-color")),
			t.addClass("themed"),
			t.html('<div class="theme-body-color-block"></div><div class="theme-link-color-block"></div>')
		}))
	},
	renderFonts: function() {
		this.hasRenderedThemeFonts === !1 && (this.hasRenderedThemeFonts = !0, this.domElement.find(".font li").each(function(e, t) {
			t = $(t),
			t.addClass("theme-font-" + t.attr("data-font")),
			t.addClass("themed"),
			t.html("<h1>" + t.attr("data-name") + "</h1>" + "<a>Type</a>")
		}))
	},
	scroll: function() {
		var e = this.domElement.find(".transition li.selected").get(0),
		t = this.domElement.find(".color li.selected").get(0),
		n = this.domElement.find(".font li.selected").get(0);
		e && typeof e.scrollIntoView == "function" && e.scrollIntoView(),
		t && typeof t.scrollIntoView == "function" && t.scrollIntoView(),
		n && typeof n.scrollIntoView == "function" && n.scrollIntoView(),
		this.domElement.scrollTop(0)
	},
	open: function(e) {
		this._super(),
		this.renderColors(),
		this.renderFonts(),
		this.buffer(),
		this.updateSelection(),
		this.scroll()
	},
	close: function() {
		this._super()
	},
	save: function() {
		return this._super(),
		SLConfig.deck.dirty = !0,
		SLConfig.deck.transition = this.config.deck.transition,
		SLConfig.deck.theme_font = this.config.deck.theme_font,
		SLConfig.deck.theme_color = this.config.deck.theme_color,
		Reveal.configure({
			transition: SLConfig.deck.transition
		}),
		!0
	},
	updateSelection: function() {
		this.domElement.find(".color li").removeClass("selected"),
		this.domElement.find(".color li[data-color=" + this.config.deck.theme_color + "]").addClass("selected"),
		this.domElement.find(".font li").removeClass("selected"),
		this.domElement.find(".font li[data-font=" + this.config.deck.theme_font + "]").addClass("selected"),
		this.domElement.find(".font li").each(function(e, t) {
			SL.util.html.removeClasses(t,
			function(e) {
				return e.match(/^theme\-color\-/gi)
			}),
			$(t).addClass("theme-color-" + this.config.deck.theme_color)
		}.bind(this)),
		this.domElement.find(".transition li").removeClass("selected"),
		this.domElement.find(".transition li[data-transition=" + this.config.deck.transition + "]").addClass("selected")
	},
	applySelection: function() {
		var e = $(".reveal-viewport"),
		t = $(".reveal");
		e.attr("class", e.attr("class").replace(/theme\-(font|color)\-([a-z0-9-])*/gi, "")),
		e.addClass("theme-font-" + this.config.deck.theme_font),
		e.addClass("theme-color-" + this.config.deck.theme_color),
		this.domElement.find(".transition li").each(function() {
			t.removeClass($(this).attr("data-transition"))
		}),
		t.addClass(this.config.deck.transition),
		Reveal.layout()
	},
	onColorClicked: function(e) {
		this.config.deck.theme_color = $(e.currentTarget).data("color"),
		this.updateSelection(),
		this.applySelection(),
		SL.analytics.track("Deck.edit: Theme clicked", {
			theme_color: this.config.deck.theme_color
		})
	},
	onFontClicked: function(e) {
		this.config.deck.theme_font = $(e.currentTarget).data("font"),
		this.updateSelection(),
		this.applySelection(),
		SL.analytics.track("Deck.edit: Theme clicked", {
			theme_font: this.config.deck.theme_font
		})
	},
	onTransitionClicked: function(e) {
		this.config.deck.transition = $(e.currentTarget).data("transition"),
		this.updateSelection(),
		this.applySelection(),
		SL.analytics.track("Deck.edit: Transition clicked", {
			transition: this.config.deck.transition
		})
	},
	onAdvancedStylesCLicked: function(e) {
		SL.modal.open("edit-css")
	}
}),
SL("views.decks.edit").Sidebar = Class.extend({
	init: function() {
		this.sidebarElement = $(".sidebar"),
		this.sidebarPrimary = this.sidebarElement.find(".primary"),
		this.sidebarSecondary = this.sidebarElement.find(".secondary"),
		this.sidebarSecondary = this.sidebarElement.find(".secondary"),
		this.sidebarHeader = this.sidebarElement.find(".global-header"),
		this.panelElement = $(".sidebar-panel"),
		this.saveButton = this.sidebarElement.find(".button.save"),
		this.previewButton = this.sidebarElement.find(".button.preview"),
		this.migrateButton = this.sidebarElement.find(".button.migrate"),
		this.publishButton = this.sidebarElement.find(".button.publish"),
		this.settingsButton = this.sidebarElement.find(".button.settings"),
		this.revisionsButton = this.sidebarElement.find(".button.revisions"),
		this.arrangeButton = this.sidebarElement.find(".button.arrange"),
		this.styleButton = this.sidebarElement.find(".button.style"),
		this.shareButton = this.sidebarElement.find(".button.share"),
		this.autoSaveToggle = this.sidebarElement.find(".toggle.auto-save"),
		this.autoHideToggle = this.sidebarElement.find(".toggle.auto-hide"),
		SL.settings.getValue(SL.settings.EDITOR_AUTO_SAVE) && this.autoSaveToggle.addClass("on"),
		SL.settings.getValue(SL.settings.EDITOR_AUTO_HIDE) && (SL.util.skipCSSTransitions(), this.autoHideToggle.addClass("on")),
		this.isAutoHiding = !1,
		this.currentPanel = null,
		this.createSignals(),
		this.render(),
		this.bind(),
		this.layout(),
		this.updatePublishButton(),
		this.updateAutoHideState()
	},
	bind: function() {
		this.saveButton.on("click", this.onSaveClicked.bind(this)),
		this.previewButton.on("click", this.onPreviewClicked.bind(this)),
		this.migrateButton.on("click", this.onMigrateClicked.bind(this)),
		this.settingsButton.on("click", this.onSettingsClicked.bind(this)),
		this.revisionsButton.on("click", this.onRevisionsClicked.bind(this)),
		this.publishButton.on("click", this.onPublishClicked.bind(this)),
		this.arrangeButton.on("click", this.onArrangeClicked.bind(this)),
		this.styleButton.on("click", this.onStyleClicked.bind(this)),
		this.shareButton.on("click", this.onShareClicked.bind(this)),
		this.autoSaveToggle.on("click", this.onAutoSaveClicked.bind(this)),
		this.autoHideToggle.on("click", this.onAutoHideClicked.bind(this)),
		this.panelElement.on("click", this.onPanelElementClicked.bind(this)),
		this.settingsPanel.onclose.add(this.close.bind(this)),
		this.migratePanel.onclose.add(this.close.bind(this)),
		this.revisionsPanel.onclose.add(this.close.bind(this)),
		this.stylePanel.onclose.add(this.close.bind(this)),
		this.sharePanel.onclose.add(this.close.bind(this)),
		$(window).on("mousemove click", this.onMouseImpulse.bind(this)),
		$(window).on("resize", this.onWindowResize.bind(this))
	},
	createSignals: function() {
		this.saveClicked = new signals.Signal,
		this.previewClicked = new signals.Signal
	},
	render: function() {
		this.revisionsPanel = new SL.views.decks.edit.panels.Revisions,
		this.settingsPanel = new SL.views.decks.edit.panels.Settings,
		this.migratePanel = new SL.views.decks.edit.panels.Migrate,
		this.stylePanel = new SL.views.decks.edit.panels.Style,
		this.sharePanel = new SL.views.decks.edit.panels.Share
	},
	layout: function() {
		var e = window.innerHeight - (this.sidebarPrimary.outerHeight(!0) + this.sidebarHeader.outerHeight(!0));
		this.sidebarSecondary.css("max-height", e)
	},
	open: function(e) {
		this.currentPanel && this.currentPanel.close(),
		SL.view.changeMode(null);
		switch (e) {
		case "settings":
			this.currentPanel = this.settingsPanel;
			break;
		case "migrate":
			this.currentPanel = this.migratePanel;
			break;
		case "style":
			this.currentPanel = this.stylePanel;
			break;
		case "revisions":
			this.currentPanel = this.revisionsPanel;
			break;
		case "share":
			this.currentPanel = this.sharePanel
		}
		this.setActiveButton(e),
		this.currentPanel.open(),
		this.panelElement.addClass("visible"),
		SL.analytics.track("Deck.edit: Open panel", {
			type: e
		})
	},
	close: function() {
		this.currentPanel && this.currentPanel.close(),
		this.setActiveButton(null),
		this.panelElement.removeClass("visible")
	},
	toggle: function(e) {
		this.isExpanded(e) ? this.close() : this.open(e)
	},
	setActiveButton: function(e) {
		e ? (this.sidebarElement.addClass("has-active-panel"), this.sidebarSecondary.find(".active").removeClass("active"), this.sidebarSecondary.find(".button." + e).addClass("active")) : (this.sidebarElement.removeClass("has-active-panel"), this.sidebarSecondary.find(".active").removeClass("active"))
	},
	isExpanded: function(e) {
		return e ? this.panelElement.find("." + e).hasClass("visible") : this.panelElement.hasClass("visible")
	},
	updateSaveButton: function(e) {
		this.saveButton.attr("class", "button save " + (e || ""))
	},
	updatePublishButton: function() {
		this.publishButton.removeAttr("data-tooltip-direction"),
		this.publishButton.removeAttr("data-tooltip-delay"),
		this.publishButton.removeAttr("data-tooltip");
		var e = this.publishButton.find(".text"),
		t = this.publishButton.find(".icon");
		SLConfig.deck.published ? (this.publishButton.removeClass("publish").addClass("unpublish"), 
			t.removeClass("i-unlock-stroke").addClass("i-lock-stroke"), e.text("Make Private"), 
			SL.util.user.isPro() || (this.publishButton.attr("data-tooltip-direction", "r"), this.publishButton.attr("data-tooltip-delay", "800"), this.publishButton.attr("data-tooltip", "You need a Pro account to<br>make decks private."))) : (this.publishButton.removeClass("unpublish").addClass("publish"), t.removeClass("i-lock-stroke").addClass("i-unlock-stroke"), e.text("Publish"))
	},
	updateArrangeButton: function(e) {
		e === "arranging" ? this.setActiveButton("arrange") : this.setActiveButton(null)
	},
	updateAutoHideState: function() {
		this.isAutoHiding = this.isAutoHideOn() || this.isAutoHideForced(),
		$("html").toggleClass("sidebar-auto-hide", this.isAutoHiding)
	},
	isAutoSaveOn: function() {
		return this.autoSaveToggle.hasClass("on")
	},
	isAutoHideOn: function() {
		return this.autoHideToggle.hasClass("on")
	},
	isAutoHideForced: function() {
		return ! 1
	},
	onSaveClicked: function(e) {
		e.preventDefault(),
		this.saveClicked.dispatch()
	},
	onPreviewClicked: function(e) {
		e.preventDefault(),
		this.previewClicked.dispatch()
	},
	onMigrateClicked: function(e) {
		var t = $(".reveal .slides").children().map(function() {
			var e = $(this).clone();
			return e.find("section").add(e).each(function() {
				var e = $.map(this.attributes,
				function(e) {
					return e.name
				}),
				t = $(this);
				$.each(e,
				function(e, n) {
					t.removeAttr(n)
				})
			}),
			e.wrap("<div>").parent().html()
		}).toArray().join("");
		t = '<div class="slides">' + t + "</div>",
		$(".sidebar .export textarea").text(SL.util.html.indent(t)),
		this.toggle("migrate")
	},
	onImportClicked: function(e) {
		this.toggle("import")
	},
	onArrangeClicked: function(e) {
		this.close(),
		Reveal.toggleOverview()
	},
	onSettingsClicked: function(e) {
		this.toggle("settings")
	},
	onRevisionsClicked: function(e) {
		this.toggle("revisions")
	},
	onStyleClicked: function(e) {
		this.toggle("style")
	},
	onShareClicked: function(e) {
		this.toggle("share")
	},
	onPublishClicked: function(e) {
		e.preventDefault(),
		SL.util.user.isPro() || !SLConfig.deck.published ? (this.close(), SLConfig.deck.published ? SL.view.unpublish() : SL.view.publish()) : window.open("/pricing")
	},
	onAutoSaveClicked: function(e) {
		this.autoSaveToggle.toggleClass("on"),
		SL.settings.setValue(SL.settings.EDITOR_AUTO_SAVE, this.autoSaveToggle.hasClass("on")),
		SL.analytics.track("Deck.edit: Auto-save clicked")
	},
	onAutoHideClicked: function(e) {
		this.autoHideToggle.toggleClass("on"),
		this.sidebarElement.addClass("visible"),
		SL.settings.setValue(SL.settings.EDITOR_AUTO_HIDE, this.autoHideToggle.hasClass("on")),
		this.updateAutoHideState(),
		SL.analytics.track("Deck.edit: Auto-hide clicked")
	},
	onMouseImpulse: function(e) {
		this.isAutoHiding & !this.isExpanded() && (e.clientX > this.sidebarElement.width() ? this.sidebarElement.removeClass("visible") : e.clientX < 50 && this.sidebarElement.addClass("visible"))
	},
	onWindowResize: function(e) {
		this.layout()
	},
	onPanelElementClicked: function(e) {
		e.target == this.panelElement.get(0) && this.close()
	}
}),
SL("views.decks.edit").SlideOptions = Class.extend({
	init: function(e) {
		this.editor = e,
		this.render(),
		this.bind()
	},
	render: function() {
		this.domElement = $('<div class="slide-options"></div>').appendTo($(".projector")),
		this.listElement = $("<ul></ul>").appendTo(this.domElement),
		this.removeSlideElement = $('<li class="remove-slide"><span class="icon i-trash-stroke"></span></li>').appendTo(this.listElement),
		this.backgroundElement = $('<li class="background"><span class="icon i-droplet"></span></li>').appendTo(this.listElement),
		this.fragmentElement = $('<li class="fragment"><span class="icon i-bolt"></span></li>').appendTo(this.listElement),
		this.htmlElement = $('<li class="html"><span class="icon i-file-xml"></span></li>').appendTo(this.listElement);
		var e = {
			direction: "l",
			delay: 1e3
		};
		SL.tooltip.anchorTo(this.removeSlideElement, "Remove current slide", e),
		SL.tooltip.anchorTo(this.backgroundElement, "Slide background color", e),
		SL.tooltip.anchorTo(this.fragmentElement, "Create fragments", e),
		SL.tooltip.anchorTo(this.htmlElement, "Edit HTML", e),
		this.renderBackgroundMenu()
	},
	renderBackgroundMenu: function() {
		var e = ["none", "alert", "sunset", "soothe", "cobalt", "submerge", "lila", "blackout", "whiteout"];
		this.backgroundMenu = $('<div class="background-menu">').appendTo(this.domElement);
		var t = $("<ul></ul>").appendTo(this.backgroundMenu);
		e.forEach(function(e) {
			t.append('<li class="' + e + '"></li>')
		}),
		t.find(".none").append('<span class="icon i-denied"></span>')
	},
	bind: function() {
		this.removeSlideElement.on("mousedown", this.onRemoveSlideClicked.bind(this)),
		this.backgroundElement.on("mousedown", this.onBackgroundColorClicked.bind(this)),
		this.fragmentElement.on("mousedown", this.onFragmentClicked.bind(this)),
		this.htmlElement.on("mousedown", this.onHTMLClicked.bind(this)),
		this.backgroundMenu.find("li").on("mousedown", this.onBackgroundColorItemClicked.bind(this))
	},
	show: function() {
		this.removeSlideElement.toggleClass("disabled", $(".reveal .slides section").length < 2),
		this.domElement.addClass("show")
	},
	hide: function() {
		this.domElement.removeClass("show"),
		this.backgroundMenu.removeClass("show")
	},
	isVisible: function() {
		return this.domElement.hasClass("show")
	},
	onRemoveSlideClicked: function(e) {
		e.preventDefault(),
		confirm("Are you sure you want to remove this slide?") && this.editor.removeCurrentSlide()
	},
	onFragmentClicked: function(e) {
		e.preventDefault(),
		this.editor.getMode("fragment").toggle()
	},
	onBackgroundColorClicked: function(e) {
		e.preventDefault(),
		this.backgroundMenu.toggleClass("show"),
		this.backgroundMenu.css("top", this.backgroundElement.position().top)
	},
	onBackgroundColorItemClicked: function(e) {
		e.preventDefault();
		var t = $(e.currentTarget).attr("class");
		if (t) {
			t === "none" ? (Reveal.getCurrentSlide().removeAttribute("data-state"), this.backgroundMenu.removeClass("show")) : Reveal.getCurrentSlide().setAttribute("data-state", t);
			var n = Reveal.getIndices();
			Reveal.slide(n.h, n.v, n.f)
		}
	},
	onHTMLClicked: function(e) {
		e.preventDefault(),
		SL.modal.open("edit-html")
	}
}),
SL("views.decks").Embed = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.footerElement = $(".embed-footer"),
		this.revealElement = $(".reveal"),
		SL.util.setupReveal({
			openLinksInTabs: !0
		}),
		$(window).on("resize", this.layout.bind(this)),
		$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", this.layout.bind(this)),
		this.footerElement.find(".fullscreen").on("click", this.onFullScreenClicked.bind(this)),
		this.layout()
	},
	layout: function() {
		this.footerElement.is(":visible") ? this.revealElement.height(window.innerHeight - $(".embed-footer").height()) : this.revealElement.height("100%"),
		Reveal.layout()
	},
	onFullScreenClicked: function(e) {
		var t = $("html").get(0),
		n = t.requestFullScreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullScreen;
		if (n) return n.apply(t),
		!1
	}
}),
SL("views.decks").Present = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.revealElement = $(".reveal"),
		SL.util.setupReveal({
			openLinksInTabs: !0
		})
	}
}),
SL("views.decks").Show = SL.views.Base.extend({
	init: function() {
		this._super(),
		$(".options .share-button").on("click", this.onShareClicked),
		$(".options .comment-button").on("click", this.onCommentsClicked),
		$(".options .fullscreen-button").on("click", this.onFullScreenClicked),
		$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", Reveal.layout),
		SL.util.setupReveal({
			openLinksInTabs: !0
		}),
		this.setupDisqus()
	},
	setupDisqus: function() {
		if ($("#disqus_thread").length) {
			var e = window.disqus_shortname = "sgithub",
			t = window.disqus_identifier = SLConfig.deck.id; (function() {
				var t = document.createElement("script");
				t.type = "text/javascript",
				t.async = !0,
				t.src = "//" + e + ".disqus.com/embed.js",
				(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
			})()
		} else $(".options .comment-button").hide()
	},
	onShareClicked: function(e) {
		return typeof SLConfig != "undefined" && typeof SLConfig.deck.user.username == "string" && typeof SLConfig.deck.slug == "string" ? SL.modal.open("share-deck", SLConfig.deck) : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"),
		SL.analytics.track("User.show: Share clicked"),
		!1
	},
	onCommentsClicked: function(e) {
		return $("html, body").animate({
			scrollTop: $("#comments").offset().top - 20
		},
		1e3),
		SL.analytics.track("User.show: Comments clicked"),
		!1
	},
	onFullScreenClicked: function(e) {
		var t = $(".reveal-viewport").get(0),
		n = t.requestFullScreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullScreen;
		SL.analytics.track("User.show: Fullscreen clicked");
		if (n) return n.apply(t),
		!1
	}
}),
SL("views.devise").All = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.formElement = $("form"),
		this.formElement.length && this.formElement.find(".unit[data-validate]").each(function(e, t) {
			new SL.components.FormUnit(t)
		}),
		this.formElement.on("submit",
		function(e) {
			e.isDefaultPrevented() || this.formElement.find("button[type=submit]").prop("disabled", !0).addClass("loading")
		}.bind(this)),
		this.hideAddressBar()
	}
}),
SL("views.devise").Edit = SL.views.devise.All.extend({
	init: function() {
		this._super(),
		$(".delete-account-toggle").on("click", this.onDeleteAccountToggleClicked.bind(this)),
		$(".delete-profile-photo").on("click", this.onDeleteProfilePhotoClicked.bind(this)),
		$("#user_email").on("change keyup", this.onEmailChanged.bind(this)),
		$("#user_password").on("change keyup", this.onNewPasswordChanged.bind(this))
	},
	updatePasswordVerification: function() {
		var e = $("#user_email").parents(".unit"),
		t = $("#user_password").parents(".unit"),
		n = $("#user_current_password").parents(".unit"),
		r = e.data("controller"),
		i = t.data("controller");
		r && i && r.isUnchanged() && i.isUnchanged() ? (n.removeAttr("data-required"), n.addClass("hidden")) : (n.attr("data-required", "true"), n.removeClass("hidden"))
	},
	onDeleteAccountToggleClicked: function(e) {
		e.preventDefault(),
		$(".delete-account").toggleClass("visible")
	},
	onDeleteProfilePhotoClicked: function(e) {
		e.preventDefault(),
		$.ajax({
			url: SL.config.AJAX_UPDATE_USER,
			type: "PUT",
			context: this,
			data: {
				user: {
					profile_photo: ""
				}
			}
		}).done(function(e) {
			$(".photo-editor").attr("data-photo-type", "gravatar")
		}).fail(function(e) {
			SL.notify("An error occured while saving", "negative")
		})
	},
	onEmailChanged: function() {
		this.updatePasswordVerification()
	},
	onNewPasswordChanged: function() {
		this.updatePasswordVerification()
	}
}),
SL("views.home").Index = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.paginateLeftButton = $(".marquee .paginate-left"),
		this.paginateRightButton = $(".marquee .paginate-right"),
		this.backgroundElement = $(".marquee .marquee-background"),
		this.sharingElement = $(".marquee .sharing"),
		this.hideAddressBar(),
		this.setupBackground(),
		this.setupReveal(),
		this.bind()
	},
	setupBackground: function() {
		this.backgroundImage = $("<img>", {
			src: SL.util.getStaticAsset("homepage-background.jpg"),
			load: this.onBackgroundLoaded.bind(this)
		})
	},
	setupReveal: function() {
		Reveal.initialize({
			controls: !0,
			progress: !1,
			history: !1,
			center: !1,
			touch: !1,
			rollingLinks: !1,
			width: "100%",
			height: "100%",
			maxScale: 1,
			minScale: 1,
			margin: 0,
			transition: "default"
		})
	},
	bind: function() {
		this.sharingElement.on("mouseover", this.onSharingMouseOver.bind(this)),
		this.paginateLeftButton.on("touchstart click", this.onPaginateLeftClicked.bind(this)),
		this.paginateRightButton.on("touchstart click", this.onPaginateRightClicked.bind(this)),
		this.paginateRightButton.on("mouseover", this.onPaginateRightOver.bind(this)),
		$(".marquee .reveal").on("touchstart click", this.onPaginateRightClicked.bind(this)),
		Reveal.addEventListener("ready", this.onRevealReady.bind(this)),
		Reveal.addEventListener("slidechanged", this.onSlideChanged.bind(this))
	},
	updatePaginationButtons: function() {
		var e = Reveal.availableRoutes();
		this.paginateLeftButton.toggleClass("disabled", !e.left && !e.up),
		this.paginateRightButton.toggleClass("disabled", !e.right && !e.down)
	},
	onPaginateLeftClicked: function(e) {
		return Reveal.left(),
		e.preventDefault(),
		!1
	},
	onPaginateRightClicked: function(e) {
		return Reveal.next(),
		e.preventDefault(),
		!1
	},
	onRevealReady: function(e) {
		$(".marquee .example").addClass("show"),
		this.updatePaginationButtons(),
		this.highlightRightArrowInterval = setInterval(this.onHighlightRightArrow.bind(this), 2500)
	},
	onSlideChanged: function(e) {
		this.updatePaginationButtons(),
		clearInterval(this.highlightRightArrowInterval)
	},
	onBackgroundLoaded: function(e) {
		this.backgroundElement.css("background-image", "url(" + this.backgroundImage.attr("src") + ")").addClass("show")
	},
	onPaginateRightOver: function(e) {
		clearInterval(this.highlightRightArrowInterval)
	},
	onHighlightRightArrow: function(e) {
		this.paginateRightButton.removeClass("bounce"),
		setTimeout(function() {
			this.paginateRightButton.addClass("bounce")
		}.bind(this), 1)
	},
	onSharingMouseOver: function() {
		this.sharingElement.hasClass("parsed") || (this.sharingElement.addClass("parsed"), this.sharingElement.html('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fslidesapp&amp;send=false&amp;layout=button_count&amp;width=88&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=20&amp" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:88px; height:20px;" allowTransparency="true"></iframe><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://slid.es" data-text="Create beautiful presentations online with @slidesapp" data-count="horizontal" data-related="slidesapp"></a>'), !
		function(e, t, n) {
			var r, i = e.getElementsByTagName(t)[0];
			e.getElementById(n) || (r = e.createElement(t), r.id = n, r.src = "//platform.twitter.com/widgets.js", i.parentNode.insertBefore(r, i))
		} (document, "script", "twitter-wjs"))
	}
}),
SL("views.subscriptions").New = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.onFormSubmit = this.onFormSubmit.bind(this),
		this.onStripeResponse = this.onStripeResponse.bind(this),
		this.formElement = $("#payment-form"),
		this.formElement.on("submit", this.onFormSubmit),
		$("#stripe-card-number").payment("formatCardNumber"),
		$("#stripe-card-cvc").payment("formatCardCVC"),
		$("#stripe-month").payment("restrictNumeric"),
		$("#stripe-year").payment("restrictNumeric"),
		SL.util.device.supportedByEditor() || $(".column").prepend("<section class=\"critical-error\"><h2>Not supported</h2><p>It looks like you're using a browser which isn't suported by the Slides editor. Please make sure to try the editor before upgrading.</p></section>")
	},
	onFormSubmit: function(e) {
		return this.formElement.find("button[type=submit]").prop("disabled", !0).addClass("loading"),
		Stripe.createToken(this.formElement, this.onStripeResponse),
		e.preventDefault(),
		!1
	},
	onStripeResponse: function(e, t) {
		if (t.error) SL.notify(t.error.message, "negative"),
		this.formElement.find("button[type=submit]").prop("disabled", !1).removeClass("loading");
		else {
			var n = t.id;
			this.formElement.append($('<input type="hidden" name="account_token" />').val(n)),
			this.formElement.get(0).submit()
		}
	}
}),
SL("views.subscriptions").Show = SL.views.Base.extend({
	init: function() {
		this._super(),
		this.load()
	},
	load: function() {
		$.ajax({
			url: SL.config.AJAX_SUBSCRIPTIONS_STATUS,
			type: "GET",
			context: this
		}).done(this.onDataLoaded).fail(this.onDataFailed)
	},
	render: function(e) {
		$(".billing-loader").remove(),
		this.renderDetails(e),
		this.renderHistory(e)
	},
	renderDetails: function(e) {
		var t = $('<section class="billing-details"><h2>Billing details</h2></section>').appendTo(".billing-wrapper"),
		n = e.customer.subscription && !e.customer.subscription.cancel_at_period_end;
		if (n) {
			t.append('<div class="field status"><span class="label">Status</span><span class="value">Active</span></div>'),
			e.customer.active_card && t.append('<div class="field card"><span class="label">Card</span><span class="value">•••• •••• •••• ' + e.customer.active_card.last4 + "</span>" + "</div>");
			if (e.customer.subscription) {
				var r = moment.unix(e.customer.subscription.current_period_start).format("MMM Do") + " - " + moment.unix(e.customer.subscription.current_period_end).format("MMM Do, YYYY");
				t.append('<div class="field payment-cycle"><span class="label">Payment cycle</span><span class="value">' + r + "</span>" + "</div>")
			}
			t.append('<footer class="actions"><a class="button l" href="' + SL.config.SUBSCRIPTIONS_EDIT_URL + '">Edit CC</a>' + '<button class="button negative l cancel-subscription">Cancel subscription</button>' + "</footer>")
		} else {
			var i = moment.unix(e.customer.subscription.current_period_end).format("MMM Do, YYYY");
			t.append('<div class="field status"><span class="label">Status</span><span class="value">Pro until ' + i + "</span>" + "</div>"),
			t.append('<footer class="actions"><a class="button l" href="' + SL.config.SUBSCRIPTIONS_NEW_URL + '">Return to Pro</a>' + "</footer>")
		}
		t.find(".cancel-subscription").on("click", this.onCancelSubscriptionClicked.bind(this))
	},
	renderHistory: function(e) {
		var t = $('<section class="billing-history"><h2>Payment history</h2></section>').appendTo(".billing-wrapper"),
		n = $("<ul></ul>").appendTo(t);
		e.customer.charges && e.customer.charges.length ? e.customer.charges.forEach(function(e) {
			var t = $("<li>");
			t.append('<span class="amount">' + (e.amount / 100).toFixed(2) + "</span> / "),
			t.append('<span class="date">' + moment.unix(e.created).format("MMM Do, YYYY") + "</span>"),
			t.append('<span class="card">•••• •••• •••• ' + e.card.last4 + "</span>"),
			t.appendTo(n)
		}.bind(this)) : n.replaceWith("<p>" + SL.locale.get("BILLING_DETAILS_NOHISTORY") + "</p>")
	},
	onDataLoaded: function(e) {
		this.render(e)
	},
	onDataFailed: function(e) {
		$(".billing-loader").text(SL.locale.get("BILLING_DETAILS_ERROR"))
	},
	onCancelSubscriptionClicked: function(e) {
		e.preventDefault();
		if (confirm(SL.locale.get("REMOVE_PRO_CONFIRM"))) {
			var t = $(".billing-details .cancel-subscription").addClass("disabled loading");
			$.ajax({
				url: SL.config.AJAX_SUBSCRIPTIONS,
				type: "DELETE",
				context: this
			}).done(function(e) {
				SL.notify(SL.locale.get("REMOVE_PRO_SUCCESS")),
				window.location.reload()
			}).fail(function(e) {
				SL.notify(SL.locale.get("GENERIC_ERROR")),
				t.removeClass(" disabled loading")
			})
		}
	}
}),
SL("views.users").Show = SL.views.Base.extend({
	init: function() {
		this._super(),
		$(".decks li").each(function(e, t) {
			t = $(t),
			t.on("click", this.onDeckClicked.bind(this, t)),
			t.find(".edit").on("click", this.onEditClicked.bind(this, t)),
			t.find(".share").on("click", this.onShareClicked.bind(this, t)),
			t.find(".delete").on("click", this.onDeleteClicked.bind(this, t)),
			t.find(".publish").on("click", this.onPublishClicked.bind(this, t)),
			t.find(".lock-icon").on("click", this.onPublishClicked.bind(this, t)),
			t.find(".unpublish").on("click", this.onUnpublishClicked.bind(this, t))
		}.bind(this)),
		this.hideAddressBar()
	},
	getDeckData: function(e) {
		return {
			user: SLConfig.current_user,
			slug: e.attr("data-slug"),
			title: e.attr("data-title"),
			access_token: e.attr("data-access_token"),
			published: e.attr("data-published") === "true"
		}
	},
	onDeckClicked: function(e, t) {
		$(t.target).parents(".controls").length === 0 && $(t.target).hasClass("lock-icon") === !1 && (t.preventDefault(), window.location = e.find(">h2 a").attr("href"))
	},
	onEditClicked: function(e, t) {
		window.location = e.attr("data-url") + "/edit"
	},
	onDeleteClicked: function(e, t) {
		var n = this.getDeckData(e);
		confirm(SL.locale.get("DECK_DELETE_CONFIRM", {
			title: n.title
		})) && (e.find(".details .status").text("Deleting..."), $.ajax({
			type: "DELETE",
			url: SL.config.AJAX_UPDATE_DECK(n.user.username, n.slug),
			data: {}
		}).done(function(t) {
			e.addClass("no-transition"),
			e.css({
				overflow: "hidden"
			}),
			e.animate({
				opacity: 0,
				height: 0,
				minHeight: 0,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0
			},
			{
				duration: 500,
				complete: function() {
					e.remove()
				}
			}),
			SL.notify(SL.locale.get("DECK_DELETE_SUCCESS"))
		}.bind(this)).fail(function(e) {
			SL.notify(SL.locale.get("DECK_DELETE_ERROR"), "negative")
		}.bind(this))),
		SL.analytics.track("User.show: Delete clicked")
	},
	onPublishClicked: function(e, t) {
		var n = this.getDeckData(e);
		confirm(SL.locale.get("DECK_PUBLISH_CONFIRM", {
			title: n.title
		})) && (e.find(".details .status").text(SL.locale.get("DECK_PUBLISH_WORKING")), $.ajax({
			type: "PUT",
			url: SL.config.AJAX_UPDATE_DECK(n.user.username, n.slug),
			data: {
				deck: {
					published: !0
				}
			}
		}).done(function(t) {
			t.deck && t.deck.slug && e.attr("data-slug", t.deck.slug),
			e.find(".details .status").text("Published"),
			e.removeClass("private").addClass("public").attr({
				"data-published": !0
			}),
			SL.notify(SL.locale.get("DECK_PUBLISH_SUCCESS"))
		}.bind(this)).fail(function(e) {
			SL.notify(SL.locale.get("DECK_PUBLISH_ERROR"), "negative")
		}.bind(this))),
		SL.analytics.track("User.show: Publish clicked")
	},
	onUnpublishClicked: function(e, t) {
		var n = this.getDeckData(e);
		confirm(SL.locale.get("DECK_UNPUBLISH_CONFIRM", {
			title: n.title
		})) && (e.find(".details .status").text(SL.locale.get("DECK_UNPUBLISH_WORKING")), $.ajax({
			type: "PUT",
			url: SL.config.AJAX_UPDATE_DECK(n.user.username, n.slug),
			data: {
				deck: {
					published: !1
				}
			}
		}).done(function(t) {
			t.deck && t.deck.slug && e.attr("data-slug", t.deck.slug),
			e.find(".details .status").text("Private"),
			e.removeClass("public").addClass("private").attr("data-published", !1),
			SL.notify(SL.locale.get("DECK_UNPUBLISH_SUCCESS"))
		}.bind(this)).fail(function(e) {
			SL.notify(SL.locale.get("DECK_UNPUBLISH_ERROR"), "negative")
		}.bind(this))),
		SL.analytics.track("User.show: Unpublish clicked")
	},
	onShareClicked: function(e, t) {
		var n = this.getDeckData(e);
		return typeof n.user.username == "string" && typeof n.slug == "string" ? SL.modal.open("share-deck", n) : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"),
		!1
	}
});
