import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { filter, map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class UserService {

  private baseURL = environment.baseEndpoint + '/users';

  constructor(private _http: HttpClient, private _loginService: LoginService) {
  }

  getUsers() {
    return this._http.get(this.baseURL)
      .pipe(
        map(result => result['data']),
        filter(user => user.username !== this._loginService.username)
      );
  }

}
