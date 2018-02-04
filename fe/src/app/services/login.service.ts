import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  isLoggedIn = false;
  username = '';

  private baseURL_ = environment.baseEndpoint;

  constructor(private _http: HttpClient) {
  }

  register(username: string, password: string) {
    return this._http.post(this.baseURL_ + '/register', {
      username,
      password
    }, {withCredentials: true})
      .pipe(
        map(result => result['data']),
        tap(result => {
          if (result) {
            this.isLoggedIn = true;
            this.username = result;
          }
        })
      );
  }

  login(username: string, password: string) {
    return this._http.post(this.baseURL_ + '/login', {
      username,
      password
    }, {withCredentials: true})
      .pipe(
        map(result => result['data']),
        tap(result => {
          if (result) {
            this.isLoggedIn = true;
            this.username = result;
          }
        })
      );
  }

  validateCookie() {
    return this._http.post(this.baseURL_ + '/login', {}, {withCredentials: true})
      .pipe(
        map(result => result['data']),
        tap(result => {
          if (result) {
            this.isLoggedIn = true;
            this.username = result;
          }
        }),
        map(result => !!result)
      );
  }

}
