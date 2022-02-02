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
  get: () => get
});
var import_graphql_client_be1a3fb8 = __toModule(require("../../../chunks/graphql-client-be1a3fb8.js"));
var import_graphql_request = __toModule(require("graphql-request"));
const get = async (req) => {
  const { slug } = req.params;
  try {
    const query = import_graphql_request.gql`
      query Post($slug: String) {
        post(where: { slug: $slug }) {
          title
          date
          tags
          author {
            name
            authorTitle: title
            picture {
              url(
                transformation: {
                  image: {
                    resize: { fit: clip, height: 50, width: 50 }
                  }
                }
              )
            }
          }
          content {
            html
          }
          coverImage {
            url
          }
        }
      }
    `;
    const variables = { slug };
    const { post } = await import_graphql_client_be1a3fb8.c.request(query, variables);
    return {
      status: 200,
      body: { post }
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: "There was a server error." }
    };
  }
};
