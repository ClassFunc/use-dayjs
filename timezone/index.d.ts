import dayjs, { ConfigType } from "dayjs";
declare const djsTzSet: (tz: string) => void;
declare const djsTzGuess: () => string;
declare const djsTz: (aTime?: ConfigType, tz?: string) => dayjs.Dayjs;
declare const djsToZone: (aTime?: ConfigType, tz?: string, keepLocalTime?: boolean) => dayjs.Dayjs;
declare const djsTzFormat: (aTime?: ConfigType, format?: string, tz?: string) => string;
declare const djsGTM: (timezone?: string) => string;
export { djsTz, djsTzSet, djsToZone, djsTzGuess, djsTzFormat, djsGTM };
