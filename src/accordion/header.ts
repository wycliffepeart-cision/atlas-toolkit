import { html } from '../../stories/utils';

export class AccordionHeader extends HTMLElement {
  constructor() {
    super();

    const content = html`
      <button part="button">
        <span><slot part="title" name="title"></slot></span>
        <span><slot part="icon" name="icon"></slot></span>
      </button>
    `;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  set disabled(disabled: boolean) {
    this.shadowRoot.querySelector('button').disabled = disabled;
  }

  get button(): HTMLButtonElement {
    return this.shadowRoot.querySelector('button');
  }
}
