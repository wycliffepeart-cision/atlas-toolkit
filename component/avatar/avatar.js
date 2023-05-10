import { _ as __decorate } from '../../tslib.es6-2e0713a3.js';
import { Template } from '../../decorators/template.js';

var AvatarTemplate = "<template>\n  <img id=\"image\" part=\"image\">\n  <div id=\"initials\" part=\"initials\"></div>\n  <slot id=\"fallback\" part=\"fallback\"></slot>\n</template>\n";

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
    #content = {
        fallback: true,
    };
    connectedCallback() {
        const currentVisibleValue = this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE);
        this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, currentVisibleValue ?? DISPLAY.fallback);
        const imageElement = this.shadowRoot.querySelector('#image');
        imageElement.addEventListener('error', this.#handleImageError);
    }
    disconnectedCallback() {
        const imageElement = this.shadowRoot.querySelector('#image');
        imageElement.removeEventListener('error', this.#handleImageError);
    }
    static get observedAttributes() {
        return [AVATAR_ATTRIBUTES.IMAGE_SOURCE, AVATAR_ATTRIBUTES.INITIALS];
    }
    get visible() {
        return this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE);
    }
    #handleImageError = () => {
        this.dispatchEvent(new CustomEvent('error', { bubbles: true, composed: true }));
    };
    #defineContent(name, value) {
        const imageElement = this.shadowRoot.querySelector('#image');
        const initialsElement = this.shadowRoot.querySelector('#initials');
        if (name === AVATAR_ATTRIBUTES.INITIALS) {
            initialsElement.innerHTML = value;
        }
        if (name === AVATAR_ATTRIBUTES.IMAGE_SOURCE) {
            imageElement.setAttribute(AVATAR_ATTRIBUTES.IMAGE_SOURCE, value);
        }
        this.#content[name] = value;
    }
    attributeChangedCallback(name, _, newValue) {
        this.#defineContent(name, newValue);
        const visibleAttr = priorityOrder.find((attr) => this.#content[attr]);
        this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, DISPLAY[visibleAttr]);
    }
};
Avatar = __decorate([
    Template(AvatarTemplate)
], Avatar);
if (!customElements.get('atlas-avatar'))
    customElements.define('atlas-avatar', Avatar);

export { AVATAR_ATTRIBUTES, Avatar, DISPLAY };
