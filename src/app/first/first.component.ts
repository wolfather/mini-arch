import { Component, OnInit } from '@angular/core';

import { BridgeCommunication } from '../../bridge/bridge-communication/bridge.communication'; 
import { ACTION } from '../../bridge/action/bridge.actions';
import { Bridge } from '../../bridge/interface/bridge';
import { BridgeMessageModel } from '../model/bridge-message.model';
import { HttpService } from '../../service/http/http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  private messageBody = new BridgeMessageModel({
    type: ACTION.SHOW_ALERT,
    payload: 'Alertando outro componente do click',
  });
  private incrementCounterBody = new BridgeMessageModel({type: ACTION.INCREMENT_COUNTER});
  private decrementCounterBody = new BridgeMessageModel({type: ACTION.DECREMENT_COUNTER});
  private resetCounterBody = new BridgeMessageModel({type: ACTION.RESET_COUNTER});

  constructor(
    private readonly http: HttpService,
  ) { }

  ngOnInit(): void {
    this.http
      .get('./stub/people.json', {})
      .subscribe(
        response => console.log(response),
        error => console.log('error', error)
      );
  }

  public passInfo(): void {
    BridgeCommunication.data.emit(this.messageBody);
  }

  public incrementCounter(): void {
    BridgeCommunication.data.emit(this.incrementCounterBody);
  }

  public decrementCounter(): void {
    BridgeCommunication.data.emit(this.decrementCounterBody);
  }
  public resetCounter(): void {
    BridgeCommunication.data.emit(this.resetCounterBody);
  }

}
