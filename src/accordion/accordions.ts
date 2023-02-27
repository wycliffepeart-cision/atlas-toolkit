import { Accordion } from './accordion';
import { AccordionAttrMap } from './enums';

export class Accordions extends HTMLElement {
  constructor() {
    super();
    const { content } = new DOMParser().parseFromString(`<template><slot></slot></template>`, 'text/html').querySelector('template');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  connectedCallback() {
    Array.from(this.querySelectorAll('atlas-accordion')).forEach((accordion: HTMLElement, _, self) => {
      const btn: HTMLElement = accordion.shadowRoot.querySelector('button');
      btn.addEventListener('click', (e) => {
        self.forEach((accordion: Accordion) => {
          if (accordion.getAttribute(AccordionAttrMap.EXPANDED) === 'true' && accordion.dataset.target !== btn.id) {
            accordion.setAttribute(AccordionAttrMap.EXPANDED, 'false');
          }
        });
      });
    });
  }
}
