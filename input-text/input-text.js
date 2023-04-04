import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var InputTextTemplate = "<template>\n  <input id=\"Input\" type=\"text\" part=\"input\">\n\n  <label for=\"Input\" part=\"label-wrapper\">\n    <slot name=\"label\" part=\"label\"></slot>\n    <slot name=\"required\" part=\"required\">*</slot>\n  </label>\n\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n\n  <slot name=\"helperText\" part=\"helper-text\"></slot>\n  <slot name=\"validationText\" part=\"validation-text\"></slot>\n</template>\n";

var _InputText_instances, _InputText_attributePassthrought, _InputText_handleInputChange, _InputText_handleInputInvalid, _InputText_inputElem_get;
const INPUT_TEXT_ATTRIBUTES = {
    DISABLED: 'disabled',
    REQUIRED: 'required',
    READONLY: 'readonly',
    NAME: 'name',
    VALUE: 'value',
    MAX_LENGTH: 'maxlength',
    PATTERN: 'pattern',
    PLACEHOLDER: 'placeholder',
    STATE: 'state',
};
const INPUT_STATES = {
    ATLAS_INVALID: 'atlas--invalid',
};
let InputText = class InputText extends HTMLElement {
    constructor() {
        super(...arguments);
        _InputText_instances.add(this);
        _InputText_handleInputChange.set(this, ({ target }) => {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
            const isValid = target.checkValidity();
            this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !isValid);
        });
        _InputText_handleInputInvalid.set(this, () => {
            this.dispatchEvent(new CustomEvent('invalid', { bubbles: true, composed: true }));
        });
    }
    static get observedAttributes() {
        return Object.values(INPUT_TEXT_ATTRIBUTES);
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        __classPrivateFieldGet(this, _InputText_instances, "m", _InputText_attributePassthrought).call(this, name, newValue, [INPUT_TEXT_ATTRIBUTES.STATE]);
    }
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).addEventListener('change', __classPrivateFieldGet(this, _InputText_handleInputChange, "f"));
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).addEventListener('invalid', __classPrivateFieldGet(this, _InputText_handleInputInvalid, "f"));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).removeEventListener('change', __classPrivateFieldGet(this, _InputText_handleInputChange, "f"));
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).removeEventListener('invalid', __classPrivateFieldGet(this, _InputText_handleInputInvalid, "f"));
    }
    get value() {
        return __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).value;
    }
    set value(value) {
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).value = value;
    }
    get disabled() {
        const disabledAttr = this.getAttribute('disabled');
        return disabledAttr !== null && disabledAttr !== 'false';
    }
    set disabled(value) {
        this.toggleAttribute('disabled', value);
    }
    checkValidity() {
        const isValid = __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).checkValidity();
        this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !isValid);
        return isValid;
    }
    get valid() {
        return __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).validity.valid;
    }
    set valid(value) {
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).setCustomValidity(value ? '' : 'invalid');
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).checkValidity();
        this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !value);
    }
};
_InputText_handleInputChange = new WeakMap(), _InputText_handleInputInvalid = new WeakMap(), _InputText_instances = new WeakSet(), _InputText_attributePassthrought = function _InputText_attributePassthrought(name, value, exclude = []) {
    if (exclude.includes(name)) {
        return;
    }
    if (value === null) {
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).removeAttribute(name);
    }
    else {
        __classPrivateFieldGet(this, _InputText_instances, "a", _InputText_inputElem_get).setAttribute(name, value);
    }
}, _InputText_inputElem_get = function _InputText_inputElem_get() {
    return this.shadowRoot.getElementById('Input');
};
InputText = __decorate([
    Template(InputTextTemplate)
], InputText);

export { INPUT_TEXT_ATTRIBUTES, InputText };
