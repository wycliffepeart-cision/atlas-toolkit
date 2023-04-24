import MainNavTemplate from './main-nav.html';
import { Template } from '../../decorators/template';

@Template(MainNavTemplate)
export class MainNav extends HTMLElement {}

if (!customElements.get('atlas-main-nav')) customElements.define('atlas-main-nav', MainNav);
