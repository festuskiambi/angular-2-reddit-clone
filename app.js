System.register(['@angular/core', '@angular/platform-browser', "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1;
    var RedditApp, RedditAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                }
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n      <form class=\"ui large form segment\">\n        <h3 class=\"ui header\">Add a Link</h3>\n        <div class=\"field\">\n          <label for=\"title\">Title:</label>\n          <input name=\"title\">\n        </div>\n        <div class=\"field\">\n          <label for=\"link\">Link:</label>\n          <input name=\"link\">\n        </div>\n      </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            RedditAppModule = (function () {
                function RedditAppModule() {
                }
                RedditAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [RedditApp],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [RedditApp],
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditAppModule);
                return RedditAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RedditAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map