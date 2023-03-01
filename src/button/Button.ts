import Template from './template.html';
import { parseTemplate } from '../utils/html';

export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let element: HTMLElement;

    if (this.hasAttribute('href')) {
      element = document.createElement('a');
      (element as HTMLAnchorElement).href = this.getAttribute('href');
    } else {
      element = document.createElement('button');
    }

    element.setAttribute('part', 'button');

    const content = parseTemplate(Template);

    element.replaceChildren(content.cloneNode(true));

    this.shadowRoot.replaceChildren(element);
  }
}
