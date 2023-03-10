import '../../src/accordion/index';
import '../../src/collapsable';
import { useState } from 'react';

const Component = (props: any) => {
  const [state, setState] = useState(false);

  return (
    <atlas-accordion expanded={state} {...props}>
      <button slot='header' onClick={() => setState((state) => !state)}>
        <div>Header</div>
        <div>Icon</div>
      </button>
      <atlas-collapsable slot='collapsable'>
        <div style={{ padding: '1rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in recusandae, voluptas quisquam sapiente ipsam. Accusantium,
          vero placeat officiis laborum, repellat, eaque illum provident porro ducimus aut debitis voluptatibus nemo.
        </div>
      </atlas-collapsable>
    </atlas-accordion>
  );
};

describe('Atlas Accordion', () => {
  it('component mountable', () => {
    // cy.viewport(200, 100)
    cy.mount(<Component />);
  });
});
