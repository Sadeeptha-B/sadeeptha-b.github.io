import { c as create_ssr_component, a as add_attribute, b as escape, e as each, v as validate_component } from "./ssr.js";
import { s as site } from "./site.js";
import { D as DEV } from "./prod-ssr.js";
import { m as maskable, a as any } from "./icon.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const dev = DEV;
const theme = [
  {
    name: "cmyk",
    text: "🖨 Light"
  },
  {
    name: "dracula",
    text: "🧛 Dark"
  },
  {
    name: "valentine",
    text: "🌸 Valentine"
  },
  {
    name: "aqua",
    text: "💦 Aqua"
  },
  {
    name: "synthwave",
    text: "🌃 Synthwave"
  },
  {
    name: "night",
    text: "🌃 Night"
  },
  {
    name: "lofi",
    text: "🎶 Lo-Fi"
  },
  {
    name: "lemonade",
    text: "🍋 Lemonade"
  },
  {
    name: "cupcake",
    text: "🧁 Cupcake"
  },
  {
    name: "garden",
    text: "🏡 Garden"
  },
  {
    name: "retro",
    text: "🌇 Retro"
  },
  {
    name: "black",
    text: "🖤 Black"
  }
];
const head = {};
const header = {
  nav: [
    {
      text: "About",
      link: "/about"
    },
    {
      text: "Get Started",
      link: "/hello-world"
    },
    {
      text: "Elements",
      link: "/hello-world/elements"
    }
  ]
};
const footer = {
  nav: [
    {
      text: "Feed",
      link: "/atom.xml"
    },
    {
      text: "Sitemap",
      link: "/sitemap.xml"
    }
  ]
};
const date = {
  locales: "en-US",
  options: {
    year: "2-digit",
    weekday: "long",
    month: "short",
    day: "numeric"
  }
};
const feed = {};
const __vite_glob_0_0 = [
  {
    src: "/_app/immutable/assets/favicon.39b98566.avif",
    w: 736
  }
];
const __vite_glob_0_1 = [
  {
    src: "/_app/immutable/assets/urara.5800e487.avif",
    w: 736
  }
];
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sources = /* @__PURE__ */ Object.assign({
    "/src/static/favicon.png": __vite_glob_0_0,
    "/src/static/hello-world/urara.webp": __vite_glob_0_1
  });
  let { class: className = void 0 } = $$props;
  let { src } = $$props;
  let { alt = src } = $$props;
  let { loading = "lazy" } = $$props;
  let { decoding = "async" } = $$props;
  let source = sources[`/src/static${src}`];
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.decoding === void 0 && $$bindings.decoding && decoding !== void 0)
    $$bindings.decoding(decoding);
  return `${source ? `<picture><source${add_attribute("srcset", source.map(({ src: src2, w }) => `${src2} ${w}w`).join(", "), 0)} type="image/avif"> <img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", className ?? "rounded-lg my-2", 0)}${add_attribute("loading", loading, 0)}${add_attribute("decoding", decoding, 0)}></picture>` : `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", className ?? "rounded-lg my-2", 0)}${add_attribute("loading", loading, 0)}${add_attribute("decoding", decoding, 0)}>`}`;
});
const post = {};
const Post_reply = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { in_reply_to } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.in_reply_to === void 0 && $$bindings.in_reply_to && in_reply_to !== void 0)
    $$bindings.in_reply_to(in_reply_to);
  return `<div class="${"flex flex-wrap gap-2 rounded-box outline outline-neutral/10 p-4 " + escape(className, true)}"><span class="flex-none font-bold uppercase opacity-30" data-svelte-h="svelte-11ov9r0">Reply to: </span> <a${add_attribute("href", in_reply_to, 0)} rel="noopener noreferrer external" target="_blank" class="ml-auto flex-none flex rounded-badge bg-base-200 hover:bg-base-300 transition-all gap-2 px-4 u-in-reply-to"><span class="i-heroicons-outline-reply my-auto !w-4 !h-4"></span> ${escape(in_reply_to)}</a></div>`;
});
const Post_status = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post: post2 } = $$props;
  let { preview = false } = $$props;
  const stringPublished = new Date(post2.published ?? post2.created).toLocaleString(date.locales, date.options);
  const stringUpdated = new Date(post2.updated ?? post2.published ?? post2.created).toLocaleString(date.locales, date.options);
  const jsonPublished = new Date(post2.published ?? post2.created).toJSON();
  const jsonUpdated = new Date(post2.updated ?? post2.published ?? post2.created).toJSON();
  if ($$props.post === void 0 && $$bindings.post && post2 !== void 0)
    $$bindings.post(post2);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  return `<div class="${[
    "flex font-semibold gap-1.5",
    !preview && post2.type !== "article" ? "md:mb-4" : ""
  ].join(" ").trim()}"><a rel="author" class="${[
    "opacity-75 hover:opacity-100 hover:text-primary duration-500 ease-in-out p-author h-card",
    preview ? "hidden" : ""
  ].join(" ").trim()}"${add_attribute("href", site.protocol + site.domain, 0)}>${escape(site.author.name)}</a> <span class="${["opacity-50", preview ? "hidden" : ""].join(" ").trim()}" data-svelte-h="svelte-1edzios">/</span> <a${add_attribute("href", post2.path, 0)} class="u-url u-uid swap group/time"><time class="group-hover/time:opacity-0 font-semibold opacity-75 duration-500 ease-in-out mr-auto dt-published"${add_attribute("datetime", jsonPublished, 0)} itemprop="datePublished">${escape(stringPublished)}</time> <time class="opacity-0 group-hover/time:opacity-100 font-semibold text-primary duration-500 ease-in-out mr-auto dt-updated"${add_attribute("datetime", jsonUpdated, 0)} itemprop="dateModified">${escape(stringUpdated)}</time></a></div>`;
});
const Post_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post: post$1 } = $$props;
  let { preview = false } = $$props;
  let { loading = "lazy" } = $$props;
  let { decoding = "async" } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post$1 !== void 0)
    $$bindings.post(post$1);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.decoding === void 0 && $$bindings.decoding && decoding !== void 0)
    $$bindings.decoding(decoding);
  return `${((tag$1) => {
    return tag$1 ? `<${post$1.type === "article" ? "article" : "div"} itemscope itemtype="https://schema.org/BlogPosting" itemprop="blogPost" class="${[
      "h-entry card bg-base-100 rounded-none md:rounded-box md:shadow-xl overflow-hidden z-10",
      (!preview ? "md:mb-8" : "") + " " + (!preview ? "lg:mb-16" : "") + " " + (preview ? "group" : "") + " " + (preview && post$1.type === "article" && post$1.image ? "image-full" : "") + " " + (preview && post$1.image ? "before:!rounded-none" : "")
    ].join(" ").trim()}">${is_void(tag$1) ? "" : `${!preview && post.bridgy ? `<div id="bridgy" class="hidden">${each(
      post$1.flags?.some((flag) => flag.startsWith("bridgy")) ? post$1.flags.flatMap((flag) => flag.startsWith("bridgy") ? flag.slice(7) : []) : [
        ...post.bridgy.post ?? [],
        ...post.bridgy[post$1.type] ?? []
      ],
      (target) => {
        return `${target === "fed" ? `<a href="https://fed.brid.gy/" data-svelte-h="svelte-1dpaoev">fed</a>` : `<a href="${"https://brid.gy/publish/" + escape(target, true)}">${escape(target)}</a>`}`;
      }
    )}</div>` : ``} ${post$1.in_reply_to ? `${validate_component(Post_reply, "Reply").$$render(
      $$result,
      {
        in_reply_to: post$1.in_reply_to,
        class: "mt-4 mx-4"
      },
      {},
      {}
    )}` : ``} ${post$1.image && preview ? `<figure class="!block">${validate_component(Img, "Image").$$render(
      $$result,
      {
        class: post$1.type === "article" ? "u-featured object-center h-full w-full absolute group-hover:scale-105 transition-transform duration-500 ease-in-out" : "u-photo rounded-xl md:rounded-b-none -mb-6 md:-mb-2",
        src: post$1.image,
        alt: post$1.alt ?? post$1.image,
        loading,
        decoding
      },
      {},
      {}
    )}</figure>` : ``} <div${add_attribute(
      "class",
      `card-body gap-0 ${preview && post$1.type === "article" && post$1.image ? "md:col-start-1 md:row-start-1 md:text-neutral-content md:z-20" : ""}`,
      0
    )}><div class="flex flex-col gap-2">${post$1.image && !preview ? `<figure${add_attribute(
      "class",
      `md:order-last rounded-box shadow-xl mb-4 ${post$1.type === "article" ? "flex-col gap-2 -mx-4 -mt-8 md:mt-0" : "flex-col -mx-8"}`,
      0
    )}>${validate_component(Img, "Image").$$render(
      $$result,
      {
        class: `${post$1.type === "article" ? "u-featured" : "u-photo"}`,
        src: post$1.image,
        alt: post$1.alt ?? post$1.image,
        loading,
        decoding
      },
      {},
      {}
    )}</figure>` : ``} ${validate_component(Post_status, "Status").$$render($$result, { post: post$1, preview }, {}, {})} ${post$1.title ? `${preview ? `<h2 itemprop="name headline" class="card-title text-3xl mr-auto bg-[length:100%_0%] bg-[position:0_88%] underline decoration-4 decoration-transparent group-hover:decoration-primary hover:bg-[length:100%_100%] hover:text-primary-content bg-gradient-to-t from-primary to-primary bg-no-repeat transition-all ease-in-out duration-300"><a itemprop="url" class="u-url p-name"${add_attribute("href", post$1.path, 0)}>${escape(post$1.title ?? post$1.path.slice(1))}</a></h2>` : `<h1 itemprop="name headline" class="card-title text-3xl mb-8 p-name">${escape(post$1.title ?? post$1.path.slice(1))}</h1>`}` : ``} ${post$1.summary ? `<p itemprop="description" class="${[
      "p-summary mb-auto",
      !preview || post$1.type !== "article" ? "hidden" : ""
    ].join(" ").trim()}">${escape(post$1.summary)}</p>` : ``}</div> <main itemprop="articleBody" class="${["urara-prose prose e-content", post$1.type !== "article" ? "mt-4" : ""].join(" ").trim()}">${!preview ? `${slots.default ? slots.default({}) : ``}` : `${post$1.html ? `<!-- HTML_TAG_START -->${post$1.html}<!-- HTML_TAG_END -->` : ``}`}</main> ${!preview && post$1.tags ? `<div class="divider mt-4 mb-0"></div> <div>${each(post$1.tags, (tag) => {
      return `<a href="${"/?tags=" + escape(tag, true)}" class="btn btn-sm btn-ghost normal-case mt-2 mr-2 p-category">#${escape(tag)} </a>`;
    })}</div>` : ``}</div> ${!preview ? `${``} ${``}` : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(post$1.type === "article" ? "article" : "div")}`;
});
const Head_opengraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post: post2 = void 0 } = $$props;
  let { page = void 0 } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post2 !== void 0)
    $$bindings.post(post2);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `${$$result.head += `<!-- HEAD_svelte-4dky5b_START --><meta property="og:site_name"${add_attribute("content", site.title, 0)}><meta property="og:locale"${add_attribute("content", site.lang, 0)}>${post2 ? `<meta property="og:type" content="article"> <meta property="og:title"${add_attribute("content", post2.title ?? post2.summary ?? post2.path.slice(1), 0)}> ${post2.summary ? `<meta property="og:description"${add_attribute("content", post2.summary, 0)}>` : ``} ${post2.image ? `<meta property="og:image"${add_attribute(
    "content",
    (post2.image.startsWith("http") ? "" : site.protocol + site.domain) + post2.image,
    0
  )}> <meta name="twitter:card" content="summary_large_image">` : `<meta property="og:image"${add_attribute("content", maskable["512"].src ?? any["512"].src ?? any["192"].src, 0)}> <meta name="twitter:card" content="summary">`} ${post2.tags ? `${each(post2.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``} <meta property="og:url"${add_attribute("content", site.protocol + site.domain + post2.path, 0)}> <meta property="article:author"${add_attribute("content", site.author.name, 0)}> <meta property="article:published_time"${add_attribute("content", post2.published ?? post2.created, 0)}> <meta property="article:modified_time"${add_attribute("content", post2.updated ?? post2.published ?? post2.created, 0)}>` : `<meta property="og:type" content="website"> <meta property="og:image"${add_attribute("content", maskable["512"].src ?? any["512"].src ?? any["192"].src, 0)}> <meta property="og:description"${add_attribute("content", site.description, 0)}> ${page ? `<meta property="og:title"${add_attribute("content", page.title ?? page.path.slice(1), 0)}> <meta property="og:url"${add_attribute("content", site.protocol + site.domain + page.path, 0)}>` : `<meta property="og:title"${add_attribute("content", site.title, 0)}> <meta property="og:url"${add_attribute("content", site.protocol + site.domain, 0)}>`}`}<!-- HEAD_svelte-4dky5b_END -->`, ""}`;
});
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post: post2 = void 0 } = $$props;
  let { page = void 0 } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post2 !== void 0)
    $$bindings.post(post2);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `${$$result.head += `<!-- HEAD_svelte-abrfj_START --><meta name="author"${add_attribute("content", site.author?.name, 0)}>${post2 ? `<link rel="canonical"${add_attribute("href", site.protocol + site.domain + post2.path, 0)}> ${post2.type === "article" ? `${$$result.title = `<title>${escape(post2.title)} | ${escape(site.title)}</title>`, ""}` : `${post2.type === "note" ? `${$$result.title = `<title>${escape(post2.summary ?? post2.path.slice(1))} | ${escape(site.title)}</title>`, ""}` : ``}`} ${post2.tags ? `<meta name="keywords"${add_attribute("content", post2.tags.join(", "), 0)}>` : ``} ${post2.summary ? `<meta name="description"${add_attribute("content", post2.summary, 0)}>` : ``}` : `<meta name="description"${add_attribute("content", site.description, 0)}> <meta name="keywords"${add_attribute("content", site.keywords?.join(", "), 0)}> ${page ? `${$$result.title = `<title>${escape(page.title ?? page.path.slice(1))} | ${escape(site.title)}</title>`, ""} <link rel="canonical"${add_attribute("href", site.protocol + site.domain + page.path, 0)}>` : `${$$result.title = `<title>${escape(
    `${site.title} - ${site.subtitle}`
  )}</title>`, ""} <link rel="canonical"${add_attribute("href", site.protocol + site.domain, 0)}>`}`}${head.custom ? `${each(head.custom({ dev, post: post2, page }), (tag) => {
    return `<!-- HTML_TAG_START -->${tag}<!-- HTML_TAG_END -->`;
  })}` : ``}<!-- HEAD_svelte-abrfj_END -->`, ""} ${validate_component(Head_opengraph, "OpenGraph").$$render($$result, { post: post2, page }, {}, {})}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  let { sticky = false } = $$props;
  let { rounded = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<footer id="footer" class="${"footer footer-center bg-base-300 text-base-content shadow-inner p-8 " + escape(rounded ? "rounded-box" : "md:rounded-box", true) + " " + escape(sticky ? "sticky bottom-0 z-0 md:static" : "", true) + " " + escape(className ?? "", true)}"><div class="prose"><p>${footer.nav ? `${each(footer.nav, ({ text, link }, i) => {
    return `<a${add_attribute("href", link, 0)} rel="noopener noreferrer external" target="_blank">${escape(text)}</a> ${i + 1 < footer.nav.length ? `<span class="mr-1" data-svelte-h="svelte-1qx196n">·</span>` : ``}`;
  })} <br>` : ``}
      Copyright © ${escape(footer.since && footer.since !== (/* @__PURE__ */ new Date()).toJSON().substring(0, 4) ? `${footer.since} - ${(/* @__PURE__ */ new Date()).toJSON().substring(0, 4)}` : (/* @__PURE__ */ new Date()).toJSON().substring(0, 4))} ${escape(site.author.name)} <br>
      Powered by
      <a rel="noopener noreferrer external" target="_blank" class="tooltip tooltip-secondary hover:text-secondary" data-tip="🌸 [δ] - Based on MDsveX & SvelteKit 🌸" href="https://github.com/importantimport/urara" data-svelte-h="svelte-urea7w">Urara</a> ${footer.html ? `<br> <!-- HTML_TAG_START -->${footer.html}<!-- HTML_TAG_END -->` : ``}</p></div></footer>`;
});
export {
  Footer as F,
  Head as H,
  Post_card as P,
  header as a,
  feed as f,
  head as h,
  post as p,
  theme as t
};
