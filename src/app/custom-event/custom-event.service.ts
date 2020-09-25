export enum CUSTOM_EVENT_ALLOWED {
    PERSON = 'person',
    CAT = 'cat'
}


/**
 * @description Bridge personalizada para eventos customizados, disparando eventos permitidos
 * @version 0.0.1
 * @requires CUSTOM_EVENT_ALLOWED enum
 * @example 
 * export class SomeClass {
 *   ngOnInit() {
 *     CustomEventService.init(CUSTOM_EVENT_ALLOWED.PERSON);
 *   }
 *   ngOnDestroy() {
 *     CustomEventService.close();
 *   } 
 *   public someMethod(): void {
 *     CustomEventService.dispatch();
 *   }
 *   private methodToPreparePaylod(name: string, age: number): void {
 *     CustomEventService.setPayload({name, age});
 *   }
 * }
 */
export class CustomEventService {
    private static eventType: CUSTOM_EVENT_ALLOWED;
    private static payload: CustomEventInit = {detail: ''};
    private static ce: CustomEvent;

    public static init(eventType: CUSTOM_EVENT_ALLOWED): void {
        CustomEventService.eventType = eventType;

        window.addEventListener(CustomEventService.eventType, (e: CustomEvent) => {
            const {type, detail} = e;
        });
    }
    public static close(): void {
        window.removeEventListener(CustomEventService.eventType, () => {}, false);
    }
    public static setPayload(payload: any): void {
        CustomEventService.payload.detail = payload;
    }
    public static dispatch(): any {
        CustomEventService.ce = new CustomEvent(
            CustomEventService.eventType,
            CustomEventService.payload,
        );
        window.dispatchEvent(CustomEventService.ce);
    }
}
