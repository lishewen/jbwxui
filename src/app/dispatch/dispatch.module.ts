import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusListComponent } from './buslist/buslist.component';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { PageModule } from '../page/page.module';
import { SearchBarModule } from 'ngx-weui/searchbar';



@NgModule({
  declarations: [
    BusListComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    DispatchRoutingModule,
    PageModule
  ]
})
export class DispatchModule { }
