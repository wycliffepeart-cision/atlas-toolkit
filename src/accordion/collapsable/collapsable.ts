import template from './template.html'
import { CollapsableAttrMap } from '../enums';
import { Template } from '../../decorators/template';

@Template(template)
export class Collapsable extends HTMLElement {
  private callback: any;

  static get observedAttributes() {
    return [CollapsableAttrMap.EXPANDED];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === CollapsableAttrMap.EXPANDED && newValue === 'true') {
      this.style.height = '0';
      this.style.display = 'block';
      this.style.height = `${this.scrollHeight}px`;
    } else if (name === CollapsableAttrMap.EXPANDED && newValue === 'false') {
      this.style.height = `${this.scrollHeight}px`;
      setTimeout(() => (this.style.height = '0'), 0);
    }
  }

  connectedCallback() {
    // this.style.height = '0';

    // this.setAttribute(CollapsableAttrMap.EXPANDED, 'false');

    if (!this.callback) {
      this.callback = () => {
        setTimeout(() => {
          if (this.getAttribute(CollapsableAttrMap.EXPANDED) === 'true') {
            this.style.height = 'auto';
          }else if (this.getAttribute(CollapsableAttrMap.EXPANDED) === 'false') {
            this.style.display = 'none';
          }
        }, 0);
      };
    }

    this.addEventListener('transitionend', this.callback.bind(this));
  }
}
