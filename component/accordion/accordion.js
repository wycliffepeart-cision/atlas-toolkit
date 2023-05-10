import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';
import AccordionTemplate from './template.js';

let Accordion = class Accordion extends HTMLElement {
};
Accordion = __decorate([
    Template(AccordionTemplate)
], Accordion);
if (!customElements.get('atlas-accordion'))
    customElements.define('atlas-accordion', Accordion);

export { Accordion };