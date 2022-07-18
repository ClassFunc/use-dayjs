import dayjs, {ConfigType} from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import customParseFormat from "dayjs/plugin/customParseFormat"
import {djsFormat} from "../display";

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

// Change default timezone from local time zone to your custom timezone.

const djsTzSet = (tz: string) => {
    return dayjs.tz.setDefault(tz)
}

const djsTzGuess = () => {
    return dayjs.tz.guess()
}

const djsTz = (aTime?: ConfigType, tz?: string) => {
    return dayjs.tz(aTime, tz)
}

const djsToZone = (aTime?: ConfigType, tz?: string, keepLocalTime?: boolean) => {
    return dayjs(aTime).tz(tz, keepLocalTime)
}

const djsTzFormat = (aTime?: ConfigType, format: string = "YYYY-MM-DD H:mm:ss A Z", tz?: string) => {
    if (!tz)
        tz = dayjs.tz.guess()

    return dayjs.tz(aTime, format, tz)
}

const djsGTM = (timezone?: string) => {
    let result
    const tz = timezone ? (+djsTzFormat(new Date(), "ZZ", timezone)) / 100 : (+djsFormat(new Date(), 'ZZ')) / 100
    const isInt = Number.isInteger(tz)
    if (!isInt) {
        result = `${`${tz}`.replace('.', ':')}0`
        result = ['-', '+'].includes(`${result}`.charAt(0)) ? `${result}` : `+${result}`
    } else {
        result = ['-', '+'].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`
    }
    return `GTM${result}`
}

export {
    djsTz,
    djsTzSet,
    djsToZone,
    djsTzGuess,
    djsTzFormat,
    djsGTM
}