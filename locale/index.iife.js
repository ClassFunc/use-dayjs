"use strict";
(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, {
                        get: () => from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {value: mod, enumerable: true}) : target,
        mod
    ));
    var import_dayjs = __toESM(require("dayjs"));
    var import_utc = __toESM(require("dayjs/plugin/utc"));
    import_dayjs.default.extend(import_utc.default);
    const djsSetLocale = (locale) => {
        if (!locale)
            locale = "ja";
        let _locale = locale.split("-")[0];
        if (_locale === "en")
            _locale = "en-gb";
        import(`dayjs/locale/${_locale}.js`).then(() => {
            import_dayjs.default.locale(_locale);
        }).catch((e) => console.log(e.toString()));
    };
    const djsUTCOffset = (aTime, offset, keepLocalTime) => {
        return (0, import_dayjs.default)(aTime).utcOffset(offset, keepLocalTime);
    };
    const djsUTC = (aTime, keepLocalTime) => {
        return (0, import_dayjs.default)(aTime).utc(keepLocalTime);
    };
})();
