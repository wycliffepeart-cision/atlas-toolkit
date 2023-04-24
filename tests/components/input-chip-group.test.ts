import '../../src/component/input-chip-group/input-chip-group';

const INPUT_CHIP_GROUP_TAG = 'atlas-input-chip-group';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Input', () => {
  describe('Chip Group', () => {
    it('exists', async () => {
      await customElements.whenDefined(INPUT_CHIP_GROUP_TAG);
      const dashboardElement = document.createElement(INPUT_CHIP_GROUP_TAG);
      document.body.appendChild(dashboardElement);

      (expect(dashboardElement) as any).toBeInTheDocument();
    });

    it('matches simple snapshot', () => {
      const elem = document.createElement(INPUT_CHIP_GROUP_TAG);
      document.body.appendChild(elem);

      (expect(elem) as any).toContainHTML(`<atlas-input-chip-group />`);
      (expect(elem) as any).toBeEmptyDOMElement();

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });

    it('matches slotted chips snapshot', () => {
      const elem = document.createElement(INPUT_CHIP_GROUP_TAG);
      document.body.appendChild(elem);

      const chips = document.createElement('li');
      chips.setAttribute('slot', 'chips');
      elem.appendChild(chips);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });
  });
});
