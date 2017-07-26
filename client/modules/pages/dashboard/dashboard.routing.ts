import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../../_guards/index';
// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ],
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
