import { WorkflowStep } from './workflow-step.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-workflow-step'))
    customElements.define('atlas-workflow-step', WorkflowStep);
