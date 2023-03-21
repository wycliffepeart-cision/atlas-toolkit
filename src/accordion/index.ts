import { Accordion } from './accordion';

console.log(Accordion);

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);
