import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var InputDropdownTemplate = "<template>\n  <slot name=\"input\" part=\"input\"></slot>\n  <slot name=\"menu\" part=\"menu\"></slot>\n</template>\n";

const DROPDOWN_ATTRIBUTES = ['open'];
let InputDropdown = class InputDropdown extends HTMLElement {
    static get observedAttributes() {
        return DROPDOWN_ATTRIBUTES;
    }
};
InputDropdown = __decorate([
    Template(InputDropdownTemplate)
], InputDropdown);

export { InputDropdown };
