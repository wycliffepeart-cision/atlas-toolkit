import template from './template.html';
import { makeId } from '../utils/utils';
import { AccordionAttrMap } from './enums';
import { CollapsableAttrMap } from '../collapsable/enums';

export class Accordion extends HTMLElement {
  private readonly targetId;

  constructor() {
    super();

    this.targetId = makeId(20);
    const templateElement = new DOMParser().parseFromString(template, 'text/html').querySelector('template');

    if (templateElement === undefined || templateElement === null) {
      throw new Error('Template undefined');
    }

    const { content } = templateElement;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.replaceChildren(content.cloneNode(true));
  }

  static get observedAttributes() {
    return [CollapsableAttrMap.EXPANDED, AccordionAttrMap.DISABLED];
  }

  disabled() {
    const disabled = this.getAttribute(AccordionAttrMap.DISABLED);

    if (disabled === 'true') {
      this.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
      this.querySelector('button').disabled = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const button = this.querySelector('button');
    const collapsable = this.querySelector('atlas-collapsable');

    // Toggle disabled attribute
    if (button && name === AccordionAttrMap.DISABLED && (newValue === 'true' || !newValue)) {
      button.setAttribute(AccordionAttrMap.DISABLED, '');
    } else if (button) {
      button.removeAttribute(AccordionAttrMap.DISABLED);
    }

    // Expand and collapsed the collapsable panel
    if (collapsable && name === CollapsableAttrMap.EXPANDED && (newValue === 'true' || !newValue)) {
      collapsable.setAttribute(CollapsableAttrMap.EXPANDED, 'true');
    } else if (collapsable) {
      collapsable.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
    }
  }

  get button() {
    return this.querySelector('button');
  }

  connectedCallback() {
    const button = this.button;
    const collapsable = this.querySelector('atlas-collapsable');

    if (button && !this.hasAttribute(CollapsableAttrMap.EXPANDED)) {
      this.setAttribute(CollapsableAttrMap.EXPANDED, 'false');

      button.addEventListener('click', (e) => {
        if (collapsable && this.getAttribute(CollapsableAttrMap.EXPANDED) === 'false') {
          this.setAttribute(CollapsableAttrMap.EXPANDED, 'true');
          collapsable.setAttribute(CollapsableAttrMap.EXPANDED, 'true');
        } else if (collapsable) {
          this.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
          collapsable.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
        }
      });
    } else if (collapsable && this.getAttribute(CollapsableAttrMap.EXPANDED) === 'true') {
      collapsable.setAttribute(CollapsableAttrMap.EXPANDED, 'true');
    }

    this.disabled();
  }
}
