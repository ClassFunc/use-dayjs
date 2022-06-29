"use strict";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(relativeTime);
dayjs.extend(calendar);
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
export {
  djsCalendar,
  djsDiff,
  djsFormat,
  djsFromAtTime,
  djsFromNow,
  djsToAtTime,
  djsToNow
};
