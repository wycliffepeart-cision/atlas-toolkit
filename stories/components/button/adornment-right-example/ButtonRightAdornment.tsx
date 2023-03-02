export function ButtonRightAdornment() {
  return (
    <>
      <atlas-button size='medium' variant='text'>
        Text
        <atlas-icon-mail slot='right-adornment' />
      </atlas-button>
      <atlas-button size='medium' variant='contained'>
        Contained
        <atlas-icon-mail slot='right-adornment' />
      </atlas-button>
      <atlas-button size='medium' variant='outlined' href='#'>
        Outlined
        <atlas-icon-mail slot='right-adornment' />
      </atlas-button>
    </>
  );
}
