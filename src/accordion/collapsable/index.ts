import { Collapsable } from './collapsable';
import './collapsable.css';

if (!customElements.get('atlas-collapsable')) customElements.define('atlas-collapsable', Collapsable);
