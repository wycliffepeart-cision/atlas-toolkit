export function ButtonAdornment() {
  return (
    <atlas-button size='medium' variant='contained' top-adornment='center' bottom-adornment='center'>
      <atlas-icon-mail slot='left-adornment' />
      <atlas-icon-mail slot='top-adornment' />
      <span>
        <strong>Adornment</strong>
      </span>
      <atlas-icon-mail slot='right-adornment' />
      <atlas-icon-mail slot='bottom-adornment' />
    </atlas-button>
  );
}
