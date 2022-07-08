import dayjs, { ConfigType, ManipulateType, OpUnitType } from "dayjs";
declare const djsAdd: (aTime?: ConfigType, nums: number, unit?: ManipulateType) => dayjs.Dayjs;
declare const djsSubtract: (aTime?: ConfigType, nums: number, unit?: ManipulateType) => dayjs.Dayjs;
declare const djsStartOf: (aTime?: ConfigType, unit: OpUnitType) => dayjs.Dayjs;
declare const djsEndOf: (aTime?: ConfigType, unit: OpUnitType) => dayjs.Dayjs;
export { djsAdd, djsEndOf, djsStartOf, djsSubtract };
