import { AccordionControlledExample } from './controlled-accordion-example';

describe('Atlas Controlled Accordion', () => {
  it('component mountable', () => {
    cy.viewport(800, 500);
    cy.mount(<AccordionControlledExample />);
  });
});
