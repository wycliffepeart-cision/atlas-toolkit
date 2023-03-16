// import '../../src/button';

const Component = (props: any) => <div>Primary Button</div>;

describe('Atlas Icon Home', () => {
  it('component mountable', () => {
    cy.viewport(200, 100);
    cy.mount(<Component />);
  });
});