import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var InputSearchTemplate = "<template>\n  <input id=\"Input\" type=\"text\" part=\"input\">\n\n  <label for=\"Input\" part=\"label\"><slot name=\"label\"></slot></label>\n\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n\n  <slot name=\"menu\" part=\"menu\"></slot>\n</template>\n";

var _InputSearch_handleOnChange;
const SEARCH_ATTRIBUTES = [
    'disabled',
    'maxlength',
    'pattern',
    'placeholder',
    'required',
    'readonly',
    'size',
    'value',
    'incremental',
];
const SEARCH_EVENTS = ['blur', 'focus', 'keydown', 'keyup', 'input', 'change'];
let InputSearch = class InputSearch extends HTMLElement {
    constructor() {
        super(...arguments);
        _InputSearch_handleOnChange.set(this, () => {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
        });
    }
    static get observedAttributes() {
        return [...SEARCH_ATTRIBUTES];
    }
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        const input = this.shadowRoot.getElementById('Input');
        input.addEventListener('change', __classPrivateFieldGet(this, _InputSearch_handleOnChange, "f"));
    }
    disconnectedCallback() {
        const input = this.shadowRoot.getElementById('Input');
        input.removeEventListener('change', __classPrivateFieldGet(this, _InputSearch_handleOnChange, "f"));
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        if (SEARCH_ATTRIBUTES.includes(name.trim().toLowerCase())) {
            const input = this.shadowRoot.getElementById('Input');
            if (newValue === null) {
                input.removeAttribute(name);
            }
            else {
                input.setAttribute(name, newValue);
            }
        }
        // unknown attribute?
    }
    set value(text) {
        const input = this.shadowRoot.getElementById('Input');
        input.value = text;
    }
    get value() {
        const input = this.shadowRoot.getElementById('Input');
        return input.value;
    }
    set disabled(value) {
        // for toggle attributes, use toggle
        this.toggleAttribute('disabled', value);
    }
    get disabled() {
        // because disabled is a toggle attribute, its presents is all that matters
        return this.hasAttribute('disabled');
    }
};
_InputSearch_handleOnChange = new WeakMap();
InputSearch = __decorate([
    Template(InputSearchTemplate)
], InputSearch);

export { InputSearch, SEARCH_ATTRIBUTES, SEARCH_EVENTS };
