import LogoTemplate from './logo.html';
import { Template } from '../../decorators/template';

@Template(LogoTemplate)
export class Logo extends HTMLElement {}
