import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var StepperTemplate = "<template>\n  <slot part=\"steps\"></slot>\n</template>\n";

let Stepper = class Stepper extends HTMLElement {
};
Stepper = __decorate([
    Template(StepperTemplate)
], Stepper);

export { Stepper };
