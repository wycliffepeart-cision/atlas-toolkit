export function ContainedButton() {
  return (
    <>
      <atlas-button size='medium' top-adornment='center' variant='contained' onClick={() => console.log('click')}>
        Contained
      </atlas-button>
      <atlas-button size='medium' disabled top-adornment='center' variant='contained' onClick={() => console.log('click')}>
        Disabled
      </atlas-button>
      <atlas-button size='medium' variant='contained' onClick={() => console.log('click')}>
        Link
      </atlas-button>
    </>
  );
}
