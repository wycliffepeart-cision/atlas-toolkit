import { Template } from '../../decorators/template';
import InputChipGroupTemplate from './input-chip-group.html';

@Template(InputChipGroupTemplate)
export class InputChipGroup extends HTMLElement {}

if (!customElements.get('atlas-input-chip-group')) customElements.define('atlas-input-chip-group', InputChipGroup);