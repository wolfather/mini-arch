import { EventEmitter } from '@angular/core';
import { Bridge } from '../interface/bridge';

export class BridgeCommunication {
    public static data: EventEmitter<Bridge> = new EventEmitter<Bridge>(false);
}