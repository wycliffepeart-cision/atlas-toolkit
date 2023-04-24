import ButtonTemplate from './button.html';
import { Template } from '../../decorators/template';

export const BUTTON_ATTRIBUTES = {
  KIND: 'kind',
  DISABLED: 'disabled',
  BOX_TYPE: 'box-type',
};

@Template(ButtonTemplate)
export class Button extends HTMLElement {
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
}

if (!customElements.get('atlas-button')) customElements.define('atlas-button', Button);

