import 'reflect-metadata';

import { bootstrap }          from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }     from '@angular/http';
import { provideRouter }      from '@angular/router';

// These services are instantiated at the app level because they are
// meant to be singletons
// import { CurrentStateService } from './services/CurrentStateService';
// import { RouterStateService } from './services/RouterStateService';

import { AppComponent }       from './app/app.component';
import { AppRoutes }    from './app/app.routes';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  // CurrentStateService,
  // RouterStateService,
  provideRouter([...AppRoutes])
]);
