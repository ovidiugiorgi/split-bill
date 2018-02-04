import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class BillService {

  private baseURL_ = environment.baseEndpoint + '/bills';

  constructor(private _http: HttpClient) {
  }

  getBills() {
    return this._http.get(this.baseURL_, {withCredentials: true})
      .pipe(
        map(result => result['data'])
      );
  }

  createBill(title: string, value: number, username: string) {
    return this._http.post(this.baseURL_, {
      title,
      value,
      friendUsername: username
    }, {withCredentials: true})
      .pipe(
        map(result => result['data'])
      );
  }

}
