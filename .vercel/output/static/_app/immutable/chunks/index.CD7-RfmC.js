const n = { root: null, rootMargin: '0px', threshold: 0 },
	l = (e, t) => {
		const o = () => {
			e.style.opacity = '1';
		};
		return (
			new IntersectionObserver((s) => {
				s[0].isIntersecting &&
					(t.startsWith('http') && caches.open('cm-images').then((r) => r.add(t)),
					(e.src = t),
					e.complete ? o() : e.addEventListener('load', o));
			}, n).observe(e),
			{
				destroy() {
					e.removeEventListener('load', o);
				}
			}
		);
	};
export { l };
