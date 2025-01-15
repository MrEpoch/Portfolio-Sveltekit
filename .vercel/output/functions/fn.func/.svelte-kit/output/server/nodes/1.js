export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.CKv6yXll.js',
	'_app/immutable/chunks/disclose-version.CptZq6qT.js',
	'_app/immutable/chunks/index.BLpjBNQv.js',
	'_app/immutable/chunks/legacy.Dkh836BQ.js',
	'_app/immutable/chunks/entry.BnNUDDnd.js',
	'_app/immutable/chunks/index-client.DufPoSJT.js'
];
export const stylesheets = [];
export const fonts = [];
