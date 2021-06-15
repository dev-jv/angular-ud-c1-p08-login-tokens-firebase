// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor( private auth: AuthService,
               private router: Router) {
  }

  canActivate(): boolean {
    // console.log('Guard');
    // return this.auth.isAuthenticated();

    if ( this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}
