import '../../src/input-dropdown';

const ELEMENT_TAG = 'atlas-dropdown';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();

  jest.clearAllMocks();
});

describe('Dropdown', () => {
  it('exists', async () => {
    await customElements.whenDefined(ELEMENT_TAG);
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element) as any).toBeInTheDocument();
  });

  it('is matches snapshot', () => {
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(getShadowDomContent(element)) as any).toMatchSnapshot();
  });
	
});
