import dayjs, {ConfigType} from "dayjs"
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport)
dayjs.extend(customParseFormat)
dayjs.extend(utc)

const djsParse = (aTime: ConfigType) => {
    return dayjs(aTime)
}

const djsParseUTC = (aTime: ConfigType) => {
    return dayjs(aTime).utc()
}

const djsNowUTC = () => {
    return dayjs().utc()
}

const djsNow = () => {
    return dayjs()
}

const djsParseNow = () => {
    return djsParse(djsNow().toString())
}

const djsParseNowUTC = () => {
    return djsParse(djsNow().toString())
}

const djsUnix = (timestamp: number) => {
    return dayjs.unix(timestamp)
}

const djsClone = (aTime?: ConfigType) => {
    if (!aTime)
        return dayjs(dayjs())

    return dayjs(dayjs(aTime))
}

export {
    djsParse,
    djsParseNow,
    djsParseUTC,
    djsParseNowUTC,
    djsNow,
    djsNowUTC,
    djsUnix,
    djsClone
}