import { Template } from '../decorators/template';
import InputSearchTemplate from './input-search.html';

export const SEARCH_ATTRIBUTES = [
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

export const SEARCH_EVENTS = ['blur', 'focus', 'keydown', 'keyup', 'input', 'change'];

@Template(InputSearchTemplate)
export class InputSearch extends HTMLElement {
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
      } else {
        input.setAttribute(name, newValue);
      }
    }

    // unknown attribute?
  }

  set value(text) {
    const input = this.shadowRoot.getElementById('Input') as HTMLInputElement;
    input.value = text;
  }

  get value() {
    const input = this.shadowRoot.getElementById('Input') as HTMLInputElement;
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
}
