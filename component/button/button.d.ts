export declare const BUTTON_ATTRIBUTES: {
    KIND: string;
    DISABLED: string;
    BOX_TYPE: string;
};
export declare class Button extends HTMLElement {
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, _oldValue: any, newValue: any): void;
    get disabled(): boolean;
    set disabled(value: boolean);
}
//# sourceMappingURL=button.d.ts.map