import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var ChipGroupTemplate = "<template>\n  <slot part=\"defaultGroup\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n</template>\n";

let ChipGroup = class ChipGroup extends HTMLElement {
};
ChipGroup = __decorate([
    Template(ChipGroupTemplate)
], ChipGroup);
if (!customElements.get('atlas-chip-group'))
    customElements.define('atlas-chip-group', ChipGroup);

export { ChipGroup };
