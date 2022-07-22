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

declare type SetProps = {
    years?: number,
    months?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
}

const djsParseUTC = (aTime?: ConfigType) => {
    if (!aTime)
        return dayjs().utc()
    return dayjs(aTime).utc()
}

const djsMillisecondValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).millisecond(value)
}

const djsMillisecond = (aTime?: ConfigType) => {
    return dayjs(aTime).millisecond()
}

const djsSecondValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).second(value)
}

const djsSecond = (aTime?: ConfigType) => {
    return dayjs(aTime).second()
}

const djsMinuteValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).minute(value)
}

const djsMinute = (aTime?: ConfigType) => {
    return dayjs(aTime).minute()
}

const djsHourValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).hour(value)
}

const djsHour = (aTime?: ConfigType) => {
    return dayjs(aTime).hour()
}

const djsDayValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).day(value)
}

const djsDay = (aTime?: ConfigType) => {
    return dayjs(aTime).day()
}

const djsWeekValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).week(value)
}

const djsWeek = (aTime?: ConfigType) => {
    return dayjs(aTime).week()
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

const djsMonthValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).month(value)
}

const djsMonth = (aTime?: ConfigType) => {
    return dayjs(aTime).month()
}

const djsQuarterValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).quarter(value)
}

const djsQuarter = (aTime?: ConfigType) => {
    return dayjs(aTime).quarter()
}

const djsYearValue = (aTime?: ConfigType, value: number = 0) => {
    return dayjs(aTime).year(value)
}

const djsYear = (aTime?: ConfigType) => {
    return dayjs(aTime).year()
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

    const {
        years = djsGet(aTime, "years"),
        months = djsGet(aTime, "months"),
        days = djsGet(aTime, "days"),
        hours = djsGet(aTime, "hours"),
        minutes = djsGet(aTime, "minutes"),
        seconds = djsGet(aTime, "seconds"),
        milliseconds = djsGet(aTime, "milliseconds"),
    }: any = config

    return dayjs(aTime)
        .set('year', years)
        .set('month', months)
        .set('day', days)
        .set('hour', hours)
        .set('minute', minutes)
        .set('second', seconds)
        .set('millisecond', milliseconds)
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
    djsDay,
    djsDuration,
    djsDefault,
    djsDefaultUTC,
    djsDurationUTC,
    djsDayValue,
    djsHourValue,
    djsMillisecondValue,
    djsMinuteValue,
    djsMonthValue,
    djsParseUTC,
    djsQuarterValue,
    djsSecondValue,
    djsWeekValue,
    djsYearValue
}