import { AccordionControlledExample } from "./controlled.example";

describe('Atlas Controlled Accordion', () => {
  it('component mountable', () => {
    cy.viewport(800, 500)
    cy.mount(<AccordionControlledExample />);
  });
});
