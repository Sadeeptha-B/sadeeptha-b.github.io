

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3cdf3eda.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js","_app/immutable/chunks/icon.b5979ea1.js","_app/immutable/chunks/index.1bfe2637.js","_app/immutable/chunks/stores.e845a00a.js","_app/immutable/chunks/singletons.f374fd39.js","_app/immutable/chunks/footer.0c37b8e4.js"];
export const stylesheets = [];
export const fonts = [];
