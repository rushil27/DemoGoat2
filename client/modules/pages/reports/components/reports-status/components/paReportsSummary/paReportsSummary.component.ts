import { Component } from '@angular/core';

import { PaReportsSummaryService } from './paReportsSummary.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'pa-reports-summary',
  templateUrl: './paReportsSummary.html',
  styleUrls: ['./paReportsSummary.scss'],
  providers: [PaReportsSummaryService]
})
export class PaReportsSummaryComponent {

  query: string = 'test';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },

    // columns: {
    //     subject: {
    //         title: 'Subject',
    //         type: 'string',
    //         editable: 'false',
    //     },
    //     deadline: {
    //         title: 'Deadline',
    //         type: 'string',
    //     },
    //     client: {
    //         title: 'Client',
    //         type: 'string',
    //     },
    //     stage: {
    //         title: 'Stage',
    //         type: 'string',
    //     },
    // },

    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      }
    }

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: PaReportsSummaryService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
