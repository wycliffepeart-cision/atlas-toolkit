import { html } from '../../utils/html';
import { CollapsableAttrMap } from '../enums';

export class Collapsable extends HTMLElement {
  private callback: any;
  
  constructor() {
    super();

    let content: DocumentFragment = html` <slot></slot>`;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  static get observedAttributes() {
    return [CollapsableAttrMap.EXPANDED];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const height = `${this.scrollHeight}px`;

    if (name === CollapsableAttrMap.EXPANDED && newValue === 'true') {
      this.style.height = '0';
      this.style.height = height;
    } else if (name === CollapsableAttrMap.EXPANDED && newValue === 'false') {
      this.style.height = height;
      setTimeout(() => (this.style.height = '0'), 0);
    }
  }
  connectedCallback() {
    // this.style.height = '0';

    // this.setAttribute(CollapsableAttrMap.EXPANDED, 'false');

    if (!this.callback) {
      this.callback = () => {
        setTimeout(() => {
          if (this.getAttribute(CollapsableAttrMap.EXPANDED) === 'true') {
            this.style.height = 'auto';
          }
        }, 0);
      };
    }

    this.addEventListener('transitionend', this.callback.bind(this));
  }
}
