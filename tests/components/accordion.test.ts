// import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
// import '../../src/accordion';

// const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

describe('Accordion Component', () => {
  const ACCORDION_TAG = 'atlas-accordion';

  it('is correctly appended in the DOM', async () => {
    // await customElements.whenDefined(ACCORDION_TAG);
    // const snackbarElement = document.createElement(ACCORDION_TAG);
    // document.body.appendChild(snackbarElement);

    // (expect(snackbarElement) as any).toBeInTheDocument();
  });

  // it("is capable of being selected", async () => {
  //   await customElements.whenDefined(ACCORDION_TAG);
  //   const snackbarElement = document.createElement(ACCORDION_TAG);
  //   document.body.appendChild(snackbarElement);

  //   const selectedElement = document.querySelector(ACCORDION_TAG);
  //   expect(selectedElement).toBeInTheDocument();
  // });

  // it("has the correct content when created", async () => {
  //   await customElements.whenDefined(ACCORDION_TAG);
  //   const snackbarElement = document.createElement(ACCORDION_TAG);
  //   document.body.appendChild(snackbarElement);

  //   expect(snackbarElement).toContainHTML("<atlas-accordion></atlas-accordion>");
  //   expect(snackbarElement).toBeEmptyDOMElement();
  //   expect(getShadowDomContent(snackbarElement)).toMatchSnapshot()
  // });

  // it("throws and error when the template is null or undefined", async () => {
  //   const setup = () => {
  //     Accordion.template = null;
  //     new Accordion();
  //   };

  //   expect(setup).toThrowError("Template undefined");
  // });
});
