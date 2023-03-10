import '../../../src/accordion';
import '../../../src/typography';
import { useCallback, useState } from 'react';

export function AccordionControlledExample() {
  const [state, setState] = useState('');

  const handleExpand = useCallback((value) => setState((state) => (value === state ? '' : value)), []);

  return (
    <>
      <atlas-accordion expanded={state === 'panel-1'}>
        <button slot='header' onClick={() => handleExpand('panel-1')}>
          <atlas-typography>Header</atlas-typography>
          <atlas-typography>Icon</atlas-typography>
        </button>
        <atlas-collapsable slot='collapsable'>
          <div style={{ padding: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #ddd' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in recusandae, voluptas quisquam sapiente ipsam.
              Accusantium, vero placeat officiis laborum, repellat, eaque illum provident porro ducimus aut debitis voluptatibus nemo.
            </div>
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion expanded={state === 'panel-2'}>
        <button slot='header' onClick={() => handleExpand('panel-2')}>
          <atlas-typography>Header</atlas-typography>
          <atlas-typography>Icon</atlas-typography>
        </button>
        <atlas-collapsable slot='collapsable'>
          <div style={{ padding: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #ddd' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in recusandae, voluptas quisquam sapiente ipsam.
              Accusantium, vero placeat officiis laborum, repellat, eaque illum provident porro ducimus aut debitis voluptatibus nemo.
            </div>
          </div>
        </atlas-collapsable>
      </atlas-accordion>
    </>
  );
}
