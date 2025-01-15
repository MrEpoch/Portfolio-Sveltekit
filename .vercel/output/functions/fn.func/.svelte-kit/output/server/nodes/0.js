import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export { universal };
export const universal_id = 'src/routes/+layout.ts';
export { server };
export const server_id = 'src/routes/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/0.CRGFpwxM.js',
	'_app/immutable/chunks/disclose-version.CptZq6qT.js',
	'_app/immutable/chunks/index.BLpjBNQv.js',
	'_app/immutable/chunks/legacy.Dkh836BQ.js',
	'_app/immutable/chunks/slot.DjWqvEeK.js',
	'_app/immutable/chunks/props.C32psg8E.js',
	'_app/immutable/chunks/class.CuyV2Eyf.js',
	'_app/immutable/chunks/store.D435cdky.js',
	'_app/immutable/chunks/index.CuS3thql.js'
];
export const stylesheets = ['_app/immutable/assets/0.BkFoVjnC.css'];
export const fonts = [
	'_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.BEIGL1Tu.woff2',
	'_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.CIEtRijs.woff',
	'_app/immutable/assets/jetbrains-mono-greek-400-normal.C190GLew.woff2',
	'_app/immutable/assets/jetbrains-mono-greek-400-normal.CNojz0t3.woff',
	'_app/immutable/assets/jetbrains-mono-vietnamese-400-normal.BeU3T8wf.woff',
	'_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.Bc8Ftmh3.woff2',
	'_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.DHMOLxAi.woff',
	'_app/immutable/assets/jetbrains-mono-latin-400-normal.V6pRDFza.woff2',
	'_app/immutable/assets/jetbrains-mono-latin-400-normal.B11XCQ5g.woff',
	'_app/immutable/assets/poppins-latin-ext-400-normal.by3JarPu.woff2',
	'_app/immutable/assets/poppins-latin-ext-400-normal.DaBSavcJ.woff',
	'_app/immutable/assets/poppins-latin-400-normal.cpxAROuN.woff2',
	'_app/immutable/assets/poppins-latin-400-normal.BOb3E3N0.woff'
];
