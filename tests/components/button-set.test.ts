import '../../src/component/button-set/button-set';

const BUTTON_SET_TAG = 'atlas-button-set';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Button Set', () => {
  it('is correctly appended in the DOM', () => {
    const elem = document.createElement(BUTTON_SET_TAG);
    document.body.appendChild(elem);

    (expect(elem) as any).toBeInTheDocument();
  });

  it('is matches snapshot', () => {
    const elem = document.createElement(BUTTON_SET_TAG);
    document.body.appendChild(elem);

    (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });
});
