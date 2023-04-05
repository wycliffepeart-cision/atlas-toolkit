import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var DialogTemplate = "<template>\n  <dialog part=\"dialog\">\n    <div part=\"container\">\n      <slot name=\"dismissible\" part=\"dismissible\"></slot>\n      <slot name=\"title\" part=\"title\"></slot>\n      <slot name=\"subtext\" part=\"subtext\"></slot>\n      <slot part=\"body\"></slot>\n      <slot name=\"footer\" part=\"footer\"></slot>\n    </div>\n  </dialog>\n</template>\n";

var _Dialog_handleOnClose;
var Dialog_1;
const MODAL_EVENTS = ['close'];
let Dialog = Dialog_1 = class Dialog extends HTMLElement {
    constructor() {
        super(...arguments);
        _Dialog_handleOnClose.set(this, () => {
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        });
    }
    static get observedAttributes() {
        return [Dialog_1.ATTRIBUTE_OPEN];
    }
    connectedCallback() {
        if (this.isConnected) {
            this.dialog.addEventListener('close', __classPrivateFieldGet(this, _Dialog_handleOnClose, "f"));
        }
    }
    disconnectedCallback() {
        this.dialog.removeEventListener('close', __classPrivateFieldGet(this, _Dialog_handleOnClose, "f"));
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
};
_Dialog_handleOnClose = new WeakMap();
Dialog.ATTRIBUTE_OPEN = 'open';
Dialog = Dialog_1 = __decorate([
    Template(DialogTemplate)
], Dialog);

export { Dialog, MODAL_EVENTS };
