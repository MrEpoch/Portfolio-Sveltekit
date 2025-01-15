import {
	h as f,
	x as b,
	t as $,
	q as B,
	as as C,
	ag as M,
	A as F,
	m as w,
	aH as U,
	aD as j,
	G as ee,
	c as N,
	b as te,
	aI as re,
	aJ as z,
	L as D,
	f as E,
	s as A,
	i as o,
	aK as ne,
	aL as ae,
	a as G,
	aM as I,
	aN as k,
	z as se,
	aO as ie,
	aP as ue,
	l as oe,
	aQ as ce,
	k as fe,
	N as le,
	P as de,
	X as _e,
	C as ve,
	ap as O,
	aR as pe,
	a3 as he,
	aS as ye,
	g as be
} from './index.BLpjBNQv.js';
function De(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const me = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function Ie(e) {
	return me.includes(e);
}
const ge = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject'
};
function Oe(e) {
	return (e = e.toLowerCase()), ge[e] ?? e;
}
const Ee = ['touchstart', 'touchmove'];
function we(e) {
	return Ee.includes(e);
}
const Te = ['textarea', 'script', 'style', 'title'];
function Pe(e) {
	return Te.includes(e);
}
function xe(e, t) {
	if (t) {
		const r = document.body;
		(e.autofocus = !0),
			B(() => {
				document.activeElement === r && e.focus();
			});
	}
}
function Ve(e) {
	f && b(e) !== null && $(e);
}
let H = !1;
function Ne() {
	H ||
		((H = !0),
		document.addEventListener(
			'reset',
			(e) => {
				Promise.resolve().then(() => {
					var t;
					if (!e.defaultPrevented)
						for (const r of e.target.elements) (t = r.__on_r) == null || t.call(r);
				});
			},
			{ capture: !0 }
		));
}
function Y(e) {
	var t = F,
		r = w;
	C(null), M(null);
	try {
		return e();
	} finally {
		C(t), M(r);
	}
}
function We(e, t, r, a = r) {
	e.addEventListener(t, () => Y(r));
	const s = e.__on_r;
	s
		? (e.__on_r = () => {
				s(), a(!0);
			})
		: (e.__on_r = () => a(!0)),
		Ne();
}
const X = new Set(),
	P = new Set();
