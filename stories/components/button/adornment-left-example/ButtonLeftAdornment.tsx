export function ButtonLeftAdornment() {
  return (
    <>
      <atlas-button size='medium' variant='text'>
        <atlas-icon-mail slot='left-adornment' />
        Text
      </atlas-button>
      <atlas-button size='medium' variant='contained'>
        <atlas-icon-mail slot='left-adornment' />
        Contained
      </atlas-button>
      <atlas-button size='medium' variant='outlined' href='#'>
        <atlas-icon-mail slot='left-adornment' />
        Outlined
      </atlas-button>
    </>
  );
}
