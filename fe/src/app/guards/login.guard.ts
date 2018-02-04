import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._loginService.isLoggedIn) {
      return this._loginService.validateCookie()
        .pipe(
          tap(result => {
            if (!result) {
              this._router.navigate(['/login']);
            }
          })
        );
    }

    return true;
  }
}
