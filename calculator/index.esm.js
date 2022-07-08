"use strict";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import dayOfYear from "dayjs/plugin/dayOfYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import weekYear from "dayjs/plugin/weekYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoWeeksInYear);
const djsMillisecond = (aTime, value = 0) => {
  return dayjs(aTime).millisecond(value);
};
const djsSecond = (aTime, value = 0) => {
  return dayjs(aTime).second(value);
};
const djsMinute = (aTime, value = 0) => {
  return dayjs(aTime).minute(value);
};
const djsHour = (aTime, value = 0) => {
  return dayjs(aTime).hour(value);
};
const djsDateOfMonth = (aTime, value = 0) => {
  return dayjs(aTime).date(value);
};
const djsDayOfWeek = (aTime, value = 0) => {
  return dayjs(aTime).day(value);
};
const djsDayOfWeekAware = (aTime, value = 0) => {
  return dayjs(aTime).weekday(value);
};
const djsDayOfWeekISO = (aTime, value = 0) => {
  return dayjs(aTime).isoWeekday(value);
};
const djsDayOfYear = (aTime, value = 0) => {
  return dayjs(aTime).dayOfYear(value);
};
const djsWeekOfYear = (aTime, value = 0) => {
  return dayjs(aTime).isoWeek(value);
};
const djsMonth = (aTime, value = 0) => {
  return dayjs(aTime).month(value);
};
const djsQuarter = (aTime, value = 0) => {
  return dayjs(aTime).quarter(value);
};
const djsYear = (aTime, value = 0) => {
  return dayjs(aTime).year(value);
};
const djsWeekYear = (aTime) => {
  return dayjs(aTime).weekYear();
};
const djsWeekInYearISO = (aTime) => {
  return dayjs(aTime).isoWeeksInYear();
};
const djsGet = (aTime, type = "millisecond") => {
  if (!aTime)
    return dayjs().get(type);
  return dayjs(aTime).get(type);
};
const djsSet = (aTime, config) => {
  if (!aTime)
    aTime = new Date();
  return dayjs(aTime).set("year", (config == null ? void 0 : config.year) || djsGet(aTime, "year")).set("month", (config == null ? void 0 : config.month) || djsGet(aTime, "month")).set("date", (config == null ? void 0 : config.date) || djsGet(aTime, "date")).set("day", (config == null ? void 0 : config.day) || djsGet(aTime, "day")).set("hour", (config == null ? void 0 : config.hour) || djsGet(aTime, "hour")).set("minute", (config == null ? void 0 : config.minute) || djsGet(aTime, "minute")).set("second", (config == null ? void 0 : config.second) || djsGet(aTime, "second")).set("millisecond", (config == null ? void 0 : config.millisecond) || djsGet(aTime, "millisecond"));
};
export {
  djsDateOfMonth,
  djsDayOfWeek,
  djsDayOfWeekAware,
  djsDayOfWeekISO,
  djsDayOfYear,
  djsGet,
  djsHour,
  djsMillisecond,
  djsMinute,
  djsMonth,
  djsQuarter,
  djsSecond,
  djsSet,
  djsWeekInYearISO,
  djsWeekOfYear,
  djsWeekYear,
  djsYear
};
