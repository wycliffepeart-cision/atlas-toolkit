import { Template } from '../../decorators/template';
import WorkflowTemplate from './workflow.html';

@Template(WorkflowTemplate)
export class Workflow extends HTMLElement {}

if (!customElements.get('atlas-workflow')) customElements.define('atlas-workflow', Workflow);

