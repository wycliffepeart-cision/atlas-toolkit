import { Template } from '../../decorators/template';
import WorkflowStepTemplate from './workflow-step.html';

export const WORKFLOW_STEP_ATTRIBUTES = ['name', 'hero', 'active', 'hide-stepper'];

@Template(WorkflowStepTemplate)
export class WorkflowStep extends HTMLElement {}
