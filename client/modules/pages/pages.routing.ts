import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from '../_guards/index';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };
import { Dashboard } from './dashboard/dashboard.component';
import { Editors } from './editors/editors.component';
export const routes: Routes = [

  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
      { path: 'editors', component: Editors, canActivate: [AuthGuard] },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
