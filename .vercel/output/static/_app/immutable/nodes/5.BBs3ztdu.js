import {
	a as G,
	t as M,
	s as N,
	b as O,
	r as P,
	c as r
} from '../chunks/disclose-version.CptZq6qT.js';
import { i as Q, s as o } from '../chunks/legacy.Dkh836BQ.js';
import { N as R, O as q, P as A, Q as t, R as e, T as s } from '../chunks/index.BLpjBNQv.js';
import { a as B } from '../chunks/actions.DPNC5imk.js';
import { p as E } from '../chunks/props.C32psg8E.js';
import { l as F } from '../chunks/index.CD7-RfmC.js';
import { h as H } from '../chunks/store.D435cdky.js';
import { o as I } from '../chunks/index-client.DufPoSJT.js';
var J =
	M(`<div class="max-w-container w-full py-16 text-white"><div class="flex h-full w-full flex-col gap-[2rem]"><a class="flex h-full min-h-[200px] w-full
            justify-center rounded-3xl bg-gray-200 object-cover dark:bg-gray-800 sm:min-h-[500px]"><img class="rounded-3xl object-cover opacity-0 dark:brightness-[85%]"></a> <a><h2 class="font-anton mt-4 text-2xl tracking-wide text-gray-900 hover:underline dark:text-white sm:text-4xl"> </h2></a> <hr class="long-line h-1 w-full bg-gradient-to-r from-main-200 to-main-300"> <div class="w-full"><div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Technologies:</h3> <p class="text-sm sm:text-lg"> </p></div> <div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Created:</h3> <p class="text-sm sm:text-lg"> </p></div> <div class="flex justify-between gap-2"><h3 class="text-sm font-bold sm:text-lg">Github Url:</h3> <a class="text-sm hover:underline sm:text-lg"> </a></div></div> <div class="w-full"><h3 class="font-anton mt-4 text-2xl tracking-wide text-gray-900 dark:text-white">Description</h3> <p class="mt-4 text-lg text-gray-900 dark:text-white"> </p></div></div></div>`);
function st(k, x) {
	R(x, !1);
	const [K, j] = N();
	I(() => {
		O(H, 'projects');
	});
	let a = E(x, 'data', 8)().project;
	Q();
	var n = J(),
		f = t(n),
		l = t(f),
		m = t(l);
	B(
		m,
		(C, D) => {
			var y;
			return (y = F) == null ? void 0 : y(C, D);
		},
		() => a.img
	),
		e(l);
	var i = s(l, 2),
		h = t(i),
		L = t(h, !0);
	e(h), e(i);
	var d = s(i, 4),
		v = t(d),
		g = s(t(v), 2),
		T = t(g, !0);
	e(g), e(v);
	var c = s(v, 2),
		u = s(t(c), 2),
		U = t(u, !0);
	e(u), e(c);
	var _ = s(c, 2),
		p = s(t(_), 2),
		$ = t(p, !0);
	e(p), e(_), e(d);
	var b = s(d, 2),
		w = s(t(b), 2),
		z = t(w, !0);
	e(w),
		e(b),
		e(f),
		e(n),
		q(() => {
			o(l, 'href', a.link),
				o(m, 'alt', a.name),
				o(i, 'href', a.link),
				r(L, a.name),
				r(T, a.technologies),
				r(U, a.created),
				o(p, 'href', a.githubUrl),
				r($, a.name),
				r(z, a.description);
		}),
		P(m),
		G(k, n),
		A(),
		j();
}
export { st as component };
