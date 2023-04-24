import { Template } from '../../decorators/template';
import InputCheckboxTemplate from './input-checkbox.html';

export const CHECKBOX_ATTRIBUTES = {
  DISABLED: 'disabled',
  REQUIRED: 'required',
  CHECKED: 'checked',
  NAME: 'name',
  VALUE: 'value',
};

@Template(InputCheckboxTemplate)
export class InputCheckbox extends HTMLElement {
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
    } else {
      input.setAttribute(name, value);
    }
  }

  #handleInputChange = () => {
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
  };

  get #inputElem(): HTMLInputElement {
    return this.shadowRoot.getElementById('Input') as unknown as HTMLInputElement;
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
}
