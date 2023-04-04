import '../../src/number-display';

const NUMBER_DISPLAY_STRING = 'wh-number-display';
const ATTR = {
  short: 'short',
  int: 'int',
  value: 'value',
  floatDigits: 'float-digits',
};
const INVALID_TEXT = 'Value is not a valid number';
const DEFAULT_TEXT = '';

const createNumberComponent = () => {
  return document.createElement(NUMBER_DISPLAY_STRING);
};

describe('Number Display Component', () => {
  it('renders correctly in the DOM', async () => {
    const numberDisplayComponent = createNumberComponent();
    document.body.appendChild(numberDisplayComponent);

    const numberDisplayElement = document.querySelector(NUMBER_DISPLAY_STRING);
    (expect(numberDisplayElement) as any).toEqual(numberDisplayComponent);
  });

  it('display default text if value is not set', () => {
    const numberDisplayComponent = createNumberComponent();

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(DEFAULT_TEXT);
  });

  it('display error message if value is not a number', () => {
    const numberDisplayComponent = createNumberComponent();
    numberDisplayComponent.setAttribute(ATTR.value, 'not a number');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(INVALID_TEXT);
  });

  it('display set integer value if valid', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockIntValue = '12345';

    numberDisplayComponent.setAttribute(ATTR.value, mockIntValue);

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockIntValue);
  });

  it('display set float value if valid, with EN separator (default)', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockFloatValue = '12.345';
    const mockFloatResult = '12,345';

    numberDisplayComponent.setAttribute(ATTR.value, mockFloatValue);

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockFloatResult);
  });

  it('display integer value if "int" attribute is set', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockFloatValue = '12.345';
    const mockIntResult = '12';

    numberDisplayComponent.setAttribute(ATTR.value, mockFloatValue);
    numberDisplayComponent.setAttribute(ATTR.int, '');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockIntResult);
  });

  it('consider "int" attribute disabled if set to "false"', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockFloatValue = '12.345';
    const mockFloatResult = '12,345';

    numberDisplayComponent.setAttribute(ATTR.value, mockFloatValue);
    numberDisplayComponent.setAttribute(ATTR.int, 'false');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockFloatResult);
  });

  it('display shortened value if "short" attribute is set', () => {
    const numberDisplayComponent = createNumberComponent();
    numberDisplayComponent.setAttribute(ATTR.short, '');

    numberDisplayComponent.setAttribute(ATTR.value, '1000');
    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual('1K');

    numberDisplayComponent.setAttribute(ATTR.value, '1000000');
    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual('1M');
  });

  it('consider "short" attribute disabled if set to "false"', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockValue = '1000';
    numberDisplayComponent.setAttribute(ATTR.value, mockValue);
    numberDisplayComponent.setAttribute(ATTR.short, 'false');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockValue);
  });

  it('Limit amount of number after the decimal point if "float-digits" attribute is set', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockFloatValue = '12.345678';
    const mockFloatResult = '12,346';

    numberDisplayComponent.setAttribute(ATTR.value, mockFloatValue);
    numberDisplayComponent.setAttribute(ATTR.floatDigits, '3');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockFloatResult);
  });

  it('do nothing if "float-digits" attribute has invalid value', () => {
    const numberDisplayComponent = createNumberComponent();
    const mockFloatValue = '12.345678';
    const mockFloatResult = '12,345678';

    numberDisplayComponent.setAttribute(ATTR.value, mockFloatValue);
    numberDisplayComponent.setAttribute(ATTR.floatDigits, 'invalid value');

    (expect(numberDisplayComponent.shadowRoot.innerHTML) as any).toEqual(mockFloatResult);
  });
});
