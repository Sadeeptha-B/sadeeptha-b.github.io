import { j as json } from "../../../chunks/index.js";
import { s as site } from "../../../chunks/site.js";
import { f as feed } from "../../../chunks/footer.js";
import { a as any, f as favicon } from "../../../chunks/icon.js";
import { a as genPosts } from "../../../chunks/posts.js";
const render = (posts = genPosts({ postHtml: true, postLimit: feed.limit, filterUnlisted: true })) => ({
  version: "https://jsonfeed.org/version/1.1",
  title: site.title,
  home_page_url: site.protocol + site.domain,
  feed_url: site.protocol + site.domain + "/feed.json",
  description: site.description,
  icon: any["512"].src ?? any["192"].src,
  favicon: favicon?.src,
  authors: [
    {
      name: site.author.name,
      url: site.protocol + site.domain,
      avatar: site.author.avatar
    }
  ],
  language: site.lang,
  hubs: feed.hubs?.map((hub) => ({
    type: "WebSub",
    url: hub
  })),
  items: posts.map((post) => ({
    id: post.path.slice(1),
    url: site.protocol + site.domain + post.path,
    title: post.title,
    content_html: post.html,
    summary: post["summary"],
    image: post["image"],
    date_published: post.published ?? post.created,
    date_modified: post.updated ?? post.published ?? post.created,
    tags: post.tags,
    _indieweb: {
      type: post.type,
      "in-reply-to": post.in_reply_to
    }
  }))
});
const prerender = true;
const trailingSlash = "never";
const GET = async () => json(render(), {
  headers: {
    "content-type": "application/feed+json; charset=utf-8"
  }
});
export {
  GET,
  prerender,
  trailingSlash
};
