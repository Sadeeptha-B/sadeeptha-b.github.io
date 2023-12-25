

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.16aa0991.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js","_app/immutable/chunks/stores.e845a00a.js","_app/immutable/chunks/singletons.f374fd39.js","_app/immutable/chunks/index.1bfe2637.js"];
export const stylesheets = [];
export const fonts = [];
