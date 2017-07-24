/*
=================================================================================================================================
-- Bootstrapping component ------------------------------------------------------------------------------------------------------
=================================================================================================================================
** According to Angular best practices the App component should be used for bootstrapping the application.                     **
** This component gets bootstrapped through app.module.ts, the magic occurs in the @NgModule decorater's bootstrap property,   **
** we set that value to the AppComponent class defined in this component                                                       **
** then the app.module.ts gets invoked in the main.ts bootstrap method.                                                        **
=================================================================================================================================
*/


//main imports
import { Component, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GlobalState } from '../global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { BaThemeConfig } from '../theme/theme.config';
import { layoutPaths } from '../theme/theme.constants';
import * as $ from 'jquery';

//decorator
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

//the main app component which will act as the parent component to all other components in the app.
export class AppComponent {
  //the @select() decorator is from NgRedux.
  //GOATstack embraces the immutible paradigm, and has a redux store which contains the applications state which can be found in root/client/redux
  //you can read more about Redux here: https://github.com/angular-redux/ng2-redux
  isMenuCollapsed: boolean = true;

  constructor(private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private viewContainerRef: ViewContainerRef,
    private themeConfig: BaThemeConfig) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));
  }

}
