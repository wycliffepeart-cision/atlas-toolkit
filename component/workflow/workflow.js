import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var WorkflowTemplate = "<template>\n  <slot part=\"steps\"></slot>\n</template>\n";

let Workflow = class Workflow extends HTMLElement {
};
Workflow = __decorate([
    Template(WorkflowTemplate)
], Workflow);
if (!customElements.get('atlas-workflow'))
    customElements.define('atlas-workflow', Workflow);

export { Workflow };
