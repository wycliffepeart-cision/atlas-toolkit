import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var ChipGroupTemplate = "<template>\n  <slot part=\"defaultGroup\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n</template>\n";

let ChipGroup = class ChipGroup extends HTMLElement {
};
ChipGroup = __decorate([
    Template(ChipGroupTemplate)
], ChipGroup);

export { ChipGroup };
