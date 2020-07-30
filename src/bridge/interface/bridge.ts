import { ACTION } from "../action/bridge.actions";

export interface Bridge {
    type: ACTION;
    payload?: any;
}
