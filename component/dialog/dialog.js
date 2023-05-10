import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var DialogTemplate = "<template>\n  <dialog part=\"dialog\">\n    <div part=\"container\">\n      <slot name=\"dismissible\" part=\"dismissible\"></slot>\n      <slot name=\"title\" part=\"title\"></slot>\n      <slot name=\"subtext\" part=\"subtext\"></slot>\n      <slot part=\"body\"></slot>\n      <slot name=\"footer\" part=\"footer\"></slot>\n    </div>\n  </dialog>\n</template>\n";

var Dialog_1;
const MODAL_EVENTS = ['close'];
let Dialog = Dialog_1 = class Dialog extends HTMLElement {
    static ATTRIBUTE_OPEN = 'open';
    static get observedAttributes() {
        return [Dialog_1.ATTRIBUTE_OPEN];
    }
    connectedCallback() {
        if (this.isConnected) {
            this.dialog.addEventListener('close', this.#handleOnClose);
        }
    }
    disconnectedCallback() {
        this.dialog.removeEventListener('close', this.#handleOnClose);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === Dialog_1.ATTRIBUTE_OPEN) {
            const shouldClose = newValue === null || newValue === 'false';
            if (shouldClose) {
                this.dialog.close();
            }
            else {
                this.dialog.show();
            }
        }
    }
    get dialog() {
        return this.shadowRoot.querySelector('dialog');
    }
    show() {
        this.toggleAttribute('open', true);
    }
    close() {
        this.toggleAttribute('open', false);
    }
    #handleOnClose = () => {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    };
};
Dialog = Dialog_1 = __decorate([
    Template(DialogTemplate)
], Dialog);
if (!customElements.get('atlas-dialog'))
    customElements.define('atlas-dialog', Dialog);

export { Dialog, MODAL_EVENTS };
