import { _ as __decorate } from '../tslib.es6-806de115.js';
import { ShadowModeOpen } from '../decorators/ShadowModeOpen.js';

var Icon_1;
const ATTR_NAME = 'name';
let Icon = Icon_1 = class Icon extends HTMLElement {
    static get observedAttributes() {
        return [ATTR_NAME];
    }
    setIconAttributes(alt) {
        const iconElement = this.shadowRoot.querySelector('svg');
        if (iconElement) {
            iconElement.setAttribute('part', 'image');
            iconElement.setAttribute('aria-label', alt);
        }
    }
    getIconObject() {
        var _a, _b;
        const name = (_a = this.attributes[ATTR_NAME]) === null || _a === void 0 ? void 0 : _a.value;
        return (_b = Icon_1.mappings[name]) !== null && _b !== void 0 ? _b : { icon: '' };
    }
    connectedCallback() {
        const { icon, alt } = this.getIconObject();
        this.shadowRoot.innerHTML = icon;
        this.setIconAttributes(alt);
    }
    attributeChangedCallback(name, _, _newValue) {
        if (name === ATTR_NAME) {
            const { icon, alt } = this.getIconObject();
            this.shadowRoot.innerHTML = icon;
            this.setIconAttributes(alt);
        }
    }
};
Icon.mappings = {};
Icon = Icon_1 = __decorate([
    ShadowModeOpen()
], Icon);

export { ATTR_NAME, Icon };
