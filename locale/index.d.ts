import dayjs, { ConfigType } from "dayjs";
declare const djsSetLocale: (locale: string) => void;
declare const djsUTCOffset: (aTime?: ConfigType, offset: number | string, keepLocalTime?: boolean) => dayjs.Dayjs;
declare const djsUTC: (aTime?: ConfigType, keepLocalTime?: boolean) => dayjs.Dayjs;
export { djsSetLocale, djsUTCOffset, djsUTC };
