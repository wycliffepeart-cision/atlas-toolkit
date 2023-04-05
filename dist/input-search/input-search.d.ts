export declare const SEARCH_ATTRIBUTES: string[];
export declare const SEARCH_EVENTS: string[];
export declare class InputSearch extends HTMLElement {
    #private;
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, _oldValue: any, newValue: any): void;
    set value(text: string);
    get value(): string;
    set disabled(value: boolean);
    get disabled(): boolean;
}
//# sourceMappingURL=input-search.d.ts.map