import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeUiModule } from 'ngx-weui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageComponent } from "./page/page.component";
import { AppRoutingModule } from './/app-routing.module'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PhoneComponent } from './phone/phone.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AboutComponent,
    ContactComponent,
    JobsComponent,
    PhoneComponent,
    DispatchComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
