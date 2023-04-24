import '../../src/component/snackbar/snackbar';

describe('Snackbar Component', () => {
  const SNACKBAR_TAG = 'atlas-snackbar';

  it('is correctly appended in the DOM', async () => {
    await customElements.whenDefined(SNACKBAR_TAG);
    const snackbarElement = document.createElement(SNACKBAR_TAG);
    document.body.appendChild(snackbarElement);

    (expect(snackbarElement) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await customElements.whenDefined(SNACKBAR_TAG);
    const snackbarElement = document.createElement(SNACKBAR_TAG);
    document.body.appendChild(snackbarElement);

    const selectedElement = document.querySelector(SNACKBAR_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    await customElements.whenDefined(SNACKBAR_TAG);
    const snackbarElement = document.createElement(SNACKBAR_TAG);
    document.body.appendChild(snackbarElement);

    (expect(snackbarElement) as any).toContainHTML('<atlas-snackbar></atlas-snackbar>');
    (expect(snackbarElement) as any).toBeEmptyDOMElement();
  });
});
