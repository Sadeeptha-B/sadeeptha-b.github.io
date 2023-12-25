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
		client: {"start":"_app/immutable/entry/start.93170186.js","app":"_app/immutable/entry/app.8f3f3499.js","imports":["_app/immutable/entry/start.93170186.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/singletons.2f371709.js","_app/immutable/chunks/index.1bfe2637.js","_app/immutable/entry/app.8f3f3499.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set(["/","/posts.json","/atom.xml","/feed.json","/manifest.webmanifest","/sitemap.xml","/tags.json","/about/","/hello-world/","/hello-world/elements/","/hello-world/toc-disabled/"]);
