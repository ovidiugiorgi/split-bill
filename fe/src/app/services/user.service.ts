import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private endpoint = environment.baseEndpoint + '/users';

  constructor(private _http: HttpClient) {
  }

  create(username: string, password: string) {
    return this._http.post(this.endpoint, {
      username,
      password
    });
  }

}
