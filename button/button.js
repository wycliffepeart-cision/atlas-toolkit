import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var ButtonTemplate = "<template>\n  <button part=\"button\" type=\"button\">\n    <slot name=\"prefix\" part=\"prefix\"></slot>\n    <slot part=\"label\"></slot>\n    <slot name=\"suffix\" part=\"suffix\"></slot>\n  </button>\n</template>\n";

const BUTTON_ATTRIBUTES = {
    KIND: 'kind',
    DISABLED: 'disabled',
    BOX_TYPE: 'box-type',
};
let Button = class Button extends HTMLElement {
    static get observedAttributes() {
        return Object.values(BUTTON_ATTRIBUTES);
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        const { DISABLED } = BUTTON_ATTRIBUTES;
        if (name === DISABLED) {
            const isDisabled = newValue !== null && newValue !== 'false';
            this.shadowRoot.querySelector('button').toggleAttribute(DISABLED, isDisabled);
        }
    }
    get disabled() {
        const disabledAttr = this.getAttribute('disabled');
        return disabledAttr !== null && disabledAttr !== 'false';
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
};
Button = __decorate([
    Template(ButtonTemplate)
], Button);

export { BUTTON_ATTRIBUTES, Button };
