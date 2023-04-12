import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var ProfileControlTemplate = "<template>\n  <slot name=\"image\" part=\"image\"></slot>\n  <slot name=\"icon\" part=\"icon\"></slot>\n  <slot name=\"name\" part=\"name\"></slot>\n  <slot name=\"menu\" part=\"menu\"></slot>\n</template>\n";

let ProfileControl = class ProfileControl extends HTMLElement {
};
ProfileControl = __decorate([
    Template(ProfileControlTemplate)
], ProfileControl);

export { ProfileControl };