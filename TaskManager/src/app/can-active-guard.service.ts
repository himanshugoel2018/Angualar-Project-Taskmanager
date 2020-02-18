import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { truncateSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.router.url);
    if (this.loginService.isAuthenticated())
      return true;
    else {
      this.router.navigate(["login"]);
      return false;

    }
  }
}
