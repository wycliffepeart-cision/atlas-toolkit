import ChipGroupTemplate from './chip-group.html';
import { Template } from '../../decorators/template';

@Template(ChipGroupTemplate)
export class ChipGroup extends HTMLElement {}

if (!customElements.get('atlas-chip-group')) customElements.define('atlas-chip-group', ChipGroup);
