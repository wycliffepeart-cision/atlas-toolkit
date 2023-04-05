export declare const MODAL_EVENTS: string[];
export declare class Dialog extends HTMLElement {
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
//# sourceMappingURL=dialog.d.ts.map