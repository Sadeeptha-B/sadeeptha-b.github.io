const prerender = true;
const trailingSlash = "always";
const load = async ({ url, fetch }) => ({
  path: url.pathname,
  res: await fetch("/posts.json").then((res) => res.json())
});
export {
  load,
  prerender,
  trailingSlash
};
