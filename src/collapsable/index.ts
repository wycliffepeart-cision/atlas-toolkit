import './collapsable.css'
import { Collapsable } from '../accordion/collapsable';

if (!customElements.get('atlas-collapsable')) customElements.define('atlas-collapsable', Collapsable);
