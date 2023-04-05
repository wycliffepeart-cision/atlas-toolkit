import { _ as __decorate, a as __classPrivateFieldGet } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var AvatarTemplate = "<template>\n  <img id=\"image\" part=\"image\">\n  <div id=\"initials\" part=\"initials\"></div>\n  <slot id=\"fallback\" part=\"fallback\"></slot>\n</template>\n";

var _Avatar_instances, _Avatar_content, _Avatar_defineContent;
const AVATAR_ATTRIBUTES = {
    IMAGE_SOURCE: 'src',
    INITIALS: 'initials',
    VISIBLE: 'visible',
};
const DISPLAY = {
    src: 'image',
    initials: 'initials',
    fallback: 'fallback',
};
const priorityOrder = ['src', 'initials', 'fallback'];
let Avatar = class Avatar extends HTMLElement {
    constructor() {
        super(...arguments);
        _Avatar_instances.add(this);
        _Avatar_content.set(this, {
            fallback: true,
        });
    }
    connectedCallback() {
        const currentVisibleValue = this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE);
        this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, currentVisibleValue !== null && currentVisibleValue !== void 0 ? currentVisibleValue : DISPLAY.fallback);
    }
    static get observedAttributes() {
        return [AVATAR_ATTRIBUTES.IMAGE_SOURCE, AVATAR_ATTRIBUTES.INITIALS];
    }
    get visible() {
        return this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE);
    }
    attributeChangedCallback(name, _, newValue) {
        __classPrivateFieldGet(this, _Avatar_instances, "m", _Avatar_defineContent).call(this, name, newValue);
        const visibleAttr = priorityOrder.find((attr) => __classPrivateFieldGet(this, _Avatar_content, "f")[attr]);
        this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, DISPLAY[visibleAttr]);
    }
};
_Avatar_content = new WeakMap();
_Avatar_instances = new WeakSet();
_Avatar_defineContent = function _Avatar_defineContent(name, value) {
    const imageElement = this.shadowRoot.querySelector('#image');
    const initialsElement = this.shadowRoot.querySelector('#initials');
    if (name === AVATAR_ATTRIBUTES.INITIALS) {
        initialsElement.innerHTML = value;
    }
    if (name === AVATAR_ATTRIBUTES.IMAGE_SOURCE) {
        imageElement.setAttribute(AVATAR_ATTRIBUTES.IMAGE_SOURCE, value);
    }
    __classPrivateFieldGet(this, _Avatar_content, "f")[name] = value;
};
Avatar = __decorate([
    Template(AvatarTemplate)
], Avatar);

export { AVATAR_ATTRIBUTES, Avatar, DISPLAY };
