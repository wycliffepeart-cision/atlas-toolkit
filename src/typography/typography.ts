import { html } from '../utils/html';
export class Typography extends HTMLElement {
  constructor() {
    super();

    // const content = html`<slot></slot>`;

    // const shadowRoot = this.attachShadow({mode: 'open'});
    // shadowRoot.replaceChildren(content.cloneNode(true));
  }

  connectedCallback() {
    // this.append('Hello');
  }
}
