import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PhoneComponent } from './phone/phone.component';
import { PageModule } from '../page/page.module';
import { RoutelistComponent } from './routelist/routelist.component';

@NgModule({
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    PageModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    JobsComponent,
    PhoneComponent,
    DisclaimerComponent,
    RoutelistComponent
  ]
})
export class StaticpagesModule { }
