export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'reports',
        data: {
          menu: {
            title: 'general.menu.report',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'status',
            data: {
              menu: {
                title: 'general.menu.report_summary',
              }
            }
          }
        ]
      }
    ]
  }
];
