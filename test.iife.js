"use strict";
(() => {
    var import_locale = require("./locale");
    var import_display = require("./display");
    (0, import_locale.djsSetLocale)("en");
    const testFunc = () => {
        console.log((0, import_display.djsFormat)(new Date()));
    };
    testFunc();
})();
