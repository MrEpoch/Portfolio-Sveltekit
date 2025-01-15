import {
	a as o,
	t as f,
	m as D,
	c as A,
	v as se,
	w as G,
	s as oe,
	b as ie
} from '../chunks/disclose-version.CptZq6qT.js';
import { i as U, s as le } from '../chunks/legacy.Dkh836BQ.js';
import {
	N as W,
	O as E,
	P as Y,
	a3 as F,
	g as b,
	Q as c,
	aA as B,
	R as i,
	T as L,
	aG as ce,
	aB as K,
	e as ve
} from '../chunks/index.BLpjBNQv.js';
import { i as C } from '../chunks/if.VwChKBwC.js';
import { e as X, i as $ } from '../chunks/each.T267Drjg.js';
import { t as z, f as N, a as pe } from '../chunks/index.CuS3thql.js';
import { p as J } from '../chunks/props.C32psg8E.js';
import { o as ee } from '../chunks/index-client.DufPoSJT.js';
import { b as q } from '../chunks/index.BctqLAwO.js';
import { s as de } from '../chunks/slot.DjWqvEeK.js';
import { a as me } from '../chunks/actions.DPNC5imk.js';
import { h as fe } from '../chunks/store.D435cdky.js';
var he = f(
		'<span class="line bg-gradient-to-r from-main-100 to-main-300 box-decoration-clone bg-clip-text text-transparent svelte-n7vcly"> </span>'
	),
	ge = f('<span class="line svelte-n7vcly"> </span>'),
	ue = f('<div class="overflow svelte-n7vcly"><!></div>'),
	xe = f(
		'<span class="pt-[2.6rem] max-[420px]:pt-[2.2rem] md:pt-[3.75rem] lg:pt-[4.5rem]"></span>'
	),
	we =
		f(`<div class="max-w-container flex flex-col items-center justify-center gap-[2rem] overflow-hidden py-16 pt-48 text-center"><h1 class="lines textfont-extrabold mb-4 text-3xl leading-none tracking-tight
        text-gray-900 dark:text-white max-[420px]:text-2xl md:text-5xl lg:text-6xl"><!></h1> <p class="mb-8 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 sm:text-lg lg:px-48 lg:text-xl"> </p> <div class="flex flex-col space-y-4 pb-[40rem] sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"><a href="/projects" class="inline-flex items-center justify-center rounded-lg border-4 border-main-background-200 bg-gradient-to-r from-main-300 to-main-200 px-5 py-3
                                  text-center text-base font-medium text-main-text-200
                                  transition hover:border-black focus:ring-4">See Projects <svg class="ml-2 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div>`);
function be(e, a) {
	W(a, !1);
	const l = [
		{ color: !1, content: 'Your' },
		{ color: !0, content: 'Ideas' },
		{ color: !1, content: ', My Solutions' }
	];
	let s = J(a, 'paragraph_text', 8),
		v = K(!1);
	ee(() => {
		F(v, !0);
	}),
		U();
	var d = we(),
		n = c(d),
		t = c(n);
	{
		var p = (r) => {
				var g = D(),
					y = B(g);
				X(
					y,
					1,
					() => l,
					$,
					(M, w, V) => {
						var I = ue(),
							ae = c(I);
						{
							var re = (k) => {
									var u = he(),
										O = c(u);
									i(u),
										E(() => A(O, ` ${b(w).content ?? ''}`)),
										z(
											5,
											u,
											() => N,
											() => ({ y: 100, delay: 300 * V, easing: q })
										),
										o(k, u);
								},
								ne = (k) => {
									var u = ge(),
										O = c(u, !0);
									i(u),
										E(() => A(O, b(w).content)),
										z(
											5,
											u,
											() => N,
											() => ({ y: 100, delay: 300 * V, easing: q })
										),
										o(k, u);
								};
							C(ae, (k) => {
								b(w).color ? k(re) : k(ne, !1);
							});
						}
						i(I), o(M, I);
					}
				),
					o(r, g);
			},
			_ = (r) => {
				var g = xe();
				o(r, g);
			};
		C(t, (r) => {
			b(v) ? r(p) : r(_, !1);
		});
	}
	i(n);
	var h = L(n, 2),
		m = c(h, !0);
	i(h), ce(2), i(d), E(() => A(m, s())), o(e, d), Y();
}
const _e = '' + new URL('../assets/AboutProjects.C9atGDsS.png', import.meta.url).href;
var ye =
	f(`<div class="max-w-container flex min-h-screen flex-col gap-6 text-main-text-100"><h2 class="pb-8 text-3xl font-bold">I'm alex, web developer centered around making websites. 🌐</h2> <p>I have few years of experience in developing websites. My passion is seeing how from ground up i
		built beautiful, functional website which takes breath of users.</p> <p>In terms of programming i am experience with other programming languages than JavaScript, like
		Rust, in which i created front-end of programming language interpretor.</p> <p>Currently i am exploring interesting JavaScript libraries which i can use or learning about how
		to better protect my websites. Everything from simple firewalls, to isolating programs with
		docker and logging what happens on server.</p> <p>My knowledge includes server side like how to secure server, prepare DNS, run containerized apps
		and more which takes my websites to the next level, in terms of professionalism.</p> <div class="flex w-full items-center justify-center py-16"><img class="h-96 w-fit"></div></div>`);
