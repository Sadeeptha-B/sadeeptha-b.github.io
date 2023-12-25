import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.18ea64e2.js","_app/immutable/chunks/scheduler.55c863de.js","_app/immutable/chunks/index.627ff791.js","_app/immutable/chunks/posts.2f41de7f.js","_app/immutable/chunks/icon.b5979ea1.js","_app/immutable/chunks/index.1bfe2637.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/0.caf5cbf9.css","_app/immutable/assets/posts.e0b8bfad.css"];
export const fonts = [];
