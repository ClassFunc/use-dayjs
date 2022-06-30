"use strict";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const djsParse = (aTime) => {
  return dayjs(aTime);
};
const djsParseNow = () => {
  return dayjs();
};
const djsParseUTC = (aTime) => {
  return dayjs(aTime).utc();
};
const djsParseNowUTC = () => {
  return dayjs().utc();
};
export {
  djsParse,
  djsParseNow,
  djsParseNowUTC,
  djsParseUTC
};
