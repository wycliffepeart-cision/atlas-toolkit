declare module '*.svg' {
	const value: any;
	export default value;
}

declare module '*.html' {
	const value: string;
	export default value;
}

//# sourceMappingURL=index.d.ts.map

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
	import { mount } from 'cypress/react18';

	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}


declare global {
	namespace JSX {
		interface IntrinsicElements {
			'atlas-icon-home': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Normal web component
			'atlas-icon-mail': React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>; // Web component extended from input
		}
	}
}
