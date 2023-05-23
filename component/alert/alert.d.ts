export declare const ALERT_EVENTS: string[];
export declare class Alert extends HTMLElement {
    #private;
    static ATTRIBUTE_OPEN: string;
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    get dialog(): HTMLDialogElement;
    show(): void;
    close(): void;
}
//# sourceMappingURL=alert.d.ts.map