import '../../src/button';

const Component = (props: any) => <atlas-button {...props}>Primary Button</atlas-button>;

describe('Atlas Icon Home', () => {
  it('component mountable', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
  });

  it('slottable left adornment', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
    cy.get('[part="left-adornment"]').should('exist')
  });

  it('slottable top adornment', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
    cy.get('[part="top-adornment"]').should('exist')
  });
  
  it('slottable right adornment', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
    cy.get('[part="right-adornment"]').should('exist')
  });

  it('slottable bottom adornment', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
    cy.get('[part="bottom-adornment"]').should('exist')
  });

  it('slottable bottom adornment', () => {
    cy.viewport(200, 100)
    cy.mount(<Component />);
    cy.get('[part="main-content"]').should('exist')
  });

  it('component variant text', () => {
    cy.viewport(200, 100)
    cy.mount(<Component variant='outlined'/>);
    cy.get('atlas-button').contains('Primary Button')
    cy.get('atlas-button').should('have.attr', 'variant')
    cy.get('atlas-button').should('have.attr', 'variant', 'outlined')
    cy.get('[part="button"]').should('have.css', 'color', 'rgb(0, 96, 127)')
    cy.get('[part="button"]').should('have.css', 'borderColor', 'rgb(0, 96, 127)')
  });

  it('component variant contained', () => {
    cy.viewport(200, 100)
    cy.mount(<Component variant='outlined'/>);
    cy.get('atlas-button').contains('Primary Button')
    cy.get('atlas-button').should('have.attr', 'variant')
    cy.get('atlas-button').should('have.attr', 'variant', 'outlined')
    cy.get('[part="button"]').should('have.css', 'color', 'rgb(0, 96, 127)')
    cy.get('[part="button"]').should('have.css', 'borderColor', 'rgb(0, 96, 127)')
  });

});

describe('Button Variant Contained', () => {
  it('component variant outlined', () => {
    cy.viewport(200, 100)
    cy.mount(<Component variant='outlined'/>);
    cy.get('atlas-button').contains('Primary Button')
    cy.get('atlas-button').should('have.attr', 'variant')
    cy.get('atlas-button').should('have.attr', 'variant', 'outlined')
    cy.get('[part="button"]').should('have.css', 'color', 'rgb(0, 96, 127)')
    cy.get('[part="button"]').should('have.css', 'borderColor', 'rgb(0, 96, 127)')
  });
})

describe('Button Variant Outline', () => {
  it('component variant outlined', () => {
    cy.viewport(200, 100)
    cy.mount(<Component variant='outlined'/>);
    cy.get('atlas-button').contains('Primary Button')
    cy.get('atlas-button').should('have.attr', 'variant')
    cy.get('atlas-button').should('have.attr', 'variant', 'outlined')
    cy.get('[part="button"]').should('have.css', 'color', 'rgb(0, 96, 127)')
    cy.get('[part="button"]').should('have.css', 'borderColor', 'rgb(0, 96, 127)')
  });
})
