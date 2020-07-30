import { Component, OnInit } from '@angular/core';
import { BridgeCommunication } from '../../bridge/bridge-communication/bridge.communication';
import { Bridge } from '../../bridge/interface/bridge';
import { ACTION } from '../../bridge/action/bridge.actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  public counter = 0;

  constructor() { }

  ngOnInit(): void {
    BridgeCommunication.data
      .subscribe((response: Bridge) => {
        switch(response.type) {
          case ACTION.SHOW_ALERT:
            window.alert(response.payload);
            break;
          case ACTION.INCREMENT_COUNTER:
            this.counter += response.payload;
            break;
          case ACTION.DECREMENT_COUNTER:
            this.counter -= response.payload;
            break;
          case ACTION.RESET_COUNTER:
            this.counter = response.payload;
            break;

          default: return;
        }
    });
  }

  public showAlertSuccess (response: Bridge): any {
      if(response.type === ACTION.SHOW_ALERT) { 
        window.alert(response.payload);
      } if(response.type === ACTION.INCREMENT_COUNTER) {
        console.log(response.payload);
        this.counter += response.payload;
      } else if(response.type === ACTION.DECREMENT_COUNTER) {
        this.counter -= response.payload;
      }
  }

}
