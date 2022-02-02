var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => U5Bslugu5D,
  load: () => load
});
var import_index_3f5baa8b = __toModule(require("../../../chunks/index-3f5baa8b.js"));
const load = async ({ fetch, params }) => {
  const { slug } = params;
  const res = await fetch(`/posts/${slug}.json`);
  if (res.ok) {
    const { post } = await res.json();
    return { props: { post } };
  }
};
const U5Bslugu5D = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const { title, date, tags, author: { name, authorTitle, picture }, content: { html }, coverImage } = post;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `${$$result.head += `${$$result.title = `<title>JCD Blog | Welcome</title>`, ""}`, ""}

<div class="${"sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5"}"><img${(0, import_index_3f5baa8b.a)("src", coverImage.url, 0)}${(0, import_index_3f5baa8b.a)("alt", `Cover image for ${title}`, 0)} class="${""}"></div>

<h1 class="${"text-4xl font-semibold mb-5"}">${(0, import_index_3f5baa8b.b)(title)}</h1>

<a href="${"/"}" class="${"inline-flex items-center mb-3"}"><img${(0, import_index_3f5baa8b.a)("src", picture.url, 0)}${(0, import_index_3f5baa8b.a)("alt", name, 0)} class="${"w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"}">
  <span class="${"flex-grow flex flex-col pl-4"}"><span class="${"title-font font-medium"}">${(0, import_index_3f5baa8b.b)(name)}</span>
    <span class="${"text-secondary text-xs tracking-widest mt-0.5"}">${(0, import_index_3f5baa8b.b)(authorTitle)}</span></span></a>

<p class="${"text-secondary text-xs tracking-widest font-semibold"}">${(0, import_index_3f5baa8b.b)(new Date(date).toDateString())}</p>

<div class="${"mb-5 flex justify-between"}"><div>${tags ? `<div class="${"mt-5 space-x-2"}">${(0, import_index_3f5baa8b.e)(tags, (tag) => {
    return `<span class="${"badge badge-primary"}">${(0, import_index_3f5baa8b.b)(tag)}</span>`;
  })}</div>` : ``}</div></div>

<article div class="${"prose"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END --></article>`;
});
