import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-cmp',
  encapsulation: ViewEncapsulation.None,
  directives: [
    ROUTER_DIRECTIVES
  ],
  precompile: [],
  styles: [],
  template: `
    <!--top-bar></top-bar-->
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
