import dayjs from "dayjs"
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)

const djsParse = (aTime: string) => {
    return dayjs(aTime)
}

const djsParseNow = () => {
    return dayjs()
}

const djsParseUTC = (aTime: string) => {
    return dayjs(aTime).utc()
}

const djsParseNowUTC = () => {
    return dayjs().utc()
}

export {
    djsParse,
    djsParseNow,
    djsParseUTC,
    djsParseNowUTC
}