function ke(e) {
	var a = ye(),
		l = L(c(a), 10),
		s = c(l);
	le(s, 'src', _e), i(l), i(a), o(e, a);
}
const Ce = `
Developer with experience in website creation, with technologies like nextjs, sveltekit, tailwindcss, animations and more. All with intent of creating high quality websites.
    `,
	Le = [
		{
			id: 1,
			title: 'Responsive Design',
			content: 'Designed for optimal user experience on all devices.'
		},
		{ id: 2, title: 'Project setup', content: 'Experience with variety of frameworks.' },
		{
			id: 3,
			title: 'Cached content',
			content: 'Highly optimized for performance. Database and frontend caching.'
		}
	];
function Me(e) {
	return e();
}
function Ae(e) {
	e.forEach(Me);
}
const j = [],
	Q = [],
	R = [],
	T = [],
	te = Promise.resolve();
let Z = !1;
function Ve() {
	Z || ((Z = !0), te.then(Ee));
}
function je() {
	return Ve(), te;
}
function He(e) {
	R.push(e);
}
const P = new Set();
let H = 0;
function Ee() {
	do {
		for (; H < j.length; ) {
			const e = j[H];
			H++, Re(e.$$);
		}
		for (j.length = 0, H = 0; Q.length; ) Q.pop()();
		for (let e = 0; e < R.length; e += 1) {
			const a = R[e];
			P.has(a) || (P.add(a), a());
		}
		R.length = 0;
	} while (j.length);
	for (; T.length; ) T.pop()();
	(Z = !1), P.clear();
}
function Re(e) {
	if (e.fragment !== null) {
		e.update(), Ae(e.before_update);
		const a = e.dirty;
		(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, a), e.after_update.forEach(He);
	}
}
const Ie = { root: null, rootMargin: '0px', threshold: 0, unobserveOnEnter: !1 },
	x = (e, a) => new CustomEvent(e, { detail: a });
function S(e, a = {}) {
	const {
		root: l,
		rootMargin: s,
		threshold: v,
		unobserveOnEnter: d
	} = Object.assign(Object.assign({}, Ie), a);
	let n = { x: void 0, y: void 0 },
		t = { vertical: void 0, horizontal: void 0 };
	if (typeof IntersectionObserver < 'u' && e) {
		const p = new IntersectionObserver(
			(_, h) => {
				_.forEach((m) => {
					n.y > m.boundingClientRect.y ? (t.vertical = 'up') : (t.vertical = 'down'),
						n.x > m.boundingClientRect.x ? (t.horizontal = 'left') : (t.horizontal = 'right'),
						(n = { y: m.boundingClientRect.y, x: m.boundingClientRect.x });
					const r = {
						inView: m.isIntersecting,
						entry: m,
						scrollDirection: t,
						node: e,
						observer: h
					};
					e.dispatchEvent(x('inview_change', r)),
						e.dispatchEvent(x('change', r)),
						m.isIntersecting
							? (e.dispatchEvent(x('inview_enter', r)),
								e.dispatchEvent(x('enter', r)),
								d && h.unobserve(e))
							: (e.dispatchEvent(x('inview_leave', r)), e.dispatchEvent(x('leave', r)));
				});
			},
			{ root: l, rootMargin: s, threshold: v }
		);
		return (
			je().then(() => {
				e.dispatchEvent(x('inview_init', { observer: p, node: e })),
					e.dispatchEvent(x('init', { observer: p, node: e }));
			}),
			p.observe(e),
			{
				destroy() {
					p.unobserve(e);
				}
			}
		);
	}
}
var Oe = f('<div class="box"><!></div>'),
	Pe = f('<div class="wrapper"><!></div>');
