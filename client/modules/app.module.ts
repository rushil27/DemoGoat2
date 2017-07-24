/*
==================================================================================
-- Root Module -------------------------------------------------------------------
==================================================================================
** Any assets included in this file will be attached                            **
** to the global scope of the application.                                      **
**                                                                              **
** The Root Module has two main purposes                                        **
** 1) It tells Angular about all the apps dependencies                          **
**    so Angular can build the application tree                                 **
** 2) It tells Angular how to bootstrap the app                                 **
**                                                                              **
** Find out more here: https://angular.io/docs/ts/latest/guide/appmodule.html   **
----------------------------------------------------------------------------------
*/

/*
-------------------------------------------------------------------
Main component which gets bootstrapped
-------------------------------------------------------------------
** Named AppComponent in compliance with Angular best practices  **
*/
import { AppComponent } from './app.component';

/*
--------------------------------------------------
Modules
--------------------------------------------------
** other necessary modules for this app
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReduxModule } from '../redux/redux.module';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { Http, XHRBackend, RequestOptions } from '@angular/http';

import { HttpIntercept } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';

import { ErrorHandlerActions } from '../redux/actions/error/errorHandler.actions';
import { UserFormActions } from '../redux/actions/userForm/userForm.actions';
import { UserActions } from '../redux/actions/user/user.actions';
import { SEOActions } from '../redux/actions/seo/seo.actions';


import { CoreModule } from './core/core.module';
import { Four0FourModule } from './404/404.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { PagesModule } from './pages/pages.module';

import { NgaModule } from '../theme/nga.module';
import { GlobalState } from '../global.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './_guards/index';
import { RecaptchaModule } from 'ng2-recaptcha';

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpIntercept(backend, defaultOptions);
}

// Application wide providers
const APP_PROVIDERS = [
  AuthGuard,
  GlobalState,
  ErrorHandlerActions,
  UserActions,
  UserFormActions,
  SEOActions,
  {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  },
  UserService 
];

/*
--------------------------------------------------
NgModule
--------------------------------------------------
** decorator which packages all resources imported above for the app
** without this decorator Angular cannot use any of those above assets
** read more here: https://angular.io/docs/ts/latest/guide/ngmodule.html
*/
@NgModule({
  //imports: this object imports helper modules which are children in the module tree
  imports: [
    BrowserModule,
    HttpModule,
    ReduxModule,
    //CoreModule,
    PagesModule,
    Four0FourModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    RecaptchaModule.forRoot(),
    routing
  ],
  //declarations: this object imports all child components which are used in this module
  declarations: [AppComponent],
  //bootstrap: identifies which component is supposed to be bootstrapped
  bootstrap: [AppComponent],
  providers: APP_PROVIDERS
})

//by convention the root module is called AppModule as stated in the Angular2 docs
//we call AppModule in app.ts to bootstrap the application which points to the AppComponent defined in @NgModule
export class AppModule {

}