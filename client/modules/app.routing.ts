import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './_guards/index';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'reset/:token', redirectTo: 'reset/:token', pathMatch: 'full' },
    { path: 'pages', redirectTo: 'pages', canActivate:[AuthGuard], canLoad: [AuthGuard] },
    { path: '**', redirectTo: 'PageNotFound' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
