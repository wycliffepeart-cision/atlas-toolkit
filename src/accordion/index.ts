import './content'
import { Accordion } from './accordion';
import { Accordions } from './accordions';
import { Collapsable } from './collapsable';
import './accordion.css'

if (!customElements.get('atlas-collapsable')) customElements.define('atlas-collapsable', Collapsable);

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);

if (!customElements.get('atlas-accordions')) customElements.define('atlas-accordions', Accordions);
