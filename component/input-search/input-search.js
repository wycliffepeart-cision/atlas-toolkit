import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var InputSearchTemplate = "<template>\n  <input id=\"Input\" type=\"text\" part=\"input\">\n\n  <label for=\"Input\" part=\"label\"><slot name=\"label\"></slot></label>\n\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n\n  <slot name=\"menu\" part=\"menu\"></slot>\n</template>\n";

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
    static get observedAttributes() {
        return [...SEARCH_ATTRIBUTES];
    }
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        const input = this.shadowRoot.getElementById('Input');
        input.addEventListener('change', this.#handleOnChange);
    }
    disconnectedCallback() {
        const input = this.shadowRoot.getElementById('Input');
        input.removeEventListener('change', this.#handleOnChange);
    }
    #handleOnChange = () => {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
    };
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
InputSearch = __decorate([
    Template(InputSearchTemplate)
], InputSearch);
if (!customElements.get('atlas-search'))
    customElements.define('atlas-search', InputSearch);

export { InputSearch, SEARCH_ATTRIBUTES, SEARCH_EVENTS };
