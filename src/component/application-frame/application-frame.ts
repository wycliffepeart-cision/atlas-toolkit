import { Template } from '../../decorators/template';
import ApplicationFrameTemplate from './application-frame.html';

@Template(ApplicationFrameTemplate)
export class ApplicationFrame extends HTMLElement {}

if (!customElements.get('atlas-application-frame')) customElements.define('atlas-application-frame', ApplicationFrame);