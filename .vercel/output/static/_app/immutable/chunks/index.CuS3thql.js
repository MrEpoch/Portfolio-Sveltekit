import {
	M,
	am as z,
	an as B,
	e as P,
	u as U,
	ao as j,
	m as g,
	ac as G,
	q as K,
	ap as $,
	aq as W,
	ar as D,
	as as I,
	ag as O,
	A as H
} from './index.BLpjBNQv.js';
import { f as J } from './disclose-version.CptZq6qT.js';
const Q = () => performance.now(),
	m = { tick: (a) => requestAnimationFrame(a), now: () => Q(), tasks: new Set() };
function q() {
	const a = m.now();
	m.tasks.forEach((t) => {
		t.c(a) || (m.tasks.delete(t), t.f());
	}),
		m.tasks.size !== 0 && m.tick(q);
}
function V(a) {
	let t;
	return (
		m.tasks.size === 0 && m.tick(q),
		{
			promise: new Promise((r) => {
				m.tasks.add((t = { c: a, f: r }));
			}),
			abort() {
				m.tasks.delete(t);
			}
		}
	);
}
function N(a, t) {
	a.dispatchEvent(new CustomEvent(t));
}
function X(a) {
	if (a === 'float') return 'cssFloat';
	if (a === 'offset') return 'cssOffset';
	if (a.startsWith('--')) return a;
	const t = a.split('-');
	return t.length === 1
		? t[0]
		: t[0] +
				t
					.slice(1)
					.map((r) => r[0].toUpperCase() + r.slice(1))
					.join('');
}
function R(a) {
	const t = {},
		r = a.split(';');
	for (const s of r) {
		const [n, c] = s.split(':');
		if (!n || c === void 0) break;
		const o = X(n.trim());
		t[o] = c.trim();
	}
	return t;
}
const Y = (a) => a;
function rt(a, t, r, s) {
	var n = (a & j) !== 0,
		c = (a & W) !== 0,
		o = n && c,
		d = (a & D) !== 0,
		h = o ? 'both' : n ? 'in' : 'out',
		_,
		f = t.inert,
		w = t.style.overflow,
		i,
		e;
	function y() {
		var v = H,
			b = g;
		I(null), O(null);
		try {
			return _ ?? (_ = r()(t, (s == null ? void 0 : s()) ?? {}, { direction: h }));
		} finally {
			I(v), O(b);
		}
	}
	var u = {
			is_global: d,
			in() {
				var v;
				if (((t.inert = f), !n)) {
					e == null || e.abort(), (v = e == null ? void 0 : e.reset) == null || v.call(e);
					return;
				}
				c || i == null || i.abort(),
					N(t, 'introstart'),
					(i = A(t, y(), e, 1, () => {
						N(t, 'introend'), i == null || i.abort(), (i = _ = void 0), (t.style.overflow = w);
					}));
			},
			out(v) {
				if (!c) {
					v == null || v(), (_ = void 0);
					return;
				}
				(t.inert = !0),
					N(t, 'outrostart'),
					(e = A(t, y(), i, 0, () => {
						N(t, 'outroend'), v == null || v();
					}));
			},
			stop: () => {
				i == null || i.abort(), e == null || e.abort();
			}
		},
		l = g;
	if (((l.transitions ?? (l.transitions = [])).push(u), n && J)) {
		var T = d;
		if (!T) {
			for (var p = l.parent; p && p.f & M; ) for (; (p = p.parent) && !(p.f & z); );
			T = !p || (p.f & B) !== 0;
		}
		T &&
			P(() => {
				U(() => u.in());
			});
	}
}
function A(a, t, r, s, n) {
	var c = s === 1;
	if (G(t)) {
		var o,
			d = !1;
		return (
			K(() => {
				if (!d) {
					var l = t({ direction: c ? 'in' : 'out' });
					o = A(a, l, r, s, n);
				}
			}),
			{
				abort: () => {
					(d = !0), o == null || o.abort();
				},
				deactivate: () => o.deactivate(),
				reset: () => o.reset(),
				t: () => o.t()
			}
		);
	}
	if ((r == null || r.deactivate(), !(t != null && t.duration)))
		return n(), { abort: $, deactivate: $, reset: $, t: () => s };
	const { delay: h = 0, css: _, tick: f, easing: w = Y } = t;
	var i = [];
	if (c && r === void 0 && (f && f(0, 1), _)) {
		var e = R(_(0, 1));
		i.push(e, e);
	}
	var y = () => 1 - s,
		u = a.animate(i, { duration: h });
	return (
		(u.onfinish = () => {
			var l = (r == null ? void 0 : r.t()) ?? 1 - s;
			r == null || r.abort();
			var T = s - l,
				p = t.duration * Math.abs(T),
				v = [];
			if (p > 0) {
				var b = !1;
				if (_)
					for (var C = Math.ceil(p / 16.666666666666668), k = 0; k <= C; k += 1) {
						var F = l + T * w(k / C),
							S = R(_(F, 1 - F));
						v.push(S), b || (b = S.overflow === 'hidden');
					}
				b && (a.style.overflow = 'hidden'),
					(y = () => {
						var E = u.currentTime;
						return l + T * w(E / p);
					}),
					f &&
						V(() => {
							if (u.playState !== 'running') return !1;
							var E = y();
							return f(E, 1 - E), !0;
						});
			}
			(u = a.animate(v, { duration: p, fill: 'forwards' })),
				(u.onfinish = () => {
					(y = () => s), f == null || f(s, 1 - s), n();
				});
		}),
		{
			abort: () => {
				u && (u.cancel(), (u.effect = null), (u.onfinish = $));
			},
			deactivate: () => {
				n = $;
			},
			reset: () => {
				s === 0 && (f == null || f(1, 0));
			},
			t: () => y()
		}
	);
}
const Z = (a) => a;
function L(a) {
	const t = a - 1;
	return t * t * t + 1;
}
function x(a) {
	const t = typeof a == 'string' && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || 'px'] : [a, 'px'];
}
function st(a, { delay: t = 0, duration: r = 400, easing: s = Z } = {}) {
	const n = +getComputedStyle(a).opacity;
	return { delay: t, duration: r, easing: s, css: (c) => `opacity: ${c * n}` };
}
function it(
	a,
	{ delay: t = 0, duration: r = 400, easing: s = L, x: n = 0, y: c = 0, opacity: o = 0 } = {}
) {
	const d = getComputedStyle(a),
		h = +d.opacity,
		_ = d.transform === 'none' ? '' : d.transform,
		f = h * (1 - o),
		[w, i] = x(n),
		[e, y] = x(c);
	return {
		delay: t,
		duration: r,
		easing: s,
		css: (u, l) => `
			transform: ${_} translate(${(1 - u) * w}${i}, ${(1 - u) * e}${y});
			opacity: ${h - f * l}`
	};
}
function nt(
	a,
	{ delay: t = 0, duration: r = 400, easing: s = L, start: n = 0, opacity: c = 0 } = {}
) {
	const o = getComputedStyle(a),
		d = +o.opacity,
		h = o.transform === 'none' ? '' : o.transform,
		_ = 1 - n,
		f = d * (1 - c);
	return {
		delay: t,
		duration: r,
		easing: s,
		css: (w, i) => `
			transform: ${h} scale(${1 - _ * i});
			opacity: ${d - f * i}
		`
	};
}
export { st as a, it as f, nt as s, rt as t };
