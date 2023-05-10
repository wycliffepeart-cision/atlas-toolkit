import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var MainNavTemplate = "<template>\n  <slot></slot>\n</template>\n";

let MainNav = class MainNav extends HTMLElement {
};
MainNav = __decorate([
    Template(MainNavTemplate)
], MainNav);
if (!customElements.get('atlas-main-nav'))
    customElements.define('atlas-main-nav', MainNav);

export { MainNav };
