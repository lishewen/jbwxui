import { Injectable } from '@angular/core';
import { RestDataSource } from './rest-data-source';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 配置环境
  env = {
    url: {
      spa: "https://www.wzjbbus.com",
      api: 'https://wx.wzjbbus.com'
    },
    wechatAppid: "wxca0ad6170fcea9ef",
    storageName: {
      OpenId: 'OpenId', // 需要设置的 openid 名称
      auth_token: 'auth_token', // 需要设置的 token 名称
      tokenCreateAt: 'token_create_at', // token 的创建时间
      fullPath: 'full_path' // hash 后面的部分，如：/home/index
    },
    scope: 'snsapi_userinfo', // 微信应用授权作用域 'snsapi_base' 或 'snsapi_userinfo'
    expira: 3600 * 1000
  };

  constructor(private datasource: RestDataSource) { }

  authenticate(code: string): Observable<boolean> {
    return this.datasource.authenticate(code);
  }

  get authenticated(): boolean {
    //本地存储有缓存，则使用缓存
    let user_ticket = window.localStorage.getItem(this.env.storageName.auth_token);
    let tokenCreateAt: number = parseInt(window.localStorage.getItem(this.env.storageName.tokenCreateAt));

    if (user_ticket && new Date().getTime() - tokenCreateAt <= this.env.expira)
      this.datasource.auth_token = user_ticket;

    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }

  // 获取 url 参数
  getParam(name: string, url?: string): string {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
