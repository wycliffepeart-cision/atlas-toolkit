import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var WorkflowTemplate = "<template>\n  <slot part=\"steps\"></slot>\n</template>\n";

let Workflow = class Workflow extends HTMLElement {
};
Workflow = __decorate([
    Template(WorkflowTemplate)
], Workflow);

export { Workflow };
