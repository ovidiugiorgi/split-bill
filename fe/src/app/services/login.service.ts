import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  isLoggedIn = false;

  private baseURL_ = environment.baseEndpoint;

  constructor(private _http: HttpClient) {
  }

  register(username: string, password: string) {
    return this._http.post(this.baseURL_ + '/register', {
      username,
      password
    });
  }

  login(username: string, password: string) {
    return this._http.post(this.baseURL_ + '/login', {
      username,
      password
    })
      .pipe(
        tap(result => {
          this.isLoggedIn = result ? result['status'] === 200 : false;
        })
      );
  }

}
