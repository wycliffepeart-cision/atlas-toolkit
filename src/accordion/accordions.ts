import { Accordion } from './accordion';

export class Accordions extends HTMLElement {
	constructor() {
		super();
		const { content } = new DOMParser().parseFromString(`<template><slot></slot></template>`, 'text/html').querySelector('template');
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.replaceChildren(content.cloneNode(true));
	}

	connectedCallback() {
		Array.from(this.querySelectorAll('atlas-accordion')).forEach((accordion, _, self) => {
			const observer = new MutationObserver(function (mutationList) {
				const item: HTMLElement = mutationList[0].target as HTMLElement;
				self.forEach((accordion: Accordion) => {
					if (accordion.getAttribute('collapse') !== 'hidden' && accordion.id !== item.dataset.target) {
						accordion.resetStyle();
					}
				});
			});
			observer.observe(accordion.shadowRoot.querySelector('button'), { attributes: true });
		});
	}
}
