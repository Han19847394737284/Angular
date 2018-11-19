import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import {AuthService} from './auth0.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private auth0: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(next);

    if(this.auth0.isAuthenticated()) {
      console.log('Pass Guard');
      return true;
    } else {
      console.log('Dont pass Guard');
      return false;
    }
  }
}
