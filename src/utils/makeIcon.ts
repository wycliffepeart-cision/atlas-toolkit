export const makeIcon = (name, svg) => {
  if (!customElements.get(name)) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();

          this.attachShadow({ mode: 'open' });

          const { content } = new DOMParser()
            .parseFromString(`<template><slot part="svg"></slot></template>`, 'text/html')
            .querySelector('template');

          this.shadowRoot.replaceChildren(content.cloneNode(true));
        }

        connectedCallback() {
          this.classList.add('atlas-icon');
          this.innerHTML = svg;
        }
      }
    );
  }
};
