import '../../src/accordion';

const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

describe('Accordion Component', () => {
  const ACCORDION_TAG = 'atlas-accordion';

  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(ACCORDION_TAG);
    const snackbarElement = document.createElement(ACCORDION_TAG);
    document.body.appendChild(snackbarElement);

    expect(snackbarElement).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(ACCORDION_TAG);
    const snackbarElement = document.createElement(ACCORDION_TAG);
    document.body.appendChild(snackbarElement);

    const selectedElement = document.querySelector(ACCORDION_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(ACCORDION_TAG);
    const snackbarElement = document.createElement(ACCORDION_TAG);
    document.body.appendChild(snackbarElement);

    (expect(snackbarElement) as any).toContainHTML('<atlas-accordion></atlas-accordion>');
    (expect(snackbarElement) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(snackbarElement)) as any).toMatchSnapshot();
  });
});
