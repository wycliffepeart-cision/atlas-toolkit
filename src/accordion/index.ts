import { Accordion } from './accordion';
import { Accordions } from './accordions';

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);

if (!customElements.get('atlas-accordions')) customElements.define('atlas-accordions', Accordions);
