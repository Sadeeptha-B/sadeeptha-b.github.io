export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/any@180.png","assets/any@192.png","assets/any@512.png","assets/maskable@192.png","assets/maskable@512.png","favicon.png","hello-world/urara.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.d216b2e3.js","app":"_app/immutable/entry/app.c0c54a60.js","imports":["_app/immutable/entry/start.d216b2e3.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/singletons.f374fd39.js","_app/immutable/chunks/index.1bfe2637.js","_app/immutable/entry/app.c0c54a60.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/atom.xml",
				pattern: /^\/atom\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/atom.xml/_server.ts.js'))
			},
			{
				id: "/feed.json",
				pattern: /^\/feed\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/feed.json/_server.ts.js'))
			},
			{
				id: "/hello-world",
				pattern: /^\/hello-world\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/hello-world/elements",
				pattern: /^\/hello-world\/elements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/hello-world/toc-disabled",
				pattern: /^\/hello-world\/toc-disabled\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/manifest.webmanifest",
				pattern: /^\/manifest\.webmanifest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/manifest.webmanifest/_server.ts.js'))
			},
			{
				id: "/posts.json",
				pattern: /^\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts.json/_server.ts.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/tags.json",
				pattern: /^\/tags\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/tags.json/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
