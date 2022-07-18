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
var calculator_exports = {};
__export(calculator_exports, {
  djsDateOfMonth: () => djsDateOfMonth,
  djsDayOfWeek: () => djsDayOfWeek,
  djsDayOfWeekAware: () => djsDayOfWeekAware,
  djsDayOfWeekISO: () => djsDayOfWeekISO,
  djsDayOfYear: () => djsDayOfYear,
  djsDefault: () => djsDefault,
  djsDefaultUTC: () => djsDefaultUTC,
  djsDuration: () => djsDuration,
  djsDurationUTC: () => djsDurationUTC,
  djsGet: () => djsGet,
  djsHour: () => djsHour,
  djsMillisecond: () => djsMillisecond,
  djsMinute: () => djsMinute,
  djsMonth: () => djsMonth,
  djsQuarter: () => djsQuarter,
  djsSecond: () => djsSecond,
  djsSet: () => djsSet,
  djsWeek: () => djsWeek,
  djsWeekDay: () => djsWeekDay,
  djsWeekInYearISO: () => djsWeekInYearISO,
  djsWeekOfYear: () => djsWeekOfYear,
  djsWeekYear: () => djsWeekYear,
  djsYear: () => djsYear
});
module.exports = __toCommonJS(calculator_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_weekday = __toESM(require("dayjs/plugin/weekday"));
var import_isoWeek = __toESM(require("dayjs/plugin/isoWeek"));
var import_dayOfYear = __toESM(require("dayjs/plugin/dayOfYear"));
var import_weekOfYear = __toESM(require("dayjs/plugin/weekOfYear"));
var import_quarterOfYear = __toESM(require("dayjs/plugin/quarterOfYear"));
var import_weekYear = __toESM(require("dayjs/plugin/weekYear"));
var import_isoWeeksInYear = __toESM(require("dayjs/plugin/isoWeeksInYear"));
var import_parse = require("../parse/index");
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_dayOfYear.default);
import_dayjs.default.extend(import_weekOfYear.default);
import_dayjs.default.extend(import_quarterOfYear.default);
import_dayjs.default.extend(import_weekYear.default);
import_dayjs.default.extend(import_isoWeeksInYear.default);
const djsMillisecond = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).millisecond(value);
};
const djsSecond = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).second(value);
};
const djsMinute = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).minute(value);
};
const djsHour = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).hour(value);
};
const djsWeekDay = (aTime, week = 0, day = 0) => {
  return (0, import_dayjs.default)(aTime).week(week).day(day);
};
const djsWeek = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).week(value);
};
const djsDateOfMonth = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).date(value);
};
const djsDayOfWeek = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).day(value);
};
const djsDayOfWeekAware = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).weekday(value);
};
const djsDayOfWeekISO = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).isoWeekday(value);
};
const djsDayOfYear = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).dayOfYear(value);
};
const djsWeekOfYear = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).isoWeek(value);
};
const djsMonth = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).month(value);
};
const djsQuarter = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).quarter(value);
};
const djsYear = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).year(value);
};
const djsWeekYear = (aTime) => {
  return (0, import_dayjs.default)(aTime).weekYear();
};
const djsWeekInYearISO = (aTime) => {
  return (0, import_dayjs.default)(aTime).isoWeeksInYear();
};
const djsGet = (aTime, type = "millisecond") => {
  if (!aTime)
    return (0, import_dayjs.default)().get(type);
  return (0, import_dayjs.default)(aTime).get(type);
};
const djsSet = (aTime, config) => {
  if (!aTime)
    aTime = new Date();
  return (0, import_dayjs.default)(aTime).set("year", (config == null ? void 0 : config.year) || djsGet(aTime, "year")).set("month", (config == null ? void 0 : config.month) || djsGet(aTime, "month")).set("date", (config == null ? void 0 : config.date) || djsGet(aTime, "date")).set("day", (config == null ? void 0 : config.day) || djsGet(aTime, "day")).set("hour", (config == null ? void 0 : config.hour) || djsGet(aTime, "hour")).set("minute", (config == null ? void 0 : config.minute) || djsGet(aTime, "minute")).set("second", (config == null ? void 0 : config.second) || djsGet(aTime, "second")).set("millisecond", (config == null ? void 0 : config.millisecond) || djsGet(aTime, "millisecond"));
};
const djsDefault = (aTime, valueOf = false) => {
  if (valueOf)
    return (0, import_dayjs.default)(aTime).valueOf();
  return (0, import_dayjs.default)(aTime);
};
const djsDefaultUTC = (aTime, valueOf = false) => {
  if (valueOf)
    return (0, import_parse.djsParseUTC)(aTime).valueOf();
  return (0, import_parse.djsParseUTC)(aTime).utc();
};
const djsDuration = (aTime, bTime, divisor) => {
  return ((0, import_dayjs.default)(aTime).valueOf() - (0, import_dayjs.default)(bTime).valueOf()) / divisor;
};
const djsDurationUTC = (aTime, bTime, divisor) => {
  return ((0, import_parse.djsParseUTC)(aTime).valueOf() - (0, import_parse.djsParseUTC)(bTime).valueOf()) / divisor;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  djsDateOfMonth,
  djsDayOfWeek,
  djsDayOfWeekAware,
  djsDayOfWeekISO,
  djsDayOfYear,
  djsDefault,
  djsDefaultUTC,
  djsDuration,
  djsDurationUTC,
  djsGet,
  djsHour,
  djsMillisecond,
  djsMinute,
  djsMonth,
  djsQuarter,
  djsSecond,
  djsSet,
  djsWeek,
  djsWeekDay,
  djsWeekInYearISO,
  djsWeekOfYear,
  djsWeekYear,
  djsYear
});
