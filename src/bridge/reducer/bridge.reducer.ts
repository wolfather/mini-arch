import { ACTION } from '../action/bridge.actions';
import { Bridge } from '../interface/bridge';

export class BridgeReducer {
    public static reducer(state, action: Bridge): any {
        switch(action.type) {
            case ACTION.SHOW_ALERT:
                window.alert(action.payload);
            case ACTION.SHOW_LOADING:
                window.alert(action.payload);
            case ACTION.SHOW_ALERT:
                window.alert(action.payload);

            default: return state;
        }
    }
}