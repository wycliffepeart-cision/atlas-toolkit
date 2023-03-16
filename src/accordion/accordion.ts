import { Template } from '../decorators/template';
import AccordionTemplate from './accordion.html';

@Template(AccordionTemplate)
export class Accordion extends HTMLElement {}
