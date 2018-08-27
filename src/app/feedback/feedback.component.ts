import { Component, OnInit } from '@angular/core';
import { WXService } from '../wx.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
  radio = [{ id: 0, name: '投诉' }, { id: 1, name: '建议' }];
  model: server.feedBack;
  url = 'https://www.wzjbbus.com/feedback';
  status: string;

  constructor(private wxService: WXService) { }

  ngOnInit() {
    this.model = new Object as server.feedBack;
    this.model.type = server.feedBackType.投诉;

    this.wxService.config(this.url)
      .then(() => {
        // 其它操作，可以确保注册成功以后才有效
        this.status = '注册成功';
      }).catch((err: string) => {
        this.status = `注册失败，原因：${err}`
      });
  }

}
