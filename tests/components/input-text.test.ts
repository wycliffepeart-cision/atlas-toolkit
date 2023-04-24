import { fireEvent } from '@testing-library/dom';
import '../../src/component/input-text';

const INPUT_TEXT_TAG = 'atlas-input-text';
const MOCK_STRING = 'TEST TEXT VALUE';

afterEach(() => {
  const element = document.querySelector('body > *:first-child');
  element?.remove();
});

describe('Input', () => {
  it('construts', async () => {
    await customElements.whenDefined(INPUT_TEXT_TAG);
    const lement = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(lement);

    (expect(lement) as any).toBeInTheDocument();
  });

  it('matches snapshot', async () => {
    await customElements.whenDefined(INPUT_TEXT_TAG);
    const element = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(element);

    (expect(element.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  it('is matches snapshot when disabled', async () => {
    await customElements.whenDefined(INPUT_TEXT_TAG);
    const element = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(element);

    element.toggleAttribute('disabled', true);

    (expect(element.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  it('is matches snapshot when disabled toggled on/off', async () => {
    await customElements.whenDefined(INPUT_TEXT_TAG);
    const element = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(element);

    element.toggleAttribute('disabled', true);
    element.toggleAttribute('disabled', false);

    (expect(element.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  it('triggers onChange proxy event when updated', async () => {
    await customElements.whenDefined(INPUT_TEXT_TAG);
    const element = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(element);

    const innerInput = element.shadowRoot.getElementById('Input');

    const mockChangeEvent = jest.fn();

    element.addEventListener('change', mockChangeEvent);
    fireEvent.change(innerInput, { target: { value: MOCK_STRING } });
    (expect(mockChangeEvent) as any).toHaveBeenCalledTimes(1);
  });

  it('triggers onInvalid proxy event checkValidity is called', () => {
    const element: any = document.createElement(INPUT_TEXT_TAG);
    document.body.appendChild(element);
    element.toggleAttribute('required', true);

    const mockChangeEvent = jest.fn();

    element.addEventListener('invalid', mockChangeEvent);
    element.checkValidity();

    (expect(mockChangeEvent) as any).toHaveBeenCalledTimes(1);
  });

  describe('Text JS API', () => {
    describe('.value', () => {
      it('supports .value getter', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        (expect(inputElem.value) as any).toEqual('');
      });

      it('supports .value setter', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.value = MOCK_STRING;
        (expect(inputElem.value) as any).toEqual(MOCK_STRING);
      });

      it('supports .value from value attribute', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.setAttribute('value', MOCK_STRING);
        (expect(inputElem.value) as any).toEqual(MOCK_STRING);
      });
    });

    describe('.disabled', () => {
      it('getter (default)', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        (expect(inputElem.disabled) as any).toEqual(false);
      });

      it('setter (identity)', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.disabled = true;
        (expect(inputElem.disabled) as any).toEqual(true);
      });

      it('from toggle attribute true', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.toggleAttribute('disabled', true);
        (expect(inputElem.disabled) as any).toEqual(true);
      });

      it('from non-toggle attribute false', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.setAttribute('disabled', 'false');

        (expect(inputElem.disabled) as any).toEqual(false);
      });

      it('from non-toggle attribute', async () => {
        await customElements.whenDefined(INPUT_TEXT_TAG);
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.setAttribute('disabled', MOCK_STRING);

        (expect(inputElem.disabled) as any).toEqual(true);
      });
    });

    describe('.valid', () => {
      it('getter (default)', () => {
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);

        (expect(inputElem.valid) as any).toEqual(true);
      });

      it('setter', () => {
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);

        inputElem.valid = false;
        (expect(inputElem.valid) as any).toEqual(false);
        (expect(inputElem.hasAttribute('atlas--invalid')) as any).toEqual(true);

        inputElem.valid = true;
        (expect(inputElem.valid) as any).toEqual(true);
      });
    });

    describe('.checkValidity', () => {
      it('verify validity', () => {
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        (expect(inputElem.checkValidity()) as any).toEqual(true);
      });

      it('Updates the custom atlas--invalid state', () => {
        const inputElem: any = document.createElement(INPUT_TEXT_TAG);
        inputElem.toggleAttribute('required', true);
        const innerInput = inputElem.shadowRoot.getElementById('Input');

        (expect(inputElem.checkValidity()) as any).toEqual(false);
        (expect(inputElem.hasAttribute('atlas--invalid')) as any).toEqual(true);
      });
    });
  });
});
