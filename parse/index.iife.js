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
    var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
    var import_objectSupport = __toESM(require("dayjs/plugin/objectSupport"));
    import_dayjs.default.extend(import_objectSupport.default);
    import_dayjs.default.extend(import_customParseFormat.default);
    import_dayjs.default.extend(import_utc.default);
    const djsParse = (aTime) => {
        if (!aTime)
            return (0, import_dayjs.default)();
        return (0, import_dayjs.default)(aTime);
    };
    const djsParseUTC = (aTime) => {
        if (!aTime)
            return (0, import_dayjs.default)().utc();
        return (0, import_dayjs.default)(aTime).utc();
    };
    const djsNowUTC = () => {
        return (0, import_dayjs.default)().utc();
    };
    const djsNow = () => {
        return (0, import_dayjs.default)();
    };
    const djsParseNow = () => {
        return djsParse(djsNow().toString());
    };
    const djsParseNowUTC = () => {
        return djsParse(djsNow().toString());
    };
    const djsClone = (aTime) => {
        if (!aTime)
            return (0, import_dayjs.default)((0, import_dayjs.default)());
        return (0, import_dayjs.default)((0, import_dayjs.default)(aTime));
    };
})();
