import '../../src/component/main-nav-item';

const NAV_ITEM_TAG = 'atlas-main-nav-item';
const shadowContentSnapshot = `
	<template>
		<slot></slot>
	</template>
`;

describe('MainNavItem', () => {
  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(NAV_ITEM_TAG);
    const MainNavItemElement = document.createElement(NAV_ITEM_TAG);
    document.body.appendChild(MainNavItemElement);

    (expect(MainNavItemElement) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(NAV_ITEM_TAG);
    const MainNavItemElement = document.createElement(NAV_ITEM_TAG);
    document.body.appendChild(MainNavItemElement);

    const selectedElement = document.querySelector(NAV_ITEM_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(NAV_ITEM_TAG);
    const MainNavItemElement: any = document.createElement(NAV_ITEM_TAG);
    document.body.appendChild(MainNavItemElement);

    (expect(MainNavItemElement) as any).toContainHTML('<atlas-main-nav-item></atlas-main-nav-item>');
    (expect(MainNavItemElement) as any).toBeEmptyDOMElement();
    (expect(MainNavItemElement.getShadowDomContent) as any).toMatchSnapshot(shadowContentSnapshot);
  });

  it('contains only one direct child', async () => {
    await customElements.whenDefined(NAV_ITEM_TAG);
    const MainNavItemElement = document.createElement(NAV_ITEM_TAG);
    const directChild = document.createElement('div');
    MainNavItemElement.appendChild(directChild);

    (expect(MainNavItemElement) as any).toContainHTML('<atlas-main-nav-item><div></div></atlas-main-nav-item>');
    (expect(MainNavItemElement.childElementCount) as any).toBe(1);
  });
});
