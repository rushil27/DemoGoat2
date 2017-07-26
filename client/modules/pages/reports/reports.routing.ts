import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_guards/index';

import { PaReportsComponent } from './reports.component';
import { PaReportsStatusComponent } from './components/reports-status/reports-status.component';

const routes: Routes = [
  {
    path: '', component: PaReportsComponent,
    children: [
      { path: '', redirectTo: 'status', pathMatch: 'full', canActivate: [AuthGuard], canLoad: [AuthGuard] },
      { path: 'status', component: PaReportsStatusComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] }
    ]
  },
];


export const routedComponents: ModuleWithProviders = RouterModule.forChild(routes);
