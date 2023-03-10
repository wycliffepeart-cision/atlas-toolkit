import '../../src/icons';

describe('Atlas Icon Home', () => {
  it('is component mountable', () => {
    function Foo() {
      return (
        <>
          <atlas-icon-home />
        </>
      );
    }

    cy.mount(<Foo />);
  });
});
