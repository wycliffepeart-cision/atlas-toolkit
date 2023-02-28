import { html } from '../../stories/utils';
import { AccordionAttrMap } from './enums';

export class Collapsable extends HTMLElement {
  private callback;
  constructor() {
    super();

    let content: DocumentFragment = html` <slot></slot>`;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  get template(): string | undefined {
    return;
  }

  static get observedAttributes() {
    return [AccordionAttrMap.EXPANDED];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const height = `${this.scrollHeight}px`;

    console.log(name, newValue)

    if (name === AccordionAttrMap.EXPANDED && newValue === 'true') {
      this.style.height = '0';
      this.style.height = height;
    } else if (name === AccordionAttrMap.EXPANDED && newValue === 'false') {
      this.style.height = height;
      setTimeout(() => (this.style.height = '0'), 0);
    }
  }
  connectedCallback() {
    // this.style.height = '0';

    // this.setAttribute(AccordionAttrMap.EXPANDED, 'false');

    if (!this.callback) {
      this.callback = () => {
        setTimeout(() => {
          if (this.getAttribute(AccordionAttrMap.EXPANDED) === 'true') {
            this.style.height = 'auto';
          }
        }, 0);
      };
    }

    this.addEventListener('transitionend', this.callback.bind(this));
  }
}
