import '../../src/icon';
import analyticsIcon from '../assets/analytics.svg';

const ELEMENT_TAG = 'atlas-icon';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;
const shadowContentSnapshot = `
		<svg width="24"
		     height="24"
		     fill="none"
		     xmlns="http://www.w3.org/2000/svg"
		     part="image"
		     aria-label="Analytics"
		>
		  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"
		        fill="#007FA8"
		  >
		  </path>
		</svg>
	`;
const mappings = {
  analytics: {
    icon: analyticsIcon,
    alt: 'Analytics',
  },
};

describe('icon', () => {
  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    const selectedElement = document.querySelector(ELEMENT_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);
    element.setAttribute('name', 'analytics');
    (expect(element) as any).toContainHTML(`<atlas-icon name="analytics"></atlas-icon>`);
    (expect(element) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(element)) as any).toMatchInlineSnapshot(shadowContentSnapshot, `""`);
  });

  it('remove after created and handle clean up', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);
    element.remove();
    (expect(element) as any).not.toContainHTML(`<atlas-icon></atlas-icon>'`);
  });

  it('have expected attributes', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);

    element.setAttribute('name', 'analytics');
    console.log(element.shadowRoot.innerHTML);

    const iconElement = element.shadowRoot.querySelector('svg');
    const partAttribute = iconElement.getAttribute('part');
    const ariaAttribute = iconElement.getAttribute('aria-label');

    (expect(partAttribute) as any).toBe(`image`);
    (expect(ariaAttribute) as any).toBe(mappings.analytics.alt);
  });

  it('display nothing if icon name is not listed', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);

    element.setAttribute('name', 'invalid icon name');

    (expect(getShadowDomContent(element)) as any).toBe('');
  });
});
