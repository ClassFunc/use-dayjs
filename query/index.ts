import dayjs, {ConfigType, OpUnitType} from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isLeapYear)

const djsIsBefore = (aTime?: ConfigType, bTime?: ConfigType, unit?: OpUnitType) => {
    return dayjs(aTime).isBefore(dayjs(bTime), unit)
}

const djsIsSame = (aTime?: ConfigType, bTime?: ConfigType, unit?: OpUnitType) => {
    return dayjs(aTime).isSame(dayjs(bTime), unit)
}

const djsIsSameDate = (aTime?: ConfigType, bTime?: ConfigType) => {
    return dayjs(aTime).isSame(dayjs(bTime), "date")
}

const djsIsAfter = (aTime?: ConfigType, bTime?: ConfigType, unit?: OpUnitType) => {
    return dayjs(aTime).isAfter(dayjs(bTime), unit)
}

const djsSameBefore = (aTime?: ConfigType, bTime?: ConfigType, unit?: OpUnitType) => {
    return dayjs(aTime).isSameOrBefore(dayjs(bTime), unit)
}

const djsSameAfter = (aTime?: ConfigType, bTime?: ConfigType, unit?: OpUnitType) => {
    return dayjs(aTime).isSameOrAfter(dayjs(bTime), unit)
}

const djsBetween = (aTime?: ConfigType, bTime?: ConfigType, cTime?: ConfigType, unit?: OpUnitType, extra?: '()' | '[]' | '[)' | '(]') => {
    return dayjs(aTime).isBetween(dayjs(bTime), dayjs(cTime), unit, extra)
}

const djsBetweenRange = (aTime?: ConfigType, bTime?: ConfigType, cTime?: ConfigType, unit?: OpUnitType, extra?: '()' | '[]' | '[)' | '(]') => {
    return dayjs(aTime).isBetween(dayjs(bTime), dayjs(cTime), unit, extra)
}

const djsIsDayjs = (aTime?: ConfigType) => {
    return dayjs.isDayjs(aTime)
}

const djsIsLeapYear = (aTime?: ConfigType) => {
    return dayjs(aTime).isLeapYear()
}

export {
    djsBetween,
    djsBetweenRange,
    djsIsAfter,
    djsIsBefore,
    djsIsDayjs,
    djsIsLeapYear,
    djsIsSame,
    djsSameAfter,
    djsSameBefore,
    djsIsSameDate
}