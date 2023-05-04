import { Template } from '../../decorators/template';
import AvatarTemplate from './avatar.html';

export const AVATAR_ATTRIBUTES = {
  IMAGE_SOURCE: 'src',
  INITIALS: 'initials',
  VISIBLE: 'visible'
}

export const DISPLAY = {
  src: 'image',
  initials: 'initials',
  fallback: 'fallback'
}

const priorityOrder = ['src', 'initials', 'fallback']

@Template(AvatarTemplate)
export class Avatar extends HTMLElement {

  #content = {
    fallback: true
  }

  connectedCallback() {
    const currentVisibleValue = this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE)
    this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, currentVisibleValue ?? DISPLAY.fallback)

    const imageElement = this.shadowRoot.querySelector('#image')
    imageElement.addEventListener('error', this.#handleImageError)
  }

  disconnectedCallback() {
    const imageElement = this.shadowRoot.querySelector('#image')
    imageElement.removeEventListener('error', this.#handleImageError)
  }

  static get observedAttributes() {
    return [AVATAR_ATTRIBUTES.IMAGE_SOURCE, AVATAR_ATTRIBUTES.INITIALS]
  }

  get visible() {
    return this.getAttribute(AVATAR_ATTRIBUTES.VISIBLE)
  }

  #handleImageError = () => {
    this.dispatchEvent(new CustomEvent('error', { bubbles: true, composed: true }))
  }

  #defineContent(name, value) {
    const imageElement = this.shadowRoot.querySelector('#image')
    const initialsElement = this.shadowRoot.querySelector('#initials')

    if (name === AVATAR_ATTRIBUTES.INITIALS) {
      initialsElement.innerHTML = value
    }

    if (name === AVATAR_ATTRIBUTES.IMAGE_SOURCE) {
      imageElement.setAttribute(AVATAR_ATTRIBUTES.IMAGE_SOURCE, value)
    }

    this.#content[name] = value
  }

  attributeChangedCallback(name, _, newValue) {
    this.#defineContent(name, newValue)

    const visibleAttr = priorityOrder.find(attr => this.#content[attr])

    this.setAttribute(AVATAR_ATTRIBUTES.VISIBLE, DISPLAY[visibleAttr])
  }
}

if (!customElements.get('atlas-avatar')) customElements.define('atlas-avatar', Avatar);
