import { beforeAll, describe, expect, it } from 'vitest';

export const setUpAtlasIconTest = (tag: string) =>
	describe(`${tag}`, () => {
		beforeAll(async () => {
			await customElements.whenDefined(tag);
			document.append(document.createElement(tag));
		});

		it('is component append correctly to the dom', async () => {
			expect(document.querySelector(tag)).toBeTruthy();

			expect(document.querySelector(tag).innerHTML).toMatchSnapshot();
		});

		it('is component named correct in the dom', async () => {
			const tagName = document.querySelector(tag).tagName.toLowerCase();

			expect(tagName).toEqual(tag);

			expect(tagName).toMatchSnapshot();
		});

		it('is svg correctly slotted in the shadow dom', async () => {
			document.append(document.createElement(tag));

			expect(document.querySelector(tag).innerHTML).toContain('svg');
		});
	});
