import { fireEvent } from '@testing-library/dom';
import '../../src/component/button/button';

const ATLAS_BUTTON_TAG = 'atlas-button';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

const setupElement = async () => {
  await customElements.whenDefined(ATLAS_BUTTON_TAG);
  const buttonElement = document.createElement(ATLAS_BUTTON_TAG);
  document.body.appendChild(buttonElement);

  return buttonElement;
};

afterEach(() => {
  const element = document.querySelector(ATLAS_BUTTON_TAG);
  if (element) {
    element.remove();
  }
});

describe('Atlas Button', () => {
  it('is correctly appended in the DOM', async () => {
    const buttonElement = await setupElement();

    (expect(buttonElement) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await setupElement();

    const selectedElement = document.querySelector(ATLAS_BUTTON_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    const buttonElement = await setupElement();

    (expect(buttonElement) as any).toContainHTML('<atlas-button></atlas-button>');
    (expect(buttonElement) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(buttonElement)) as any).toMatchSnapshot();
  });

  it('Should be interactable', async () => {
    const buttonElement = await setupElement();
    const mockClickEvent = jest.fn();
    const mockFocusEvent = jest.fn();

    buttonElement.addEventListener('click', mockClickEvent);
    buttonElement.addEventListener('focus', mockFocusEvent);

    fireEvent.click(buttonElement);
    fireEvent.focus(buttonElement);

    (expect(buttonElement) as any).toBeEnabled();
    (expect(mockClickEvent) as any).toHaveBeenCalledTimes(1);
    (expect(mockFocusEvent) as any).toHaveBeenCalledTimes(1);
  });

  it('Should be disabled when disabled attribute is set', async () => {
    const buttonElement = await setupElement();

    buttonElement.setAttribute('disabled', '');
    (expect(buttonElement) as any).toBeDisabled();

    buttonElement.removeAttribute('disabled');
    (expect(buttonElement) as any).toBeEnabled();
  });
});
