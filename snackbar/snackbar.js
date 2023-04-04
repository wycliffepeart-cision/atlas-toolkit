import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var SnackbarTemplate = "<template>\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot name=\"title\" part=\"title\"></slot>\n  <slot name=\"sub-title\" part=\"sub-title\"></slot>\n  <slot name=\"suffix\" part=\"suffix\"></slot>\n</template>\n";

let Snackbar = class Snackbar extends HTMLElement {
};
Snackbar = __decorate([
    Template(SnackbarTemplate)
], Snackbar);

export { Snackbar };
