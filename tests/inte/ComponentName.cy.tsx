
import '../../src/icons/home';
import '../../styles/index.css';

describe('ComponentName.cy.tsx', () => {
  it('playground', () => {
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
