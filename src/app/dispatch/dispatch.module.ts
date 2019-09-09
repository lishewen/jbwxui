import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusListComponent } from './buslist/buslist.component';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { PageModule } from '../page/page.module';
import { WeUiModule } from 'ngx-weui';



@NgModule({
  declarations: [
    BusListComponent
  ],
  imports: [
    CommonModule,
    WeUiModule,
    DispatchRoutingModule,
    PageModule
  ]
})
export class DispatchModule { }
