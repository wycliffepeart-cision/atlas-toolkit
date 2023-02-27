import { html } from '../../stories/utils';

export class AccordionContent extends HTMLElement {
  constructor() {
    super();

    const content = html`
      <template>
        <slot name="content"></slot>
      </template>
    `;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }
}
