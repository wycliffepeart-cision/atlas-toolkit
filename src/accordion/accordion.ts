import template from './template.html';
import { makeId } from '../utils/utils';

export class Accordion extends HTMLElement {
	private readonly uniqueId;

	private readonly targetSelector;

	private callback;

	constructor() {
		super();

		this.uniqueId = makeId(10);
		this.id = this.uniqueId;

		this.targetSelector = (collapse) => `${this.tagName}[id="${this.uniqueId}"][collapse="${collapse}"]::part(collapsable)`;

		const templateElement = new DOMParser().parseFromString(template, 'text/html').querySelector('template');

		if (templateElement === undefined || templateElement === null) {
			throw new Error('Template undefined');
		}

		const { content } = templateElement;
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.replaceChildren(content.cloneNode(true));
	}

	resetStyle() {
		this.setAttribute('collapse', 'showing');
		setTimeout(() => {
			this.setAttribute('collapse', 'hidden');
		}, 10);
	}

	connectedCallback() {
		const target = this.shadowRoot.querySelector('[part="collapsable"]');
		const style = document.createElement('style');
		style.id = this.uniqueId;

		const cssFn = () =>
			(style.textContent = `
      atlas-accordion::part(collapsable){
        transition: .5s all;
      }
      ${this.targetSelector('hidden')} { height: ${0}px; overflow: hidden;  }
      ${this.targetSelector('showing')} { height: ${target.scrollHeight}px; overflow: hidden }
      ${this.targetSelector('show')} { height: auto; overflow: hidden }
    `);

		document.head.append(style);

		cssFn();

		this.setAttribute('collapse', !this.getAttribute('collapse') || this.getAttribute('collapse') === 'hidden' ? 'show' : 'hidden');

		if (!this.callback) {
			this.callback = () => {
				setTimeout(() => {
					if (this.getAttribute('collapse') === 'showing') this.setAttribute('collapse', 'show');
				}, 10);
			};
		}

		target.addEventListener('transitionend', this.callback.bind(this));
		const btn = this.shadowRoot.querySelector('button');

		this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
			if (!this.getAttribute('collapse') || this.getAttribute('collapse') === 'hidden') {
				btn.setAttribute('collapse', 'show');
				this.setAttribute('collapse', 'showing');
			} else if (this.getAttribute('collapse') === 'show') {
				btn.setAttribute('collapse', 'hidden');
				this.resetStyle();
			}
		});
	}
}
