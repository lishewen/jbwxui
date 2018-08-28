import { Component, OnInit, ViewChild } from '@angular/core';
import { WXService } from '../wx.service';
import { ToptipsService, DialogComponent, DialogConfig, DialogService } from 'ngx-weui';
import { FeedbackService } from './feedback.service';
import { RestDataSource } from '../auth/rest-data-source';

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
  @ViewChild('ios') iosAS: DialogComponent;
  private DEFCONFIG: DialogConfig = <DialogConfig>{
    title: '提示',
    content: '感谢您的反馈！',
    confirm: '确定'
  };
  config: DialogConfig = {};

  constructor(private wxService: WXService,
    private srv: ToptipsService,
    private dsrv: DialogService,
    private feedbackService: FeedbackService,
    private rest: RestDataSource) { }

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

  private verify() {
    if (!this.model.content)
      this.srv['warn']('请输入内容');
  }

  formsubmit() {
    this.verify();

    this.model.openId = this.rest.user.openid;

    this.feedbackService.postFeedback(this.model).subscribe(res => {
      if (res.ok) {
        this.config = Object.assign({}, this.DEFCONFIG, <DialogConfig>{
          skin: 'ios',
          content: '感谢您的反馈！'
        });
        this.dsrv.show(this.config).subscribe(ret => {
          this.model = new Object as server.feedBack;
        });
      }
    });
  }
}
