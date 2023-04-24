import { Template } from '../../decorators/template';
import InputTextareaTemplate from './input-textarea.html';

const TEXTAREA_ATTRIBUTES = ['disabled', 'maxlength', 'placeholder', 'required', 'readonly', 'name', 'value'];

@Template(InputTextareaTemplate)
export class InputTextarea extends HTMLElement {
  static get observedAttributes() {
    return TEXTAREA_ATTRIBUTES;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (TEXTAREA_ATTRIBUTES.includes(name.trim().toLowerCase())) {
      const input = this.shadowRoot.getElementById('Input');
      if (newValue === null) {
        input.removeAttribute(name);
      } else {
        input.setAttribute(name, newValue);
      }
    }

    // unknown attribute?
  }

  get value() {
    const inputElem = this.shadowRoot.getElementById('Input') as HTMLInputElement;
    return inputElem.value;
  }

  set value(val) {
    const inputElem = this.shadowRoot.getElementById('Input') as HTMLInputElement;
    inputElem.value = val;
  }

  get disabled() {
    const dis = this.getAttribute('disabled');
    return dis !== null && dis !== 'false';
  }

  set disabled(value) {
    this.toggleAttribute('disabled', value);
  }
}
