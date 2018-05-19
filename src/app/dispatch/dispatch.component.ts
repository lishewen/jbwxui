import { Component, OnInit } from '@angular/core';
import { DispatchService } from './dispatch.service';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.less']
})
export class DispatchComponent implements OnInit {
  list: models.调度汇总[] = [];

  constructor(private dispatchService: DispatchService) { }

  ngOnInit() {
    this.dispatchService.getDispatch()
      .subscribe((data: Array<models.调度汇总>) => this.list = data);
  }
}
