import dayjs from "dayjs";
declare const djsParse: (aTime: string) => dayjs.Dayjs;
declare const djsParseNow: () => dayjs.Dayjs;
declare const djsParseUTC: (aTime: string) => dayjs.Dayjs;
declare const djsParseNowUTC: () => dayjs.Dayjs;
export { djsParse, djsParseNow, djsParseUTC, djsParseNowUTC };
