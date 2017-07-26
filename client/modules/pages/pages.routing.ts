import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from '../_guards/index';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };
import { DashboardModule } from './dashboard/dashboard.module';
import { PaReportsModule } from './reports/reports.module';

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard], canLoad: [AuthGuard] },
      { path: 'dashboard', loadChildren: () => DashboardModule },
      { path: 'reports', loadChildren: () => PaReportsModule }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
