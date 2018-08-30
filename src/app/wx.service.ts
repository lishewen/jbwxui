import { Injectable } from '@angular/core';
import { JWeiXinService } from 'ngx-weui';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare const wx: any;

@Injectable({
  providedIn: 'root'
})
export class WXService {
  JSSDKApiUrl = 'https://wx.wzjbbus.com/api/home/GetJSSDKConfig';
  mywx: any;

  constructor(private wxService: JWeiXinService, private http: HttpClient) { }

  config(originalUrl: string, jsApiList: string[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.wxService.get().then(res => {
        if (!res) {
          reject('jweixin.js 加载失败');
          return;
        }

        let body: server.jSSDKPostModel = { originalUrl }
        this.http.post<models.JsSdkUiPackage>(this.JSSDKApiUrl, body)
          .pipe(
            catchError(error => {
              reject('无法获取签名数据');
              return Observable.throw('error');
            }),
          )
          .subscribe(ret => {
            if (!ret) {
              reject('jsapi 获取失败');
              return;
            }

            ret.jsApiList = jsApiList;

            wx.config(ret);
          });

        wx.ready(() => {
          wx.hideAllNonBaseMenuItem();

          this.mywx = wx;
          
          resolve();
        });

        wx.error(() => {
          reject('config 注册失败');
        });
      });
    });
  }
}
