import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackAPIUrl = 'https://wx.wzjbbus.com/api/Home/Feedback';

  constructor(private http: HttpClient) { }

  postFeedback(model: server.feedBack) {
    return this.http.post(this.feedbackAPIUrl, model, { observe: 'response' });
  }
}
