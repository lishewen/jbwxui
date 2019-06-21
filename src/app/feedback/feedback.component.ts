import { Component, OnInit } from '@angular/core';
import { WXService } from '../wx.service';
import { ToptipsService, DialogConfig, DialogService } from 'ngx-weui';
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
  status: string = '';
  private DEFCONFIG: DialogConfig = <DialogConfig>{
    title: '提示',
    content: '感谢您的反馈！',
    confirm: '确定'
  };
  config: DialogConfig = {};
  jsApiList: string[] = ['hideAllNonBaseMenuItem', 'chooseImage', 'uploadImage'];
  disabled: boolean = false;
  loading: boolean = false;
  badMsgs: string[] = ['你妈', '我操', '我他妈', '臭逼', '操你']

  constructor(private wxService: WXService,
    private srv: ToptipsService,
    private dsrv: DialogService,
    private feedbackService: FeedbackService,
    private rest: RestDataSource) { }

  ngOnInit() {
    this.model = new Object as server.feedBack;
    this.model.type = server.feedBackType.投诉;

    this.wxService.config(this.url, this.jsApiList)
      .then(() => {
        // 其它操作，可以确保注册成功以后才有效
        this.status = '注册成功';
      }).catch((err: string) => {
        this.status = `注册失败，原因：${err}`
      });
  }

  /**
   * 敏感词检测
   * @param content 内容
   */
  private msgSecCheck(content: string): boolean {
    this.badMsgs.forEach(msg => {
      if (content.indexOf(msg) > -1)
        return true
    });
    return false
  }

  private verify(): boolean {
    if (!this.model.content) {
      this.srv['warn']('请输入内容');
      return false;
    }

    if (this.msgSecCheck(this.model.content)) {
      this.srv['warn']('请您使用文明用语！');
      return false;
    }

    if (!this.model.phone && this.status == '') {
      this.srv['warn']('请输入联系电话');
      return false;
    }

    if (this.model.phone && this.model.phone.length != 11) {
      this.srv['warn']('请输入正确的手机号');
      return false;
    }

    return true;
  }

  uploadImage() {
    this.wxService.mywx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        this.wxService.mywx.uploadImage({
          localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1,// 默认为1，显示进度提示
          success: ret => {
            let serverId = ret.serverId; // 返回图片的服务器端ID
            this.feedbackService.uploadFileWeixin(serverId).subscribe(data => {
              this.model.picUrl = data.path;
              this.srv['success']('图片上传成功！');
            });
          }
        });
      }
    });
  }

  formsubmit() {
    if (!this.verify())
      return;

    this.model.openId = this.rest.OpenId;

    this.loading = true;
    this.disabled = true;

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

      this.loading = false;
      this.disabled = false;
    });
  }
}
