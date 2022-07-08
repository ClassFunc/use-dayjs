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

export {}