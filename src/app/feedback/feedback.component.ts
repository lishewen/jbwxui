import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  radio = [{ id: 0, name: '投诉' }, { id: 1, name: '建议' }];
  model: server.feedBack;
  constructor() { }

  ngOnInit() {
    this.model = new Object as server.feedBack;
    this.model.type = server.feedBackType.投诉;
  }

}
