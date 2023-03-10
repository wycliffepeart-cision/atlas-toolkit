import { Accordion } from './accordion';
import { CollapsableAttrMap } from './enums';

export class Accordions extends HTMLElement {
  constructor() {
    super();
    const { content } = new DOMParser().parseFromString(`<template><slot></slot></template>`, 'text/html').querySelector('template');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  connectedCallback() {
    Array.from(this.querySelectorAll('atlas-accordion')).forEach((accordion: Accordion, _, self) => {
      const btn: HTMLElement = accordion.button;
      btn.addEventListener('click', (e) => {
        self.forEach((accordion: Accordion) => {
          if (accordion.getAttribute(CollapsableAttrMap.EXPANDED) === 'true' && accordion.dataset.target !== btn.id) {
            accordion.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
          }
        });
      });
    });
  }
}
