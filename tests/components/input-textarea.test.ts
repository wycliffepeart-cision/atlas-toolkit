import '../../src/input-textarea';

const INPUT_TEXTAREA_TAG = 'atlas-input-textarea';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Input', () => {
  describe('Textarea JS API', () => {
    describe('.value', () => {
      it('getter', async () => {
        await customElements.whenDefined(INPUT_TEXTAREA_TAG);
        const search: any = document.createElement(INPUT_TEXTAREA_TAG);
        (expect(search.value) as any).toEqual('');
      });

      it('setter', async () => {
        await customElements.whenDefined(INPUT_TEXTAREA_TAG);
        const search: any = document.createElement(INPUT_TEXTAREA_TAG);
        search.value = 'SOME FAKE STRING';

        (expect(search.value) as any).toEqual('SOME FAKE STRING');
      });

      it('from value attribute', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);
        search.setAttribute('value', 'SOME FAKE STRING');

        (expect(search.value) as any).toEqual('');
      });
    });

    describe('.disabled', () => {
      it('getter (default)', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);

        (expect(search.disabled) as any).toEqual(false);
      });

      it('setter (identity)', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);

        search.disabled = true;
        (expect(search.disabled) as any).toEqual(true);
      });

      it('from toggle attribute - true', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);

        search.toggleAttribute('disabled', true);
        (expect(search.disabled) as any).toEqual(true);
      });

      it('from non-toggle attribute - false', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);

        search.setAttribute('disabled', 'false');
        (expect(search.disabled) as any).toEqual(false);
      });

      it('from non-toggle attribute - string', async () => {
				await customElements.whenDefined(INPUT_TEXTAREA_TAG);
				const search: any = document.createElement(INPUT_TEXTAREA_TAG);

        search.setAttribute('disabled', 'SOME_FAKE_VALUE');
        (expect(search.disabled) as any).toEqual(true);
      });
    });
  });

  describe('Textarea', () => {
    it('exists', async () => {
      await customElements.whenDefined(INPUT_TEXTAREA_TAG);
      const dashboardElement = document.createElement(INPUT_TEXTAREA_TAG);
      document.body.appendChild(dashboardElement);

      (expect(dashboardElement) as any).toBeInTheDocument();
    });

    it('is matches snapshot', () => {
      const elem = document.createElement(INPUT_TEXTAREA_TAG);
      document.body.appendChild(elem);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });

    it('is matches snapshot when disabled', () => {
      const elem = document.createElement(INPUT_TEXTAREA_TAG);
      document.body.appendChild(elem);

      elem.toggleAttribute('disabled', true);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });

    it('is matches snapshot when disabled toggled on/off', () => {
      const elem = document.createElement(INPUT_TEXTAREA_TAG);
      document.body.appendChild(elem);

      elem.toggleAttribute('disabled', true);
      elem.toggleAttribute('disabled', false);

      (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
    });
  });
});
