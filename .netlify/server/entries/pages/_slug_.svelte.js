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
var import_index_3f5baa8b = __toModule(require("../../chunks/index-3f5baa8b.js"));
const load = async ({ fetch, params }) => {
  const { slug } = params;
  const res = await fetch(`/pages/${slug}.json`);
  if (res.ok) {
    const { page } = await res.json();
    return { props: { page } };
  }
};
const U5Bslugu5D = (0, import_index_3f5baa8b.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `${$$result.head += `${$$result.title = `<title>JCD Blog | ${(0, import_index_3f5baa8b.b)(page.title)}</title>`, ""}`, ""}

<h1 class="${"text-4xl font-semibold mb-5"}">${(0, import_index_3f5baa8b.b)(page.title)}</h1>

<article class="${"prose"}"><!-- HTML_TAG_START -->${page.content.html}<!-- HTML_TAG_END --></article>`;
});
