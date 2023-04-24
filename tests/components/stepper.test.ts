import '../../src/component/stepper';

const STEPPER_TAG = 'atlas-stepper';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Stepper', () => {
  it('is correctly appended in the DOM', () => {
    const elem = document.createElement(STEPPER_TAG);
    document.body.appendChild(elem);

    (expect(elem) as any).toBeInTheDocument();
  });

  it('is matches snapshot', () => {
    const elem = document.createElement(STEPPER_TAG);
    document.body.appendChild(elem);

    (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });
});
