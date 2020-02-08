import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackAPIUrl = 'https://wx.wzjbbus.com/api/Home/Feedback';
  private uploadFileWeixinAPIUrl = 'https://wx.wzjbbus.com/api/Home/UploadFileWeixin/'

  constructor(private http: HttpClient) { }

  postFeedback(model: server.feedBack) {
    return this.http.post(this.feedbackAPIUrl, model, { observe: 'response' });
  }

  uploadFileWeixin(id: string) {
    return this.http.get<server.weUIUploadFileResult>(this.uploadFileWeixinAPIUrl + id);
  }
}
