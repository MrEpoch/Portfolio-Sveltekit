var tt = (e) => {
	throw TypeError(e);
};
var Gt = (e, t, n) => t.has(e) || tt('Cannot ' + n);
var b = (e, t, n) => (Gt(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	C = (e, t, n) =>
		t.has(e)
			? tt('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n);
import { o as Ne } from './index-client.DufPoSJT.js';
import { $ as Be, aF as P, g as O, a3 as N, aE as je } from './index.BLpjBNQv.js';
new URL('sveltekit-internal://');
function Mt(e, t) {
	return e === '/' || t === 'ignore'
		? e
		: t === 'never'
			? e.endsWith('/')
				? e.slice(0, -1)
				: e
			: t === 'always' && !e.endsWith('/')
				? e + '/'
				: e;
}
function qt(e) {
	return e.split('%25').map(decodeURI).join('%25');
}
function Ht(e) {
	for (const t in e) e[t] = decodeURIComponent(e[t]);
	return e;
}
function xe({ href: e }) {
	return e.split('#')[0];
}
function Kt(e, t, n, r = !1) {
	const a = new URL(e);
	Object.defineProperty(a, 'searchParams', {
		value: new Proxy(a.searchParams, {
			get(i, s) {
				if (s === 'get' || s === 'getAll' || s === 'has') return (f) => (n(f), i[s](f));
				t();
				const c = Reflect.get(i, s);
				return typeof c == 'function' ? c.bind(i) : c;
			}
		}),
		enumerable: !0,
		configurable: !0
	});
	const o = ['href', 'pathname', 'search', 'toString', 'toJSON'];
	r && o.push('hash');
	for (const i of o)
		Object.defineProperty(a, i, {
			get() {
				return t(), e[i];
			},
			enumerable: !0,
			configurable: !0
		});
	return a;
}
const Wt = '/__data.json',
	Yt = '.html__data.json';
function zt(e) {
	return e.endsWith('.html') ? e.replace(/\.html$/, Yt) : e.replace(/\/$/, '') + Wt;
}
function Jt(...e) {
	let t = 5381;
	for (const n of e)
		if (typeof n == 'string') {
			let r = n.length;
			for (; r; ) t = (t * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) t = (t * 33) ^ r[--a];
		} else throw new TypeError('value must be a string or TypedArray');
	return (t >>> 0).toString(36);
}
function Xt(e) {
	const t = atob(e),
		n = new Uint8Array(t.length);
	for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
	return n.buffer;
}
const mt = window.fetch;
window.fetch = (e, t) => (
	(e instanceof Request ? e.method : (t == null ? void 0 : t.method) || 'GET') !== 'GET' &&
		Y.delete(Ge(e)),
	mt(e, t)
);
const Y = new Map();
function Zt(e, t) {
	const n = Ge(e, t),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		let { body: a, ...o } = JSON.parse(r.textContent);
		const i = r.getAttribute('data-ttl');
		return (
			i && Y.set(n, { body: a, init: o, ttl: 1e3 * Number(i) }),
			r.getAttribute('data-b64') !== null && (a = Xt(a)),
			Promise.resolve(new Response(a, o))
		);
	}
	return window.fetch(e, t);
}
function Qt(e, t, n) {
	if (Y.size > 0) {
		const r = Ge(e, n),
			a = Y.get(r);
		if (a) {
			if (
				performance.now() < a.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(n == null ? void 0 : n.cache)
			)
				return new Response(a.body, a.init);
			Y.delete(r);
		}
	}
	return window.fetch(t, n);
}
function Ge(e, t) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
	if ((t != null && t.headers) || (t != null && t.body)) {
		const a = [];
		t.headers && a.push([...new Headers(t.headers)].join(',')),
			t.body && (typeof t.body == 'string' || ArrayBuffer.isView(t.body)) && a.push(t.body),
			(r += `[data-hash="${Jt(...a)}"]`);
	}
	return r;
}
const en = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function tn(e) {
	const t = [];
	return {
		pattern:
			e === '/'
				? /^\/$/
				: new RegExp(
						`^${rn(e)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										t.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const o = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (o)
									return (
										t.push({ name: o[1], matcher: o[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!r) return;
								const i = r.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									i
										.map((c, f) => {
											if (f % 2) {
												if (c.startsWith('x+'))
													return Te(String.fromCharCode(parseInt(c.slice(2), 16)));
												if (c.startsWith('u+'))
													return Te(
														String.fromCharCode(
															...c
																.slice(2)
																.split('-')
																.map((l) => parseInt(l, 16))
														)
													);
												const d = en.exec(c),
													[, h, y, u, g] = d;
												return (
													t.push({
														name: u,
														matcher: g,
														optional: !!h,
														rest: !!y,
														chained: y ? f === 1 && i[0] === '' : !1
													}),
													y ? '(.*?)' : h ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return Te(c);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: t
	};
}
function nn(e) {
	return !/^\([^)]+\)$/.test(e);
}
function rn(e) {
	return e.slice(1).split('/').filter(nn);
}
function an(e, t, n) {
	const r = {},
		a = e.slice(1),
		o = a.filter((s) => s !== void 0);
	let i = 0;
	for (let s = 0; s < t.length; s += 1) {
		const c = t[s];
		let f = a[s - i];
		if (
			(c.chained &&
				c.rest &&
				i &&
				((f = a
					.slice(s - i, s + 1)
					.filter((d) => d)
					.join('/')),
				(i = 0)),
			f === void 0)
		) {
			c.rest && (r[c.name] = '');
			continue;
		}
		if (!c.matcher || n[c.matcher](f)) {
			r[c.name] = f;
			const d = t[s + 1],
				h = a[s + 1];
			d && !d.rest && d.optional && h && c.chained && (i = 0),
				!d && !h && Object.keys(r).length === o.length && (i = 0);
			continue;
		}
		if (c.optional && c.chained) {
			i++;
			continue;
		}
		return;
	}
	if (!i) return r;
}
function Te(e) {
	return e
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function on({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
	const a = new Set(t);
	return Object.entries(n).map(([s, [c, f, d]]) => {
		const { pattern: h, params: y } = tn(s),
			u = {
				id: s,
				exec: (g) => {
					const l = h.exec(g);
					if (l) return an(l, y, r);
				},
				errors: [1, ...(d || [])].map((g) => e[g]),
				layouts: [0, ...(f || [])].map(i),
				leaf: o(c)
			};
		return (u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length)), u;
	});
	function o(s) {
		const c = s < 0;
		return c && (s = ~s), [c, e[s]];
	}
	function i(s) {
		return s === void 0 ? s : [a.has(s), e[s]];
	}
}
function yt(e, t = JSON.parse) {
	try {
		return t(sessionStorage[e]);
	} catch {}
}
function nt(e, t, n = JSON.stringify) {
	const r = n(t);
	try {
		sessionStorage[e] = r;
	} catch {}
}
var ut;
const T = ((ut = globalThis.__sveltekit_13zumhn) == null ? void 0 : ut.base) ?? '';
var dt;
const sn = ((dt = globalThis.__sveltekit_13zumhn) == null ? void 0 : dt.assets) ?? T,
	cn = '1736972663013',
	_t = 'sveltekit:snapshot',
	wt = 'sveltekit:scroll',
	vt = 'sveltekit:states',
	ln = 'sveltekit:pageurl',
	B = 'sveltekit:history',
	X = 'sveltekit:navigation',
	pe = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	de = location.origin;
function bt(e) {
	if (e instanceof URL) return e;
	let t = document.baseURI;
	if (!t) {
		const n = document.getElementsByTagName('base');
		t = n.length ? n[0].href : document.URL;
	}
	return new URL(e, t);
}
function Me() {
	return { x: pageXOffset, y: pageYOffset };
}
function V(e, t) {
	return e.getAttribute(`data-sveltekit-${t}`);
}
const rt = { ...pe, '': pe.hover };
function At(e) {
	let t = e.assignedSlot ?? e.parentNode;
	return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function St(e, t) {
	for (; e && e !== t; ) {
		if (e.nodeName.toUpperCase() === 'A' && e.hasAttribute('href')) return e;
		e = At(e);
	}
}
function $e(e, t, n) {
	let r;
	try {
		r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI);
	} catch {}
	const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
		o = !r || !!a || be(r, t, n) || (e.getAttribute('rel') || '').split(/\s+/).includes('external'),
		i = (r == null ? void 0 : r.origin) === de && e.hasAttribute('download');
	return { url: r, external: o, target: a, download: i };
}
function ge(e) {
	let t = null,
		n = null,
		r = null,
		a = null,
		o = null,
		i = null,
		s = e;
	for (; s && s !== document.documentElement; )
		r === null && (r = V(s, 'preload-code')),
			a === null && (a = V(s, 'preload-data')),
			t === null && (t = V(s, 'keepfocus')),
			n === null && (n = V(s, 'noscroll')),
			o === null && (o = V(s, 'reload')),
			i === null && (i = V(s, 'replacestate')),
			(s = At(s));
	function c(f) {
		switch (f) {
			case '':
			case 'true':
				return !0;
			case 'off':
			case 'false':
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: rt[r ?? 'off'],
		preload_data: rt[a ?? 'off'],
		keepfocus: c(t),
		noscroll: c(n),
		reload: c(o),
		replace_state: c(i)
	};
}
function at(e) {
	const t = Be(e);
	let n = !0;
	function r() {
		(n = !0), t.update((i) => i);
	}
	function a(i) {
		(n = !1), t.set(i);
	}
	function o(i) {
		let s;
		return t.subscribe((c) => {
			(s === void 0 || (n && c !== s)) && i((s = c));
		});
	}
	return { notify: r, set: a, subscribe: o };
}
const kt = { v: () => {} };
function fn() {
	const { set: e, subscribe: t } = Be(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${sn}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!a.ok) return !1;
			const i = (await a.json()).version !== cn;
			return i && (e(!0), kt.v(), clearTimeout(n)), i;
		} catch {
			return !1;
		}
	}
	return { subscribe: t, check: r };
}
function be(e, t, n) {
	return e.origin !== de || !e.pathname.startsWith(t)
		? !0
		: n
			? !(
					e.pathname === t + '/' ||
					(e.protocol === 'file:' && e.pathname.replace(/\/[^/]+\.html?$/, '') === t)
				)
			: !1;
}
function Fn(e) {
	const t = new DataView(e);
	let n = '';
	for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
	return dn(n);
}
function ot(e) {
	const t = un(e),
		n = new ArrayBuffer(t.length),
		r = new DataView(n);
	for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
	return n;
}
const Et = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function un(e) {
	e.length % 4 === 0 && (e = e.replace(/==?$/, ''));
	let t = '',
		n = 0,
		r = 0;
	for (let a = 0; a < e.length; a++)
		(n <<= 6),
			(n |= Et.indexOf(e[a])),
			(r += 6),
			r === 24 &&
				((t += String.fromCharCode((n & 16711680) >> 16)),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255)),
				(n = r = 0));
	return (
		r === 12
			? ((n >>= 4), (t += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255))),
		t
	);
}
function dn(e) {
	let t = '';
	for (let n = 0; n < e.length; n += 3) {
		const r = [void 0, void 0, void 0, void 0];
		(r[0] = e.charCodeAt(n) >> 2),
			(r[1] = (e.charCodeAt(n) & 3) << 4),
			e.length > n + 1 &&
				((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
			e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63));
		for (let a = 0; a < r.length; a++) typeof r[a] > 'u' ? (t += '=') : (t += Et[r[a]]);
	}
	return t;
}
const hn = -1,
	pn = -2,
	gn = -3,
	mn = -4,
	yn = -5,
	_n = -6;
function Vn(e, t) {
	return Rt(JSON.parse(e), t);
}
function Rt(e, t) {
	if (typeof e == 'number') return a(e, !0);
	if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
	const n = e,
		r = Array(n.length);
	function a(o, i = !1) {
		if (o === hn) return;
		if (o === gn) return NaN;
		if (o === mn) return 1 / 0;
		if (o === yn) return -1 / 0;
		if (o === _n) return -0;
		if (i) throw new Error('Invalid input');
		if (o in r) return r[o];
		const s = n[o];
		if (!s || typeof s != 'object') r[o] = s;
		else if (Array.isArray(s))
			if (typeof s[0] == 'string') {
				const c = s[0],
					f = t == null ? void 0 : t[c];
				if (f) return (r[o] = f(a(s[1])));
				switch (c) {
					case 'Date':
						r[o] = new Date(s[1]);
						break;
					case 'Set':
						const d = new Set();
						r[o] = d;
						for (let u = 1; u < s.length; u += 1) d.add(a(s[u]));
						break;
					case 'Map':
						const h = new Map();
						r[o] = h;
						for (let u = 1; u < s.length; u += 2) h.set(a(s[u]), a(s[u + 1]));
						break;
					case 'RegExp':
						r[o] = new RegExp(s[1], s[2]);
						break;
					case 'Object':
						r[o] = Object(s[1]);
						break;
					case 'BigInt':
						r[o] = BigInt(s[1]);
						break;
					case 'null':
						const y = Object.create(null);
						r[o] = y;
						for (let u = 1; u < s.length; u += 2) y[s[u]] = a(s[u + 1]);
						break;
					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array': {
						const u = globalThis[c],
							g = s[1],
							l = ot(g),
							p = new u(l);
						r[o] = p;
						break;
					}
					case 'ArrayBuffer': {
						const u = s[1],
							g = ot(u);
						r[o] = g;
						break;
					}
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(s.length);
				r[o] = c;
				for (let f = 0; f < s.length; f += 1) {
					const d = s[f];
					d !== pn && (c[f] = a(d));
				}
			}
		else {
			const c = {};
			r[o] = c;
			for (const f in s) {
				const d = s[f];
				c[f] = a(d);
			}
		}
		return r[o];
	}
	return a(0);
}
const It = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...It];
const wn = new Set([...It]);
[...wn];
function vn(e) {
	return e.filter((t) => t != null);
}
class Ae {
	constructor(t, n) {
		(this.status = t),
			typeof n == 'string'
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${t}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class qe {
	constructor(t, n) {
		(this.status = t), (this.location = n);
	}
}
class He extends Error {
	constructor(t, n, r) {
		super(r), (this.status = t), (this.text = n);
	}
}
const bn = 'x-sveltekit-invalidated',
	An = 'x-sveltekit-trailing-slash';
function me(e) {
	return e instanceof Ae || e instanceof He ? e.status : 500;
}
function Sn(e) {
	return e instanceof He ? e.text : 'Internal Error';
}
let E, Z, Ce;
const kn = Ne.toString().includes('$$') || /function \w+\(\) \{\}/.test(Ne.toString());
var ne, re, ae, oe, se, ie, ce, le, ht, fe, pt, ue, gt;
kn
	? ((E = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL('https://example.com')
		}),
		(Z = { current: null }),
		(Ce = { current: !1 }))
	: ((E = new ((ht = class {
			constructor() {
				C(this, ne, P({}));
				C(this, re, P(null));
				C(this, ae, P(null));
				C(this, oe, P({}));
				C(this, se, P({ id: null }));
				C(this, ie, P({}));
				C(this, ce, P(-1));
				C(this, le, P(new URL('https://example.com')));
			}
			get data() {
				return O(b(this, ne));
			}
			set data(t) {
				N(b(this, ne), t);
			}
			get form() {
				return O(b(this, re));
			}
			set form(t) {
				N(b(this, re), t);
			}
			get error() {
				return O(b(this, ae));
			}
			set error(t) {
				N(b(this, ae), t);
			}
			get params() {
				return O(b(this, oe));
			}
			set params(t) {
				N(b(this, oe), t);
			}
			get route() {
				return O(b(this, se));
			}
			set route(t) {
				N(b(this, se), t);
			}
			get state() {
				return O(b(this, ie));
			}
			set state(t) {
				N(b(this, ie), t);
			}
			get status() {
				return O(b(this, ce));
			}
			set status(t) {
				N(b(this, ce), t);
			}
			get url() {
				return O(b(this, le));
			}
			set url(t) {
				N(b(this, le), t);
			}
		}),
		(ne = new WeakMap()),
		(re = new WeakMap()),
		(ae = new WeakMap()),
		(oe = new WeakMap()),
		(se = new WeakMap()),
		(ie = new WeakMap()),
		(ce = new WeakMap()),
		(le = new WeakMap()),
		ht)()),
		(Z = new ((pt = class {
			constructor() {
				C(this, fe, P(null));
			}
			get current() {
				return O(b(this, fe));
			}
			set current(t) {
				N(b(this, fe), t);
			}
		}),
		(fe = new WeakMap()),
		pt)()),
		(Ce = new ((gt = class {
			constructor() {
				C(this, ue, P(!1));
			}
			get current() {
				return O(b(this, ue));
			}
			set current(t) {
				N(b(this, ue), t);
			}
		}),
		(ue = new WeakMap()),
		gt)()),
		(kt.v = () => (Ce.current = !0)));
function Ke(e) {
	Object.assign(E, e);
}
const En = new Set(['icon', 'shortcut icon', 'apple-touch-icon']),
	F = yt(wt) ?? {},
	Q = yt(_t) ?? {},
	$ = { url: at({}), page: at({}), navigating: Be(null), updated: fn() };
function We(e) {
	F[e] = Me();
}
function Rn(e, t) {
	let n = e + 1;
	for (; F[n]; ) delete F[n], (n += 1);
	for (n = t + 1; Q[n]; ) delete Q[n], (n += 1);
}
function q(e) {
	return (location.href = e.href), new Promise(() => {});
}
async function Ut() {
	if ('serviceWorker' in navigator) {
		const e = await navigator.serviceWorker.getRegistration(T || '/');
		e && (await e.update());
	}
}
function st() {}
let Se, De, ye, j, Fe, S;
const Lt = [],
	_e = [];
let L = null;
const Ye = new Set(),
	In = new Set(),
	z = new Set();
let _ = { branch: [], error: null, url: null },
	ze = !1,
	we = !1,
	it = !0,
	ee = !1,
	K = !1,
	xt = !1,
	ke = !1,
	G,
	U,
	x,
	H;
const J = new Set();
let Pe;
async function qn(e, t, n) {
	var a, o, i, s;
	document.URL !== location.href && (location.href = location.href),
		(S = e),
		await ((o = (a = e.hooks).init) == null ? void 0 : o.call(a)),
		(Se = on(e)),
		(j = document.documentElement),
		(Fe = t),
		(De = e.nodes[0]),
		(ye = e.nodes[1]),
		De(),
		ye(),
		(U = (i = history.state) == null ? void 0 : i[B]),
		(x = (s = history.state) == null ? void 0 : s[X]),
		U || ((U = x = Date.now()), history.replaceState({ ...history.state, [B]: U, [X]: x }, ''));
	const r = F[U];
	r && ((history.scrollRestoration = 'manual'), scrollTo(r.x, r.y)),
		n ? await Nn(Fe, n) : Pn(location.href, { replaceState: !0 }),
		On();
}
async function Un() {
	if ((await (Pe || (Pe = Promise.resolve())), !Pe)) return;
	Pe = null;
	const e = Re(_.url, !0);
	L = null;
	const t = (H = {}),
		n = e && (await Ze(e));
	if (!(!n || t !== H)) {
		if (n.type === 'redirect') return he(new URL(n.location, _.url).href, {}, 1, t);
		n.props.page && Object.assign(E, n.props.page),
			(_ = n.state),
			Tt(),
			G.$set(n.props),
			Ke(n.props.page);
	}
}
function Tt() {
	(Lt.length = 0), (ke = !1);
}
function Ct(e) {
	_e.some((t) => (t == null ? void 0 : t.snapshot)) &&
		(Q[e] = _e.map((t) => {
			var n;
			return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture();
		}));
}
function Pt(e) {
	var t;
	(t = Q[e]) == null ||
		t.forEach((n, r) => {
			var a, o;
			(o = (a = _e[r]) == null ? void 0 : a.snapshot) == null || o.restore(n);
		});
}
function ct() {
	We(U), nt(wt, F), Ct(x), nt(_t, Q);
}
async function he(e, t, n, r) {
	return W({
		type: 'goto',
		url: bt(e),
		keepfocus: t.keepFocus,
		noscroll: t.noScroll,
		replace_state: t.replaceState,
		state: t.state,
		redirect_count: n,
		nav_token: r,
		accept: () => {
			t.invalidateAll && (ke = !0);
		}
	});
}
async function Ln(e) {
	if (e.id !== (L == null ? void 0 : L.id)) {
		const t = {};
		J.add(t),
			(L = {
				id: e.id,
				token: t,
				promise: Ze({ ...e, preload: t }).then(
					(n) => (J.delete(t), n.type === 'loaded' && n.state.error && (L = null), n)
				)
			});
	}
	return L.promise;
}
async function Oe(e) {
	const t = Se.find((n) => n.exec(jt(e)));
	t && (await Promise.all([...t.layouts, t.leaf].map((n) => (n == null ? void 0 : n[1]()))));
}
function Ot(e, t, n) {
	var o;
	_ = e.state;
	const r = document.querySelector('style[data-sveltekit]');
	r && r.remove(),
		Object.assign(E, e.props.page),
		(G = new S.root({
			target: t,
			props: { ...e.props, stores: $, components: _e },
			hydrate: n,
			sync: !1
		})),
		Pt(x);
	const a = {
		from: null,
		to: {
			params: _.params,
			route: { id: ((o = _.route) == null ? void 0 : o.id) ?? null },
			url: new URL(location.href)
		},
		willUnload: !1,
		type: 'enter',
		complete: Promise.resolve()
	};
	z.forEach((i) => i(a)), (we = !0);
}
function te({ url: e, params: t, branch: n, status: r, error: a, route: o, form: i }) {
	let s = 'never';
	if (T && (e.pathname === T || e.pathname === T + '/')) s = 'always';
	else for (const u of n) (u == null ? void 0 : u.slash) !== void 0 && (s = u.slash);
	(e.pathname = Mt(e.pathname, s)), (e.search = e.search);
	const c = {
		type: 'loaded',
		state: { url: e, params: t, branch: n, error: a, route: o },
		props: { constructors: vn(n).map((u) => u.node.component), page: Ie(E) }
	};
	i !== void 0 && (c.props.form = i);
	let f = {},
		d = !E,
		h = 0;
	for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
		const g = n[u],
			l = _.branch[u];
		(g == null ? void 0 : g.data) !== (l == null ? void 0 : l.data) && (d = !0),
			g && ((f = { ...f, ...g.data }), d && (c.props[`data_${h}`] = f), (h += 1));
	}
	return (
		(!_.url || e.href !== _.url.href || _.error !== a || (i !== void 0 && i !== E.form) || d) &&
			(c.props.page = {
				error: a,
				params: t,
				route: { id: (o == null ? void 0 : o.id) ?? null },
				state: {},
				status: r,
				url: new URL(e),
				form: i ?? null,
				data: d ? f : E.data
			}),
		c
	);
}
async function Je({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: o }) {
	var d, h, y;
	let i = null,
		s = !0;
	const c = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set()
		},
		f = await e();
	if ((d = f.universal) != null && d.load) {
		let u = function (...l) {
			for (const p of l) {
				const { href: A } = new URL(p, n);
				c.dependencies.add(A);
			}
		};
		const g = {
			route: new Proxy(a, { get: (l, p) => (s && (c.route = !0), l[p]) }),
			params: new Proxy(r, { get: (l, p) => (s && c.params.add(p), l[p]) }),
			data: (o == null ? void 0 : o.data) ?? null,
			url: Kt(
				n,
				() => {
					s && (c.url = !0);
				},
				(l) => {
					s && c.search_params.add(l);
				},
				S.hash
			),
			async fetch(l, p) {
				let A;
				l instanceof Request
					? ((A = l.url),
						(p = {
							body: l.method === 'GET' || l.method === 'HEAD' ? void 0 : await l.blob(),
							cache: l.cache,
							credentials: l.credentials,
							headers: [...l.headers].length ? l.headers : void 0,
							integrity: l.integrity,
							keepalive: l.keepalive,
							method: l.method,
							mode: l.mode,
							redirect: l.redirect,
							referrer: l.referrer,
							referrerPolicy: l.referrerPolicy,
							signal: l.signal,
							...p
						}))
					: (A = l);
				const R = new URL(A, n);
				return (
					s && u(R.href),
					R.origin === n.origin && (A = R.href.slice(n.origin.length)),
					we ? Qt(A, R.href, p) : Zt(A, p)
				);
			},
			setHeaders: () => {},
			depends: u,
			parent() {
				return s && (c.parent = !0), t();
			},
			untrack(l) {
				s = !1;
				try {
					return l();
				} finally {
					s = !0;
				}
			}
		};
		i = (await f.universal.load.call(null, g)) ?? null;
	}
	return {
		node: f,
		loader: e,
		server: o,
		universal: (h = f.universal) != null && h.load ? { type: 'data', data: i, uses: c } : null,
		data: i ?? (o == null ? void 0 : o.data) ?? null,
		slash: ((y = f.universal) == null ? void 0 : y.trailingSlash) ?? (o == null ? void 0 : o.slash)
	};
}
function lt(e, t, n, r, a, o) {
	if (ke) return !0;
	if (!a) return !1;
	if ((a.parent && e) || (a.route && t) || (a.url && n)) return !0;
	for (const i of a.search_params) if (r.has(i)) return !0;
	for (const i of a.params) if (o[i] !== _.params[i]) return !0;
	for (const i of a.dependencies) if (Lt.some((s) => s(new URL(i)))) return !0;
	return !1;
}
function Xe(e, t) {
	return (e == null ? void 0 : e.type) === 'data'
		? e
		: (e == null ? void 0 : e.type) === 'skip'
			? (t ?? null)
			: null;
}
function xn(e, t) {
	if (!e) return new Set(t.searchParams.keys());
	const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
	for (const r of n) {
		const a = e.searchParams.getAll(r),
			o = t.searchParams.getAll(r);
		a.every((i) => o.includes(i)) && o.every((i) => a.includes(i)) && n.delete(r);
	}
	return n;
}
function ft({ error: e, url: t, route: n, params: r }) {
	return {
		type: 'loaded',
		state: { error: e, url: t, route: n, params: r, branch: [] },
		props: { page: Ie(E), constructors: [] }
	};
}
async function Ze({ id: e, invalidating: t, url: n, params: r, route: a, preload: o }) {
	if ((L == null ? void 0 : L.id) === e) return J.delete(L.token), L.promise;
	const { errors: i, layouts: s, leaf: c } = a,
		f = [...s, c];
	i.forEach((m) => (m == null ? void 0 : m().catch(() => {}))),
		f.forEach((m) => (m == null ? void 0 : m[1]().catch(() => {})));
	let d = null;
	const h = _.url ? e !== ve(_.url) : !1,
		y = _.route ? a.id !== _.route.id : !1,
		u = xn(_.url, n);
	let g = !1;
	const l = f.map((m, w) => {
		var D;
		const k = _.branch[w],
			I =
				!!(m != null && m[0]) &&
				((k == null ? void 0 : k.loader) !== m[1] ||
					lt(g, y, h, u, (D = k.server) == null ? void 0 : D.uses, r));
		return I && (g = !0), I;
	});
	if (l.some(Boolean)) {
		try {
			d = await Ft(n, l);
		} catch (m) {
			const w = await M(m, { url: n, params: r, route: { id: e } });
			return J.has(o)
				? ft({ error: w, url: n, params: r, route: a })
				: Ee({ status: me(m), error: w, url: n, route: a });
		}
		if (d.type === 'redirect') return d;
	}
	const p = d == null ? void 0 : d.nodes;
	let A = !1;
	const R = f.map(async (m, w) => {
		var Ue;
		if (!m) return;
		const k = _.branch[w],
			I = p == null ? void 0 : p[w];
		if (
			(!I || I.type === 'skip') &&
			m[1] === (k == null ? void 0 : k.loader) &&
			!lt(A, y, h, u, (Ue = k.universal) == null ? void 0 : Ue.uses, r)
		)
			return k;
		if (((A = !0), (I == null ? void 0 : I.type) === 'error')) throw I;
		return Je({
			loader: m[1],
			url: n,
			params: r,
			route: a,
			parent: async () => {
				var et;
				const Qe = {};
				for (let Le = 0; Le < w; Le += 1)
					Object.assign(Qe, (et = await R[Le]) == null ? void 0 : et.data);
				return Qe;
			},
			server_data_node: Xe(
				I === void 0 && m[0] ? { type: 'skip' } : (I ?? null),
				m[0] ? (k == null ? void 0 : k.server) : void 0
			)
		});
	});
	for (const m of R) m.catch(() => {});
	const v = [];
	for (let m = 0; m < f.length; m += 1)
		if (f[m])
			try {
				v.push(await R[m]);
			} catch (w) {
				if (w instanceof qe) return { type: 'redirect', location: w.location };
				if (J.has(o))
					return ft({
						error: await M(w, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a
					});
				let k = me(w),
					I;
				if (p != null && p.includes(w)) (k = w.status ?? k), (I = w.error);
				else if (w instanceof Ae) I = w.body;
				else {
					if (await $.updated.check()) return await Ut(), await q(n);
					I = await M(w, { params: r, url: n, route: { id: a.id } });
				}
				const D = await Nt(m, v, i);
				return D
					? te({
							url: n,
							params: r,
							branch: v.slice(0, D.idx).concat(D.node),
							status: k,
							error: I,
							route: a
						})
					: await Dt(n, { id: a.id }, I, k);
			}
		else v.push(void 0);
	return te({
		url: n,
		params: r,
		branch: v,
		status: 200,
		error: null,
		route: a,
		form: t ? void 0 : null
	});
}
async function Nt(e, t, n) {
	for (; e--; )
		if (n[e]) {
			let r = e;
			for (; !t[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null }
				};
			} catch {
				continue;
			}
		}
}
async function Ee({ status: e, error: t, url: n, route: r }) {
	const a = {};
	let o = null;
	if (S.server_loads[0] === 0)
		try {
			const s = await Ft(n, [!0]);
			if (s.type !== 'data' || (s.nodes[0] && s.nodes[0].type !== 'data')) throw 0;
			o = s.nodes[0] ?? null;
		} catch {
			(n.origin !== de || n.pathname !== location.pathname || ze) && (await q(n));
		}
	try {
		const s = await Je({
				loader: De,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: Xe(o)
			}),
			c = { node: await ye(), loader: ye, universal: null, server: null, data: null };
		return te({ url: n, params: a, branch: [s, c], status: e, error: t, route: null });
	} catch (s) {
		if (s instanceof qe) return he(new URL(s.location, location.href), {}, 0);
		throw s;
	}
}
function Re(e, t) {
	if (!e || be(e, T, S.hash)) return;
	let n;
	try {
		if (((n = S.hooks.reroute({ url: new URL(e) }) ?? e), typeof n == 'string')) {
			const a = new URL(e);
			S.hash ? (a.hash = n) : (a.pathname = n), (n = a);
		}
	} catch {
		return;
	}
	const r = jt(n);
	for (const a of Se) {
		const o = a.exec(r);
		if (o) return { id: ve(e), invalidating: t, route: a, params: Ht(o), url: e };
	}
}
function jt(e) {
	return (
		qt(S.hash ? e.hash.replace(/^#/, '').replace(/[?#].+/, '') : e.pathname.slice(T.length)) || '/'
	);
}
function ve(e) {
	return (S.hash ? e.hash.replace(/^#/, '') : e.pathname) + e.search;
}
function $t({ url: e, type: t, intent: n, delta: r }) {
	let a = !1;
	const o = Bt(_, n, e, t);
	r !== void 0 && (o.navigation.delta = r);
	const i = {
		...o.navigation,
		cancel: () => {
			(a = !0), o.reject(new Error('navigation cancelled'));
		}
	};
	return ee || Ye.forEach((s) => s(i)), a ? null : o;
}
async function W({
	type: e,
	url: t,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: o,
	state: i = {},
	redirect_count: s = 0,
	nav_token: c = {},
	accept: f = st,
	block: d = st
}) {
	const h = Re(t, !1),
		y = $t({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: h });
	if (!y) {
		d();
		return;
	}
	const u = U,
		g = x;
	f(), (ee = !0), we && $.navigating.set((Z.current = y.navigation)), (H = c);
	let l = h && (await Ze(h));
	if (!l) {
		if (be(t, T, S.hash)) return await q(t);
		l = await Dt(
			t,
			{ id: null },
			await M(new He(404, 'Not Found', `Not found: ${t.pathname}`), {
				url: t,
				params: {},
				route: { id: null }
			}),
			404
		);
	}
	if (((t = (h == null ? void 0 : h.url) || t), H !== c))
		return y.reject(new Error('navigation aborted')), !1;
	if (l.type === 'redirect')
		if (s >= 20)
			l = await Ee({
				status: 500,
				error: await M(new Error('Redirect loop'), { url: t, params: {}, route: { id: null } }),
				url: t,
				route: { id: null }
			});
		else return he(new URL(l.location, t).href, {}, s + 1, c), !1;
	else l.props.page.status >= 400 && (await $.updated.check()) && (await Ut(), await q(t));
	if (
		(Tt(),
		We(u),
		Ct(g),
		l.props.page.url.pathname !== t.pathname && (t.pathname = l.props.page.url.pathname),
		(i = n ? n.state : i),
		!n)
	) {
		const v = o ? 0 : 1,
			m = { [B]: (U += v), [X]: (x += v), [vt]: i };
		(o ? history.replaceState : history.pushState).call(history, m, '', t), o || Rn(U, x);
	}
	if (((L = null), (l.props.page.state = i), we)) {
		(_ = l.state), l.props.page && (l.props.page.url = t);
		const v = (await Promise.all(Array.from(In, (m) => m(y.navigation)))).filter(
			(m) => typeof m == 'function'
		);
		if (v.length > 0) {
			let m = function () {
				v.forEach((w) => {
					z.delete(w);
				});
			};
			v.push(m),
				v.forEach((w) => {
					z.add(w);
				});
		}
		G.$set(l.props), Ke(l.props.page), (xt = !0);
	} else Ot(l, Fe, !1);
	const { activeElement: p } = document;
	await je();
	const A = n ? n.scroll : a ? Me() : null;
	if (it) {
		const v =
			t.hash &&
			document.getElementById(
				decodeURIComponent(S.hash ? (t.hash.split('#')[2] ?? '') : t.hash.slice(1))
			);
		A ? scrollTo(A.x, A.y) : v ? v.scrollIntoView() : scrollTo(0, 0);
	}
	const R = document.activeElement !== p && document.activeElement !== document.body;
	!r && !R && Ve(),
		(it = !0),
		l.props.page && Object.assign(E, l.props.page),
		(ee = !1),
		e === 'popstate' && Pt(x),
		y.fulfil(void 0),
		z.forEach((v) => v(y.navigation)),
		$.navigating.set((Z.current = null));
}
async function Dt(e, t, n, r) {
	return e.origin === de && e.pathname === location.pathname && !ze
		? await Ee({ status: r, error: n, url: e, route: t })
		: await q(e);
}
function Tn() {
	let e;
	j.addEventListener('mousemove', (o) => {
		const i = o.target;
		clearTimeout(e),
			(e = setTimeout(() => {
				r(i, 2);
			}, 20));
	});
	function t(o) {
		o.defaultPrevented || r(o.composedPath()[0], 1);
	}
	j.addEventListener('mousedown', t), j.addEventListener('touchstart', t, { passive: !0 });
	const n = new IntersectionObserver(
		(o) => {
			for (const i of o) i.isIntersecting && (Oe(new URL(i.target.href)), n.unobserve(i.target));
		},
		{ threshold: 0 }
	);
	function r(o, i) {
		const s = St(o, j);
		if (!s) return;
		const { url: c, external: f, download: d } = $e(s, T, S.hash);
		if (f || d) return;
		const h = ge(s),
			y = c && ve(_.url) === ve(c);
		if (!h.reload && !y)
			if (i <= h.preload_data) {
				const u = Re(c, !1);
				u && Ln(u);
			} else i <= h.preload_code && Oe(c);
	}
	function a() {
		n.disconnect();
		for (const o of j.querySelectorAll('a')) {
			const { url: i, external: s, download: c } = $e(o, T, S.hash);
			if (s || c) continue;
			const f = ge(o);
			f.reload ||
				(f.preload_code === pe.viewport && n.observe(o), f.preload_code === pe.eager && Oe(i));
		}
	}
	z.add(a), a();
}
function M(e, t) {
	if (e instanceof Ae) return e.body;
	const n = me(e),
		r = Sn(e);
	return S.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function Cn(e, t) {
	Ne(
		() => (
			e.add(t),
			() => {
				e.delete(t);
			}
		)
	);
}
function Hn(e) {
	Cn(Ye, e);
}
function Pn(e, t = {}) {
	return (
		(e = new URL(bt(e))),
		e.origin !== de ? Promise.reject(new Error('goto: invalid URL')) : he(e, t, 0)
	);
}
function Kn() {
	return (ke = !0), Un();
}
async function Wn(e) {
	if (e.type === 'error') {
		const t = new URL(location.href),
			{ branch: n, route: r } = _;
		if (!r) return;
		const a = await Nt(_.branch.length, n, r.errors);
		if (a) {
			const o = te({
				url: t,
				params: _.params,
				branch: n.slice(0, a.idx).concat(a.node),
				status: e.status ?? 500,
				error: e.error,
				route: r
			});
			(_ = o.state), G.$set(o.props), Ke(o.props.page), je().then(Ve);
		}
	} else
		e.type === 'redirect'
			? he(e.location, { invalidateAll: !0 }, 0)
			: ((E.form = e.data),
				(E.status = e.status),
				G.$set({ form: null, page: Ie(E) }),
				await je(),
				G.$set({ form: e.data }),
				e.type === 'success' && Ve());
}
function On() {
	var t;
	(history.scrollRestoration = 'manual'),
		addEventListener('beforeunload', (n) => {
			let r = !1;
			if ((ct(), !ee)) {
				const a = Bt(_, void 0, null, 'leave'),
					o = {
						...a.navigation,
						cancel: () => {
							(r = !0), a.reject(new Error('navigation cancelled'));
						}
					};
				Ye.forEach((i) => i(o));
			}
			r ? (n.preventDefault(), (n.returnValue = '')) : (history.scrollRestoration = 'auto');
		}),
		addEventListener('visibilitychange', () => {
			document.visibilityState === 'hidden' && ct();
		}),
		((t = navigator.connection) != null && t.saveData) || Tn(),
		j.addEventListener('click', async (n) => {
			if (
				n.button ||
				n.which !== 1 ||
				n.metaKey ||
				n.ctrlKey ||
				n.shiftKey ||
				n.altKey ||
				n.defaultPrevented
			)
				return;
			const r = St(n.composedPath()[0], j);
			if (!r) return;
			const { url: a, external: o, target: i, download: s } = $e(r, T, S.hash);
			if (!a) return;
			if (i === '_parent' || i === '_top') {
				if (window.parent !== window) return;
			} else if (i && i !== '_self') return;
			const c = ge(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === 'https:' || a.protocol === 'http:')) ||
				s
			)
				return;
			const [d, h] = (S.hash ? a.hash.replace(/^#/, '') : a.href).split('#'),
				y = d === xe(location);
			if (o || (c.reload && (!y || !h))) {
				$t({ url: a, type: 'link' }) ? (ee = !0) : n.preventDefault();
				return;
			}
			if (h !== void 0 && y) {
				const [, u] = _.url.href.split('#');
				if (u === h) {
					if (
						(n.preventDefault(),
						h === '' || (h === 'top' && r.ownerDocument.getElementById('top') === null))
					)
						window.scrollTo({ top: 0 });
					else {
						const g = r.ownerDocument.getElementById(decodeURIComponent(h));
						g && (g.scrollIntoView(), g.focus());
					}
					return;
				}
				if (((K = !0), We(U), e(a), !c.replace_state)) return;
				K = !1;
			}
			n.preventDefault(),
				await new Promise((u) => {
					requestAnimationFrame(() => {
						setTimeout(u, 0);
					}),
						setTimeout(u, 100);
				}),
				W({
					type: 'link',
					url: a,
					keepfocus: c.keepfocus,
					noscroll: c.noscroll,
					replace_state: c.replace_state ?? a.href === location.href
				});
		}),
		j.addEventListener('submit', (n) => {
			if (n.defaultPrevented) return;
			const r = HTMLFormElement.prototype.cloneNode.call(n.target),
				a = n.submitter;
			if (
				((a == null ? void 0 : a.formTarget) || r.target) === '_blank' ||
				((a == null ? void 0 : a.formMethod) || r.method) !== 'get'
			)
				return;
			const s = new URL(
				((a == null ? void 0 : a.hasAttribute('formaction')) &&
					(a == null ? void 0 : a.formAction)) ||
					r.action
			);
			if (be(s, T, !1)) return;
			const c = n.target,
				f = ge(c);
			if (f.reload) return;
			n.preventDefault(), n.stopPropagation();
			const d = new FormData(c),
				h = a == null ? void 0 : a.getAttribute('name');
			h && d.append(h, (a == null ? void 0 : a.getAttribute('value')) ?? ''),
				(s.search = new URLSearchParams(d).toString()),
				W({
					type: 'form',
					url: s,
					keepfocus: f.keepfocus,
					noscroll: f.noscroll,
					replace_state: f.replace_state ?? s.href === location.href
				});
		}),
		addEventListener('popstate', async (n) => {
			var r;
			if ((r = n.state) != null && r[B]) {
				const a = n.state[B];
				if (((H = {}), a === U)) return;
				const o = F[a],
					i = n.state[vt] ?? {},
					s = new URL(n.state[ln] ?? location.href),
					c = n.state[X],
					f = _.url ? xe(location) === xe(_.url) : !1;
				if (c === x && (xt || f)) {
					i !== E.state && (E.state = i), e(s), (F[U] = Me()), o && scrollTo(o.x, o.y), (U = a);
					return;
				}
				const h = a - U;
				await W({
					type: 'popstate',
					url: s,
					popped: { state: i, scroll: o, delta: h },
					accept: () => {
						(U = a), (x = c);
					},
					block: () => {
						history.go(-h);
					},
					nav_token: H
				});
			} else if (!K) {
				const a = new URL(location.href);
				e(a);
			}
		}),
		addEventListener('hashchange', () => {
			K
				? ((K = !1),
					history.replaceState({ ...history.state, [B]: ++U, [X]: x }, '', location.href))
				: S.hash && _.url.hash === location.hash && W({ type: 'goto', url: _.url });
		});
	for (const n of document.querySelectorAll('link')) En.has(n.rel) && (n.href = n.href);
	addEventListener('pageshow', (n) => {
		n.persisted && $.navigating.set((Z.current = null));
	});
	function e(n) {
		(_.url = E.url = n), $.page.set(Ie(E)), $.page.notify();
	}
}
async function Nn(
	e,
	{ status: t = 200, error: n, node_ids: r, params: a, route: o, data: i, form: s }
) {
	ze = !0;
	const c = new URL(location.href);
	({ params: a = {}, route: o = { id: null } } = Re(c, !1) || {});
	let f,
		d = !0;
	try {
		const h = r.map(async (g, l) => {
				const p = i[l];
				return (
					p != null && p.uses && (p.uses = Vt(p.uses)),
					Je({
						loader: S.nodes[g],
						url: c,
						params: a,
						route: o,
						parent: async () => {
							const A = {};
							for (let R = 0; R < l; R += 1) Object.assign(A, (await h[R]).data);
							return A;
						},
						server_data_node: Xe(p)
					})
				);
			}),
			y = await Promise.all(h),
			u = Se.find(({ id: g }) => g === o.id);
		if (u) {
			const g = u.layouts;
			for (let l = 0; l < g.length; l++) g[l] || y.splice(l, 0, void 0);
		}
		f = te({ url: c, params: a, branch: y, status: t, error: n, form: s, route: u ?? null });
	} catch (h) {
		if (h instanceof qe) {
			await q(new URL(h.location, location.href));
			return;
		}
		(f = await Ee({
			status: me(h),
			error: await M(h, { url: c, params: a, route: o }),
			url: c,
			route: o
		})),
			(e.textContent = ''),
			(d = !1);
	}
	f.props.page && (f.props.page.state = {}), Ot(f, e, d);
}
async function Ft(e, t) {
	var a;
	const n = new URL(e);
	(n.pathname = zt(e.pathname)),
		e.pathname.endsWith('/') && n.searchParams.append(An, '1'),
		n.searchParams.append(bn, t.map((o) => (o ? '1' : '0')).join(''));
	const r = await mt(n.href);
	if (!r.ok) {
		let o;
		throw (
			((a = r.headers.get('content-type')) != null && a.includes('application/json')
				? (o = await r.json())
				: r.status === 404
					? (o = 'Not Found')
					: r.status === 500 && (o = 'Internal Error'),
			new Ae(r.status, o))
		);
	}
	return new Promise(async (o) => {
		var h;
		const i = new Map(),
			s = r.body.getReader(),
			c = new TextDecoder();
		function f(y) {
			return Rt(y, {
				...S.decoders,
				Promise: (u) =>
					new Promise((g, l) => {
						i.set(u, { fulfil: g, reject: l });
					})
			});
		}
		let d = '';
		for (;;) {
			const { done: y, value: u } = await s.read();
			if (y && !d) break;
			for (
				d +=
					!u && d
						? `
`
						: c.decode(u, { stream: !0 });
				;

			) {
				const g = d.indexOf(`
`);
				if (g === -1) break;
				const l = JSON.parse(d.slice(0, g));
				if (((d = d.slice(g + 1)), l.type === 'redirect')) return o(l);
				if (l.type === 'data')
					(h = l.nodes) == null ||
						h.forEach((p) => {
							(p == null ? void 0 : p.type) === 'data' &&
								((p.uses = Vt(p.uses)), (p.data = f(p.data)));
						}),
						o(l);
				else if (l.type === 'chunk') {
					const { id: p, data: A, error: R } = l,
						v = i.get(p);
					i.delete(p), R ? v.reject(f(R)) : v.fulfil(f(A));
				}
			}
		}
	});
}
function Vt(e) {
	return {
		dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
		params: new Set((e == null ? void 0 : e.params) ?? []),
		parent: !!(e != null && e.parent),
		route: !!(e != null && e.route),
		url: !!(e != null && e.url),
		search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
	};
}
function Ve() {
	const e = document.querySelector('[autofocus]');
	if (e) e.focus();
	else {
		const t = document.body,
			n = t.getAttribute('tabindex');
		(t.tabIndex = -1),
			t.focus({ preventScroll: !0, focusVisible: !1 }),
			n !== null ? t.setAttribute('tabindex', n) : t.removeAttribute('tabindex');
		const r = getSelection();
		if (r && r.type !== 'None') {
			const a = [];
			for (let o = 0; o < r.rangeCount; o += 1) a.push(r.getRangeAt(o));
			setTimeout(() => {
				if (r.rangeCount === a.length) {
					for (let o = 0; o < r.rangeCount; o += 1) {
						const i = a[o],
							s = r.getRangeAt(o);
						if (
							i.commonAncestorContainer !== s.commonAncestorContainer ||
							i.startContainer !== s.startContainer ||
							i.endContainer !== s.endContainer ||
							i.startOffset !== s.startOffset ||
							i.endOffset !== s.endOffset
						)
							return;
					}
					r.removeAllRanges();
				}
			});
		}
	}
}
function Bt(e, t, n, r) {
	var c, f;
	let a, o;
	const i = new Promise((d, h) => {
		(a = d), (o = h);
	});
	return (
		i.catch(() => {}),
		{
			navigation: {
				from: {
					params: e.params,
					route: { id: ((c = e.route) == null ? void 0 : c.id) ?? null },
					url: e.url
				},
				to: n && {
					params: (t == null ? void 0 : t.params) ?? null,
					route: { id: ((f = t == null ? void 0 : t.route) == null ? void 0 : f.id) ?? null },
					url: n
				},
				willUnload: !t,
				type: r,
				complete: i
			},
			fulfil: a,
			reject: o
		}
	);
}
function Ie(e) {
	return {
		data: e.data,
		error: e.error,
		form: e.form,
		params: e.params,
		route: e.route,
		state: e.state,
		status: e.status,
		url: e.url
	};
}
export {
	pn as H,
	gn as N,
	mn as P,
	hn as U,
	yn as a,
	_n as b,
	Vn as c,
	S as d,
	Fn as e,
	Wn as f,
	Hn as g,
	Pn as h,
	Kn as i,
	qn as j,
	E as p,
	$ as s,
	Ce as u
};
