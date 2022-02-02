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
  default: () => Routes,
  load: () => load
});
var import_index_3f5baa8b = __toModule(require("../../chunks/index-3f5baa8b.js"));
const load = async ({ fetch }) => {
  const res = await fetch("/posts.json");
  if (res.ok) {
    const { posts } = await res.json();
    return { props: { posts } };
  }
};
const Routes = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `${$$result.head += `${$$result.title = `<title>JCD Blog | Welcome</title>`, ""}`, ""}

<h1 class="${"text-4xl mb-10 font-extrabold"}">JCD Blog</h1>
${(0, import_index_3f5baa8b.e)(posts, ({ title, slug, excerpt, coverImage, tags }) => {
    return `<div class="${"card text-center shadow-2xl mb-20"}"><figure class="${"px-10 pt-10"}"><img class="${"rounded-xl"}"${(0, import_index_3f5baa8b.a)("src", coverImage.url, 0)}${(0, import_index_3f5baa8b.a)("alt", `Cover image for ${title}`, 0)}></figure>
    <div class="${"card-body"}"><h2 class="${"title"}">${(0, import_index_3f5baa8b.b)(title)}</h2>
      <p>${(0, import_index_3f5baa8b.b)(excerpt)}</p>
      <div class="${"flex justify-center mt-5 space-x-2"}">${(0, import_index_3f5baa8b.e)(tags, (tag) => {
      return `<span class="${"badge badge-primary"}">${(0, import_index_3f5baa8b.b)(tag)}</span>`;
    })}</div>
      <div class="${"justify-center card-actions"}"><a${(0, import_index_3f5baa8b.a)("href", `/posts/${slug}`, 0)} class="${"btn btn-outline btt-primary"}">Read \u21D2</a>
      </div></div>
  </div>`;
  })}`;
});
