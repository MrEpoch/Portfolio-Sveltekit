import * as universal from '../entries/pages/contact/_page.ts.js';
import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/contact/+page.ts';
export { server };
export const server_id = 'src/routes/contact/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/3.BU8S9SdN.js',
	'_app/immutable/chunks/disclose-version.CptZq6qT.js',
	'_app/immutable/chunks/index.BLpjBNQv.js',
	'_app/immutable/chunks/legacy.Dkh836BQ.js',
	'_app/immutable/chunks/props.C32psg8E.js',
	'_app/immutable/chunks/if.VwChKBwC.js',
	'_app/immutable/chunks/actions.DPNC5imk.js',
	'_app/immutable/chunks/slot.DjWqvEeK.js',
	'_app/immutable/chunks/this.BhypVMKn.js',
	'_app/immutable/chunks/index-client.DufPoSJT.js',
	'_app/immutable/chunks/each.T267Drjg.js',
	'_app/immutable/chunks/entry.BnNUDDnd.js',
	'_app/immutable/chunks/class.CuyV2Eyf.js',
	'_app/immutable/chunks/store.D435cdky.js'
];
export const stylesheets = [];
export const fonts = [];
