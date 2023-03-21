import DialogTemplate from './dialog.html';
import { Template } from '../decorators/template';

export const MODAL_EVENTS = ['close'];

@Template(DialogTemplate)
export class Dialog extends HTMLElement {
  static ATTRIBUTE_OPEN = 'open';

  static get observedAttributes() {
    return [Dialog.ATTRIBUTE_OPEN];
  }

  connectedCallback() {
    if (this.isConnected) {
      this.dialog.addEventListener('close', this.#handleOnClose);
    }
  }

  disconnectedCallback() {
    this.dialog.removeEventListener('close', this.#handleOnClose);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === Dialog.ATTRIBUTE_OPEN) {
      const shouldClose = newValue === null || newValue === 'false';

      if (shouldClose) {
        this.dialog.close();
      } else {
        this.dialog.show();
      }
    }
  }

  get dialog() {
    return this.shadowRoot.querySelector('dialog');
  }

  show() {
    this.toggleAttribute('open', true);
  }

  close() {
    this.toggleAttribute('open', false);
  }

  #handleOnClose = () => {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  };
}
