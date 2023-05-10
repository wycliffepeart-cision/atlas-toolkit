import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var ChipTemplate = "<template>\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot part=\"body\"></slot>\n  <slot name=\"dismisser\" part=\"dismisser\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n</template>\n";

let Chip = class Chip extends HTMLElement {
};
Chip = __decorate([
    Template(ChipTemplate)
], Chip);
if (!customElements.get('atlas-chip'))
    customElements.define('atlas-chip', Chip);

export { Chip };
