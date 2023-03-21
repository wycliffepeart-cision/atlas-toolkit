import '../../../src/button-set';
import '../../../themes/styles/button.css';
import '../../../themes/styles/button-set.css';

const Component = (props: any) => (
  <div style={{ padding: '1rem' }}>
    <atlas-button-set>
      <atlas-button>Primary</atlas-button>
      <atlas-button box-type='secondary'>secondary</atlas-button>
      <atlas-button slot='extended' box-type='secondary'>
        extended text button
      </atlas-button>
    </atlas-button-set>
  </div>
);

describe('Atlas Button Set', () => {
  it('component mountable', () => {
    cy.viewport(700, 500);
    cy.mount(<Component />);
  });
});
