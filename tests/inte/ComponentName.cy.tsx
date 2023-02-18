import * as React from 'react';
import '../../src/icons/home';
import '../../styling/index.css';

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
