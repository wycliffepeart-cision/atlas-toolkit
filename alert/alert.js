import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var AlertTemplate = "<template>\n  <dialog part=\"dialog\">\n    <slot name=\"icon\" part=\"icon\"></slot>\n    <slot name=\"header\" part=\"header\"></slot>\n    <slot part=\"body\"></slot>\n    <slot name=\"footer\" part=\"footer\"></slot>\n  </dialog>\n</template>\n";

var _Alert_handleOnClose;
var Alert_1;
const ALERT_EVENTS = ['close'];
let Alert = Alert_1 = class Alert extends HTMLElement {
    constructor() {
        super(...arguments);
        _Alert_handleOnClose.set(this, () => {
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        });
    }
    static get observedAttributes() {
        return [Alert_1.ATTRIBUTE_OPEN];
    }
    connectedCallback() {
        if (this.isConnected) {
            this.dialog.addEventListener('close', __classPrivateFieldGet(this, _Alert_handleOnClose, "f"));
        }
    }
    disconnectedCallback() {
        this.dialog.removeEventListener('close', __classPrivateFieldGet(this, _Alert_handleOnClose, "f"));
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
};
_Alert_handleOnClose = new WeakMap();
Alert.ATTRIBUTE_OPEN = 'open';
Alert = Alert_1 = __decorate([
    Template(AlertTemplate)
], Alert);

export { ALERT_EVENTS, Alert };
