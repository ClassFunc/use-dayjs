"use strict";
import { dayjs } from "../dayjs";
const djsParse = (aTime) => {
  return dayjs(aTime);
};
const djsParseNow = () => {
  console.log(dayjs.locale());
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
