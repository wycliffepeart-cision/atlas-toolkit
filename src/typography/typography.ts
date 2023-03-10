import { ShadowModeOpen } from '../decorators/ShadowModeOpen';

@ShadowModeOpen()
export class Typography extends HTMLElement {
  connectedCallback() {
    const template = document.createElement('template');
    const slot = document.createElement('slot');
    const ele = document.createElement(this.getAttribute('variant') || 'span');
    if (this.getAttribute('color')) ele.style.color = this.getAttribute('color');
    if (this.getAttribute('weight')) ele.style.fontWeight = this.getAttribute('weight');
    if (this.getAttribute('size')) ele.style.fontSize = this.getAttribute('size');
    ele.setAttribute('part', this.getAttribute('variant') || 'span');
    ele.replaceChildren(slot);
    template.content.replaceChildren(ele);

    this.shadowRoot.replaceChildren(template.content.cloneNode(true));
  }
}
