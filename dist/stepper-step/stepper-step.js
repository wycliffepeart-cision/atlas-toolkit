import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var StepperStepTemplate = "<template>\n  <div part=\"before\"></div>\n  <div part=\"step\">\n    <slot part=\"content\"></slot>\n    <atlas-icon name=\"checkmark\" part=\"check\"></atlas-icon>\n  </div>\n  <div part=\"after\"></div>\n</template>\n";

const STEPPER_STEP_ATTRIBUTES = ['finished', 'current'];
let StepperStep = class StepperStep extends HTMLElement {
};
StepperStep = __decorate([
    Template(StepperStepTemplate)
], StepperStep);

export { STEPPER_STEP_ATTRIBUTES, StepperStep };
