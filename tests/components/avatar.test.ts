import '../../src/avatar';

const ELEMENT_TAG = 'atlas-avatar';
const VISIBLE_ATTRIBUTE_NAME = 'visible';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;
const shadowContentSnapshot = `
<template>
    <img id="image" part="image">
    <div id="initials" part="initials"></div>
    <slot id="fallback" part="fallback" visible="true">
    </slot>
</template>
`;

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Avatar', () => {
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

    (expect(element) as any).toContainHTML('<atlas-avatar visible="fallback"></atlas-avatar>');
    (expect(element) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(element)) as any).toMatchSnapshot(shadowContentSnapshot);
  });

  it("sets the fallback element as visible when the 'src' nor the 'initials' attributes are set in the HTML tag", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const htmlStringContainer = document.createElement('div');
    document.body.appendChild(htmlStringContainer);

    htmlStringContainer.innerHTML = `<atlas-avatar></atlas-avatar>`;

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('fallback');
  });

  it("sets the fallback element as visible when the 'src' nor the 'initials' attributes are set programmatically", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);

    document.body.appendChild(element);

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('fallback');
  });

  it("sets the user image as visible when only the 'src' attribute is set in the HTML tag", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const htmlStringContainer = document.createElement('div');
    document.body.appendChild(htmlStringContainer);

    htmlStringContainer.innerHTML = `<atlas-avatar
			src="https://randomuser.me/api/portraits/men/11.jpg">
		</atlas-avatar>`;

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('image');
  });

  it("sets the user image as visible when only the 'src' attribute is set programmatically", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    element.setAttribute('src', 'https://randomuser.me/api/portraits/men/11.jpg');

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('image');
  });

  it("sets the user initials as visible when only the 'initials' attribute is set in the HTML tag", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const htmlStringContainer = document.createElement('div');
    document.body.appendChild(htmlStringContainer);

    htmlStringContainer.innerHTML = `<atlas-avatar initials="CO"></atlas-avatar>`;

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('initials');
  });

  it("sets the user initials as visible when only the 'initials' attribute is set programmatically", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    element.setAttribute('initials', 'CO');

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('initials');
  });

  it("sets only the user image as visible when the 'src' and 'initials' attributes are set in the HTML tag", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const htmlStringContainer = document.createElement('div');
    document.body.appendChild(htmlStringContainer);

    htmlStringContainer.innerHTML = `<atlas-avatar initials="CO"
			src="https://randomuser.me/api/portraits/men/11.jpg">
		</atlas-avatar>`;

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('image');
  });

  it("sets only the user image as visible when the 'src' and 'initials' attributes are set programmatically", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    element.setAttribute('initials', 'CO');
    element.setAttribute('src', 'https://randomuser.me/api/portraits/men/11.jpg');

    const avatar = document.querySelector(ELEMENT_TAG);
    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('image');
  });

  it("sets only the fallback element as visible when both the 'src' and 'initials' attributes have been set and then removed programatically", async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);
    element.setAttribute('initials', 'CO');
    element.setAttribute('src', 'https://randomuser.me/api/portraits/men/11.jpg');
    element.removeAttribute('initials');
    element.removeAttribute('src');

    const avatar = document.querySelector(ELEMENT_TAG);

    (expect(avatar.getAttribute(VISIBLE_ATTRIBUTE_NAME)) as any).toBe('fallback');
  });

  it('returns visible values as shortcut to attribute before set', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element: any = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element.visible) as any).toEqual('fallback');
  });

  it('returns visible values as shortcut to attribute after set', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element: any = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    element.setAttribute('initials', 'XY');

    (expect(element.visible) as any).toEqual('initials');
  });
});
