export function OutlinedButton() {
  return (
    <>
      <atlas-button size='small' top-adornment='center' variant='outlined' onClick={() => console.log('click')}>
        Small
      </atlas-button>
      <atlas-button size='medium' top-adornment='center' variant='outlined' onClick={() => console.log('click')}>
        Medium
      </atlas-button>
      <atlas-button size='large' variant='outlined' onClick={() => console.log('click')}>
        Large
      </atlas-button>
    </>
  );
}
