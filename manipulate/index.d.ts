import dayjs, { ConfigType, ManipulateType, OpUnitType } from "dayjs";
declare const djsAdd: (aTime?: ConfigType, nums: number, unit?: ManipulateType) => dayjs.Dayjs;
declare const djsSubtract: (aTime?: ConfigType, nums: number, unit?: ManipulateType) => dayjs.Dayjs;
declare const djsStartOf: (aTime?: ConfigType, unit: OpUnitType) => dayjs.Dayjs;
declare const djsEndOf: (aTime?: ConfigType, unit: OpUnitType) => dayjs.Dayjs;
declare const djsStartOfDay: (aTime?: ConfigType) => dayjs.Dayjs;
declare const djsEndOfDay: (aTime?: ConfigType) => dayjs.Dayjs;
declare const djsToDate: (aTime?: ConfigType) => Date;
export { djsAdd, djsEndOf, djsStartOf, djsSubtract, djsEndOfDay, djsStartOfDay, djsToDate };
