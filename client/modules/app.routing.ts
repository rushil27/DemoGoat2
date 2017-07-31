import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './_guards/index';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full',  canActivate:[AuthGuard], canLoad: [AuthGuard]},
    { path: 'reset/:token', redirectTo: 'reset/:token', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard',  canActivate:[AuthGuard], canLoad: [AuthGuard] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
