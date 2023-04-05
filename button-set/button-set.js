import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var ButtonSetTemplate = "<template>\n  <slot part=\"primary\"></slot>\n  <slot name=\"extended\" part=\"extended\"></slot>\n</template>\n";

let ButtonSet = class ButtonSet extends HTMLElement {
};
ButtonSet = __decorate([
    Template(ButtonSetTemplate)
], ButtonSet);

export { ButtonSet };
