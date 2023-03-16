import { ShadowModeOpen } from "../decorators/ShadowModeOpen"

export const ATTR_NAME = 'name'

@ShadowModeOpen()
export class Icon extends HTMLElement {
	static mappings = {}

	static get observedAttributes() {
		return [ATTR_NAME]
	}

	setIconAttributes(alt) {
		const iconElement = this.shadowRoot.querySelector('svg')

		if (iconElement) {
			iconElement.setAttribute('part', 'image')
			iconElement.setAttribute('aria-label', alt)
		}
	}

	getIconObject() {
		const name = this.attributes[ATTR_NAME]?.value
		return Icon.mappings[name] ?? { icon: '' }
	}

	connectedCallback() {
		const { icon, alt } = this.getIconObject()

		this.shadowRoot.innerHTML = icon
		this.setIconAttributes(alt)
	}

	attributeChangedCallback(name, _, _newValue) {
		if (name === ATTR_NAME) {
			const { icon, alt } = this.getIconObject()

			this.shadowRoot.innerHTML = icon
			this.setIconAttributes(alt)
		}
	}
}
