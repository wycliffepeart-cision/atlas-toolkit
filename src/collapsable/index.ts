import './collapsable.css'
import { Collapsable } from './collapsable';

if (!customElements.get('atlas-collapsable')) customElements.define('atlas-collapsable', Collapsable);
