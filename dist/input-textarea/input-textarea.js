import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var InputTextareaTemplate = "<template>\n  <textarea id=\"Input\" part=\"input\"></textarea>\n\n  <label for=\"Input\" part=\"label-wrapper\">\n    <slot name=\"label\" part=\"label\"></slot>\n    <slot name=\"required\" part=\"required\">*</slot>\n  </label>\n\n  <slot name=\"helperText\" part=\"helper-text\"></slot>\n  <slot name=\"validationText\" part=\"validation-text\"></slot>\n\n  <slot part=\"content\"></slot>\n</template>\n";

const TEXTAREA_ATTRIBUTES = ['disabled', 'maxlength', 'placeholder', 'required', 'readonly', 'name', 'value'];
let InputTextarea = class InputTextarea extends HTMLElement {
    static get observedAttributes() {
        return TEXTAREA_ATTRIBUTES;
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        if (TEXTAREA_ATTRIBUTES.includes(name.trim().toLowerCase())) {
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
    get value() {
        const inputElem = this.shadowRoot.getElementById('Input');
        return inputElem.value;
    }
    set value(val) {
        const inputElem = this.shadowRoot.getElementById('Input');
        inputElem.value = val;
    }
    get disabled() {
        const dis = this.getAttribute('disabled');
        return dis !== null && dis !== 'false';
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
};
InputTextarea = __decorate([
    Template(InputTextareaTemplate)
], InputTextarea);

export { InputTextarea };
