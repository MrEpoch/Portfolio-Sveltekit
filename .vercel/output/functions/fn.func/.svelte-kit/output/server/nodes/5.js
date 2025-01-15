import * as server from '../entries/pages/projects/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/projects/_id_/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/projects/[id]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/5.BBs3ztdu.js',
	'_app/immutable/chunks/disclose-version.CptZq6qT.js',
	'_app/immutable/chunks/index.BLpjBNQv.js',
	'_app/immutable/chunks/legacy.Dkh836BQ.js',
	'_app/immutable/chunks/actions.DPNC5imk.js',
	'_app/immutable/chunks/props.C32psg8E.js',
	'_app/immutable/chunks/index.CD7-RfmC.js',
	'_app/immutable/chunks/store.D435cdky.js',
	'_app/immutable/chunks/index-client.DufPoSJT.js'
];
export const stylesheets = [];
export const fonts = [];
