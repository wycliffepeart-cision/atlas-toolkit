import { Template } from '../../decorators/template';
import StepperStepTemplate from './stepper-step.html';

export const STEPPER_STEP_ATTRIBUTES = ['finished', 'current'];

@Template(StepperStepTemplate)
export class StepperStep extends HTMLElement {}

if (!customElements.get('atlas-stepper-step')) customElements.define('atlas-stepper-step', StepperStep);
