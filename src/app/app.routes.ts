import { RouterConfig } from '@angular/router';

export const AppRoutes : RouterConfig = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      name: 'Root'
    }
  },
  {
    path: 'home',
    data: {
      name: 'Home'
    }
  }
];
