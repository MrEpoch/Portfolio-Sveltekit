import { $ as S } from './index.BLpjBNQv.js';
var d = { local: {}, session: {} };
function b(e) {
	return e === 'local' ? localStorage : sessionStorage;
}
function h(e, w, v) {
	var c, f;
	const i = (c = void 0) != null ? c : JSON,
		t = (f = void 0) != null ? f : 'local',
		g = typeof window < 'u' && typeof document < 'u',
		r = g ? b(t) : null;
	function p(s, u) {
		r == null || r.setItem(s, i.stringify(u));
	}
	if (!d[t][e]) {
		const s = S(w, (n) => {
				const a = r == null ? void 0 : r.getItem(e);
				if ((a && n(i.parse(a)), g && t == 'local')) {
					const o = (l) => {
						l.key === e && n(l.newValue ? i.parse(l.newValue) : null);
					};
					return (
						window.addEventListener('storage', o), () => window.removeEventListener('storage', o)
					);
				}
			}),
			{ subscribe: u, set: m } = s;
		d[t][e] = {
			set(n) {
				p(e, n), m(n);
			},
			update(n) {
				return s.update((a) => {
					const o = n(a);
					return p(e, o), o;
				});
			},
			subscribe: u
		};
	}
	return d[t][e];
}
const E = h('current', 'home');
export { E as h };