function qe(e) {
	if (!f) return;
	e.onload && e.removeAttribute('onload'), e.onerror && e.removeAttribute('onerror');
	const t = e.__e;
	t !== void 0 &&
		((e.__e = void 0),
		queueMicrotask(() => {
			e.isConnected && e.dispatchEvent(t);
		}));
}
function Ae(e, t, r, a) {
	function s(n) {
		if ((a.capture || T.call(t, n), !n.cancelBubble)) return Y(() => r.call(this, n));
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? B(() => {
					t.addEventListener(e, s, a);
				})
			: t.addEventListener(e, s, a),
		s
	);
}
function He(e, t, r, a, s) {
	var n = { capture: a, passive: s },
		i = Ae(e, t, r, n);
	(t === document.body || t === window || t === document) &&
		U(() => {
			t.removeEventListener(e, i, n);
		});
}
function $e(e) {
	for (var t = 0; t < e.length; t++) X.add(e[t]);
	for (var r of P) r(e);
}
function T(e) {
	var q;
	var t = this,
		r = t.ownerDocument,
		a = e.type,
		s = ((q = e.composedPath) == null ? void 0 : q.call(e)) || [],
		n = s[0] || e.target,
		i = 0,
		_ = e.__root;
	if (_) {
		var l = s.indexOf(_);
		if (l !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var m = s.indexOf(t);
		if (m === -1) return;
		l <= m && (i = l);
	}
	if (((n = s[i] || e.target), n !== t)) {
		j(e, 'currentTarget', {
			configurable: !0,
			get() {
				return n || r;
			}
		});
		var R = F,
			v = w;
		C(null), M(null);
		try {
			for (var u, c = []; n !== null; ) {
				var h = n.assignedSlot || n.parentNode || n.host || null;
				try {
					var y = n['__' + a];
					if (y !== void 0 && !n.disabled)
						if (ee(y)) {
							var [Q, ...Z] = y;
							Q.apply(n, [e, ...Z]);
						} else y.call(n, e);
				} catch (S) {
					u ? c.push(S) : (u = S);
				}
				if (e.cancelBubble || h === t || h === null) break;
				n = h;
			}
			if (u) {
				for (let S of c)
					queueMicrotask(() => {
						throw S;
					});
				throw u;
			}
		} finally {
			(e.__root = t), delete e.currentTarget, C(R), M(v);
		}
	}
}
let d;
function Se() {
	d = void 0;
}
function Be(e) {
	let t = null,
		r = f;
	var a;
	if (f) {
		for (
			t = o, d === void 0 && (d = b(document.head));
			d !== null && (d.nodeType !== 8 || d.data !== z);

		)
			d = D(d);
		d === null ? E(!1) : (d = A(D(d)));
	}
	f || (a = document.head.appendChild(N()));
	try {
		te(() => e(a), re);
	} finally {
		r && (E(!0), (d = o), A(t));
	}
}
function J(e) {
	var t = document.createElement('template');
	return (t.innerHTML = e), t.content;
}
function p(e, t) {
	var r = w;
	r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function Le(e, t) {
	var r = (t & ne) !== 0,
		a = (t & ae) !== 0,
		s,
		n = !e.startsWith('<!>');
	return () => {
		if (f) return p(o, null), o;
		s === void 0 && ((s = J(n ? e : '<!>' + e)), r || (s = b(s)));
		var i = a ? document.importNode(s, !0) : s.cloneNode(!0);
		if (r) {
			var _ = b(i),
				l = i.lastChild;
			p(_, l);
		} else p(i, i);
		return i;
	};
}
function Fe(e, t) {
	var r = Le(e, t);
	return () => Ce(r());
}
function Ue(e, t, r = 'svg') {
	var a = !e.startsWith('<!>'),
		s = `<${r}>${a ? e : '<!>' + e}</${r}>`,
		n;
	return () => {
		if (f) return p(o, null), o;
		if (!n) {
			var i = J(s),
				_ = b(i);
			n = b(_);
		}
		var l = n.cloneNode(!0);
		return p(l, l), l;
	};
}
function Ce(e) {
	if (f) return e;
	const t = e.nodeType === 11,
		r = e.tagName === 'SCRIPT' ? [e] : e.querySelectorAll('script'),
		a = w;
	for (const n of r) {
		const i = document.createElement('script');
		for (var s of n.attributes) i.setAttribute(s.name, s.value);
		(i.textContent = n.textContent),
			(t ? e.firstChild === n : e === n) && (a.nodes_start = i),
			(t ? e.lastChild === n : e === n) && (a.nodes_end = i),
			n.replaceWith(i);
	}
	return e;
}
function je(e = '') {
	if (!f) {
		var t = N(e + '');
		return p(t, t), t;
	}
	var r = o;
	return r.nodeType !== 3 && (r.before((r = N())), A(r)), p(r, r), r;
}
function ze() {
	if (f) return p(o, null), o;
	var e = document.createDocumentFragment(),
		t = document.createComment(''),
		r = N();
	return e.append(t, r), p(t, r), e;
}
function Ge(e, t) {
	if (f) {
		(w.nodes_end = o), G();
		return;
	}
	e !== null && e.before(t);
}
let x = !0;
function Ye(e) {
	x = e;
}
function Xe(e, t) {
	var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
	r !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = r), (e.nodeValue = r == null ? '' : r + ''));
}
function Me(e, t) {
	return K(e, t);
}
function Je(e, t) {
	I(), (t.intro = t.intro ?? !1);
	const r = t.target,
		a = f,
		s = o;
	try {
		for (var n = b(r); n && (n.nodeType !== 8 || n.data !== z); ) n = D(n);
		if (!n) throw k;
		E(!0), A(n), G();
		const i = K(e, { ...t, anchor: n });
		if (o === null || o.nodeType !== 8 || o.data !== se) throw (ie(), k);
		return E(!1), i;
	} catch (i) {
		if (i === k) return t.recover === !1 && ue(), I(), $(r), E(!1), Me(e, t);
		throw i;
	} finally {
		E(a), A(s), Se();
	}
}
const g = new Map();
function K(e, { target: t, anchor: r, props: a = {}, events: s, context: n, intro: i = !0 }) {
	I();
	var _ = new Set(),
		l = (v) => {
			for (var u = 0; u < v.length; u++) {
				var c = v[u];
				if (!_.has(c)) {
					_.add(c);
					var h = we(c);
					t.addEventListener(c, T, { passive: h });
					var y = g.get(c);
					y === void 0
						? (document.addEventListener(c, T, { passive: h }), g.set(c, 1))
						: g.set(c, y + 1);
				}
			}
		};
	l(oe(X)), P.add(l);
	var m = void 0,
		R = ce(() => {
			var v = r ?? t.appendChild(N());
			return (
				fe(() => {
					if (n) {
						le({});
						var u = _e;
						u.c = n;
					}
					s && (a.$$events = s),
						f && p(v, null),
						(x = i),
						(m = e(v, a) || {}),
						(x = !0),
						f && (w.nodes_end = o),
						n && de();
				}),
				() => {
					var h;
					for (var u of _) {
						t.removeEventListener(u, T);
						var c = g.get(u);
						--c === 0 ? (document.removeEventListener(u, T), g.delete(u)) : g.set(u, c);
					}
					P.delete(l), v !== r && ((h = v.parentNode) == null || h.removeChild(v));
				}
			);
		});
	return V.set(m, R), m;
}
let V = new WeakMap();
function Ke(e, t) {
	const r = V.get(e);
	return r ? (V.delete(e), r(t)) : Promise.resolve();
}
let L = !1,
	W = Symbol();
