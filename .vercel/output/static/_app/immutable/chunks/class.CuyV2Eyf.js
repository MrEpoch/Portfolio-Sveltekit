import { h as l } from './index.BLpjBNQv.js';
function n(s, a, e) {
	var c = s.__className,
		t = i(a);
	l && s.className === t
		? (s.__className = t)
		: (c !== t || (l && s.className !== t)) &&
			(a == null ? s.removeAttribute('class') : (s.className = t), (s.__className = t));
}
function i(s, a) {
	return (s ?? '') + '';
}
function f(s, a, e) {
	if (e) {
		if (s.classList.contains(a)) return;
		s.classList.add(a);
	} else {
		if (!s.classList.contains(a)) return;
		s.classList.remove(a);
	}
}
export { n as s, f as t };
