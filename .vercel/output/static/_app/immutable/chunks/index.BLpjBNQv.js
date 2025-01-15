var Jn = Array.isArray,
	vn = Array.prototype.indexOf,
	Qn = Array.from,
	tr = Object.defineProperty,
	Tt = Object.getOwnPropertyDescriptor,
	pn = Object.getOwnPropertyDescriptors,
	nr = Object.prototype,
	rr = Array.prototype,
	hn = Object.getPrototypeOf;
function er(t) {
	return typeof t == 'function';
}
const q = () => {};
function sr(t) {
	return t();
}
function pt(t) {
	for (var n = 0; n < t.length; n++) t[n]();
}
const y = 2,
	It = 4,
	$ = 8,
	ht = 16,
	g = 32,
	K = 64,
	W = 128,
	O = 256,
	X = 512,
	h = 1024,
	A = 2048,
	k = 4096,
	L = 8192,
	M = 16384,
	dn = 32768,
	St = 65536,
	ar = 1 << 17,
	En = 1 << 19,
	Rt = 1 << 20,
	bt = Symbol('$state'),
	lr = Symbol('legacy props'),
	ur = Symbol('');
function Ot(t) {
	return t === this.v;
}
function kt(t, n) {
	return t != t
		? n == n
		: t !== n || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function or(t, n) {
	return t !== n;
}
function Nt(t) {
	return !kt(t, this.v);
}
function yn(t) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function wn() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function mn(t) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function Tn() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function ir() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function fr(t) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function _r() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function cr() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function bn() {
	throw new Error('https://svelte.dev/e/state_unsafe_local_read');
}
function gn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let et = !1;
function vr() {
	et = !0;
}
const pr = 1,
	hr = 2,
	dr = 4,
	Er = 8,
	yr = 16,
	wr = 1,
	mr = 2,
	Tr = 4,
	br = 8,
	gr = 16,
	Ar = 1,
	xr = 2,
	Ir = 4,
	Sr = 1,
	Rr = 2,
	An = '[',
	xn = '[!',
	In = ']',
	Dt = {},
	Or = Symbol(),
	kr = 'http://www.w3.org/2000/svg';
function dt(t, n) {
	var r = { f: 0, v: t, reactions: null, equals: Ot, rv: 0, wv: 0 };
	return r;
}
function Nr(t) {
	return Ct(dt(t));
}
function Sn(t, n = !1) {
	var e;
	const r = dt(t);
	return (
		n || (r.equals = Nt), et && f !== null && f.l !== null && ((e = f.l).s ?? (e.s = [])).push(r), r
	);
}
function Dr(t, n = !1) {
	return Ct(Sn(t, n));
}
function Ct(t) {
	return c !== null && c.f & y && (T === null ? Bn([t]) : T.push(t)), t;
}
function qt(t, n) {
	return c !== null && st() && c.f & (y | ht) && (T === null || !T.includes(t)) && gn(), Rn(t, n);
}
function Rn(t, n) {
	return (
		t.equals(n) ||
			(t.v,
			(t.v = n),
			(t.wv = tn()),
			Pt(t, A),
			st() && p !== null && p.f & h && !(p.f & (g | K)) && (b === null ? Un([t]) : b.push(t))),
		n
	);
}
function Pt(t, n) {
	var r = t.reactions;
	if (r !== null)
		for (var e = st(), s = r.length, a = 0; a < s; a++) {
			var l = r[a],
				u = l.f;
			u & A || (!e && l === p) || (w(l, n), u & (h | O) && (u & y ? Pt(l, k) : ut(l)));
		}
}
function Ft(t) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
let S = !1;
function Cr(t) {
	S = t;
}
let m;
function U(t) {
	if (t === null) throw (Ft(), Dt);
	return (m = t);
}
function qr() {
	return U(N(m));
}
function Pr(t) {
	if (S) {
		if (N(m) !== null) throw (Ft(), Dt);
		m = t;
	}
}
function Fr(t = 1) {
	if (S) {
		for (var n = t, r = m; n--; ) r = N(r);
		m = r;
	}
}
function Lr() {
	for (var t = 0, n = m; ; ) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === In) {
				if (t === 0) return n;
				t -= 1;
			} else (r === An || r === xn) && (t += 1);
		}
		var e = N(n);
		n.remove(), (n = e);
	}
}
var gt, On, Lt, Mt;
function Mr() {
	if (gt === void 0) {
		(gt = window), (On = document);
		var t = Element.prototype,
			n = Node.prototype;
		(Lt = Tt(n, 'firstChild').get),
			(Mt = Tt(n, 'nextSibling').get),
			(t.__click = void 0),
			(t.__className = ''),
			(t.__attributes = null),
			(t.__styles = null),
			(t.__e = void 0),
			(Text.prototype.__t = void 0);
	}
}
function it(t = '') {
	return document.createTextNode(t);
}
function ft(t) {
	return Lt.call(t);
}
function N(t) {
	return Mt.call(t);
}
function Yr(t, n) {
	if (!S) return ft(t);
	var r = ft(m);
	if (r === null) r = m.appendChild(it());
	else if (n && r.nodeType !== 3) {
		var e = it();
		return r == null || r.before(e), U(e), e;
	}
	return U(r), r;
}
function Hr(t, n) {
	if (!S) {
		var r = ft(t);
		return r instanceof Comment && r.data === '' ? N(r) : r;
	}
	return m;
}
function Br(t, n = 1, r = !1) {
	let e = S ? m : t;
	for (var s; n--; ) (s = e), (e = N(e));
	if (!S) return e;
	var a = e == null ? void 0 : e.nodeType;
	if (r && a !== 3) {
		var l = it();
		return e === null ? s == null || s.after(l) : e.before(l), U(l), l;
	}
	return U(e), e;
}
function Ur(t) {
	t.textContent = '';
}
function kn(t) {
	var n = y | A;
	p === null ? (n |= O) : (p.f |= Rt);
	var r = c !== null && c.f & y ? c : null;
	const e = {
		children: null,
		ctx: f,
		deps: null,
		equals: Ot,
		f: n,
		fn: t,
		reactions: null,
		rv: 0,
		v: null,
		wv: 0,
		parent: r ?? p
	};
	return r !== null && (r.children ?? (r.children = [])).push(e), e;
}
function jr(t) {
	const n = kn(t);
	return (n.equals = Nt), n;
}
function Yt(t) {
	var n = t.children;
	if (n !== null) {
		t.children = null;
		for (var r = 0; r < n.length; r += 1) {
			var e = n[r];
			e.f & y ? Et(e) : R(e);
		}
	}
}
function Nn(t) {
	for (var n = t.parent; n !== null; ) {
		if (!(n.f & y)) return n;
		n = n.parent;
	}
	return null;
}
function Ht(t) {
	var n,
		r = p;
	nt(Nn(t));
	try {
		Yt(t), (n = rn(t));
	} finally {
		nt(r);
	}
	return n;
}
function Bt(t) {
	var n = Ht(t),
		r = (I || t.f & O) && t.deps !== null ? k : h;
	w(t, r), t.equals(n) || ((t.v = n), (t.wv = tn()));
}
function Et(t) {
	Yt(t), G(t, 0), w(t, M), (t.v = t.children = t.deps = t.ctx = t.reactions = null);
}
function Ut(t) {
	p === null && c === null && mn(), c !== null && c.f & O && wn(), wt && yn();
}
function Dn(t, n) {
	var r = n.last;
	r === null ? (n.last = n.first = t) : ((r.next = t), (t.prev = r), (n.last = t));
}
function Y(t, n, r, e = !0) {
	var s = (t & K) !== 0,
		a = p,
		l = {
			ctx: f,
			deps: null,
			deriveds: null,
			nodes_start: null,
			nodes_end: null,
			f: t | A,
			first: null,
			fn: n,
			last: null,
			next: null,
			parent: s ? null : a,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0
		};
	if (r) {
		var u = P;
		try {
			At(!0), lt(l), (l.f |= dn);
		} catch (v) {
			throw (R(l), v);
		} finally {
			At(u);
		}
	} else n !== null && ut(l);
	var i =
		r &&
		l.deps === null &&
		l.first === null &&
		l.nodes_start === null &&
		l.teardown === null &&
		(l.f & (Rt | W)) === 0;
	if (!i && !s && e && (a !== null && Dn(l, a), c !== null && c.f & y)) {
		var o = c;
		(o.children ?? (o.children = [])).push(l);
	}
	return l;
}
function Vr(t) {
	const n = Y($, null, !1);
	return w(n, h), (n.teardown = t), n;
}
function Gr(t) {
	Ut();
	var n = p !== null && (p.f & g) !== 0 && f !== null && !f.m;
	if (n) {
		var r = f;
		(r.e ?? (r.e = [])).push({ fn: t, effect: p, reaction: c });
	} else {
		var e = jt(t);
		return e;
	}
}
function $r(t) {
	return Ut(), yt(t);
}
function Kr(t) {
	const n = Y(K, t, !0);
	return (r = {}) =>
		new Promise((e) => {
			r.outro
				? Pn(n, () => {
						R(n), e(void 0);
					})
				: (R(n), e(void 0));
		});
}
function jt(t) {
	return Y(It, t, !1);
}
function zr(t, n) {
	var r = f,
		e = { effect: null, ran: !1 };
	r.l.r1.push(e),
		(e.effect = yt(() => {
			t(), !e.ran && ((e.ran = !0), qt(r.l.r2, !0), on(n));
		}));
}
function Zr() {
	var t = f;
	yt(() => {
		if (un(t.l.r2)) {
			for (var n of t.l.r1) {
				var r = n.effect;
				r.f & h && w(r, k), H(r) && lt(r), (n.ran = !1);
			}
			t.l.r2.v = !1;
		}
	});
}
function yt(t) {
	return Y($, t, !0);
}
function Wr(t) {
	return Cn(t);
}
function Cn(t, n = 0) {
	return Y($ | ht | n, t, !0);
}
function Xr(t, n = !0) {
	return Y($ | g, t, !0, n);
}
function Vt(t) {
	var n = t.teardown;
	if (n !== null) {
		const r = wt,
			e = c;
		xt(!0), tt(null);
		try {
			n.call(null);
		} finally {
			xt(r), tt(e);
		}
	}
}
function Gt(t) {
	var n = t.deriveds;
	if (n !== null) {
		t.deriveds = null;
		for (var r = 0; r < n.length; r += 1) Et(n[r]);
	}
}
function $t(t, n = !1) {
	var r = t.first;
	for (t.first = t.last = null; r !== null; ) {
		var e = r.next;
		R(r, n), (r = e);
	}
}
function qn(t) {
	for (var n = t.first; n !== null; ) {
		var r = n.next;
		n.f & g || R(n), (n = r);
	}
}
function R(t, n = !0) {
	var r = !1;
	if ((n || t.f & En) && t.nodes_start !== null) {
		for (var e = t.nodes_start, s = t.nodes_end; e !== null; ) {
			var a = e === s ? null : N(e);
			e.remove(), (e = a);
		}
		r = !0;
	}
	$t(t, n && !r), Gt(t), G(t, 0), w(t, M);
	var l = t.transitions;
	if (l !== null) for (const i of l) i.stop();
	Vt(t);
	var u = t.parent;
	u !== null && u.first !== null && Kt(t),
		(t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null);
}
function Kt(t) {
	var n = t.parent,
		r = t.prev,
		e = t.next;
	r !== null && (r.next = e),
		e !== null && (e.prev = r),
		n !== null && (n.first === t && (n.first = e), n.last === t && (n.last = r));
}
function Pn(t, n) {
	var r = [];
	zt(t, r, !0),
		Fn(r, () => {
			R(t), n && n();
		});
}
function Fn(t, n) {
	var r = t.length;
	if (r > 0) {
		var e = () => --r || n();
		for (var s of t) s.out(e);
	} else n();
}
function zt(t, n, r) {
	if (!(t.f & L)) {
		if (((t.f ^= L), t.transitions !== null))
			for (const l of t.transitions) (l.is_global || r) && n.push(l);
		for (var e = t.first; e !== null; ) {
			var s = e.next,
				a = (e.f & St) !== 0 || (e.f & g) !== 0;
			zt(e, n, a ? r : !1), (e = s);
		}
	}
}
function Jr(t) {
	Zt(t, !0);
}
function Zt(t, n) {
	if (t.f & L) {
		(t.f ^= L), t.f & h || (t.f ^= h), H(t) && (w(t, A), ut(t));
		for (var r = t.first; r !== null; ) {
			var e = r.next,
				s = (r.f & St) !== 0 || (r.f & g) !== 0;
			Zt(r, s ? n : !1), (r = e);
		}
		if (t.transitions !== null) for (const a of t.transitions) (a.is_global || n) && a.in();
	}
}
const Ln = typeof requestIdleCallback > 'u' ? (t) => setTimeout(t, 1) : requestIdleCallback;
let J = !1,
	Q = !1,
	_t = [],
	ct = [];
