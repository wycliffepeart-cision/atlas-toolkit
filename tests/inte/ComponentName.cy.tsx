import '../../src/icons/home';
import '../../theming/styles/index.css';

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
