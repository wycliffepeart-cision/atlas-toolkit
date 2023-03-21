import { Template } from '../decorators/template'
import WorkflowTemplate from './workflow.html'

@Template(WorkflowTemplate)
export class Workflow extends HTMLElement {}
