import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;
    openid: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://wx.wzjbbus.com/";
        if (!environment.production) {
            //测试token
            this.auth_token = 'auth_token';
        }
    }

    authenticate(code: string): Observable<boolean> {
        return this.http.get(this.baseUrl + 'api/Home/AuthToken/' + code).pipe(
            map((res: models.OAuthAccessTokenResult) => {
                this.auth_token = res.access_token;
                this.openid = res.openid;
                return res.errcode == 0;
            })
        );
    }

    get AuthToken(): string {
        return this.auth_token;
    }

    get OpenId(): string {
        return this.openid;
    }
}
