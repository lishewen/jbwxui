import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DispatchComponent } from './dispatch/dispatch.component';
import { IndexComponent } from './index/index.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AuthGuard } from './auth/auth.guard';
import { WxauthComponent } from './wxauth/wxauth.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'wxauth', component: WxauthComponent },
  { path: 'dispatch', component: DispatchComponent, canActivate: [AuthGuard] },
  { path: 'recharge', component: RechargeComponent },
  { path: 'staticpages', loadChildren: './staticpages/staticpages.module#StaticpagesModule' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
