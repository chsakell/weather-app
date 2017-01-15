"use strict";
var platform_browser_1 = require("@angular/platform-browser");
var app_module_ngfactory_1 = require("../aot/app/app.module.ngfactory");
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main-aot.js.map