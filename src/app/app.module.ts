import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeUiModule } from 'ngx-weui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module'
import { DispatchComponent } from './dispatch/dispatch.component';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './index/index.component';
import { RechargeComponent } from './recharge/recharge.component';
import { FormsModule } from '@angular/forms';
import { PageModule } from './page/page.module';
import { RestDataSource } from './auth/rest-data-source';
import { WxauthComponent } from './wxauth/wxauth.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchComponent,
    IndexComponent,
    RechargeComponent,
    WxauthComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker-polyfill.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    PageModule
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
