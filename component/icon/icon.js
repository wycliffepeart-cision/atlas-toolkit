import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { ShadowModeOpen } from '../../decorators/ShadowModeOpen.js';
import { iconMappings } from './mappings.js';

var Icon_1;
const ATTR_NAME = 'name';
let Icon = Icon_1 = class Icon extends HTMLElement {
    static mappings = {};
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
        const name = this.attributes[ATTR_NAME]?.value;
        return Icon_1.mappings[name] ?? { icon: '' };
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
Icon = Icon_1 = __decorate([
    ShadowModeOpen()
], Icon);
Icon.mappings = iconMappings;
if (!customElements.get('atlas-icon'))
    customElements.define('atlas-icon', Icon);

export { ATTR_NAME, Icon };
