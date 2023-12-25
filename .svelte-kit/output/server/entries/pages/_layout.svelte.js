import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component, d as add_classes } from "../../chunks/ssr.js";
import { g as genTags } from "../../chunks/posts.js";
import { t as title, p as posts, a as tags } from "../../chunks/title.js";
import { h as head, p as post, a as header, t as theme } from "../../chunks/footer.js";
import { f as favicon, a as any } from "../../chunks/icon.js";
import { s as site } from "../../chunks/site.js";
const Head_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1kxdj3d_START -->${favicon ? `<link rel="shortcut icon"${add_attribute("href", favicon.src, 0)}${add_attribute("sizes", favicon.sizes, 0)}${add_attribute("type", favicon.type, 0)}>` : ``}${any["180"] ? `<link rel="apple-touch-icon"${add_attribute("href", any["180"].src, 0)}${add_attribute("sizes", any["180"].sizes, 0)}${add_attribute("type", any["180"].type, 0)}>` : ``}${any["192"] ? `<link rel="icon"${add_attribute("href", any["192"].src, 0)}${add_attribute("sizes", any["192"].sizes, 0)}${add_attribute("type", any["192"].type, 0)}>` : ``}<!-- HEAD_svelte-1kxdj3d_END -->`, ""}`;
});
const Head_static = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1592q3p_START -->${head.me ? `${each(head.me, (href) => {
    return `<link rel="me"${add_attribute("href", href, 0)}>`;
  })}` : ``}${post.comment?.webmention?.username ? `<link rel="webmention" href="${"https://webmention.io/" + escape(post.comment.webmention.username, true) + "/webmention"}"> <link rel="pingback" href="${"https://webmention.io/" + escape(post.comment.webmention.username, true) + "/xmlrpc"}">` : ``}<!-- HEAD_svelte-1592q3p_END -->`, ""} ${validate_component(Head_icon, "Icon").$$render($$result, {}, {}, {})}`;
});
const Header_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nav } = $$props;
  let { path } = $$props;
  let { title: title2 } = $$props;
  let { scrollY } = $$props;
  let { pin } = $$props;
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  if ($$props.pin === void 0 && $$bindings.pin && pin !== void 0)
    $$bindings.pin(pin);
  return `  <div class="dropdown lg:hidden"><label for="navbar-dropdown" tabindex="0" class="btn btn-square btn-ghost" data-svelte-h="svelte-rz1qrs"><span class="i-heroicons-outline-menu-alt-1"></span></label> <ul id="navbar-dropdown" tabindex="0" class="${[
    "menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 ",
    !pin ? "hidden" : ""
  ].join(" ").trim()}">${each(nav, ({ text, link, children }) => {
    return `${link && !children ? `<li><a${add_attribute("href", link, 0)}${add_classes((link === path ? "font-bold" : "").trim())}>${escape(text)}</a> </li>` : `${children ? `<li tabindex="0"><span class="${[
      "justify-between gap-1 max-w-[13rem]",
      children.some(({ link: link2 }) => link2 === path) ? "font-bold" : ""
    ].join(" ").trim()}">${escape(text)} <span class="i-heroicons-solid-chevron-right mr-2"></span></span> <ul class="bg-base-100 text-base-content shadow-lg p-2">${each(children, ({ text: text2, link: link2 }) => {
      return `<li><a${add_attribute("href", link2, 0)}${add_classes((link2 === path ? "font-bold" : "").trim())}>${escape(text2)}</a> </li>`;
    })}</ul> </li>` : ``}`}`;
  })}</ul></div> <div class="${[
    "swap order-last hidden lg:inline-grid",
    scrollY > 32 && title2 ? "swap-active" : ""
  ].join(" ").trim()}"><button class="${[
    "swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200",
    scrollY < 32 || !title2 ? "hidden" : ""
  ].join(" ").trim()}">${escape(title2)}</button> <ul class="${["swap-off menu menu-horizontal p-0", scrollY > 64 && title2 ? "hidden" : ""].join(" ").trim()}">${each(nav, ({ text, link, children }) => {
    return `${link && !children ? `<li><a class="${["!rounded-btn", link === path ? "font-bold" : ""].join(" ").trim()}"${add_attribute("href", link, 0)}>${escape(text)}</a> </li>` : `${children ? `<li><span class="${[
      "!rounded-btn gap-1",
      children.some(({ link: link2 }) => link2 === path) ? "font-bold" : ""
    ].join(" ").trim()}">${escape(text)} <span class="i-heroicons-solid-chevron-down -mr-1"></span></span>  <ul tabindex="0" class="menu rounded-box bg-base-100 text-base-content shadow-lg p-2">${each(children, ({ text: text2, link: link2 }) => {
      return `<li><a${add_attribute("href", link2, 0)}${add_classes((link2 === path ? "font-bold" : "").trim())}>${escape(text2)}</a> </li>`;
    })}</ul> </li>` : ``}`}`;
  })}</ul></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let title$1;
  let currentTheme;
  let currentThemeColor;
  let pin = true;
  let percent;
  let [scrollY, lastY] = [0, 0];
  title.subscribe((storedTitle2) => title$1 = storedTitle2);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  {
    if (scrollY) {
      pin = lastY - scrollY > 0 || scrollY === 0 ? true : false;
      lastY = scrollY;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1g590ms_START --><meta name="theme-color"${add_attribute("content", currentThemeColor, 0)}><!-- HEAD_svelte-1g590ms_END -->`, ""}  <header id="header" class="${[
    "fixed z-50 w-full transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[4.125rem] " + escape(scrollY > 32 && "backdrop-blur !border-base-content/10 bg-base-100/30 md:bg-base-200/30", true),
    !pin && scrollY > 0 ? "-translate-y-32" : ""
  ].join(" ").trim()}">${`<div class="navbar"><div class="navbar-start">${header.nav ? `${validate_component(Header_nav, "Nav").$$render(
    $$result,
    {
      path,
      title: title$1,
      pin,
      scrollY,
      nav: header.nav
    },
    {},
    {}
  )}` : ``} <a href="/" class="btn btn-ghost normal-case text-lg">${escape(site.title)}</a></div> <div class="navbar-end">${header.search ? `<button aria-label="search" tabindex="0" class="btn btn-square btn-ghost" data-svelte-h="svelte-kfmkun"><span class="i-heroicons-outline-search"></span></button>` : ``} <div id="change-theme" class="dropdown dropdown-end">  <div tabindex="0" class="btn btn-square btn-ghost" data-svelte-h="svelte-1qtp8cz"><span class="i-heroicons-outline-color-swatch"></span></div>   <ul tabindex="0" class="${[
    "flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]",
    !pin ? "hidden" : ""
  ].join(" ").trim()}">${each(theme, ({ name, text }) => {
    return `<button${add_attribute("data-theme", name, 0)} class="${[
      "btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all",
      (currentTheme === name ? "border-2" : "") + " " + (currentTheme === name ? "border-primary" : "")
    ].join(" ").trim()}"><p class="flex-1 text-left text-base-content group-hover:text-primary-content transition-color">${escape(text ?? name)}</p> <div class="grid grid-cols-4 gap-0.5 m-auto">${each(["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"], (bg) => {
      return `<div${add_attribute("class", `${bg} w-1 h-4 rounded-btn`, 0)}></div>`;
    })}</div> </button>`;
  })}</ul></div></div></div>`}</header> <button id="totop" aria-label="scroll to top" class="${[
    "fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out " + escape(
      "btn-ghost bg-base-100/30 md:bg-base-200/30",
      true
    ),
    (!pin || scrollY === 0 ? "translate-y-24" : "") + " " + (scrollY ? "opacity-100" : "")
  ].join(" ").trim()}"><div class="radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"${add_attribute("style", `--size:4rem; --thickness: 0.25rem; --value:${percent};`, 0)}></div> <div class="${[
    "border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out",
    ""
  ].join(" ").trim()}" data-svelte-h="svelte-hwvjh5"><span class="i-heroicons-solid-chevron-up !w-6 !h-6"></span></div></button>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path = "" } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `<div class="bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16">${slots.default ? slots.default({}) : ``}</div>`;
});
const __uno = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { res, path } = data;
  posts.set(res);
  tags.set(genTags(res));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if (data)
      path = data.path;
  }
  return `${validate_component(Head_static, "Head").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, { path }, {}, {})} ${validate_component(Transition, "Transition").$$render($$result, { path }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
