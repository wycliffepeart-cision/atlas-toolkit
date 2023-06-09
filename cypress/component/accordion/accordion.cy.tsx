import '../../../src/component/icon/icon';
import '../../../src/component/button/button';
import '../../../src/component/accordion/accordion';
import { useState } from 'react';
import './accordion.css';

const Component = (props: any) => {
  const [state, setState] = useState(false);

  return (
    <div style={{ padding: '1rem' }}>
      <atlas-accordion {...props} expanded={state}>
        <atlas-button slot='header' kind='generic' onClick={() => setState((state) => !state)}>
          Default Value
          <atlas-icon slot='suffix' name='chevronDownward'></atlas-icon>
        </atlas-button>
        <div id='demo-according-body'>Content Area</div>
      </atlas-accordion>
    </div>
  );
};

describe('Atlas Accordion', () => {
  it('component mountable', () => {
    cy.viewport(700, 500);
    cy.mount(<Component />);
  });
});
