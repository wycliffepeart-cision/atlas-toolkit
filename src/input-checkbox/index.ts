import { InputCheckbox } from './input-checkbox';
export { CHECKBOX_ATTRIBUTES } from './input-checkbox';

if (!customElements.get('atlas-checkbox')) customElements.define('atlas-checkbox', InputCheckbox);