function Se(e, a) {
	let l = K();
	var s = Pe(),
		v = c(s);
	{
		var d = (n) => {
			var t = Oe(),
				p = c(t);
			de(p, a, 'default', {}, null), i(t), z(1, t, () => pe), o(n, t);
		};
		C(v, (n) => {
			b(l) && n(d);
		});
	}
	i(s),
		me(
			s,
			(n, t) => (S == null ? void 0 : S(n, t)),
			() => ({ unobserveOnEnter: !0, rootMargin: '-20%' })
		),
		ve(() =>
			se('change', s, ({ detail: n }) => {
				F(l, n.inView);
			})
		),
		o(e, s);
}
var De = G(
		'<svg class="w-12 sm:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Project setup</title><path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path></svg>'
	),
	Be = G(
		'<svg class="w-12 sm:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Responsive Design</title><path fill="currentColor" d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"></path></svg>'
	),
	ze = G(
		'<svg class="w-12 sm:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-fast</title><path fill="currentColor" d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z"></path></svg>'
	),
	Ze = f('<div><!></div>');
function Ge(e, a) {
	let l = J(a, 'number', 8, 0);
	var s = Ze(),
		v = c(s);
	{
		var d = (t) => {
				var p = De();
				o(t, p);
			},
			n = (t) => {
				var p = D(),
					_ = B(p);
				{
					var h = (r) => {
							var g = Be();
							o(r, g);
						},
						m = (r) => {
							var g = D(),
								y = B(g);
							{
								var M = (w) => {
									var V = ze();
									o(w, V);
								};
								C(
									y,
									(w) => {
										l() === 2 && w(M);
									},
									!0
								);
							}
							o(r, g);
						};
					C(
						_,
						(r) => {
							l() === 1 ? r(h) : r(m, !1);
						},
						!0
					);
				}
				o(t, p);
			};
		C(v, (t) => {
			l() === 0 ? t(d) : t(n, !1);
		});
	}
	i(s), o(e, s);
}
var Je = f(`<a href="/projects" class="
                        group
                        flex max-h-[200px] min-h-[200px] min-w-[200px]
                        max-w-[200px] cursor-pointer flex-col items-center
                        justify-center gap-1 rounded-xl border-4
                        border-transparent bg-gray-600/20 p-2 shadow transition duration-300
                        hover:border-black hover:bg-main-200 hover:text-black
                        hover:transition-all sm:max-h-[300px] sm:min-h-[300px] sm:min-w-[300px] sm:max-w-[300px] sm:gap-2 sm:p-4
            "><!> <h2 class="text-lg font-bold text-gray-900 group-hover:text-black dark:text-white sm:text-2xl"> </h2> <p class="text-center text-sm text-gray-500 group-hover:text-black dark:text-gray-400"> </p></a>`),
	Ne =
		f(`<section class="flex min-h-screen flex-col bg-main-background-100 text-white"><div class="mx-auto mt-[16rem] flex w-full max-w-screen-xl flex-wrap justify-center
        gap-[5rem] overflow-hidden px-4 py-8"></div></section>`);
function qe(e, a) {
	let l = J(a, 'svg_content', 8);
	var s = Ne(),
		v = c(s);
	X(v, 5, l, $, (d, n, t) => {
		Se(d, {
			children: (p, _) => {
				var h = Je(),
					m = c(h);
				Ge(m, { number: t });
				var r = L(m, 2),
					g = c(r, !0);
				i(r);
				var y = L(r, 2),
					M = c(y, !0);
				i(y),
					i(h),
					E(() => {
						A(g, b(n).title), A(M, b(n).content);
					}),
					o(p, h);
			},
			$$slots: { default: !0 }
		});
	}),
		i(v),
		i(s),
		o(e, s);
}
var Qe = f(
	'<div class="relative"><!> <div class="relative z-10"><div class="custom-shape-divider-bottom text-main-background-100 svelte-11301h9"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-11301h9"><path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path></svg></div></div> <!> <div class="relative h-48"><div class="custom-shape-divider-top text-main-background-100 svelte-11301h9"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-11301h9"><path fill="currentColor" d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path></svg></div></div> <!></div>'
);
function nt(e, a) {
	W(a, !1);
	const [l, s] = oe();
	ee(() => {
		ie(fe, 'home');
	}),
		U();
	var v = Qe(),
		d = c(v);
	be(d, { paragraph_text: Ce });
	var n = L(d, 4);
	qe(n, { svg_content: Le });
	var t = L(n, 4);
	ke(t), i(v), o(e, v), Y(), s();
}
export { nt as component };
