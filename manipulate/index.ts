import dayjs, {ConfigType, ManipulateType, OpUnitType} from "dayjs";
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

// @ts-ignore
const djsAdd = (aTime?: ConfigType, nums: number, unit?: ManipulateType) => {
    return dayjs(aTime).add(nums, unit)
}

// @ts-ignore
const djsSubtract = (aTime?: ConfigType, nums: number, unit?: ManipulateType) => {
    return dayjs(aTime).subtract(nums, unit)
}

// @ts-ignore
const djsStartOf = (aTime?: ConfigType, unit: OpUnitType) => {
    return dayjs(aTime).startOf(unit)
}

// @ts-ignore
const djsEndOf = (aTime?: ConfigType, unit: OpUnitType) => {
    return dayjs(aTime).endOf(unit)
}
// @ts-ignore
const djsStartOfDay = (aTime?: ConfigType) => {
    return dayjs(aTime).startOf("day")
}

// @ts-ignore
const djsEndOfDay = (aTime?: ConfigType) => {
    return dayjs(aTime).endOf("day")
}

// @ts-ignore
const djsToDate = (aTime?: ConfigType) => {
    return dayjs(aTime).toDate()
}

export {
    djsAdd,
    djsEndOf,
    djsStartOf,
    djsSubtract,
    djsEndOfDay,
    djsStartOfDay,
    djsToDate
}