import { Template } from '../../decorators/template';
import MainNavItemTemplate from './main-nav-item.html';

@Template(MainNavItemTemplate)
export class MainNavItem extends HTMLElement {}

if (!customElements.get('atlas-main-nav-item')) customElements.define('atlas-main-nav-item', MainNavItem);