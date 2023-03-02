export function OutlinedButton() {
  return (
    <>
      <atlas-button size='medium' variant='outlined'>
        Outlined
      </atlas-button>
      <atlas-button size='medium' variant='outlined' disabled>
        Disabled
      </atlas-button>
      <atlas-button size='medium' variant='outlined' href='#'>
        Link
      </atlas-button>
    </>
  );
}
