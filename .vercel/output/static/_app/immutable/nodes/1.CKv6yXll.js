import { a as g, t as x, s as h, c as v, e as $ } from '../chunks/disclose-version.CptZq6qT.js';
import { i as _, s as b } from '../chunks/legacy.Dkh836BQ.js';
import { N as k, O as w, P as y, Q as r, T as c, R as s } from '../chunks/index.BLpjBNQv.js';
import { u as j, s as R, p as t } from '../chunks/entry.BnNUDDnd.js';
const C = {
	get data() {
		return t.data;
	},
	get error() {
		return t.error;
	},
	get form() {
		return t.form;
	},
	get params() {
		return t.params;
	},
	get route() {
		return t.route;
	},
	get state() {
		return t.state;
	},
	get status() {
		return t.status;
	},
	get url() {
		return t.url;
	}
};
R.updated.check;
const H = C,
	L = '' + new URL('../assets/notfound.CSh8tmpH.svg', import.meta.url).href;
var N =
	x(`<div class="flex min-h-screen flex-col items-center justify-center dark:bg-black/10 dark:text-white/90"><img width="300" alt="not found"> <div class="flex h-fit max-w-[400px] flex-col items-center
                justify-center rounded-xl p-12
                "><h1 class="flex flex-col items-center gap-[1rem] text-center
                   text-3xl font-bold text-gray-900 dark:text-white"><span class="line h-1 w-full bg-gradient-to-r
 from-indigo-400 to-cyan-400"></span> </h1></div></div>`);
function T(u, p) {
	k(p, !1);
	const [l, m] = h(),
		d = () => $(H, '$page', l);
	_();
	var e = N(),
		a = r(e);
	b(a, 'src', L);
	var o = c(a, 2),
		n = r(o),
		f = c(r(n));
	s(n),
		s(o),
		s(e),
		w(() => {
			var i;
			return v(f, ` ${((i = d().error) == null ? void 0 : i.message) ?? ''}`);
		}),
		g(u, e),
		y(),
		m();
}
export { T as component };
