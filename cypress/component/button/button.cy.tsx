import '../../../src/button';

const Component = (props: any) => (
  <div style={{ padding: '1rem' }}>
    <atlas-button box-type='secondary'>Primary Button</atlas-button>
  </div>
);

describe('Atlas Button', () => {
  it('component mountable', () => {
    cy.viewport(700, 500);
    cy.mount(<Component />);
  });
});
