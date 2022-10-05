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
    var import_timezone = __toESM(require("dayjs/plugin/timezone"));
    var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
    import_dayjs.default.extend(import_utc.default);
    import_dayjs.default.extend(import_timezone.default);
    import_dayjs.default.extend(import_customParseFormat.default);
    const djsFormat = (aTime, format) => {
        return (0, import_dayjs.default)(aTime).format(format);
    };
    const djsTzSet = (tz) => {
        return import_dayjs.default.tz.setDefault(tz);
    };
    const djsTzGuess = () => {
        return import_dayjs.default.tz.guess();
    };
    const djsTz = (aTime, tz) => {
        return import_dayjs.default.tz(aTime, tz);
    };
    const djsToZone = (aTime, tz, keepLocalTime) => {
        return (0, import_dayjs.default)(aTime).tz(tz, keepLocalTime);
    };
    const djsTzFormat = (aTime, format = "YYYY-MM-DD H:mm:ss A Z", tz) => {
        if (!tz)
            tz = import_dayjs.default.tz.guess();
        return djsFormat(import_dayjs.default.tz(aTime, format, tz), format);
    };
    const djsGTM = (timezone2) => {
        let result;
        const tz = timezone2 ? +djsTzFormat(new Date(), "ZZ", timezone2) / 100 : +djsFormat(new Date(), "ZZ") / 100;
        const isInt = Number.isInteger(tz);
        if (!isInt) {
            result = `${`${tz}`.replace(".", ":")}0`;
            result = ["-", "+"].includes(`${result}`.charAt(0)) ? `${result}` : `+${result}`;
        } else {
            result = ["-", "+"].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`;
        }
        return `GTM${result}`;
    };
})();
