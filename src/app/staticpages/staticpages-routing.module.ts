import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { PhoneComponent } from './phone/phone.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { RoutelistComponent } from './routelist/routelist.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'routelist', component: RoutelistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
