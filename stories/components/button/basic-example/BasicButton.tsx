export function BasicButton({ text }: { text?: string }) {
  return (
    <>
      <atlas-button size="medium" variant='text'>
        <atlas-typography>{text || 'Text'}</atlas-typography>
      </atlas-button>
      <atlas-button size="medium" variant='contained'>
        <atlas-typography>Contained</atlas-typography>
      </atlas-button>
      <atlas-button size="medium" variant='outlined' href='#'>
        Outlined
      </atlas-button>
    </>
  );
}

export function BasicExampleSingle({ text }: { text?; string }) {
  return (
    <atlas-button size='medium' variant='text'>
      {text || 'Text'}
    </atlas-button>
  );
}
