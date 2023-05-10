import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var InputChipGroupTemplate = "<template>\n  <slot name=\"label\" part=\"label\"></slot>\n  <slot name=\"chips-label\" part=\"chips-label\"></slot>\n  <div part=\"chips-scroll-view\">\n    <slot part=\"chips\"></slot>\n  </div>\n  <slot name=\"controls\" part=\"controls\"></slot>\n  <slot name=\"input\" part=\"input\"></slot>\n  <div part=\"suggestion-scroll-view\">\n    <slot name=\"suggestion\" part=\"suggestion\"></slot>\n  </div>\n</template>\n";

let InputChipGroup = class InputChipGroup extends HTMLElement {
};
InputChipGroup = __decorate([
    Template(InputChipGroupTemplate)
], InputChipGroup);
if (!customElements.get('atlas-input-chip-group'))
    customElements.define('atlas-input-chip-group', InputChipGroup);

export { InputChipGroup };
