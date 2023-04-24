import '../../src/component/input-search/input-search';

const INPUT_SEARCH_TAG = 'atlas-search';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Input', () => {
  describe('Search JS API', () => {
    it('supports .value getter', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);

      (expect(search.value) as any).toEqual('');
    });

    it('supports .value setter', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.value = 'SOME FAKE STRING';

      (expect(search.value) as any).toEqual('SOME FAKE STRING');
    });

    it('supports .value from value attribute', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.setAttribute('value', 'SOME FAKE STRING');

      (expect(search.value) as any).toEqual('SOME FAKE STRING');
    });

    it('supports .disabled getter', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);

      (expect(search.disabled) as any).toEqual(false);
    });

    it('supports .disabled setter', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.disabled = true;

      (expect(search.disabled) as any).toEqual(true);
    });

    it('supports .disabled from attribute', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.toggleAttribute('disabled', true);

      (expect(search.disabled) as any).toEqual(true);
    });

    it('supports .disabled from non-toggle attribute', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.setAttribute('disabled', 'SOME_FAKE_VALUE');

      (expect(search.disabled) as any).toEqual(true);
    });

    it('supports .disabled from non-toggle attribute - false', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const search: any = document.createElement(INPUT_SEARCH_TAG);
      search.setAttribute('disabled', 'false');

      (expect(search.disabled) as any).toEqual(true);
    });
  });

  describe('Search', () => {
    it('exists', async () => {
      await customElements.whenDefined(INPUT_SEARCH_TAG);
      const dashboardElement = document.createElement(INPUT_SEARCH_TAG);
      document.body.appendChild(dashboardElement);

      (expect(dashboardElement) as any).toBeInTheDocument();
    });

    it('is matches snapshot', () => {
      const elem = document.createElement(INPUT_SEARCH_TAG);
      document.body.appendChild(elem);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });

    it('is matches snapshot when disabled', () => {
      const elem = document.createElement(INPUT_SEARCH_TAG);
      document.body.appendChild(elem);

      elem.toggleAttribute('disabled', true);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });

    it('is matches snapshot when disabled toggled on/off', () => {
      const elem = document.createElement(INPUT_SEARCH_TAG);
      document.body.appendChild(elem);

      elem.toggleAttribute('disabled', true);
      elem.toggleAttribute('disabled', false);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });
  });
});
