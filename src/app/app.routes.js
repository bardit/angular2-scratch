"use strict";
exports.AppRoutes = [
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
