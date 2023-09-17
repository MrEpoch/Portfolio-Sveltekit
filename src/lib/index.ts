import { browser } from '$app/environment';

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

export const lazyLoad = (image, src) => {
	const loaded = () => {
		image.style.opacity = '1';
	};
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			if (browser && src.startsWith('http')) {
				caches.open('cm-images').then((cache) => cache.add(src));
			}
			image.src = src;
			if (image.complete) {
				loaded();
			} else {
				image.addEventListener('load', loaded);
			}
		}
	}, options);
	observer.observe(image);

	return {
		destroy() {
			image.removeEventListener('load', loaded);
		}
	};
};
