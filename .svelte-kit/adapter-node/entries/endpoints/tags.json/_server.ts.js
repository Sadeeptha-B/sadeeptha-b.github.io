import { j as json } from "../../../chunks/index.js";
import { g as genTags, a as genPosts } from "../../../chunks/posts.js";
const prerender = true;
const trailingSlash = "never";
const GET = async () => json(genTags(genPosts()));
export {
  GET,
  prerender,
  trailingSlash
};
