import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { Pages } from './pages.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from './forms/forms.module';
import { UiModule } from './ui/ui.module';
import { MapsModule } from './maps/maps.module';
import { EditorsModule } from './editors/editors.module';
import { ChartsModule } from './charts/charts.module';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, DashboardModule, EditorsModule ],
  declarations: [Pages]
})
export class PagesModule {
}
