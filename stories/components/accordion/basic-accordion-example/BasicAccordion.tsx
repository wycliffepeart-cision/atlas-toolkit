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
            <atlas-typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
              eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
              ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
              perspiciatis reprehenderit sunt totam ut voluptas.
            </atlas-typography>
          </atlas-accordion-content>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion>
        <button slot='header'>
          <atlas-typography>Accordion 2</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <atlas-accordion-content>
            <atlas-typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
              eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
              ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
              perspiciatis reprehenderit sunt totam ut voluptas.
            </atlas-typography>
          </atlas-accordion-content>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion disabled>
        <button slot='header'>
          <atlas-typography>Disabled Accordion</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <atlas-accordion-content>
            <atlas-typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
              eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
              ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
              perspiciatis reprehenderit sunt totam ut voluptas.
            </atlas-typography>
          </atlas-accordion-content>
        </atlas-collapsable>
      </atlas-accordion>
    </atlas-box>
  );
}
