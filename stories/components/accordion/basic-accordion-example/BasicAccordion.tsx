export function BasicAccordion() {
  return (
    <atlas-box padding='1rem' display='flex' gap='1rem' flexDirection='column'>
      <atlas-accordion>
        <button slot='header'>
          <atlas-typography>Accordion 1</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <atlas-accordion-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </atlas-accordion-content>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion>
        <button slot='header'>
          <atlas-typography>Accordion 2</atlas-typography>
          <atlas-icon-chevron-down />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion disabled>
        <button slot='header'>
          <atlas-typography>Disabled Accordion</atlas-typography>
          <atlas-icon-chevron-down />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
    </atlas-box>
  );
}
