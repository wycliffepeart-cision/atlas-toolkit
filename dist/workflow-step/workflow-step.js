import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var WorkflowStepTemplate = "<template>\n  <slot name=\"previousControls\" part=\"previousControls\"></slot>\n  <slot name=\"nextControls\" part=\"nextControls\"></slot>\n\n  <slot name=\"title\" part=\"title\"></slot>\n  <slot name=\"subTitle\" part=\"subTitle\"></slot>\n  <slot name=\"stepper\" part=\"stepper\"></slot>\n\n  <slot part=\"body\"></slot>\n\n  <slot name=\"controls\" part=\"controls\"></slot>\n</template>\n";

const WORKFLOW_STEP_ATTRIBUTES = ['name', 'hero', 'active', 'hide-stepper'];
let WorkflowStep = class WorkflowStep extends HTMLElement {
};
WorkflowStep = __decorate([
    Template(WorkflowStepTemplate)
], WorkflowStep);

export { WORKFLOW_STEP_ATTRIBUTES, WorkflowStep };
