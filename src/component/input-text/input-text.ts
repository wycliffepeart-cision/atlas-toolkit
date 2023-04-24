import InputTextTemplate from './input-text.html';
import { Template } from '../../decorators/template';

export const INPUT_TEXT_ATTRIBUTES = {
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

@Template(InputTextTemplate)
export class InputText extends HTMLElement {
  static template;

  static get observedAttributes() {
    return Object.values(INPUT_TEXT_ATTRIBUTES);
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    this.#attributePassthrought(name, newValue, [INPUT_TEXT_ATTRIBUTES.STATE]);
  }

  connectedCallback() {
    if (!this.isConnected) {
      return;
    }

    this.#inputElem.addEventListener('change', this.#handleInputChange);
    this.#inputElem.addEventListener('invalid', this.#handleInputInvalid);
  }

  disconnectedCallback() {
    this.#inputElem.removeEventListener('change', this.#handleInputChange);
    this.#inputElem.removeEventListener('invalid', this.#handleInputInvalid);
  }

  #attributePassthrought(name, value, exclude = []) {
    if (exclude.includes(name)) {
      return;
    }

    if (value === null) {
      this.#inputElem.removeAttribute(name);
    } else {
      this.#inputElem.setAttribute(name, value);
    }
  }

  #handleInputChange = ({ target }) => {
    this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));

    const isValid = target.checkValidity();
    this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !isValid);
  };

  #handleInputInvalid = () => {
    this.dispatchEvent(new CustomEvent('invalid', { bubbles: true, composed: true }));
  };

  get #inputElem(): HTMLInputElement {
    return this.shadowRoot.getElementById('Input') as HTMLInputElement;
  }

  get value() {
    return this.#inputElem.value;
  }

  set value(value) {
    this.#inputElem.value = value;
  }

  get disabled() {
    const disabledAttr = this.getAttribute('disabled');
    return disabledAttr !== null && disabledAttr !== 'false';
  }

  set disabled(value) {
    this.toggleAttribute('disabled', value);
  }

  checkValidity() {
    const isValid = this.#inputElem.checkValidity();
    this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !isValid);
    return isValid;
  }

  get valid() {
    return this.#inputElem.validity.valid;
  }

  set valid(value) {
    this.#inputElem.setCustomValidity(value ? '' : 'invalid');
    this.#inputElem.checkValidity();

    this.toggleAttribute(INPUT_STATES.ATLAS_INVALID, !value);
  }
}

if (!customElements.get('atlas-input-text')) customElements.define('atlas-input-text', InputText);