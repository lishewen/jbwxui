import { Component, OnInit } from '@angular/core';
import { DispatchService } from './dispatch.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.less']
})
export class DispatchComponent implements OnInit {
  list: models.调度汇总[] = [];
  private data: models.调度汇总[] = [];

  constructor(private dispatchService: DispatchService) { }

  ngOnInit() {
    this.dispatchService.getDispatch()
      .subscribe((data: Array<models.调度汇总>) => {
        this.data = data;
        this.onSearch('');
      });

  }
  onSearch(str: string) {
    this.list = this.data.filter((w: models.调度汇总) =>
      ~w.onBoardid.toString().indexOf(str)
      || ~w.name.indexOf(str)
      || ~w.lineName.indexOf(str)
      || (w.stationName != null && ~w.stationName.indexOf(str)));
  }
}
