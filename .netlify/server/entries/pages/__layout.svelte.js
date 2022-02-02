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
  default: () => _layout,
  load: () => load
});
var import_index_3f5baa8b = __toModule(require("../../chunks/index-3f5baa8b.js"));
var import_theme_change = __toModule(require("theme-change"));
const Theme_select = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  return `<div><select data-choose-theme class="${"pr-9 select select-bordered select-primary bg-base-100 select-xs text-base-content"}"><option disabled="${"disabled"}" selected="${"selected"}" value="${"Choose a theme"}">Choose a theme</option><option value="${"aqua"}">Aqua</option><option value="${"black"}">Black</option><option value="${"bumblebee"}">Bumblebee</option><option value="${"corporate"}">Corporate</option><option value="${"cupcake"}">Cupcake</option><option value="${"cyberpunk"}">Cyberpunk</option><option value="${"dark"}">Dark</option><option value="${"dracula"}">Dracula</option><option value="${"emerald"}">Emerald</option><option value="${"fantasy"}">Fantasy</option><option value="${"forest"}">Forest</option><option value="${"garden"}">Garden</option><option value="${"halloween"}">Halloween</option><option value="${"light"}">Light</option><option value="${"lofi"}">Lofi</option><option value="${"luxury"}">Luxury</option><option value="${"pastel"}">Pastel</option><option value="${"retro"}">Retro</option><option value="${"synthwave"}">Synthwave</option><option value="${"valentine"}">Valentine</option><option value="${"wireframe"}">Wireframe</option></select></div>`;
});
const Nav = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  return `<div class="${"navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"}"><div class="${"px-2 mx-2 navbar-start"}"><a href="${"/"}"><span class="${"text-lg font-bold"}">JCD Blog </span></a></div>
  <div class="${"px-2 mx-2 navbar-center"}"><div class="${"flex items-stretch"}"><a href="${"/"}" class="${"btn btn-ghost btn-sm rounded-btn"}">Home</a>
      ${(0, import_index_3f5baa8b.e)(pages, ({ title, slug }) => {
    return `<a${(0, import_index_3f5baa8b.a)("href", `/${slug}`, 0)} class="${"btn btn-ghost btn-sm rounded-btn"}">${(0, import_index_3f5baa8b.b)(title)}</a>`;
  })}</div></div>
  <div class="${"navbar-end"}">${(0, import_index_3f5baa8b.v)(Theme_select, "ThemeSelect").$$render($$result, {}, {}, {})}</div></div>`;
});
var app = "";
const load = async ({ fetch }) => {
  const res = await fetch("/pages.json");
  if (res.ok) {
    const { pages } = await res.json();
    return { props: { pages } };
  }
};
const _layout = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  return `${(0, import_index_3f5baa8b.v)(Nav, "Nav").$$render($$result, { pages }, {}, {})}
<main class="${"container max-w-xl mx-auto px-4"}">${slots.default ? slots.default({}) : ``}</main>`;
});
