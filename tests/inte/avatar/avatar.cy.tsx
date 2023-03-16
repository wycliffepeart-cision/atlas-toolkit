import '../../../src/avatar';
import Image from './placeholder-profile-pic.jpg';

const Component = (props: any) => (
  <div style={{ padding: '1rem' }}>
    <atlas-avatar src={Image} />
  </div>
);

describe('Atlas Avatar Component', () => {
  it('component mountable', () => {
    cy.viewport(700, 500);
    cy.mount(<Component />);
  });
});
