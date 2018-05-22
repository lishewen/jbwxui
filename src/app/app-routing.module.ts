import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DispatchComponent } from './dispatch/dispatch.component';
import { IndexComponent } from './index/index.component';
import { RechargeComponent } from './recharge/recharge.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'dispatch', component: DispatchComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: 'staticpages', loadChildren: './staticpages/staticpages.module#StaticpagesModule' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
