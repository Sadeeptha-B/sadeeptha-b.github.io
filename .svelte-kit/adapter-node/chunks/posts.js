import { c as create_ssr_component, v as validate_component, o as onDestroy, a as add_attribute, b as escape } from "./ssr.js";
import { H as Head, P as Post_card, F as Footer } from "./footer.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="overflow-x-auto mb-4"><table class="table w-full">${slots.default ? slots.default({}) : ``}</table></div>`;
});
const Post_container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${validate_component(Head, "Head").$$render($$result, { post }, {}, {})} <div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap"><div class="flex-1 w-full order-first ease-out transform mx-auto xl:mr-0 xl:ml-0">${``}</div> <div class="flex-1 w-full xl:order-last ease-out transform mx-auto xl:ml-0 xl:mr-0">${``}</div> <div class="flex-none w-full max-w-screen-md mx-auto xl:mx-0">${validate_component(Post_card, "Card").$$render($$result, { post }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, { sticky: true }, {}, {})}</div></div>`;
});
const Post_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { slug } = $$props;
  let { toc } = $$props;
  let { created } = $$props;
  let { updated } = $$props;
  let { published } = $$props;
  let { summary } = $$props;
  let { tags } = $$props;
  let { flags } = $$props;
  let { title } = $$props;
  let { image } = $$props;
  let { in_reply_to } = $$props;
  let fm = {
    path,
    slug,
    toc,
    created,
    updated,
    published,
    summary,
    tags,
    flags,
    title,
    image,
    in_reply_to
  };
  let post = { type: typeOfPost(fm), ...fm };
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.toc === void 0 && $$bindings.toc && toc !== void 0)
    $$bindings.toc(toc);
  if ($$props.created === void 0 && $$bindings.created && created !== void 0)
    $$bindings.created(created);
  if ($$props.updated === void 0 && $$bindings.updated && updated !== void 0)
    $$bindings.updated(updated);
  if ($$props.published === void 0 && $$bindings.published && published !== void 0)
    $$bindings.published(published);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.flags === void 0 && $$bindings.flags && flags !== void 0)
    $$bindings.flags(flags);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.in_reply_to === void 0 && $$bindings.in_reply_to && in_reply_to !== void 0)
    $$bindings.in_reply_to(in_reply_to);
  return `${validate_component(Post_container, "Container").$$render($$result, { post }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const metadata$3 = {
  "created": "2023-12-25T03:02:51.108Z",
  "updated": "2023-12-25T03:02:51.108Z",
  "images": [],
  "tags": [],
  "slug": "/about/+page.svelte.md",
  "path": "/about",
  "toc": false
};
const Page_svelte$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$3), {}, {})}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page_svelte$2,
  metadata: metadata$3
}, Symbol.toStringTag, { value: "Module" }));
const metadata$2 = {
  "title": "Hello World",
  "image": "/hello-world/urara.webp",
  "alt": "Urara",
  "created": "2021-11-01T00:00:00.000Z",
  "updated": "2021-12-12T00:00:00.000Z",
  "tags": ["Hello World", "Urara"],
  "images": [],
  "slug": "/hello-world/+page.svelte.md",
  "path": "/hello-world",
  "toc": [
    {
      "depth": 2,
      "title": "Developing",
      "slug": "developing"
    },
    {
      "depth": 2,
      "title": "Building",
      "slug": "building"
    },
    {
      "depth": 2,
      "title": "Documentation",
      "slug": "documentation"
    }
  ]
};
const Page_svelte$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$2), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ifgqsq">Welcome to Urara! this article contains some basic operations to help you quickly get started.</p> <h2 id="developing" data-svelte-h="svelte-5maqz3"><a href="#developing">Developing</a></h2> <p data-svelte-h="svelte-gp66ql">Start a development server:</p> <!-- HTML_TAG_START -->${`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #546E7A"># http://127.0.0.1:5173</span></div><div class='line'><span style="color: #EEFFFF">pnpm dev</span></div></code></div></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1uf8a0f">or listen to different IP and port:</p> <!-- HTML_TAG_START -->${`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #546E7A"># http://127.0.0.1:3000</span></div><div class='line'><span style="color: #EEFFFF">pnpm dev --port 3000</span></div><div class='line'></div><div class='line'><span style="color: #546E7A"># http://0.0.0.0:3000</span></div><div class='line'><span style="color: #EEFFFF">nr dev --host 0.0.0.0 --port 3000</span></div></code></div></pre>`}<!-- HTML_TAG_END --> <h2 id="building" data-svelte-h="svelte-934qmg"><a href="#building">Building</a></h2> <p data-svelte-h="svelte-1nnhc4g">Create a production version of ur blog:</p> <!-- HTML_TAG_START -->${`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">pnpm build</span></div></code></div></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1ez708h">u can preview the built app with <code>pnpm preview</code>.</p> <h2 id="documentation" data-svelte-h="svelte-19euy7a"><a href="#documentation">Documentation</a></h2> <p data-svelte-h="svelte-8e9jxh">For full documentation, visit <a href="https://urara-docs.netlify.app" rel="nofollow noopener noreferrer external" target="_blank">urara-docs.netlify.app</a>.</p>`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page_svelte$1,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const General_observer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { threshold = 0.5 } = $$props;
  let { disable_observer = false } = $$props;
  let loaded = disable_observer;
  let root;
  const hasIntersectionObserver = typeof IntersectionObserver !== "undefined";
  let observer = hasIntersectionObserver && !disable_observer ? new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= threshold) {
          loaded = true;
          observer.disconnect();
        }
      });
    },
    { rootMargin: "0px", threshold }
  ) : null;
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.disable_observer === void 0 && $$bindings.disable_observer && disable_observer !== void 0)
    $$bindings.disable_observer(disable_observer);
  return `  <div data-testid="general-observer"${add_attribute("this", root, 0)}>${disable_observer ? `<div>${slots.default ? slots.default({}) : ``}</div>` : `${loaded ? `<div>${slots.default ? slots.default({}) : ``}</div>` : ``}`}</div>`;
});
const gist_svelte_svelte_type_style_lang = "";
const Sound_cloud = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { soundcloudLink = "" } = $$props;
  let { width = "100%" } = $$props;
  let { height = "300px" } = $$props;
  let { showVisual = true } = $$props;
  let { disable_observer = false } = $$props;
  let { iframe_styles = "" } = $$props;
  if ($$props.soundcloudLink === void 0 && $$bindings.soundcloudLink && soundcloudLink !== void 0)
    $$bindings.soundcloudLink(soundcloudLink);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.showVisual === void 0 && $$bindings.showVisual && showVisual !== void 0)
    $$bindings.showVisual(showVisual);
  if ($$props.disable_observer === void 0 && $$bindings.disable_observer && disable_observer !== void 0)
    $$bindings.disable_observer(disable_observer);
  if ($$props.iframe_styles === void 0 && $$bindings.iframe_styles && iframe_styles !== void 0)
    $$bindings.iframe_styles(iframe_styles);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { disable_observer }, {}, {
    default: () => {
      return `<iframe${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("title", `soundcloud-${soundcloudLink}`, 0)} scrolling="false" frameborder="0" allow="autoplay" src="${"https://w.soundcloud.com/player/?url=" + escape(soundcloudLink, true) + "&visual=" + escape(showVisual, true)}"${add_attribute("style", iframe_styles, 0)}></iframe>`;
    }
  })}`;
});
const Spotify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spotifyLink = "" } = $$props;
  let { width = "100%" } = $$props;
  let { height = "152px" } = $$props;
  let { disable_observer = false } = $$props;
  let { iframe_styles = `
		border-radius: 0.8rem;
		height: ${height};
		width: ${width};
	` } = $$props;
  if ($$props.spotifyLink === void 0 && $$bindings.spotifyLink && spotifyLink !== void 0)
    $$bindings.spotifyLink(spotifyLink);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.disable_observer === void 0 && $$bindings.disable_observer && disable_observer !== void 0)
    $$bindings.disable_observer(disable_observer);
  if ($$props.iframe_styles === void 0 && $$bindings.iframe_styles && iframe_styles !== void 0)
    $$bindings.iframe_styles(iframe_styles);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { disable_observer }, {}, {
    default: () => {
      return `<iframe data-testid="spotify"${add_attribute("title", `spotify-${spotifyLink}`, 0)} class="spotify-sveltekit-embed"${add_attribute("src", `https://open.spotify.com/embed/${spotifyLink}`, 0)} frameborder="0" allow="encrypted-media"${add_attribute("style", iframe_styles, 0)}></iframe>`;
    }
  })}`;
});
const toot_svelte_svelte_type_style_lang = "";
const tweet_svelte_svelte_type_style_lang = "";
const config = {
  "1:1": `padding-top: 100%;`,
  "16:9": `padding-top: 56.25%;`,
  "4:3": `padding-top: 75%;`,
  "3:2": `padding-top: 66.66%;`,
  "8.5": `padding-top: 62.5%;`
};
const getPadding = (aspectRatio) => {
  return config[aspectRatio];
};
const You_tube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { youTubeId = "" } = $$props;
  let { listId = "" } = $$props;
  let { autoPlay = false } = $$props;
  let { aspectRatio = "16:9" } = $$props;
  let { skipTo = { h: 0, m: 0, s: 0 } } = $$props;
  let { disable_observer = false } = $$props;
  let { iframe_styles = `
		border-radius: 0.6rem;
	` } = $$props;
  const { h, m, s } = skipTo;
  const tH = h * 60 * 60;
  const tM = m * 60;
  const startTime = tH + tM + s;
  const baseUrl = `https://www.youtube-nocookie.com/embed/`;
  const src = `${baseUrl}${youTubeId.length > 0 ? `${youTubeId}?autoplay=${autoPlay}&start=${startTime}` : `?videoseries?list=${listId}`}`;
  if ($$props.youTubeId === void 0 && $$bindings.youTubeId && youTubeId !== void 0)
    $$bindings.youTubeId(youTubeId);
  if ($$props.listId === void 0 && $$bindings.listId && listId !== void 0)
    $$bindings.listId(listId);
  if ($$props.autoPlay === void 0 && $$bindings.autoPlay && autoPlay !== void 0)
    $$bindings.autoPlay(autoPlay);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.skipTo === void 0 && $$bindings.skipTo && skipTo !== void 0)
    $$bindings.skipTo(skipTo);
  if ($$props.disable_observer === void 0 && $$bindings.disable_observer && disable_observer !== void 0)
    $$bindings.disable_observer(disable_observer);
  if ($$props.iframe_styles === void 0 && $$bindings.iframe_styles && iframe_styles !== void 0)
    $$bindings.iframe_styles(iframe_styles);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { disable_observer }, {}, {
    default: () => {
      return `<div${add_attribute(
        "style",
        `
    	position: relative;
    	width: 100%;
  	  ${getPadding(aspectRatio)}
  `,
        0
      )}><iframe data-testid="youTube"${add_attribute("title", `youTube-${listId.length > 0 ? listId : youTubeId}`, 0)}${add_attribute("src", src, 0)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${add_attribute(
        "style",
        `
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${iframe_styles}
    `,
        0
      )}></iframe></div>`;
    }
  })}`;
});
const metadata$1 = {
  "title": "Elements",
  "created": "2021-12-12T00:00:00.000Z",
  "tags": ["Urara", "Elements"],
  "updated": "2023-10-29T16:28:40.000Z",
  "images": [],
  "slug": "/hello-world/elements/+page.svelte.md",
  "path": "/hello-world/elements",
  "toc": [
    {
      "depth": 2,
      "title": "Headings",
      "slug": "headings"
    },
    {
      "depth": 3,
      "title": "Heading",
      "slug": "heading"
    },
    {
      "depth": 4,
      "title": "Heading",
      "slug": "heading-1"
    },
    {
      "depth": 5,
      "title": "Heading",
      "slug": "heading-2"
    },
    {
      "depth": 6,
      "title": "Heading",
      "slug": "heading-3"
    },
    {
      "depth": 2,
      "title": "Paragraphs",
      "slug": "paragraphs"
    },
    {
      "depth": 2,
      "title": "Lists",
      "slug": "lists"
    },
    {
      "depth": 3,
      "title": "Definition List (dl)",
      "slug": "definition-list-dl"
    },
    {
      "depth": 3,
      "title": "Ordered List (ol)",
      "slug": "ordered-list-ol"
    },
    {
      "depth": 3,
      "title": "Unordered List (ul)",
      "slug": "unordered-list-ul"
    },
    {
      "depth": 3,
      "title": "Checkbox List (ul)",
      "slug": "checkbox-list-ul"
    },
    {
      "depth": 2,
      "title": "Table",
      "slug": "table"
    },
    {
      "depth": 2,
      "title": "Footnotes",
      "slug": "footnotes"
    },
    {
      "depth": 2,
      "title": "Code",
      "slug": "code"
    },
    {
      "depth": 2,
      "title": "Misc",
      "slug": "misc"
    },
    {
      "depth": 2,
      "title": "Svelte Components",
      "slug": "svelte-components"
    }
  ]
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata$1), {}, {
    default: () => {
      return `<h2 id="headings" data-svelte-h="svelte-17ezzq3"><a href="#headings">Headings</a></h2> <h3 id="heading" data-svelte-h="svelte-1lz1oii"><a href="#heading">Heading</a></h3> <h4 id="heading-1" data-svelte-h="svelte-18swq4u"><a href="#heading-1">Heading</a></h4> <h5 id="heading-2" data-svelte-h="svelte-seo8oo"><a href="#heading-2">Heading</a></h5> <h6 id="heading-3" data-svelte-h="svelte-11zzhhm"><a href="#heading-3">Heading</a></h6> <hr> <h2 id="paragraphs" data-svelte-h="svelte-1jrm51r"><a href="#paragraphs">Paragraphs</a></h2> <p data-svelte-h="svelte-1cwujs"><span class="spoiler">spoiler</span></p> <p data-svelte-h="svelte-1smaymh"><strong><em>The</em></strong> <em>quick</em> <u>brown</u> <a href="https://www.foxnews.com/" rel="nofollow noopener noreferrer external" target="_blank">fox</a> <code>jumps</code> <del>over</del> the lazy <strong>dog</strong>.</p> <p data-svelte-h="svelte-rzm3sy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p data-svelte-h="svelte-1rcwbbl">建格的何另始養離腳合兒現各談花車是都無處與費別、信善行修覺自！壓總談下市率應次司公母兒用什一線送用標地倒直作任老數年白安足個後引使名隊懷持日落異今特族？</p> <p data-svelte-h="svelte-19ezoke">一士我像衣買了人義，計念？</p> <p data-svelte-h="svelte-k1vvek">期老外並中般灣作各現初知強車我的品式企國立市它北待不型師文人注信方，各成能久，然的孩界，他事應在創灣字母寫麼，會不作散際，學節水……全當名己會天還著行多是生如內他道了家至種樣見景時一……區行水影。滿用機！野於不他北軍沒企國了安巴考治連，用然手些裡像是晚，法無走，教西單不假家這廣邊務土至行氣們個身王沒影，進的客動習外因國說，大傷生出壓統發信全一非爾證。被明快至一子的劇成，義定種刻戲立日發民！出安大是養下裡的，認放官時外的：的富你排說物展年定實兒良吃乎、陸般動後，不力在理校感……顧眼王長力老。</p> <p data-svelte-h="svelte-5q7uy2">重多一？生光聯……動說麼了：起形市般我題臉事級。</p> <blockquote data-svelte-h="svelte-1t277r2"><p>In solitude, where we are least alone.</p></blockquote> <p data-svelte-h="svelte-dbq3jo">私は絶対いよいよ漠然たる相当心に対してはずの他にできるならな。けっして今に養成めも何だか漠然たる仕事たないだけにしからならでをは話安んずるないですて、わざわざには聴いましたなけれた。権力を気がつきなのはどうしても先刻が毫もらしくでう。</p> <p data-svelte-h="svelte-br4gki">ようやく嘉納さんに供獄とても承諾をやるでしょ習慣その主義それか攻撃にに対してお関係でたあるですと、その今は俺か釣竿頭に喜ぶば、嘉納さんののより考のそれをよくごふりと云ってあなた一団がお融和へ見えようにまあご経験にしずませば、とうとうもっとも誤解になるたでいるないのを思っですた。しかもしかしながら大首へする気もずいぶん美味と移ろたて、この言葉にもいうですてってがたにしてしまえたない。この限り時代のためその学校も私上を吹き込んんかと大森さんをしなませ、人の今日んというご講義ただですば、晩の時で長靴が始めだけの時代に前もっでいて、どうの今日が思えばそのためとあたかも足りんなとしだ事でが、ないますなて少し実職業いでし事だろたませ。</p> <p data-svelte-h="svelte-63jeqz">さて学校か不幸か話に教えですけれども、今中力が起るて得るですためがご講演の今に訊かたです。多年をはどうしても思うでいうんたずでと、まるで何とも繰り返しが周旋はさっそく悪いうので。</p> <p data-svelte-h="svelte-11pdwd8"><a href="#headings">scrollToTop</a></p> <hr> <h2 id="lists" data-svelte-h="svelte-g7u641"><a href="#lists">Lists</a></h2> <h3 id="definition-list-dl" data-svelte-h="svelte-1l26dxc"><a href="#definition-list-dl">Definition List (dl)</a></h3> <dl data-svelte-h="svelte-1593q4a"><dt>Definition List Title</dt><dd>This is a definition list division.</dd></dl> <h3 id="ordered-list-ol" data-svelte-h="svelte-1e2vcc5"><a href="#ordered-list-ol">Ordered List (ol)</a></h3> <ol data-svelte-h="svelte-1lrkorm"><li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li></ol> <h3 id="unordered-list-ul" data-svelte-h="svelte-1r3t7r6"><a href="#unordered-list-ul">Unordered List (ul)</a></h3> <ul data-svelte-h="svelte-1m0ot56"><li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li></ul> <h3 id="checkbox-list-ul" data-svelte-h="svelte-19gylr7"><a href="#checkbox-list-ul">Checkbox List (ul)</a></h3> <ul class="contains-task-list" data-svelte-h="svelte-xge1gw"><li class="task-list-item"><input type="checkbox" disabled> List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked disabled> List Item 2 checked</li> <li class="task-list-item"><input type="checkbox" checked disabled> List Item 3 checked<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Sub List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked disabled> Sub List Item 1 checked</li></ul></li></ul> <h2 id="table" data-svelte-h="svelte-47p9vw"><a href="#table">Table</a></h2> ${validate_component(Table, "Components.table").$$render($$result, {}, {}, {
        default: () => {
          return `<thead data-svelte-h="svelte-gczjan"><tr><th>Table Header 1</th> <th>Table Header 2</th> <th>Table Header 3</th></tr></thead> <tbody data-svelte-h="svelte-idip7f"><tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr></tbody>`;
        }
      })} ${validate_component(Table, "Components.table").$$render($$result, {}, {}, {
        default: () => {
          return `<thead data-svelte-h="svelte-7vsuop"><tr><th align="left">Table Header 1</th> <th align="center">Table Header 2</th> <th align="right">Table Header 3</th></tr></thead> <tbody data-svelte-h="svelte-16i6pl9"><tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr></tbody>`;
        }
      })} <p data-svelte-h="svelte-11pdwd8"><a href="#headings">scrollToTop</a></p> <h2 id="footnotes" data-svelte-h="svelte-u5fi6x"><a href="#footnotes">Footnotes</a></h2> <p data-svelte-h="svelte-jidotm">Here is a footnote reference. <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup></p> <p data-svelte-h="svelte-fsvclw">This is a long note. <sup id="fnref-longnote"><a href="#fn-longnote" class="footnote-ref">longnote</a></sup></p> <p data-svelte-h="svelte-xyllmn">This is an inline note. <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup></p> <p data-svelte-h="svelte-11pdwd8"><a href="#headings">scrollToTop</a></p> <h2 id="code" data-svelte-h="svelte-1gehoc9"><a href="#code">Code</a></h2> <!-- HTML_TAG_START -->${`<pre class="shiki material-default with-title twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true" title="examples/index.ts"><div class='code-title'>examples/index.ts</div><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> <data-lsp lsp='let x: string' >x</data-lsp> </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> [</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">]) <data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #89DDFF">.</span><span style="color: #82AAFF"><data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp></span><span style="color: #EEFFFF">(<data-lsp lsp='let x: string' >x</data-lsp>)</span></div></code></div></pre>`}<!-- HTML_TAG_END --> <!-- HTML_TAG_START -->${`<pre class="shiki material-default twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* some fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">name<data-lsp lsp='let a: NameLabel' ></data-lsp></span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* other fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'><span style="color: #C792EA">type</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span></div><div class='line dim'><span style="color: #546E7A">// This comment should not be included</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #546E7A">// ---cut---</span></div><div class='line dim'><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;(</span><span style="color: #EEFFFF">idOrName</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">):</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line dim'><span style="color: #F07178">  </span><span style="color: #89DDFF">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">unimplemented</span><span style="color: #89DDFF">&apos;</span></div><div class='line dim'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">typescript</span><span style="color: #89DDFF">&apos;</span><span style="color: #EEFFFF">)</span></div></code></div></pre>`}<!-- HTML_TAG_END --> <h2 id="misc" data-svelte-h="svelte-1n59eic"><a href="#misc">Misc</a></h2> <sup data-svelte-h="svelte-17o8npf">Lorem</sup> <sub data-svelte-h="svelte-1h4d230">ipsum</sub> <cite data-svelte-h="svelte-2sv5mx">dolor sit amet</cite>, <acronym title="Consectetur Adipiscing Elit" data-svelte-h="svelte-1bkbv8l">consectetur adipiscing elit</acronym>, <abbr title="Aliqua" data-svelte-h="svelte-1qfm1q8">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</abbr>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> <p data-svelte-h="svelte-d56c1z">リバースカードオープン、エネミーコントローラー！</p> <p data-svelte-h="svelte-i6obr">ライフを 1000 払い、コマンド入力、<kbd>←</kbd> <kbd>→</kbd> <kbd>A</kbd> <kbd>B</kbd>！</p> <p data-svelte-h="svelte-a1w1jh">このコマンドにより、全てのアニヲタを破壊する！</p> <p data-svelte-h="svelte-11pdwd8"><a href="#headings">scrollToTop</a></p> <h2 id="svelte-components" data-svelte-h="svelte-mjglpj"><a href="#svelte-components">Svelte Components</a></h2> ${validate_component(You_tube, "YouTube").$$render($$result, { youTubeId: "WysuxO4yR04" }, {}, {})} <br> ${validate_component(Spotify, "Spotify").$$render(
        $$result,
        {
          spotifyLink: "track/6pCXYUR3mBfXY8s0FYcZqQ",
          width: "100%"
        },
        {},
        {}
      )} <br> ${validate_component(Sound_cloud, "SoundCloud").$$render(
        $$result,
        {
          soundcloudLink: "https://soundcloud.com/hatsunemikuofficial/sets/sweety-glitch-remix-contest"
        },
        {},
        {}
      )} <div class="footnotes" data-svelte-h="svelte-11hrpf6"><hr> <ol><li id="fn-1">Here is the footnote.<a href="#fnref-1" class="footnote-backref">↩</a></li> <li id="fn-longnote">Here’s one footnote with longer identifier.<a href="#fnref-longnote" class="footnote-backref">↩</a></li> <li id="fn-2">You can type footnotes inline, so you don’t have to pick an identifier manually.<a href="#fnref-2" class="footnote-backref">↩</a></li></ol></div>`;
    }
  })}`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page_svelte,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "ToC Disabled",
  "summary": "This post has disabled table of contents.",
  "created": "2021-12-12T00:00:00.000Z",
  "tags": ["Front-Matter"],
  "toc": false,
  "updated": "2023-10-29T16:28:40.000Z",
  "images": [],
  "slug": "/hello-world/toc-disabled/+page.md",
  "path": "/hello-world/toc-disabled"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-y4beyz">This post has disabled table of contents.</p> <p data-svelte-h="svelte-1b99nud">When the <code>toc: false</code> on Front-Matter, toc should not be displayed.</p> <h2 id="heading" data-svelte-h="svelte-bvxltq"><a href="#heading">Heading</a></h2> <h3 id="heading-1" data-svelte-h="svelte-1pcqacq"><a href="#heading-1">Heading</a></h3> <h4 id="heading-2" data-svelte-h="svelte-akuw8s"><a href="#heading-2">Heading</a></h4>`;
    }
  })}`;
});
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const typeOfPost = (fm) => fm.title ? "article" : fm.image ? "photo" : fm.audio ? "audio" : fm.video ? "video" : fm.bookmark_of ? "bookmark" : fm.like_of ? "like" : fm.repost_of ? "repost" : fm.in_reply_to ? "reply" : "note";
const genPosts = ({
  modules = /* @__PURE__ */ Object.assign({ "/src/routes/about/+page.svelte.md": __vite_glob_0_0, "/src/routes/hello-world/+page.svelte.md": __vite_glob_0_1, "/src/routes/hello-world/elements/+page.svelte.md": __vite_glob_0_2, "/src/routes/hello-world/toc-disabled/+page.md": __vite_glob_0_3 }),
  postHtml = false,
  postLimit = void 0,
  filterUnlisted = false
} = {}) => Object.entries(modules).map(([, module]) => ({
  ...module.metadata,
  type: typeOfPost(module.metadata),
  html: postHtml || typeOfPost(module.metadata) !== "article" ? module.default.render().html.replace(/[\u0000-\u001F]/g, "").replace(/[\r\n]/g, "").match(/<main [^>]+>(.*?)<\/main>/gi)?.[0].replace(/<main [^>]+>(.*?)<\/main>/gi, "$1").replace(/( style=")(.*?)(")/gi, "").replace(/(<span>)(.*?)(<\/span>)/gi, "$2").replace(/(<main>)(.*?)(<\/main>)/gi, "$2") : ""
})).filter((post, index) => (!filterUnlisted || !post.flags?.includes("unlisted")) && (!postLimit || index < postLimit)).sort((a, b) => Date.parse(b.published ?? b.created) - Date.parse(a.published ?? a.created));
const genTags = (posts) => [
  ...new Set(posts.reduce((acc, posts2) => posts2.tags ? [...acc, ...posts2.tags] : acc, [""]).slice(1))
];
export {
  Page_svelte$2 as P,
  genPosts as a,
  Page_svelte$1 as b,
  metadata$2 as c,
  Page_svelte as d,
  metadata$1 as e,
  Page as f,
  genTags as g,
  metadata as h,
  metadata$3 as m
};
