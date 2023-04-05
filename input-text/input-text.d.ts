export declare const INPUT_TEXT_ATTRIBUTES: {
    DISABLED: string;
    REQUIRED: string;
    READONLY: string;
    NAME: string;
    VALUE: string;
    MAX_LENGTH: string;
    PATTERN: string;
    PLACEHOLDER: string;
    STATE: string;
};
export declare class InputText extends HTMLElement {
    #private;
    static template: any;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, _oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    get value(): string;
    set value(value: string);
    get disabled(): boolean;
    set disabled(value: boolean);
    checkValidity(): boolean;
    get valid(): boolean;
    set valid(value: boolean);
}
//# sourceMappingURL=input-text.d.ts.map