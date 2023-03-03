import { html } from '../utils/html';

export class Typography extends HTMLElement {
  constructor() {
    super();


  }

  connectedCallback() {
    const template = document.createElement('template');
    const slot = document.createElement('slot');
    const ele = document.createElement(this.getAttribute('variant') || 'span');
    if(this.getAttribute('color')) ele.style.color = this.getAttribute('color')
    if(this.getAttribute('weight')) ele.style.fontWeight = this.getAttribute('weight')
    if(this.getAttribute('size')) ele.style.fontSize = this.getAttribute('size')
    ele.setAttribute('part', this.getAttribute('variant') || 'span')
    ele.replaceChildren(slot)
    template.content.replaceChildren(ele);

    // const content = html`<slot part="typography"></slot>`;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