function Wt() {
	J = !1;
	const t = _t.slice();
	(_t = []), pt(t);
}
function Xt() {
	Q = !1;
	const t = ct.slice();
	(ct = []), pt(t);
}
function Qr(t) {
	J || ((J = !0), queueMicrotask(Wt)), _t.push(t);
}
function te(t) {
	Q || ((Q = !0), Ln(Xt)), ct.push(t);
}
function Mn() {
	J && Wt(), Q && Xt();
}
function ne() {
	throw new Error('https://svelte.dev/e/invalid_default_snippet');
}
function Yn(t) {
	throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
const Jt = 0,
	Hn = 1;
let z = !1,
	Z = Jt,
	j = !1,
	V = null,
	P = !1,
	wt = !1;
function At(t) {
	P = t;
}
function xt(t) {
	wt = t;
}
let x = [],
	F = 0;
let c = null;
function tt(t) {
	c = t;
}
let p = null;
function nt(t) {
	p = t;
}
let T = null;
function Bn(t) {
	T = t;
}
let d = null,
	E = 0,
	b = null;
function Un(t) {
	b = t;
}
let Qt = 1,
	rt = 0,
	I = !1,
	f = null;
function tn() {
	return ++Qt;
}
function st() {
	return !et || (f !== null && f.l === null);
}
function H(t) {
	var o;
	var n = t.f;
	if (n & A) return !0;
	if (n & k) {
		var r = t.deps,
			e = (n & O) !== 0;
		if (r !== null) {
			var s,
				a,
				l = (n & X) !== 0,
				u = e && p !== null && !I,
				i = r.length;
			if (l || u) {
				for (s = 0; s < i; s++)
					(a = r[s]),
						(l || !((o = a == null ? void 0 : a.reactions) != null && o.includes(t))) &&
							(a.reactions ?? (a.reactions = [])).push(t);
				l && (t.f ^= X);
			}
			for (s = 0; s < i; s++) if (((a = r[s]), H(a) && Bt(a), a.wv > t.wv)) return !0;
		}
		(!e || (p !== null && !I)) && w(t, h);
	}
	return !1;
}
function jn(t, n) {
	for (var r = n; r !== null; ) {
		if (r.f & W)
			try {
				r.fn(t);
				return;
			} catch {
				r.f ^= W;
			}
		r = r.parent;
	}
	throw ((z = !1), t);
}
function Vn(t) {
	return (t.f & M) === 0 && (t.parent === null || (t.parent.f & W) === 0);
}
function at(t, n, r, e) {
	if (z) {
		if ((r === null && (z = !1), Vn(n))) throw t;
		return;
	}
	r !== null && (z = !0);
	{
		jn(t, n);
		return;
	}
}
function nn(t, n, r = 0) {
	var e = t.reactions;
	if (e !== null)
		for (var s = 0; s < e.length; s++) {
			var a = e[s];
			a.f & y ? nn(a, n, r + 1) : n === a && (r === 0 ? w(a, A) : a.f & h && w(a, k), ut(a));
		}
}
function rn(t) {
	var B;
	var n = d,
		r = E,
		e = b,
		s = c,
		a = I,
		l = T,
		u = f,
		i = t.f;
	(d = null),
		(E = 0),
		(b = null),
		(c = i & (g | K) ? null : t),
		(I = !P && (i & O) !== 0),
		(T = null),
		(f = t.ctx),
		rt++;
	try {
		var o = (0, t.fn)(),
			v = t.deps;
		if (d !== null) {
			var _;
			if ((G(t, E), v !== null && E > 0))
				for (v.length = E + d.length, _ = 0; _ < d.length; _++) v[E + _] = d[_];
			else t.deps = v = d;
			if (!I) for (_ = E; _ < v.length; _++) ((B = v[_]).reactions ?? (B.reactions = [])).push(t);
		} else v !== null && E < v.length && (G(t, E), (v.length = E));
		if (st() && b !== null && !(t.f & (y | k | A))) for (_ = 0; _ < b.length; _++) nn(b[_], t);
		return s !== null && rt++, o;
	} finally {
		(d = n), (E = r), (b = e), (c = s), (I = a), (T = l), (f = u);
	}
}
function Gn(t, n) {
	let r = n.reactions;
	if (r !== null) {
		var e = vn.call(r, t);
		if (e !== -1) {
			var s = r.length - 1;
			s === 0 ? (r = n.reactions = null) : ((r[e] = r[s]), r.pop());
		}
	}
	r === null &&
		n.f & y &&
		(d === null || !d.includes(n)) &&
		(w(n, k), n.f & (O | X) || (n.f ^= X), G(n, 0));
}
function G(t, n) {
	var r = t.deps;
	if (r !== null) for (var e = n; e < r.length; e++) Gn(t, r[e]);
}
function lt(t) {
	var n = t.f;
	if (!(n & M)) {
		w(t, h);
		var r = p,
			e = f;
		p = t;
		try {
			n & ht ? qn(t) : $t(t), Gt(t), Vt(t);
			var s = rn(t);
			(t.teardown = typeof s == 'function' ? s : null), (t.wv = Qt);
			var a = t.deps,
				l;
		} catch (u) {
			at(u, t, r, e || t.ctx);
		} finally {
			p = r;
		}
	}
}
function en() {
	if (F > 1e3) {
		F = 0;
		try {
			Tn();
		} catch (t) {
			if (V !== null) at(t, V, null);
			else throw t;
		}
	}
	F++;
}
function sn(t) {
	var n = t.length;
	if (n !== 0) {
		en();
		var r = P;
		P = !0;
		try {
			for (var e = 0; e < n; e++) {
				var s = t[e];
				s.f & h || (s.f ^= h);
				var a = [];
				an(s, a), $n(a);
			}
		} finally {
			P = r;
		}
	}
}
function $n(t) {
	var n = t.length;
	if (n !== 0)
		for (var r = 0; r < n; r++) {
			var e = t[r];
			if (!(e.f & (M | L)))
				try {
					H(e) &&
						(lt(e),
						e.deps === null &&
							e.first === null &&
							e.nodes_start === null &&
							(e.teardown === null ? Kt(e) : (e.fn = null)));
				} catch (s) {
					at(s, e, null, e.ctx);
				}
		}
}
function Kn() {
	if (((j = !1), F > 1001)) return;
	const t = x;
	(x = []), sn(t), j || ((F = 0), (V = null));
}
function ut(t) {
	Z === Jt && (j || ((j = !0), queueMicrotask(Kn))), (V = t);
	for (var n = t; n.parent !== null; ) {
		n = n.parent;
		var r = n.f;
		if (r & (K | g)) {
			if (!(r & h)) return;
			n.f ^= h;
		}
	}
	x.push(n);
}
function an(t, n) {
	var r = t.first,
		e = [];
	t: for (; r !== null; ) {
		var s = r.f,
			a = (s & g) !== 0,
			l = a && (s & h) !== 0,
			u = r.next;
		if (!l && !(s & L))
			if (s & $) {
				if (a) r.f ^= h;
				else
					try {
						H(r) && lt(r);
					} catch (_) {
						at(_, r, null, r.ctx);
					}
				var i = r.first;
				if (i !== null) {
					r = i;
					continue;
				}
			} else s & It && e.push(r);
		if (u === null) {
			let _ = r.parent;
			for (; _ !== null; ) {
				if (t === _) break t;
				var o = _.next;
				if (o !== null) {
					r = o;
					continue t;
				}
				_ = _.parent;
			}
		}
		r = u;
	}
	for (var v = 0; v < e.length; v++) (i = e[v]), n.push(i), an(i, n);
}
function ln(t) {
	var n = Z,
		r = x;
	try {
		en();
		const s = [];
		(Z = Hn), (x = s), (j = !1), sn(r);
		var e = t == null ? void 0 : t();
		return Mn(), (x.length > 0 || s.length > 0) && ln(), (F = 0), (V = null), e;
	} finally {
		(Z = n), (x = r);
	}
}
async function re() {
	await Promise.resolve(), ln();
}
function un(t) {
	var v;
	var n = t.f,
		r = (n & y) !== 0;
	if (r && n & M) {
		var e = Ht(t);
		return Et(t), e;
	}
	if (c !== null) {
		T !== null && T.includes(t) && bn();
		var s = c.deps;
		t.rv < rt &&
			((t.rv = rt),
			d === null && s !== null && s[E] === t ? E++ : d === null ? (d = [t]) : d.push(t));
	} else if (r && t.deps === null)
		for (var a = t, l = a.parent, u = a; l !== null; )
			if (l.f & y) {
				var i = l;
				(u = i), (l = i.parent);
			} else {
				var o = l;
				((v = o.deriveds) != null && v.includes(u)) || (o.deriveds ?? (o.deriveds = [])).push(u);
				break;
			}
	return r && ((a = t), H(a) && Bt(a)), t.v;
}
function on(t) {
	const n = c;
	try {
		return (c = null), t();
	} finally {
		c = n;
	}
}
const zn = -7169;
function w(t, n) {
	t.f = (t.f & zn) | n;
}
function ee(t) {
	return mt().get(t);
}
function se(t, n) {
	return mt().set(t, n), n;
}
function ae(t) {
	return mt().has(t);
}
function mt(t) {
	return f === null && Yn(), f.c ?? (f.c = new Map(Zn(f) || void 0));
}
function Zn(t) {
	let n = t.p;
	for (; n !== null; ) {
		const r = n.c;
		if (r !== null) return r;
		n = n.p;
	}
	return null;
}
function le(t, n = 1) {
	var r = un(t),
		e = n === 1 ? r++ : r--;
	return qt(t, r), e;
}
function ue(t, n = !1, r) {
	(f = { p: f, c: null, e: null, m: !1, s: t, x: null, l: null }),
		et && !n && (f.l = { s: null, u: null, r1: [], r2: dt(!1) });
}
function oe(t) {
	const n = f;
	if (n !== null) {
		const l = n.e;
		if (l !== null) {
			var r = p,
				e = c;
			n.e = null;
			try {
				for (var s = 0; s < l.length; s++) {
					var a = l[s];
					nt(a.effect), tt(a.reaction), jt(a.fn);
				}
			} finally {
				nt(r), tt(e);
			}
		}
		(f = n.p), (n.m = !0);
	}
	return {};
}
function ie(t) {
	if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
		if (bt in t) vt(t);
		else if (!Array.isArray(t))
			for (let n in t) {
				const r = t[n];
				typeof r == 'object' && r && bt in r && vt(r);
			}
	}
}
function vt(t, n = new Set()) {
	if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
		n.add(t), t instanceof Date && t.getTime();
		for (let e in t)
			try {
				vt(t[e], n);
			} catch {}
		const r = hn(t);
		if (
			r !== Object.prototype &&
			r !== Array.prototype &&
			r !== Map.prototype &&
			r !== Set.prototype &&
			r !== Date.prototype
		) {
			const e = pn(r);
			for (let s in e) {
				const a = e[s].get;
				if (a)
					try {
						a.call(t);
					} catch {}
			}
		}
	}
}
function fn(t, n, r) {
	if (t == null) return n(void 0), r && r(void 0), q;
	const e = on(() => t.subscribe(n, r));
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
const C = [];
function Wn(t, n) {
	return { subscribe: Xn(t, n).subscribe };
}
function Xn(t, n = q) {
	let r = null;
	const e = new Set();
	function s(u) {
		if (kt(t, u) && ((t = u), r)) {
			const i = !C.length;
			for (const o of e) o[1](), C.push(o, t);
			if (i) {
				for (let o = 0; o < C.length; o += 2) C[o][0](C[o + 1]);
				C.length = 0;
			}
		}
	}
	function a(u) {
		s(u(t));
	}
	function l(u, i = q) {
		const o = [u, i];
		return (
			e.add(o),
			e.size === 1 && (r = n(s, a) || q),
			u(t),
			() => {
				e.delete(o), e.size === 0 && r && (r(), (r = null));
			}
		);
	}
	return { set: s, update: a, subscribe: l };
}
function fe(t, n, r) {
	const e = !Array.isArray(t),
		s = e ? [t] : t;
	if (!s.every(Boolean)) throw new Error('derived() expects stores as input, got a falsy value');
	const a = n.length < 2;
	return Wn(r, (l, u) => {
		let i = !1;
		const o = [];
		let v = 0,
			_ = q;
		const B = () => {
				if (v) return;
				_();
				const D = n(e ? o[0] : o, l, u);
				a ? l(D) : (_ = typeof D == 'function' ? D : q);
			},
			_n = s.map((D, ot) =>
				fn(
					D,
					(cn) => {
						(o[ot] = cn), (v &= ~(1 << ot)), i && B();
					},
					() => {
						v |= 1 << ot;
					}
				)
			);
		return (
			(i = !0),
			B(),
			function () {
				pt(_n), _(), (i = !1);
			}
		);
	});
}
function _e(t) {
	return { subscribe: t.subscribe.bind(t) };
}
function ce(t) {
	let n;
	return fn(t, (r) => (n = r))(), n;
}
export {
	Xn as $,
	c as A,
	hr as B,
	Sn as C,
	dt as D,
	pr as E,
	dr as F,
	Jn as G,
	xn as H,
	L as I,
	Er as J,
	yr as K,
	N as L,
	St as M,
	ue as N,
	Wr as O,
	oe as P,
	Yr as Q,
	Pr as R,
	bt as S,
	Br as T,
	Or as U,
	ie as V,
	kt as W,
	f as X,
	Yn as Y,
	et as Z,
	Gr as _,
	qr as a,
	Zr as a$,
	nr as a0,
	rr as a1,
	_r as a2,
	qt as a3,
	Tt as a4,
	cr as a5,
	hn as a6,
	fr as a7,
	ar as a8,
	Tr as a9,
	Hr as aA,
	Dr as aB,
	ln as aC,
	tr as aD,
	re as aE,
	Nr as aF,
	Fr as aG,
	Vr as aH,
	En as aI,
	An as aJ,
	Sr as aK,
	Rr as aL,
	Mr as aM,
	Dt as aN,
	Ft as aO,
	ir as aP,
	Kr as aQ,
	fn as aR,
	ce as aS,
	st as aT,
	or as aU,
	On as aV,
	kr as aW,
	se as aX,
	ae as aY,
	ee as aZ,
	zr as a_,
	Nt as aa,
	le as ab,
	er as ac,
	lr as ad,
	g as ae,
	K as af,
	nt as ag,
	wr as ah,
	mr as ai,
	br as aj,
	kn as ak,
	gr as al,
	ht as am,
	dn as an,
	Ar as ao,
	q as ap,
	xr as aq,
	Ir as ar,
	tt as as,
	ur as at,
	pn as au,
	te as av,
	$r as aw,
	sr as ax,
	pt as ay,
	vr as az,
	Cn as b,
	fe as b0,
	Wn as b1,
	ne as b2,
	_e as b3,
	it as c,
	Lr as d,
	jt as e,
	Cr as f,
	un as g,
	S as h,
	m as i,
	Jr as j,
	Xr as k,
	Qn as l,
	p as m,
	Rn as n,
	zt as o,
	Pn as p,
	Qr as q,
	yt as r,
	U as s,
	Ur as t,
	on as u,
	Fn as v,
	R as w,
	ft as x,
	jr as y,
	In as z
};
