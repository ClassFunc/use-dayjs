"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var use_dayjs_exports = {};
__export(use_dayjs_exports, {
  calculator: () => calculator,
  display: () => display,
  locale: () => locale,
  manipulate: () => manipulate,
  parse: () => parse,
  query: () => query
});
module.exports = __toCommonJS(use_dayjs_exports);
var calculator = __toESM(require("./calculator"));
var display = __toESM(require("./display"));
var locale = __toESM(require("./locale"));
var parse = __toESM(require("./parse"));
var query = __toESM(require("./query"));
var manipulate = __toESM(require("./manipulate"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calculator,
  display,
  locale,
  manipulate,
  parse,
  query
});
