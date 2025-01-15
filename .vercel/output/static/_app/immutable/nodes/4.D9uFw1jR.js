import {
	m as _,
	a as d,
	c as O,
	r as z,
	t as R,
	s as B,
	b as C
} from '../chunks/disclose-version.CptZq6qT.js';
import { i as T, s as k } from '../chunks/legacy.Dkh836BQ.js';
import {
	N as U,
	a3 as x,
	aA as L,
	g as f,
	P as N,
	aB as y,
	Q as l,
	R as p,
	T as M,
	O as V
} from '../chunks/index.BLpjBNQv.js';
import { i as S } from '../chunks/if.VwChKBwC.js';
import { e as J, i as P } from '../chunks/each.T267Drjg.js';
import { o as D } from '../chunks/index-client.DufPoSJT.js';
import { a as W } from '../chunks/actions.DPNC5imk.js';
import { s as $ } from '../chunks/class.CuyV2Eyf.js';
import { t as A, f as H } from '../chunks/index.CuS3thql.js';
import { p as j } from '../chunks/props.C32psg8E.js';
import { l as Q } from '../chunks/index.CD7-RfmC.js';
import { b as q } from '../chunks/index.BctqLAwO.js';
import { h as F } from '../chunks/store.D435cdky.js';
var G = R(`<a class="
    group flex h-full w-full max-w-[400px] flex-col gap-2 rounded-lg border border-gray-200 bg-main-background-300 p-4
    shadow transition-transform duration-300 hover:scale-[1.02] dark:border-0 dark:border-gray-700
    "><div><img class="h-full w-full object-cover opacity-0 group-hover:brightness-75" width="400"></div> <h5 class="text-lg"> </h5></a>`);
function K(g, o) {
	U(o, !1);
	let s = j(o, 'project_data', 8),
		h = j(o, 'i', 8),
		i = y(0),
		a = y(!1);
	D(() => {
		x(i, h()), x(a, !0);
	}),
		T();
	var n = _(),
		u = L(n);
	{
		var b = (t) => {
			var e = G(),
				r = l(e);
			$(r, 'h-48 w-full overflow-hidden ');
			var c = l(r);
			W(
				c,
				(E, I) => {
					var w;
					return (w = Q) == null ? void 0 : w(E, I);
				},
				() => s().img
			),
				p(r);
			var m = M(r, 2),
				v = l(m, !0);
			p(m),
				p(e),
				V(() => {
					k(e, 'href', `/projects/${s().id}`), k(c, 'alt', s().name), O(v, s().name);
				}),
				z(c),
				A(
					5,
					e,
					() => H,
					() => ({ y: 100, duration: 500 * f(i), easing: q })
				),
				d(t, e);
		};
		S(u, (t) => {
			f(a) && t(b);
		});
	}
	d(g, n), N();
}
const X = '' + new URL('../assets/lyfier.DeWbJJ9T.png', import.meta.url).href,
	Y = '' + new URL('../assets/skapec.Bbxj0OEH.webp', import.meta.url).href,
	Z = '' + new URL('../assets/designer.B15NoOr0.webp', import.meta.url).href,
	ee = [
		{
			id: '59b06467d1ca17ac69d3d8f7e9a3e59d',
			name: 'Lyfier',
			link: 'https://company-information-v5d7.vercel.app/',
			img: X,
			technologies: 'Next.js, React, Tailwind, Vercel, Sanity, Typescript',
			created: '2023',
			githubUrl: 'https://github.com/MrEpoch/Company-Information',
			description: `Website which could be used for company centered around ecology, i used sanity for blogs and accomplished
        tasks, it showcases my skills in using Next.js and React itself.`
		},
		{
			id: '0258ce721406c4bf367af006d1e1f6ab',
			name: 'Designer portfolio',
			link: 'https://designer-portfolio-rust.vercel.app/',
			img: Z,
			technologies: 'Next.js, React, Tailwind, Vercel, Typescript, ShadcnUI, framer motion',
			created: '2024',
			githubUrl: 'https://github.com/MrEpoch/designer-portfolio',
			description:
				'Designer portfolio made with intent of storing photos, designs and more, it was created with some beautiful animations in framer motion.'
		},
		{
			id: '0c5647ae44de7daeb992887c42e9d129',
			name: 'Skapec company',
			link: 'https://construction-skapec.vercel.app/',
			img: Y,
			technologies: 'Next.js, React, Tailwind, Vercel, Typescript, ShadcnUI, framer motion',
			created: '2024',
			githubUrl: 'https://github.com/MrEpoch/construction-skapec',
			description:
				'Construction company with basic pages like services, career, contact and about us, made with nextjs and optimized for performance.'
		}
	];
var te =
	R(`<div class="max-w-container w-full py-24 text-white dark:bg-main-background-200"><h1 class="mb-4 py-10 text-center text-5xl font-bold leading-none tracking-tight dark:text-white max-[390px]:text-4xl sm:p-6 lg:text-6xl">My projects</h1> <hr class="m-4 h-0.5 bg-main-200"> <p class="w-full text-center">Collection of some of my projects that I've worked on.</p> <div class="relative z-[0] flex w-full grid-cols-1 flex-col items-center
        justify-center justify-items-center gap-8 gap-x-6 gap-y-4 overflow-hidden py-16 text-center sm:grid sm:grid-cols-2
        sm:gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"><!></div></div>`);
function he(g, o) {
	U(o, !1);
	const [s, h] = B();
	let i = y(!1);
	D(() => {
		x(i, !0), C(F, 'projects');
	}),
		T();
	var a = te(),
		n = M(l(a), 6),
		u = l(n);
	{
		var b = (t) => {
			var e = _(),
				r = L(e);
			J(
				r,
				1,
				() => ee,
				P,
				(c, m, v) => {
					K(c, {
						i: v,
						get project_data() {
							return f(m);
						}
					});
				}
			),
				d(t, e);
		};
		S(u, (t) => {
			f(i) && t(b);
		});
	}
	p(n), p(a), d(g, a), N(), h();
}
export { he as component };
