import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var AlertTemplate = "<template>\n  <dialog part=\"dialog\">\n    <slot name=\"icon\" part=\"icon\"></slot>\n    <slot name=\"header\" part=\"header\"></slot>\n    <slot part=\"body\"></slot>\n    <slot name=\"footer\" part=\"footer\"></slot>\n  </dialog>\n</template>\n";

var Alert_1;
const ALERT_EVENTS = ['close'];
let Alert = Alert_1 = class Alert extends HTMLElement {
    static ATTRIBUTE_OPEN = 'open';
    static get observedAttributes() {
        return [Alert_1.ATTRIBUTE_OPEN];
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
        if (name === Alert_1.ATTRIBUTE_OPEN) {
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
Alert = Alert_1 = __decorate([
    Template(AlertTemplate)
], Alert);
if (!customElements.get('atlas-alert'))
    customElements.define('atlas-alert', Alert);

export { ALERT_EVENTS, Alert };
