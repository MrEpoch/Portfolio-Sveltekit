import type { Handle } from '@sveltejs/kit';

const securityHeaders = {
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1',
	'Cross-Origin-Embedder-Policy': 'require-corp',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy':
		'accelerometer=(), camera=(), document-domain=(), encrypted-media=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()',
	'Strict-Transport-Security': 'max-age=31536000',
	'Cross-Origin-Resource-Policy': 'same-origin'
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	Object.entries(securityHeaders).forEach(([header, value]) => response.headers.set(header, value));

	return response;
};
