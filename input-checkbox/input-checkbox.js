import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var InputCheckboxTemplate = "<template>\n  <input id=\"Input\" type=\"checkbox\" part=\"input\">\n\n  <label for=\"Input\" part=\"label-wrapper\">\n    <slot name=\"label\" part=\"label\"></slot>\n    <slot name=\"required\" part=\"required\">*</slot>\n  </label>\n\n  <slot name=\"helperText\" part=\"helper-text\"></slot>\n  <slot name=\"validationText\" part=\"validation-text\"></slot>\n</template>\n";

var _InputCheckbox_instances, _InputCheckbox_attributePassthrought, _InputCheckbox_handleInputChange, _InputCheckbox_inputElem_get;
const CHECKBOX_ATTRIBUTES = {
    DISABLED: 'disabled',
    REQUIRED: 'required',
    CHECKED: 'checked',
    NAME: 'name',
    VALUE: 'value',
};
let InputCheckbox = class InputCheckbox extends HTMLElement {
    constructor() {
        super(...arguments);
        _InputCheckbox_instances.add(this);
        _InputCheckbox_handleInputChange.set(this, () => {
            this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
        });
    }
    static get observedAttributes() {
        return Object.values(CHECKBOX_ATTRIBUTES);
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        __classPrivateFieldGet(this, _InputCheckbox_instances, "m", _InputCheckbox_attributePassthrought).call(this, name, newValue);
    }
    connectedCallback() {
        if (!this.isConnected) {
            return;
        }
        __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).addEventListener('change', __classPrivateFieldGet(this, _InputCheckbox_handleInputChange, "f"));
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).removeEventListener('change', __classPrivateFieldGet(this, _InputCheckbox_handleInputChange, "f"));
    }
    get checked() {
        return __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).checked;
    }
    set checked(state) {
        __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).checked = state;
    }
    get value() {
        return __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).value;
    }
    set value(value) {
        __classPrivateFieldGet(this, _InputCheckbox_instances, "a", _InputCheckbox_inputElem_get).value = value;
    }
};
_InputCheckbox_handleInputChange = new WeakMap();
_InputCheckbox_instances = new WeakSet();
_InputCheckbox_attributePassthrought = function _InputCheckbox_attributePassthrought(name, value, exclude = []) {
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
};
_InputCheckbox_inputElem_get = function _InputCheckbox_inputElem_get() {
    return this.shadowRoot.getElementById('Input');
};
InputCheckbox = __decorate([
    Template(InputCheckboxTemplate)
], InputCheckbox);

export { CHECKBOX_ATTRIBUTES, InputCheckbox };
