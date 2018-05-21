import { Component, OnInit } from '@angular/core';
import { ToptipsService } from 'ngx-weui';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.less']
})
export class RechargeComponent implements OnInit {
  res: any = {};
  radio: any[] = [{ id: 1, name: '支付宝' }, { id: 2, name: '微信' }, { id: 3, name: '银行卡' }];

  constructor(private srv: ToptipsService) {
    this.res.radio = this.radio[0];
  }

  ngOnInit() {
  }

  okClick() {
    this.srv['warn']('只是UI测试，暂时不支持在线充值，请等待官方通知！');
  }
}
