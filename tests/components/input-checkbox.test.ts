import { fireEvent } from '@testing-library/dom';

import { CHECKBOX_ATTRIBUTES } from '../../src/component/input-checkbox/input-checkbox';

const ELEMENT_TAG = 'atlas-checkbox';

afterEach(() => {
  const element = document.querySelector('body > *:first-child');
  element?.remove();
});

describe('InputCheckbox component', () => {
  it('constructs', () => {
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    (expect(element) as any).toBeInTheDocument();
  });

  it('match snapshot', () => {
    const element = document.createElement(ELEMENT_TAG);
    (expect(element.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  it('triggers onChange proxy event when updated', () => {
    const element = document.createElement(ELEMENT_TAG);
    document.body.appendChild(element);

    const innerInput = element.shadowRoot.getElementById('Input');

    const mockChangeEvent = jest.fn();

    element.addEventListener('change', mockChangeEvent);
    fireEvent.click(innerInput);
    (expect(mockChangeEvent) as any).toHaveBeenCalledTimes(1);
  });

  it('passthrought observed attributes', () => {
    const element = document.createElement(ELEMENT_TAG);
    Object.values(CHECKBOX_ATTRIBUTES).forEach((attr) => {
      const { attributes } = element.shadowRoot.getElementById('Input');

      element.setAttribute(attr, attr);
      (expect(attributes[attr].value) as any).toBe(attr);

      element.removeAttribute(attr);
      (expect(attributes[attr]) as any).toBe(undefined);
    });
  });

  describe('JS-API', () => {
    describe('.checked', () => {
      it('returns false when default', () => {
        const element: any = document.createElement(ELEMENT_TAG);
        (expect(element.checked) as any).toBe(false);
      });

      it('returns true when set to true', () => {
        const element: any = document.createElement(ELEMENT_TAG);
        element.checked = true;
        (expect(element.checked) as any).toBe(true);
      });
    });

    describe('.value', () => {
      it('returns default checkbox value', () => {
        const element: any = document.createElement(ELEMENT_TAG);
        (expect(element.value) as any).toBe('on');
      });

      it('returns custom value when set', () => {
        const element: any = document.createElement(ELEMENT_TAG);
        element.value = 'custom value';
        (expect(element.value) as any).toBe('custom value');
      });
    });
  });
});
