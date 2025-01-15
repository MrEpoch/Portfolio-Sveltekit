const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.CRGFpwxM.js',
			'../chunks/disclose-version.CptZq6qT.js',
			'../chunks/index.BLpjBNQv.js',
			'../chunks/legacy.Dkh836BQ.js',
			'../chunks/slot.DjWqvEeK.js',
			'../chunks/props.C32psg8E.js',
			'../chunks/class.CuyV2Eyf.js',
			'../chunks/store.D435cdky.js',
			'../chunks/index.CuS3thql.js',
			'../assets/0.BkFoVjnC.css',
			'../nodes/1.CKv6yXll.js',
			'../chunks/entry.BnNUDDnd.js',
			'../chunks/index-client.DufPoSJT.js',
			'../nodes/2.CVwAJSlW.js',
			'../chunks/if.VwChKBwC.js',
			'../chunks/each.T267Drjg.js',
			'../chunks/index.BctqLAwO.js',
			'../chunks/actions.DPNC5imk.js',
			'../assets/2.BSdm482s.css',
			'../nodes/3.BU8S9SdN.js',
			'../chunks/this.BhypVMKn.js',
			'../nodes/4.D9uFw1jR.js',
			'../chunks/index.CD7-RfmC.js',
			'../nodes/5.BBs3ztdu.js'
		])
) => i.map((i) => d[i]);
var U = (r) => {
	throw TypeError(r);
};
var G = (r, e, s) => e.has(r) || U('Cannot ' + s);
var u = (r, e, s) => (G(r, e, 'read from private field'), s ? s.call(r) : e.get(r)),
	p = (r, e, s) =>
		e.has(r)
			? U('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(r)
				: e.set(r, s),
	C = (r, e, s, a) => (G(r, e, 'write to private field'), a ? a.call(r, s) : e.set(r, s), s);
import {
	h as Q,
	a as K,
	b as M,
	M as X,
	k as Z,
	i as $,
	p as ee,
	g as v,
	ad as te,
	a3 as L,
	aC as re,
	aD as se,
	C as ne,
	N as ae,
	aw as oe,
	_ as ie,
	aE as ce,
	aA as A,
	P as ue,
	aF as S,
	T as le,
	Q as fe,
	R as de,
	O as me,
	ak as j
} from '../chunks/index.BLpjBNQv.js';
import {
	o as _e,
	p as he,
	u as ve,
	a as R,
	t as Y,
	m as D,
	q as ge,
	c as ye
} from '../chunks/disclose-version.CptZq6qT.js';
import { i as I } from '../chunks/if.VwChKBwC.js';
import { p as V, a as Ee } from '../chunks/props.C32psg8E.js';
import { b as q } from '../chunks/this.BhypVMKn.js';
import { o as be } from '../chunks/index-client.DufPoSJT.js';
function B(r, e, s) {
	Q && K();
	var a = r,
		o,
		c;
	M(() => {
		o !== (o = e()) && (c && (ee(c), (c = null)), o && (c = Z(() => s(a, o))));
	}, X),
		Q && (a = $);
}
function Pe(r) {
	return class extends Re {
		constructor(e) {
			super({ component: r, ...e });
		}
	};
}
var g, f;
class Re {
	constructor(e) {
		p(this, g);
		p(this, f);
		var c;
		var s = new Map(),
			a = (n, t) => {
				var d = ne(t);
				return s.set(n, d), d;
			};
		const o = new Proxy(
			{ ...(e.props || {}), $$events: {} },
			{
				get(n, t) {
					return v(s.get(t) ?? a(t, Reflect.get(n, t)));
				},
				has(n, t) {
					return t === te ? !0 : (v(s.get(t) ?? a(t, Reflect.get(n, t))), Reflect.has(n, t));
				},
				set(n, t, d) {
					return L(s.get(t) ?? a(t, d), d), Reflect.set(n, t, d);
				}
			}
		);
		C(
			this,
			f,
			(e.hydrate ? _e : he)(e.component, {
				target: e.target,
				anchor: e.anchor,
				props: o,
				context: e.context,
				intro: e.intro ?? !1,
				recover: e.recover
			})
		),
			(!((c = e == null ? void 0 : e.props) != null && c.$$host) || e.sync === !1) && re(),
			C(this, g, o.$$events);
		for (const n of Object.keys(u(this, f)))
			n === '$set' ||
				n === '$destroy' ||
				n === '$on' ||
				se(this, n, {
					get() {
						return u(this, f)[n];
					},
					set(t) {
						u(this, f)[n] = t;
					},
					enumerable: !0
				});
		(u(this, f).$set = (n) => {
			Object.assign(o, n);
		}),
			(u(this, f).$destroy = () => {
				ve(u(this, f));
			});
	}
	$set(e) {
		u(this, f).$set(e);
	}
	$on(e, s) {
		u(this, g)[e] = u(this, g)[e] || [];
		const a = (...o) => s.call(this, ...o);
		return (
			u(this, g)[e].push(a),
			() => {
				u(this, g)[e] = u(this, g)[e].filter((o) => o !== a);
			}
		);
	}
	$destroy() {
		u(this, f).$destroy();
	}
}
(g = new WeakMap()), (f = new WeakMap());
const ke = 'modulepreload',
	we = function (r, e) {
		return new URL(r, e).href;
	},
	W = {},
	k = function (e, s, a) {
		let o = Promise.resolve();
		if (s && s.length > 0) {
			const n = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				d = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			o = Promise.allSettled(
				s.map((l) => {
					if (((l = we(l, a)), l in W)) return;
					W[l] = !0;
					const y = l.endsWith('.css'),
						T = y ? '[rel="stylesheet"]' : '';
					if (!!a)
						for (let E = n.length - 1; E >= 0; E--) {
							const i = n[E];
							if (i.href === l && (!y || i.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${l}"]${T}`)) return;
					const _ = document.createElement('link');
					if (
						((_.rel = y ? 'stylesheet' : ke),
						y || (_.as = 'script'),
						(_.crossOrigin = ''),
						(_.href = l),
						d && _.setAttribute('nonce', d),
						document.head.appendChild(_),
						y)
					)
						return new Promise((E, i) => {
							_.addEventListener('load', E),
								_.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${l}`)));
						});
				})
			);
		}
		function c(n) {
			const t = new Event('vite:preloadError', { cancelable: !0 });
			if (((t.payload = n), window.dispatchEvent(t), !t.defaultPrevented)) throw n;
		}
		return o.then((n) => {
			for (const t of n || []) t.status === 'rejected' && c(t.reason);
			return e().catch(c);
		});
	},
	Be = {};
var Oe = Y(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	xe = Y('<!> <!>', 1);
function Ae(r, e) {
	ae(e, !0);
	let s = V(e, 'components', 23, () => []),
		a = V(e, 'data_0', 3, null),
		o = V(e, 'data_1', 3, null);
	oe(() => e.stores.page.set(e.page)),
		ie(() => {
			e.stores, e.page, e.constructors, s(), e.form, a(), o(), e.stores.page.notify();
		});
	let c = S(!1),
		n = S(!1),
		t = S(null);
	be(() => {
		const i = e.stores.page.subscribe(() => {
			v(c) &&
				(L(n, !0),
				ce().then(() => {
					L(t, Ee(document.title || 'untitled page'));
				}));
		});
		return L(c, !0), i;
	});
	const d = j(() => e.constructors[1]);
	var l = xe(),
		y = A(l);
	{
		var T = (i) => {
				var h = D();
				const w = j(() => e.constructors[0]);
				var O = A(h);
				B(
					O,
					() => v(w),
					(b, P) => {
						q(
							P(b, {
								get data() {
									return a();
								},
								get form() {
									return e.form;
								},
								children: (m, pe) => {
									var N = D(),
										z = A(N);
									B(
										z,
										() => v(d),
										(H, J) => {
											q(
												J(H, {
													get data() {
														return o();
													},
													get form() {
														return e.form;
													}
												}),
												(x) => (s()[1] = x),
												() => {
													var x;
													return (x = s()) == null ? void 0 : x[1];
												}
											);
										}
									),
										R(m, N);
								},
								$$slots: { default: !0 }
							}),
							(m) => (s()[0] = m),
							() => {
								var m;
								return (m = s()) == null ? void 0 : m[0];
							}
						);
					}
				),
					R(i, h);
			},
			F = (i) => {
				var h = D();
				const w = j(() => e.constructors[0]);
				var O = A(h);
				B(
					O,
					() => v(w),
					(b, P) => {
						q(
							P(b, {
								get data() {
									return a();
								},
								get form() {
									return e.form;
								}
							}),
							(m) => (s()[0] = m),
							() => {
								var m;
								return (m = s()) == null ? void 0 : m[0];
							}
						);
					}
				),
					R(i, h);
			};
		I(y, (i) => {
			e.constructors[1] ? i(T) : i(F, !1);
		});
	}
	var _ = le(y, 2);
	{
		var E = (i) => {
			var h = Oe(),
				w = fe(h);
			{
				var O = (b) => {
					var P = ge();
					me(() => ye(P, v(t))), R(b, P);
				};
				I(w, (b) => {
					v(n) && b(O);
				});
			}
			de(h), R(i, h);
		};
		I(_, (i) => {
			v(c) && i(E);
		});
	}
	R(r, l), ue();
}
const Fe = Pe(Ae),
	Ne = [
		() =>
			k(
				() => import('../nodes/0.CRGFpwxM.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
				import.meta.url
			),
		() =>
			k(
				() => import('../nodes/1.CKv6yXll.js'),
				__vite__mapDeps([10, 1, 2, 3, 11, 12]),
				import.meta.url
			),
		() =>
			k(
				() => import('../nodes/2.CVwAJSlW.js'),
				__vite__mapDeps([13, 1, 2, 3, 14, 15, 8, 5, 12, 16, 4, 17, 7, 18]),
				import.meta.url
			),
		() =>
			k(
				() => import('../nodes/3.BU8S9SdN.js'),
				__vite__mapDeps([19, 1, 2, 3, 5, 14, 17, 4, 20, 12, 15, 11, 6, 7]),
				import.meta.url
			),
		() =>
			k(
				() => import('../nodes/4.D9uFw1jR.js'),
				__vite__mapDeps([21, 1, 2, 3, 14, 15, 12, 17, 6, 8, 5, 22, 16, 7]),
				import.meta.url
			),
		() =>
			k(
				() => import('../nodes/5.BBs3ztdu.js'),
				__vite__mapDeps([23, 1, 2, 3, 17, 5, 22, 7, 12]),
				import.meta.url
			)
	],
	Ue = [],
	Ge = { '/': [2], '/contact': [-4], '/projects': [4], '/projects/[id]': [-6] },
	Le = {
		handleError: ({ error: r }) => {
			console.error(r);
		},
		reroute: () => {},
		transport: {}
	},
	Te = Object.fromEntries(Object.entries(Le.transport).map(([r, e]) => [r, e.decode])),
	Qe = !1,
	We = (r, e) => Te[r](e);
export {
	We as decode,
	Te as decoders,
	Ge as dictionary,
	Qe as hash,
	Le as hooks,
	Be as matchers,
	Ne as nodes,
	Fe as root,
	Ue as server_loads
};
