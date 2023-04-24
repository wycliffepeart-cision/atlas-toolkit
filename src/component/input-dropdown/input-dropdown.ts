import { Template } from '../../decorators/template';
import InputDropdownTemplate from './input-dropdown.html';

const DROPDOWN_ATTRIBUTES = ['open'];

@Template(InputDropdownTemplate)
export class InputDropdown extends HTMLElement {
  static get observedAttributes() {
    return DROPDOWN_ATTRIBUTES;
  }
}
