import dayjs, { ConfigType } from "dayjs";
declare const djsParse: (aTime?: ConfigType) => dayjs.Dayjs;
declare const djsParseUTC: (aTime?: ConfigType) => dayjs.Dayjs;
declare const djsNowUTC: () => dayjs.Dayjs;
declare const djsNow: () => dayjs.Dayjs;
declare const djsParseNow: () => dayjs.Dayjs;
declare const djsParseNowUTC: () => dayjs.Dayjs;
declare const djsClone: (aTime?: ConfigType) => dayjs.Dayjs;
export { djsParse, djsParseNow, djsParseUTC, djsParseNowUTC, djsNow, djsNowUTC, djsClone };
