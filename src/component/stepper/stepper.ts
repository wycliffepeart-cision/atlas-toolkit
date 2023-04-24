import StepperTemplate from './stepper.html';
import { Template } from '../../decorators/template';

@Template(StepperTemplate)
export class Stepper extends HTMLElement {}

if (!customElements.get('atlas-stepper')) customElements.define('atlas-stepper', Stepper);