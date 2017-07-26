import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { Pages } from './pages.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { PaReportsModule } from './reports/reports.module';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, DashboardModule, PaReportsModule],
  declarations: [Pages]
})
export class PagesModule {
}
