import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { CONFIGURATION } from '../shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  messageReceived = new Subject<models.ChatMessage>();
  connectionEstablished = new Subject<Boolean>();
  private hubConnection: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(CONFIGURATION.baseUrls.server + 'testmessages')
      .withAutomaticReconnect()
      .build();
  }

  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub connection started');
        this.connectionEstablished.next(true);
      })
      .catch(err => {
        console.log('Error while establishing connection, retrying...');
        setTimeout(() => this.startConnection(), 5000);
      });
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('Send', (data: models.ChatMessage) => {
      this.messageReceived.next(data);
    });
  }
}
