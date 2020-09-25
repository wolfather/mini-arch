import { CustomEventService, CUSTOM_EVENT_ALLOWED } from './custom-event.service';

describe('CustomEventService', () => {

    it('should create the action', () => {
        spyOn(window, 'addEventListener').and.callFake(() => {});

        CustomEventService.init(CUSTOM_EVENT_ALLOWED.CAT);
        
        expect(window.addEventListener).toHaveBeenCalledTimes(1);
    });
    
    it('should change payload properties on setPayload method', () => {
        CustomEventService.setPayload(payloadStub);
        
        expect(CustomEventService['payload'].detail).toEqual(payloadStub);
    });
    
    it('should trigger the window.dispatch with CustomEventService.ce properties', () => {
        spyOn(window, 'dispatchEvent').and.callThrough();

        CustomEventService.dispatch();

        expect(window.dispatchEvent).toHaveBeenCalledTimes(1);
    });

    it('should call window.removeEventListener to stop to listen the action from service', () => {
        spyOn(window, 'removeEventListener').and.callFake(() => {});

        CustomEventService.close();

        expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    });
});

const payloadStub = {name: 'Tobias', role: 'Developer', level: 2};