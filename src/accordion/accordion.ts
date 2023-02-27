import template from './template.html';
import { makeId } from '../utils/utils';
import { AccordionAttrMap } from './enums';

export class Accordion extends HTMLElement {
  private callback;

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
    return [AccordionAttrMap.EXPANDED, AccordionAttrMap.EXPANDED];
  }

  disabled() {
    const disabled = this.getAttribute(AccordionAttrMap.DISABLED);

    if (disabled === 'true') {
      this.setAttribute(AccordionAttrMap.EXPANDED, 'false');
      this.shadowRoot.querySelector('button').disabled = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const collapsable: HTMLElement = this.shadowRoot.querySelector('[part="collapsable"]');
    const height = `${collapsable.scrollHeight}px`;

    if (name === AccordionAttrMap.EXPANDED && newValue === 'true') {
      collapsable.style.height = '0';
      collapsable.style.height = height;
    } else if (name === AccordionAttrMap.EXPANDED && newValue === 'false') {
      collapsable.style.height = height;
      setTimeout(() => (collapsable.style.height = '0'), 0);
    }
  }

  get button() {
    return this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.setAttribute('data-target', this.targetId);
    this.shadowRoot.querySelector('button').id = this.targetId;

    const collapsable: HTMLElement = this.shadowRoot.querySelector('[part="collapsable"]');

    collapsable.style.height = '0';

    this.setAttribute(AccordionAttrMap.EXPANDED, 'false');

    if (!this.callback) {
      this.callback = () => {
        setTimeout(() => {
          if (this.getAttribute(AccordionAttrMap.EXPANDED) === 'true') {
            collapsable.style.height = 'auto';
          }
        }, 0);
      };
    }

    collapsable.addEventListener('transitionend', this.callback.bind(this));

    this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
      if (this.getAttribute(AccordionAttrMap.EXPANDED) === 'false') {
        this.setAttribute(AccordionAttrMap.EXPANDED, 'true');
      } else {
        this.setAttribute(AccordionAttrMap.EXPANDED, 'false');
      }
    });

    this.disabled();
  }
}
