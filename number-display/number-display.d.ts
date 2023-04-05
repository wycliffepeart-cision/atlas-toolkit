export declare class NumberDisplay extends HTMLElement {
    static get observedAttributes(): string[];
    static validateValue(value: any): number | "" | "Value is not a valid number";
    decimalSeparator: {
        en: string;
    };
    constructor();
    static addSymbolToNumber(number: any): string;
    getTextContent(value: any): any;
    attributeChangedCallback(): void;
}
//# sourceMappingURL=number-display.d.ts.map