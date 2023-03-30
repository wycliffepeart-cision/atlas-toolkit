import '../../src/chip';

const ELEMENT_TAG = 'atlas-chip';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Chip', () => {
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

    (expect(element) as any).toContainHTML(`<atlas-chip />`);
    (expect(element) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(element)) as any).toMatchSnapshot();
  });

});
