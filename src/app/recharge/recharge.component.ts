import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.less']
})
export class RechargeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  okClick() {
    alert('只是UI测试，暂时不支持在线充值，请等待官方通知！');
  }
}
