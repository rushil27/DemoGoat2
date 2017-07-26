import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';

import { PaReportsComponent } from './reports.component';
import { PaReportsStatusComponent } from './components/reports-status/reports-status.component';
import { PaReportsSummaryComponent } from './components/reports-status/components/paReportsSummary/index';
import { routedComponents } from './reports.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2SmartTableModule,
        DataTableModule,
        routedComponents,
        NgaModule
    ],
    exports: [],
    declarations: [PaReportsComponent, PaReportsStatusComponent, PaReportsSummaryComponent],
    providers: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PaReportsModule { }
