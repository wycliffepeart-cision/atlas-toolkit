import AlertTemplate from './alert.html'
import { Template } from '../decorators/template'

export const ALERT_EVENTS = ['close']

@Template(AlertTemplate)
export class Alert extends HTMLElement {

	static ATTRIBUTE_OPEN = 'open'

	static get observedAttributes() {
		return [Alert.ATTRIBUTE_OPEN]
	}

	connectedCallback() {
		if (this.isConnected) {
			this.dialog.addEventListener('close', this.#handleOnClose)
		}
	}

	disconnectedCallback() {
		this.dialog.removeEventListener('close', this.#handleOnClose)
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === Alert.ATTRIBUTE_OPEN) {
			const shouldClose = newValue === null || newValue === 'false'

			if (shouldClose) {
				this.dialog.close()
			} else {
				this.dialog.show()
			}
		}
	}

	get dialog() {
		return this.shadowRoot.querySelector('dialog')
	}

	show() {
		this.toggleAttribute('open', true)
	}

	close() {
		this.toggleAttribute('open', false)
	}

	#handleOnClose = () => {
		this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
	}
}
