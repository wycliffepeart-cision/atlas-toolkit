import '../../src/component/dialog';

const ELEMENT_TAG = 'atlas-dialog';

beforeAll(() => {
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();

  jest.clearAllMocks();
});

describe('Dialog', () => {
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

    (expect(element) as any).toContainHTML('<atlas-dialog></atlas-dialog>');
    (expect(element) as any).toBeEmptyDOMElement();
  });

  it('set "open" atribute programaticaly', () => {
    const element: any = document.createElement(ELEMENT_TAG);

    element.show();
    (expect(element.hasAttribute('open')) as any).toBe(true);
    (expect(element.dialog.show) as any).toBeCalledTimes(1);
  });

  it('remove "open" atribute programaticaly', () => {
    const element: any = document.createElement(ELEMENT_TAG);
    element.setAttribute('open', '');

    element.close();
    (expect(element.hasAttribute('open')) as any).toBe(false);
    (expect(element.dialog.close) as any).toBeCalledTimes(1);
  });

  it('is matches snapshot', () => {
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  /**
   * @todo remove after HTML Dialog element works properly with Jest
   */
  it('forcefully triggers onClose Dialog Event', () => {
    const element: any = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element.isConnected) as any).toBe(true);

    const onClose = jest.fn();
    element.addEventListener('close', onClose);

    element.dialog.dispatchEvent(new Event('close'));

    (expect(onClose) as any).toBeCalledTimes(1);
  });
});
