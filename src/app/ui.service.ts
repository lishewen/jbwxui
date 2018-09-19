import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  homeposterApiUrl = 'https://api.wzjbbus.com/api/ui/gethomeposter';

  constructor(private http: HttpClient) { }

  getHomePoster() {
    return this.http.get<Array<server.首页海报>>(this.homeposterApiUrl);
  }
}
