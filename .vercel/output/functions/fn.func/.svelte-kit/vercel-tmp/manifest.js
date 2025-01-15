export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set(['favicon.png']),
		mimeTypes: { '.png': 'image/png', '.webp': 'image/webp' },
		_: {
			client: {
				start: '_app/immutable/entry/start.gNw_72Nr.js',
				app: '_app/immutable/entry/app.C21QBgXv.js',
				imports: [
					'_app/immutable/entry/start.gNw_72Nr.js',
					'_app/immutable/chunks/entry.BnNUDDnd.js',
					'_app/immutable/chunks/index-client.DufPoSJT.js',
					'_app/immutable/chunks/index.BLpjBNQv.js',
					'_app/immutable/entry/app.C21QBgXv.js',
					'_app/immutable/chunks/index.BLpjBNQv.js',
					'_app/immutable/chunks/disclose-version.CptZq6qT.js',
					'_app/immutable/chunks/if.VwChKBwC.js',
					'_app/immutable/chunks/props.C32psg8E.js',
					'_app/immutable/chunks/this.BhypVMKn.js',
					'_app/immutable/chunks/index-client.DufPoSJT.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/3.js')),
				__memo(() => import('../output/server/nodes/5.js'))
			],
			routes: [
				{
					id: '/api/posts',
					pattern: /^\/api\/posts\/?$/,
					params: [],
					page: null,
					endpoint: __memo(
						() => import('../output/server/entries/endpoints/api/posts/_server.ts.js')
					)
				},
				{
					id: '/contact',
					pattern: /^\/contact\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/projects/[id]',
					pattern: /^\/projects\/([^/]+?)\/?$/,
					params: [{ name: 'id', optional: false, rest: false, chained: false }],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				}
			],
			matchers: async () => {
				return {};
			},
			server_assets: {
				'_app/immutable/assets/myworkspace.woG3AntR.png': 333661,
				'_app/immutable/assets/lyfier.DeWbJJ9T.png': 58780,
				'_app/immutable/assets/skapec.Bbxj0OEH.webp': 55736,
				'_app/immutable/assets/designer.B15NoOr0.webp': 54070
			}
		}
	};
})();
