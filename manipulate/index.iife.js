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
    var import_duration = __toESM(require("dayjs/plugin/duration"));
    import_dayjs.default.extend(import_duration.default);
    const djsAdd = (aTime, nums, unit) => {
        return (0, import_dayjs.default)(aTime).add(nums, unit);
    };
    const djsSubtract = (aTime, nums, unit) => {
        return (0, import_dayjs.default)(aTime).subtract(nums, unit);
    };
    const djsStartOf = (aTime, unit) => {
        return (0, import_dayjs.default)(aTime).startOf(unit);
    };
    const djsEndOf = (aTime, unit) => {
        return (0, import_dayjs.default)(aTime).endOf(unit);
    };
    const djsStartOfDay = (aTime) => {
        return (0, import_dayjs.default)(aTime).startOf("day");
    };
    const djsEndOfDay = (aTime) => {
        return (0, import_dayjs.default)(aTime).endOf("day");
    };
    const djsToDate = (aTime) => {
        return (0, import_dayjs.default)(aTime).toDate();
    };
})();