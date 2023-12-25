

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.md.js')).default;
export const imports = ["_app/immutable/nodes/3.d4bcc4cf.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js","_app/immutable/chunks/post_layout.da8bf52f.js","_app/immutable/chunks/posts.2f41de7f.js","_app/immutable/chunks/icon.b5979ea1.js","_app/immutable/chunks/index.1bfe2637.js","_app/immutable/chunks/footer.0c37b8e4.js"];
export const stylesheets = ["_app/immutable/assets/posts.e0b8bfad.css"];
export const fonts = [];
