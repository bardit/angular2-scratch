"use strict";
require('reflect-metadata');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// These services are instantiated at the app level because they are
// meant to be singletons
// import { CurrentStateService } from './services/CurrentStateService';
// import { RouterStateService } from './services/RouterStateService';
var app_component_1 = require('./app/app.component');
var app_routes_1 = require('./app/app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    // CurrentStateService,
    // RouterStateService,
    router_1.provideRouter(app_routes_1.AppRoutes.slice())
]);
