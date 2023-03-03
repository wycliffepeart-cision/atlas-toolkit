import Template from './template.html'
import {parseTemplate} from "../../utils/html";

export class Content extends HTMLElement{
  constructor() {
    super();

    const content = parseTemplate(Template);

    this.attachShadow({mode: 'open'})
    this.shadowRoot.replaceChildren(content.cloneNode(true))
  }
}
