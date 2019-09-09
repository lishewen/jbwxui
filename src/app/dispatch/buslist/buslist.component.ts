import { Component, OnInit } from '@angular/core';
import { DispatchService } from '../dispatch.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.less']
})
export class BusListComponent implements OnInit {
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
      // tslint:disable-next-line: no-bitwise
      ~w.onBoardid.toString().indexOf(str)
      // tslint:disable-next-line: no-bitwise
      || ~w.name.indexOf(str)
      // tslint:disable-next-line: no-bitwise
      || ~w.lineName.indexOf(str)
      // tslint:disable-next-line: no-bitwise
      || (w.stationName != null && ~w.stationName.indexOf(str)));
  }
}
