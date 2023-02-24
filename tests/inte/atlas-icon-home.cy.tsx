import '../../src/icons/home';
import '../../theme/styles/index.css';

describe('Atlas Icon Home', () => {
  it('is component mountable', () => {
    function Foo() {
      return (
        <>
          <atlas-icon-home/>
        </>
      );
    }

    cy.mount(<Foo/>);
  });
});
