"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var display_exports = {};
__export(display_exports, {
    djsCalendar: () => djsCalendar,
    djsDiff: () => djsDiff,
    djsFormat: () => djsFormat,
    djsFromAtTime: () => djsFromAtTime,
    djsFromNow: () => djsFromNow,
    djsToAtTime: () => djsToAtTime,
    djsToNow: () => djsToNow
});
module.exports = __toCommonJS(display_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_calendar = __toESM(require("dayjs/plugin/calendar"));
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_calendar.default);
const djsFormat = (aTime, format) => {
    return (0, import_dayjs.default)(aTime).format(format);
};
const djsFromNow = (aTime, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).fromNow(withoutSuffix);
};
const djsToNow = (aTime, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).toNow(withoutSuffix);
};
const djsFromAtTime = (aTime, compared, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).from(compared, withoutSuffix);
};
const djsToAtTime = (aTime, compared, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).to(compared, withoutSuffix);
};
const djsCalendar = (referenceTime, formats) => {
    return (0, import_dayjs.default)().calendar(referenceTime, formats);
};
const djsDiff = (aTime, bTime, unit, float) => {
    return (0, import_dayjs.default)(aTime).diff(bTime, unit, float);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    djsCalendar,
    djsDiff,
    djsFormat,
    djsFromAtTime,
    djsFromNow,
    djsToAtTime,
    djsToNow
});
