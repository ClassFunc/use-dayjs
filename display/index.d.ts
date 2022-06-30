import { ConfigType, OpUnitType, QUnitType } from "dayjs";
declare const djsFormat: (aTime: ConfigType, format: string) => string;
declare const djsFromNow: (aTime: ConfigType, withoutSuffix?: boolean) => string;
declare const djsToNow: (aTime: ConfigType, withoutSuffix?: boolean) => string;
declare const djsFromAtTime: (aTime: ConfigType, compared: ConfigType, withoutSuffix?: boolean) => string;
declare const djsToAtTime: (aTime: ConfigType, compared: ConfigType, withoutSuffix?: boolean) => string;
declare const djsCalendar: (referenceTime?: ConfigType, formats?: object) => string;
declare const djsDiff: (aTime: ConfigType, bTime: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean) => number;
export { djsFormat, djsFromNow, djsFromAtTime, djsToAtTime, djsCalendar, djsToNow, djsDiff };
