import { Accordion } from './accordion';
import '../../theme/styles/accordion.css';

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);
