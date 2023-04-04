export declare const CHECKBOX_ATTRIBUTES: {
    DISABLED: string;
    REQUIRED: string;
    CHECKED: string;
    NAME: string;
    VALUE: string;
};
export declare class InputCheckbox extends HTMLElement {
    #private;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, _oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get checked(): boolean;
    set checked(state: boolean);
    get value(): string;
    set value(value: string);
}
//# sourceMappingURL=input-checkbox.d.ts.map