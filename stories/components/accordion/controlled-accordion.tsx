import {PropsWithChildren, useCallback, useState} from 'react';

export function ControlledAccordion() {
  const [state, setState] = useState<string | undefined>('panel-1');

  const handlePanel1 = useCallback(() => setState((state) => (state === 'panel-1' ? undefined : 'panel-1')), []);

  const handlePanel2 = useCallback(() => setState((state) => (state === 'panel-2' ? undefined : 'panel-2')), []);

  const handlePanel3 = useCallback((e) => {
    e.stopImmediatePropagation();

    setState((state) => (state === 'panel-3' ? undefined : 'panel-3'));
  }, []);

  return (
    <Stack>
      <atlas-accordion expanded={state === 'panel-1'}>
        <button slot='header' onClick={handlePanel1}>
          <atlas-typography>Accordion 1</atlas-typography>
          <atlas-icon-chevron-down/>
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur
            culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem
            ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse
            explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa
            necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion expanded={state === 'panel-2'}>
        <button slot='header' onClick={handlePanel2}>
          <atlas-typography>Accordion 2</atlas-typography>
          <atlas-icon-chevron-down/>
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur
            culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem
            ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse
            explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa
            necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion expanded={state === 'panel-3'} disabled>
        <button slot='header' onClick={handlePanel3}>
          <atlas-typography>Accordion 2</atlas-typography>
          <atlas-icon-chevron-down/>
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur
            culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem
            ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse
            explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa
            necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
    </Stack>
  );
}

function Stack({children}: PropsWithChildren) {
  return <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>{children}</div>;
}
