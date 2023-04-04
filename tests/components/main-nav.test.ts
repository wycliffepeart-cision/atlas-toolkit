import '../../src/main-nav';

const MAIN_NAV_TAG = 'atlas-main-nav';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;
const shadowContentSnapshot = `
	<template>
	</template>
`;

describe('MainNav', () => {
  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(MAIN_NAV_TAG);
    const element = document.createElement(MAIN_NAV_TAG);
    document.body.appendChild(element);

    (expect(element) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(MAIN_NAV_TAG);
    const element = document.createElement(MAIN_NAV_TAG);
    document.body.appendChild(element);

    const selectedElement = document.querySelector(MAIN_NAV_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(MAIN_NAV_TAG);
    const element = document.createElement(MAIN_NAV_TAG);
    document.body.appendChild(element);

    (expect(element) as any).toContainHTML('<atlas-main-nav></atlas-main-nav>');
    (expect(element) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(element)) as any).toMatchSnapshot(shadowContentSnapshot);
  });
});
