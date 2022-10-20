import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonModule } from 'ngx-weui/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './index/index.component';
import { RechargeComponent } from './recharge/recharge.component';
import { FormsModule } from '@angular/forms';
import { PageModule } from './page/page.module';
import { RestDataSource } from './auth/rest-data-source';
import { WxauthComponent } from './wxauth/wxauth.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WeUiModule } from 'ngx-weui';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RechargeComponent,
    WxauthComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    PageModule,
    WeUiModule
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
