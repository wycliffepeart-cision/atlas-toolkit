import { Template } from '../../decorators/template';
import AccordionTemplate from './template.html';

@Template(AccordionTemplate)
export class Accordion extends HTMLElement {}

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);