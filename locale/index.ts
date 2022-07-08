import dayjs, {ConfigType} from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)

const djsSetLocale = (locale: string) => {
    if (!locale)
        locale = "ja"

    let _locale = locale.split("-")[0]
    if (_locale === "en")
        _locale = "en-gb"

    import(`dayjs/locale/${_locale}.js`).then(() => {
        dayjs.locale(_locale)
    }).catch(e => console.log(e.toString()))
}

// @ts-ignore
const djsUTCOffset = (aTime?: ConfigType, offset: number | string, keepLocalTime?: boolean) => {
    return dayjs(aTime).utcOffset(offset, keepLocalTime)
}

const djsUTC = (aTime?: ConfigType, keepLocalTime?: boolean) => {
    return dayjs(aTime).utc(keepLocalTime)
}

export {
    djsSetLocale,
    djsUTCOffset,
    djsUTC
}