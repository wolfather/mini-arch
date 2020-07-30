import { ACTION } from '../../bridge/action/bridge.actions';
import { Bridge } from '../../bridge/interface/bridge';

export class BridgeMessageModel implements Bridge {
    public type: ACTION;
    public payload?: any;

    constructor(parameters: Bridge) {
        this.type = parameters.type;

        this.payload = this.parsePayload(parameters);
    }

    private parsePayload(parameters: Bridge): any {
        switch(parameters.type) {
            case ACTION.DECREMENT_COUNTER: return 1;
            case ACTION.INCREMENT_COUNTER: return 1;
            case ACTION.RESET_COUNTER: return 0;
            default: return parameters.payload;
        }
    }
}