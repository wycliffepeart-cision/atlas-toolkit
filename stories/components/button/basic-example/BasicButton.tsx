export function BasicButton({ text }: { text?: string }) {
  return (
    <>
      <atlas-button variant='text'>
        {text || 'Text'}
      </atlas-button>
      <atlas-button variant='contained'>
        Contained
      </atlas-button>
      <atlas-button variant='outlined' href='#'>
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
