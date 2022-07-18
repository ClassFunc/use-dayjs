import dayjs, {ConfigType, UnitType} from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import dayOfYear from "dayjs/plugin/dayOfYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import weekYear from "dayjs/plugin/weekYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";

dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.extend(dayOfYear)
dayjs.extend(weekOfYear)
dayjs.extend(quarterOfYear)
dayjs.extend(weekYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(utc)

type SetProps = {
    millisecond?: number,
    second?: number,
    minute?: number,
    hour?: number,
    day?: number,
    month?: number,
    year?: number,
    date?: number
}

const djsParseUTC = (aTime?: ConfigType) => {
    if (!aTime)
        return dayjs().utc()
    return dayjs(aTime).utc()
}

const djsMillisecond = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).millisecond(value)
}

const djsSecond = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).second(value)
}

const djsMinute = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).minute(value)
}

const djsHour = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).hour(value)
}

const djsWeekDay = (aTime?: ConfigType, week: number = 0, day: number = 0) => {
    return dayjs(aTime).week(week).day(day)
}

const djsWeek = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).week(value)
}

const djsDateOfMonth = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).date(value)
}

const djsDayOfWeek = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).day(value)
}

const djsDayOfWeekAware = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).weekday(value)
}

const djsDayOfWeekISO = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).isoWeekday(value)
}

const djsDayOfYear = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).dayOfYear(value)
}

const djsWeekOfYear = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).isoWeek(value)
}

const djsMonth = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).month(value)
}

const djsQuarter = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).quarter(value)
}

const djsYear = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).year(value)
}

const djsWeekYear = (aTime?: ConfigType) => {
    return dayjs(aTime).weekYear()
}

const djsWeekInYearISO = (aTime?: ConfigType) => {
    return dayjs(aTime).isoWeeksInYear()
}

const djsGet = (aTime?: ConfigType, type: UnitType = "millisecond") => {
    if (!aTime)
        return dayjs().get(type)

    return dayjs(aTime).get(type)
}

const djsSet = (aTime?: ConfigType, config?: SetProps) => {
    if (!aTime)
        aTime = new Date()

    return dayjs(aTime)
        .set('year', config?.year || djsGet(aTime, "year"))
        .set('month', config?.month || djsGet(aTime, "month"))
        .set('date', config?.date || djsGet(aTime, "date"))
        .set('day', config?.day || djsGet(aTime, "day"))
        .set('hour', config?.hour || djsGet(aTime, "hour"))
        .set('minute', config?.minute || djsGet(aTime, "minute"))
        .set('second', config?.second || djsGet(aTime, "second"))
        .set('millisecond', config?.millisecond || djsGet(aTime, "millisecond"))
}


const djsDefault = (aTime: ConfigType, valueOf: boolean = false) => {
    if (valueOf)
        return dayjs(aTime).valueOf()
    return dayjs(aTime)
}

const djsDefaultUTC = (aTime: ConfigType, valueOf: boolean = false) => {
    if (valueOf)
        return djsParseUTC(aTime).valueOf()
    return djsParseUTC(aTime).utc()
}

const djsDuration = (aTime: ConfigType, bTime: ConfigType, divisor: number) => {
    return (dayjs(aTime).valueOf() - dayjs(bTime).valueOf()) / divisor
}

const djsDurationUTC = (aTime: ConfigType, bTime: ConfigType, divisor: number) => {
    return (djsParseUTC(aTime).valueOf() - djsParseUTC(bTime).valueOf()) / divisor
}

export {
    djsDateOfMonth,
    djsDayOfWeek,
    djsDayOfWeekAware,
    djsDayOfWeekISO,
    djsSet,
    djsDayOfYear,
    djsGet,
    djsHour,
    djsMillisecond,
    djsMinute,
    djsMonth,
    djsQuarter,
    djsSecond,
    djsWeekInYearISO,
    djsWeekOfYear,
    djsWeekYear,
    djsYear,
    djsWeek,
    djsWeekDay,
    djsDuration,
    djsDefault,
    djsDefaultUTC,
    djsDurationUTC
}