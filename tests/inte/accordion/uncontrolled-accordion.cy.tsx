import { AccordionExample } from "./uncontrolled-accordion.example";

describe('Atlas Accordion', () => {
  it('component mountable', () => {
    cy.viewport(800, 500)
    cy.mount(<AccordionExample />);
  });
});