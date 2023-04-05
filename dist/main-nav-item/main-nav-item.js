import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var MainNavItemTemplate = "<template>\n  <slot></slot>\n</template>\n";

let MainNavItem = class MainNavItem extends HTMLElement {
};
MainNavItem = __decorate([
    Template(MainNavItemTemplate)
], MainNavItem);

export { MainNavItem };
