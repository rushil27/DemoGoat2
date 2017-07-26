import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (Cookie.get('token') && localStorage.getItem('currentUser')) {
            return true;
        } else {
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}