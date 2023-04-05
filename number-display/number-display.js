import abbreviateNumber from './abbreviate-number.js';

const BASE_10 = 10;
const attrs = { SHORT: 'short', VALUE: 'value', DIGITS: 'float-digits', INT: 'int' };
const OBSERVED_ATTRIBUTES = Object.values(attrs);
const INVALID_TEXT = 'Value is not a valid number';
const DEFAULT_TEXT = '';
const LANG = 'en';
class NumberDisplay extends HTMLElement {
    static get observedAttributes() {
        return OBSERVED_ATTRIBUTES;
    }
    static validateValue(value) {
        if (!value) {
            return DEFAULT_TEXT;
        }
        const numberValue = parseFloat(value);
        if (Number.isNaN(numberValue)) {
            return INVALID_TEXT;
        }
        return numberValue;
    }
    constructor() {
        super();
        this.decimalSeparator = {
            en: ',',
        };
        this.attachShadow({ mode: 'open' });
    }
    static addSymbolToNumber(number) {
        const shortNumber = abbreviateNumber(number, LANG);
        return shortNumber;
    }
    getTextContent(value) {
        var _a;
        const { int, short } = this.attributes;
        if (short && short.value !== 'false') {
            return NumberDisplay.addSymbolToNumber(value);
        }
        if (int && int.value !== 'false') {
            return parseInt(value, BASE_10).toString();
        }
        const separator = this.decimalSeparator[LANG];
        const checkFloatDigit = parseInt((_a = this.attributes[attrs.DIGITS]) === null || _a === void 0 ? void 0 : _a.value, BASE_10);
        if (checkFloatDigit) {
            const fixedValue = value.toFixed(this.attributes[attrs.DIGITS].value);
            return fixedValue.toString().replace('.', separator);
        }
        return value.toString().replace('.', separator);
    }
    attributeChangedCallback() {
        var _a;
        const currentValue = NumberDisplay.validateValue((_a = this.attributes.value) === null || _a === void 0 ? void 0 : _a.value);
        const valueIsNumber = typeof currentValue === 'number';
        this.shadowRoot.textContent = valueIsNumber ? this.getTextContent(currentValue) : currentValue;
    }
}

export { NumberDisplay };
