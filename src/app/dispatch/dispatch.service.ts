import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { models } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {
  dispatchApiUrl = 'https://api.wzjbbus.com/api/dispatch/';

  constructor(private http: HttpClient) { }

  getDispatch() {
    return this.http.get<Array<models.调度汇总>>(this.dispatchApiUrl, {
      headers: {
        'UserKey': 'E6CDD18F-863B-44FF-8CB3-F498D0F196E6'
      }
    });
  }
}
