import '../../src/component/profile-control';

const TAG = 'atlas-profile-control';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

describe('Profile Control', () => {
  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(TAG);
    const element = document.createElement(TAG);
    document.body.appendChild(element);

    (expect(element) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(TAG);
    const element = document.createElement(TAG);
    document.body.appendChild(element);

    const selectedElement = document.querySelector(TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(TAG);
    const element = document.createElement(TAG);
    document.body.appendChild(element);

    (expect(element) as any).toContainHTML('<atlas-profile-control></atlas-profile-control>');
    (expect(element) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(element)) as any).toMatchSnapshot();
  });
});
