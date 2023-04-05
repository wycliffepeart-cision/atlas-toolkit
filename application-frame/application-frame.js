import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var ApplicationFrameTemplate = "<template>\n  <slot name=\"contextual-controls\" part=\"contextual-controls\"></slot>\n  <slot name=\"main-nav\" part=\"main-nav\"></slot>\n  <slot name=\"app-logo\" part=\"app-logo\"></slot>\n  <slot name=\"profile-controls\" part=\"profile-controls\"></slot>\n  <slot name=\"content-area\" part=\"content-area\"></slot>\n  <slot name=\"feed\" part=\"feed\"></slot>\n  <slot name=\"search\" part=\"search\"></slot>\n  <slot name=\"backdrop\" part=\"backdrop\"></slot>\n  <slot name=\"snackbar-container\" part=\"snackbar-container\"></slot>\n</template>\n";

let ApplicationFrame = class ApplicationFrame extends HTMLElement {
};
ApplicationFrame = __decorate([
    Template(ApplicationFrameTemplate)
], ApplicationFrame);

export { ApplicationFrame };
