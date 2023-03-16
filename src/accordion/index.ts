import { Accordion } from './accordion';
import './accordion.css';

if (!customElements.get('atlas-accordion')) customElements.define('atlas-accordion', Accordion);
