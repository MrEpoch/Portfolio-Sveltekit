import {
	at as B,
	a6 as E,
	h as g,
	au as M,
	av as q,
	aw as D,
	_ as N,
	X as G,
	u as K,
	ax as P,
	ay as $,
	g as O,
	V as R,
	ak as S,
	az as X
} from './index.BLpjBNQv.js';
import {
	g as Y,
	i as F,
	h as H,
	j as J,
	k as Q,
	n as U,
	l as W
} from './disclose-version.CptZq6qT.js';
function T(s) {
	var r,
		t,
		e = '';
	if (typeof s == 'string' || typeof s == 'number') e += s;
	else if (typeof s == 'object')
		if (Array.isArray(s)) {
			var f = s.length;
			for (r = 0; r < f; r++) s[r] && (t = T(s[r])) && (e && (e += ' '), (e += t));
		} else for (t in s) s[t] && (e && (e += ' '), (e += t));
	return e;
}
function Z() {
	for (var s, r, t = 0, e = '', f = arguments.length; t < f; t++)
		(s = arguments[t]) && (r = T(s)) && (e && (e += ' '), (e += r));
	return e;
}
function x(s) {
	return typeof s == 'object' ? Z(s) : (s ?? '');
}
function ts(s) {
	if (g) {
		var r = !1,
			t = () => {
				if (!r) {
					if (((r = !0), s.hasAttribute('value'))) {
						var e = s.value;
						p(s, 'value', null), (s.value = e);
					}
					if (s.hasAttribute('checked')) {
						var f = s.checked;
						p(s, 'checked', null), (s.checked = f);
					}
				}
			};
		(s.__on_r = t), q(t), Y();
	}
}
function m(s, r) {
	r ? s.hasAttribute('selected') || s.setAttribute('selected', '') : s.removeAttribute('selected');
}
function p(s, r, t, e) {
	var f = s.__attributes ?? (s.__attributes = {});
	(g &&
		((f[r] = s.getAttribute(r)),
		r === 'src' || r === 'srcset' || (r === 'href' && s.nodeName === 'LINK'))) ||
		(f[r] !== (f[r] = t) &&
			(r === 'style' && '__styles' in s && (s.__styles = {}),
			r === 'loading' && (s[B] = t),
			t == null
				? s.removeAttribute(r)
				: typeof t != 'string' && V(s).includes(r)
					? (s[r] = t)
					: s.setAttribute(r, t)));
}
function es(s, r, t, e, f = !1, l = !1, y = !1) {
	var u = r || {},
		d = s.tagName === 'OPTION';
	for (var _ in r) _ in t || (t[_] = null);
	t.class && (t.class = x(t.class));
	var j = V(s),
		C = s.__attributes ?? (s.__attributes = {});
	for (const a in t) {
		let i = t[a];
		if (d && a === 'value' && i == null) {
			(s.value = s.__value = ''), (u[a] = i);
			continue;
		}
		var k = u[a];
		if (i !== k) {
			u[a] = i;
			var b = a[0] + a[1];
			if (b !== '$$') {
				if (b === 'on') {
					const c = {},
						v = '$$' + a;
					let n = a.slice(2);
					var h = W(n);
					if ((F(n) && ((n = n.slice(0, -7)), (c.capture = !0)), !h && k)) {
						if (i != null) continue;
						s.removeEventListener(n, u[v], c), (u[v] = null);
					}
					if (i != null)
						if (h) (s[`__${n}`] = i), J([n]);
						else {
							let I = function (z) {
								u[a].call(this, z);
							};
							u[v] = H(n, s, I, c);
						}
					else h && (s[`__${n}`] = void 0);
				} else if (a === 'style' && i != null) s.style.cssText = i + '';
				else if (a === 'autofocus') Q(s, !!i);
				else if (a === '__value' || (a === 'value' && i != null)) s.value = s[a] = s.__value = i;
				else if (a === 'selected' && d) m(s, i);
				else {
					var o = a;
					f || (o = U(o));
					var A = o === 'defaultValue' || o === 'defaultChecked';
					if (i == null && !l && !A)
						if (((C[a] = null), o === 'value' || o === 'checked')) {
							let c = s;
							if (o === 'value') {
								let v = c.defaultValue;
								c.removeAttribute(o), (c.defaultValue = v);
							} else {
								let v = c.defaultChecked;
								c.removeAttribute(o), (c.defaultChecked = v);
							}
						} else s.removeAttribute(a);
					else
						A || (j.includes(o) && (l || typeof i != 'string'))
							? (s[o] = i)
							: typeof i != 'function' &&
								((g && (o === 'src' || o === 'href' || o === 'srcset')) || p(s, o, i));
				}
				a === 'style' && '__styles' in s && (s.__styles = {});
			}
		}
	}
	return u;
}
var w = new Map();
function V(s) {
	var r = w.get(s.nodeName);
	if (r) return r;
	w.set(s.nodeName, (r = []));
	for (var t, e = s, f = Element.prototype; f !== e; ) {
		t = M(e);
		for (var l in t) t[l].set && r.push(l);
		e = E(e);
	}
	return r;
}
function as(s = !1) {
	const r = G,
		t = r.l.u;
	if (!t) return;
	let e = () => R(r.s);
	if (s) {
		let f = 0,
			l = {};
		const y = S(() => {
			let u = !1;
			const d = r.s;
			for (const _ in d) d[_] !== l[_] && ((l[_] = d[_]), (u = !0));
			return u && f++, f;
		});
		e = () => O(y);
	}
	t.b.length &&
		D(() => {
			L(r, e), $(t.b);
		}),
		N(() => {
			const f = K(() => t.m.map(P));
			return () => {
				for (const l of f) typeof l == 'function' && l();
			};
		}),
		t.a.length &&
			N(() => {
				L(r, e), $(t.a);
			});
}
function L(s, r) {
	if (s.l.s) for (const t of s.l.s) O(t);
	r();
}
X();
export { es as a, x as b, Z as c, as as i, ts as r, p as s };
