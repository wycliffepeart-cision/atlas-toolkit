import template from './template.html';
import { Accordion } from '../accordion';
import { CollapsableAttrMap } from '../enums';
import { Template } from '../../decorators/template';

@Template(template)
export class Accordions extends HTMLElement {
  connectedCallback() {
    Array.from(this.querySelectorAll('atlas-accordion')).forEach((accordion: Accordion, _, self) => {
      accordion.button.addEventListener('click', (e) => {
        self.forEach((accordion: Accordion) => {
          if (
            accordion.getAttribute(CollapsableAttrMap.EXPANDED) === 'true' &&
            accordion.button !== (e.target as HTMLButtonElement).closest('button')
          ) {
            accordion.setAttribute(CollapsableAttrMap.EXPANDED, 'false');
          }
        });
      });
    });
  }
}
