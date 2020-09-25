import { ACTION } from 'src/bridge/action/bridge.actions';
import { DummyComponent } from '../stub/components/dummy.component';
import { BridgeMessageModel } from './bridge-message.model';

describe('BridgeMessageModel', () => {

    let component: DummyComponent;
    let model: BridgeMessageModel;

    jasmine.createSpyObj(BridgeMessageModel, ['parsePayload']);

    it('should test model', () => {
        component = new DummyComponent();

        model = new BridgeMessageModel(modelStub);

        expect(model).toBeDefined();
        expect(model.payload).toEqual('any alert');
    });
});

const modelStub = {
    type: ACTION.HIDE_ALERT,
    payload: 'any alert',
};