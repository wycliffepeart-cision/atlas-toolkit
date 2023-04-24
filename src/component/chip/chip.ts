import ChipTemplate from './chip.html';
import { Template } from '../../decorators/template';

@Template(ChipTemplate)
export class Chip extends HTMLElement {}

if (!customElements.get('atlas-chip')) customElements.define('atlas-chip', Chip);