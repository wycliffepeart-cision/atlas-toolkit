import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var InputCheckboxTemplate = "<template>\n  <input id=\"Input\" type=\"checkbox\" part=\"input\">\n\n  <label for=\"Input\" part=\"label-wrapper\">\n    <slot name=\"label\" part=\"label\"></slot>\n    <slot name=\"required\" part=\"required\">*</slot>\n  </label>\n\n  <slot name=\"helperText\" part=\"helper-text\"></slot>\n  <slot name=\"validationText\" part=\"validation-text\"></slot>\n</template>\n";

const CHECKBOX_ATTRIBUTES = {
    DISABLED: 'disabled',
    REQUIRED: 'required',
    CHECKED: 'checked',
    NAME: 'name',
    VALUE: 'value',
};
let InputCheckbox = class InputCheckbox extends HTMLElement {
    static get observedAttributes() {
        return Object.values(CHECKBOX_ATTRIBUTES);
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        this.#attributePassthrought(name, newValue);
    }
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        this.#inputElem.addEventListener('change', this.#handleInputChange);
    }
    disconnectedCallback() {
        this.#inputElem.removeEventListener('change', this.#handleInputChange);
    }
    #attributePassthrought(name, value, exclude = []) {
        if (exclude.includes(name)) {
            return;
        }
        const input = this.shadowRoot.getElementById('Input');
        if (value === null) {
            input.removeAttribute(name);
        }
        else {
            input.setAttribute(name, value);
        }
    }
    #handleInputChange = () => {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
    };
    get #inputElem() {
        return this.shadowRoot.getElementById('Input');
    }
    get checked() {
        return this.#inputElem.checked;
    }
    set checked(state) {
        this.#inputElem.checked = state;
    }
    get value() {
        return this.#inputElem.value;
    }
    set value(value) {
        this.#inputElem.value = value;
    }
};
InputCheckbox = __decorate([
    Template(InputCheckboxTemplate)
], InputCheckbox);
if (!customElements.get('atlas-checkbox'))
    customElements.define('atlas-checkbox', InputCheckbox);

export { CHECKBOX_ATTRIBUTES, InputCheckbox };
