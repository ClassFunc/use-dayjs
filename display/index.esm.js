"use strict";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";
import toArray from "dayjs/plugin/toArray";
import toObject from "dayjs/plugin/toObject";

dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(toArray);
dayjs.extend(toObject);
const djsFormat = (aTime, format) => {
  return dayjs(aTime).format(format);
};
const djsFromNow = (aTime, withoutSuffix) => {
  return dayjs(aTime).fromNow(withoutSuffix);
};
const djsToNow = (aTime, withoutSuffix) => {
  return dayjs(aTime).toNow(withoutSuffix);
};
const djsFromAtTime = (aTime, compared, withoutSuffix) => {
  return dayjs(aTime).from(compared, withoutSuffix);
};
const djsToAtTime = (aTime, compared, withoutSuffix) => {
  return dayjs(aTime).to(compared, withoutSuffix);
};
const djsCalendar = (referenceTime, formats) => {
  return dayjs().calendar(referenceTime, formats);
};
const djsDiff = (aTime, bTime, unit, float) => {
  return dayjs(aTime).diff(bTime, unit, float);
};
const djsToDateJs = (aTime) => {
  return dayjs(aTime).toDate();
};
const djsToArray = (aTime) => {
  return dayjs(aTime).toArray();
};
const djsToJson = (aTime) => {
  return dayjs(aTime).toJSON();
};
const djsToISOString = (aTime) => {
  return dayjs(aTime).toISOString();
};
const djsToObject = (aTime) => {
  return dayjs(aTime).toObject();
};
const djsToString = (aTime) => {
  return dayjs(aTime).toString();
};
const djsUnixTimestamp = (aTime) => {
  return dayjs(aTime).valueOf();
};
const djsUnix = (aTime) => {
  return dayjs(aTime).unix();
};
const djsDayInMonth = (aTime) => {
  return dayjs(aTime).daysInMonth();
};
export {
  djsCalendar,
  djsDayInMonth,
  djsDiff,
  djsFormat,
  djsFromAtTime,
  djsFromNow,
  djsToArray,
  djsToAtTime,
  djsToDateJs,
  djsToISOString,
  djsToJson,
  djsToNow,
  djsToObject,
  djsToString,
  djsUnix,
  djsUnixTimestamp
};
