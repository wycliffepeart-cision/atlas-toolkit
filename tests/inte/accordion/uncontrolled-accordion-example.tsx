import '../../../src/accordion';
import '../../../src/typography';

export function AccordionExample() {
  return (
    <atlas-accordions>
      <atlas-accordion>
        <button slot='header'>
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
      <atlas-accordion>
        <button slot='header'>
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
    </atlas-accordions>
  );
}