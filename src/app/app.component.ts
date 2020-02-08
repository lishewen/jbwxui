import { Component } from '@angular/core';
import { SignalRService } from './ext/signal-r.service';
import { ToptipsService } from 'ngx-weui';
import { models } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private srv: ToptipsService, private signalRService: SignalRService) {
    if (window.navigator.userAgent.indexOf('miniProgram') < 0) {
      this.subscribeToEvents();
    }
  }

  private subscribeToEvents(): void {
    this.signalRService.messageReceived.subscribe((message: models.ChatMessage) => {
      if (message.message != null && message.message !== '') {
        this.srv['warn'](message.message);
      }
    });
  }
}
