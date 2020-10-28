import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { server } from '../models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  list: server.首页海报[] = [];
  options: any = {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    observeParents: true,
    observer: true
  };

  constructor(private uiServuce: UiService) { }

  ngOnInit() {
    // this.uiServuce.getHomePoster().subscribe((data: Array<server.首页海报>) => this.list = data);
  }
}
