import {
	b as p,
	h as i,
	a as y,
	M as A,
	H as I,
	d as N,
	s as R,
	f as _,
	j as o,
	k as u,
	p as h,
	i as g,
	U as k
} from './index.BLpjBNQv.js';
function x(d, b, v = !1) {
	i && y();
	var e = d,
		a = null,
		s = null,
		f = k,
		T = v ? A : 0,
		r = !1;
	const m = (l, t = !0) => {
			(r = !0), n(t, l);
		},
		n = (l, t) => {
			if (f === (f = l)) return;
			let c = !1;
			if (i) {
				const E = e.data === I;
				!!f === E && ((e = N()), R(e), _(!1), (c = !0));
			}
			f
				? (a ? o(a) : t && (a = u(() => t(e))),
					s &&
						h(s, () => {
							s = null;
						}))
				: (s ? o(s) : t && (s = u(() => t(e))),
					a &&
						h(a, () => {
							a = null;
						})),
				c && _(!0);
		};
	p(() => {
		(r = !1), b(m), r || n(null, null);
	}, T),
		i && (e = g);
}
export { x as i };
