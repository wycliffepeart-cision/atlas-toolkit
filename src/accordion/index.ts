import { Accordion } from './accordion';
import { Accordions } from './accordions';
import { AccordionHeader } from './header';
import { AccordionContent } from './content';

if (!customElements.get('atlas-accordion-content')) customElements.define('atlas-accordion-content', AccordionContent);

if (!customElements.get('atlas-accordion-header')) customElements.define('atlas-accordion-header', AccordionHeader);

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);

if (!customElements.get('atlas-accordions')) customElements.define('atlas-accordions', Accordions);