function Qe(e, t, r) {
	const a = r[t] ?? (r[t] = { store: null, source: ve(void 0), unsubscribe: O });
	if (a.store !== e && !(W in r))
		if ((a.unsubscribe(), (a.store = e ?? null), e == null))
			(a.source.v = void 0), (a.unsubscribe = O);
		else {
			var s = !0;
			(a.unsubscribe = pe(e, (n) => {
				s ? (a.source.v = n) : he(a.source, n);
			})),
				(s = !1);
		}
	return e && W in r ? ye(e) : be(a.source);
}
function Ze(e, t, r) {
	let a = r[t];
	return a && a.store !== e && (a.unsubscribe(), (a.unsubscribe = O)), e;
}
function et(e, t) {
	return e.set(t), t;
}
function tt() {
	const e = {};
	function t() {
		U(() => {
			for (var r in e) e[r].unsubscribe();
			j(e, W, { enumerable: !1, value: !0 });
		});
	}
	return [e, t];
}
function rt(e, t, r) {
	return e.set(r), t;
}
function nt(e) {
	var t = L;
	try {
		return (L = !1), [e(), L];
	} finally {
		L = t;
	}
}
const Re = '5';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Re);
export {
	Ye as A,
	We as B,
	Ze as C,
	Ve as D,
	Fe as E,
	rt as F,
	Ge as a,
	et as b,
	Xe as c,
	nt as d,
	Qe as e,
	x as f,
	Ne as g,
	Ae as h,
	De as i,
	$e as j,
	xe as k,
	Ie as l,
	ze as m,
	Oe as n,
	Je as o,
	Me as p,
	je as q,
	qe as r,
	tt as s,
	Le as t,
	Ke as u,
	He as v,
	Ue as w,
	Be as x,
	p as y,
	Pe as z
};
