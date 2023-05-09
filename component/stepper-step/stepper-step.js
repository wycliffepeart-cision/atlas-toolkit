import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var StepperStepTemplate = "<template>\n  <div part=\"before\"></div>\n  <div part=\"step\">\n    <slot part=\"content\"></slot>\n    <atlas-icon name=\"checkmark\" part=\"check\"></atlas-icon>\n  </div>\n  <div part=\"after\"></div>\n</template>\n";

const STEPPER_STEP_ATTRIBUTES = ['finished', 'current'];
let StepperStep = class StepperStep extends HTMLElement {
};
StepperStep = __decorate([
    Template(StepperStepTemplate)
], StepperStep);
if (!customElements.get('atlas-stepper-step'))
    customElements.define('atlas-stepper-step', StepperStep);

export { STEPPER_STEP_ATTRIBUTES, StepperStep };
