import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var MainNavItemTemplate = "<template>\n  <slot></slot>\n</template>\n";

let MainNavItem = class MainNavItem extends HTMLElement {
};
MainNavItem = __decorate([
    Template(MainNavItemTemplate)
], MainNavItem);
if (!customElements.get('atlas-main-nav-item'))
    customElements.define('atlas-main-nav-item', MainNavItem);

export { MainNavItem };
