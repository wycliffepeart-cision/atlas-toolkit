import ButtonSetTemplate from './button-set.html';
import { Template } from '../../decorators/template';

@Template(ButtonSetTemplate)
export class ButtonSet extends HTMLElement {}

if (!customElements.get('atlas-button-set')) customElements.define('atlas-button-set', ButtonSet);