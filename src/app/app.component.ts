import { Component } from '@angular/core';
import { SignalRService } from './ext/signal-r.service';
import { ToptipsService } from 'ngx-weui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private srv: ToptipsService, private signalRService: SignalRService) {
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    this.signalRService.messageReceived.subscribe((message: models.ChatMessage) => {
      this.srv['warn'](message.message);
    });
  }
}
