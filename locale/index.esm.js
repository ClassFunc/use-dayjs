"use strict";
import dayjs from "dayjs";
const djsSetLocale = (locale) => {
  if (!locale)
    locale = "ja";
  let _locale = locale.split("-")[0];
  if (_locale === "en")
    _locale = "en-gb";
  import(`dayjs/locale/${_locale}.js`).then(() => {
    dayjs.locale(_locale);
  }).catch((e) => console.log(e.toString()));
};
export {
  djsSetLocale
};
