"use strict";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
const djsTzSet = (tz) => {
  return dayjs.tz.setDefault(tz);
};
const djsTzGuess = () => {
  return dayjs.tz.guess();
};
const djsTz = (aTime, tz) => {
  return dayjs.tz(aTime, tz);
};
const djsToZone = (aTime, tz, keepLocalTime) => {
  return dayjs(aTime).tz(tz, keepLocalTime);
};
const djsTzFormat = (aTime, format = "YYYY-MM-DD H:mm:ss A Z", tz) => {
  if (!tz)
    tz = dayjs.tz.guess();
  return dayjs.tz(aTime, format, tz);
};
export {
  djsToZone,
  djsTz,
  djsTzFormat,
  djsTzGuess,
  djsTzSet
};
