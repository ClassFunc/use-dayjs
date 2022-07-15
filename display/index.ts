import dayjs, {ConfigType, OpUnitType, QUnitType} from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";
import toArray from "dayjs/plugin/toArray";
import toObject from "dayjs/plugin/toObject";
import {djsParseUTC} from "../parse";

dayjs.extend(relativeTime)
dayjs.extend(calendar)
dayjs.extend(toArray)
dayjs.extend(toObject)

const djsFormat = (aTime?: ConfigType, format?: string) => {
    return dayjs(aTime).format(format)
}

const djsFromNow = (aTime?: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).fromNow(withoutSuffix)
}

const djsToNow = (aTime?: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).toNow(withoutSuffix)
}

const djsFromAtTime = (aTime?: ConfigType, compared?: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).from(compared, withoutSuffix)
}

const djsToAtTime = (aTime?: ConfigType, compared?: ConfigType, withoutSuffix?: boolean) => {
    return dayjs(aTime).to(compared, withoutSuffix)
}

const djsCalendar = (referenceTime?: ConfigType, formats?: object) => {
    return dayjs().calendar(referenceTime, formats)
}

const djsDiff = (aTime?: ConfigType, bTime?: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean) => {
    return dayjs(aTime).diff(bTime, unit, float)
}

const djsToDateJs = (aTime?: ConfigType) => {
    return dayjs(aTime).toDate()
}

const djsToArray = (aTime?: ConfigType) => {
    return dayjs(aTime).toArray()
}

const djsToJson = (aTime?: ConfigType) => {
    return dayjs(aTime).toJSON()
}

const djsToISOString = (aTime?: ConfigType) => {
    return dayjs(aTime).toISOString()
}

const djsToObject: any = (aTime?: ConfigType) => {
    return dayjs(aTime).toObject()
}

const djsToString = (aTime?: ConfigType) => {
    return dayjs(aTime).toString()
}

const djsUnixTimestamp = (aTime?: ConfigType) => {
    return dayjs(aTime).valueOf()
}

const djsUnix = (aTime?: ConfigType) => {
    return dayjs(aTime).unix()
}

const djsDayInMonth = (aTime?: ConfigType) => {
    return dayjs(aTime).daysInMonth()
}

const djsFormatUTC = (aTime?: ConfigType, format?: string) => {
    return djsFormat(djsParseUTC(aTime), format)
}

const djsFormatDDD = (aTime?: ConfigType,) => {
    return djsFormat(aTime, "ddd")
}

const djsFormatDDDD = (aTime?: ConfigType) => {
    return djsFormat(aTime, "dddd")
}

const djsFormatMMDD = (aTime?: ConfigType) => {
    return djsFormat(aTime, "MM/DD")
}

const djsFormatDDMM = (aTime?: ConfigType) => {
    return djsFormat(aTime, "DD/MM")
}

const djsFormatYYYYMMDD = (aTime?: ConfigType) => {
    return djsFormat(aTime, "YYYY-MM-DD")
}

const djsFormatYYYY = (aTime?: ConfigType) => {
    return djsFormat(aTime, "YYYY")
}

const djsFormatYYYYMMDDHHMMSSZ = (aTime?: ConfigType) => {
    return djsFormat(djsParseUTC(aTime), "YYYYMMDDTHHmmss") + "Z"
}

export {
    djsFormat,
    djsFromNow,
    djsFromAtTime,
    djsToAtTime,
    djsCalendar,
    djsToNow,
    djsDiff,
    djsToDateJs,
    djsToArray,
    djsUnix,
    djsDayInMonth,
    djsToISOString,
    djsToJson,
    djsToObject,
    djsToString,
    djsUnixTimestamp,
}