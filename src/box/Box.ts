import { html } from '../utils/html';

export class Box extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const content = html` <div part="box">
      <slot></slot>
    </div>`;

    const box = content.querySelector<HTMLDivElement>('[part="box"]');
    const keys = Object.keys(box.style).reduce(
      (previousValue, currentValue: string) => ({ ...previousValue, [currentValue.toLowerCase()]: currentValue }),
      {}
    );

    this.getAttributeNames().forEach((name) => {
      if (this.getAttribute(name)) box.style[keys[name]] = this.getAttribute(name);
    });

    this.shadowRoot.replaceChildren(content.cloneNode(true));
  }
}
