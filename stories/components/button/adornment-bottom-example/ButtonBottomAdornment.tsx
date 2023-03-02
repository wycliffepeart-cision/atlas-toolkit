export function ButtonBottomAdornment() {
  return (
    <>
      <atlas-button size='medium' variant='text' bottom-adornment="center">
        <atlas-icon-mail slot='bottom-adornment' />
        Text
      </atlas-button>
      <atlas-button size='medium' variant='contained' bottom-adornment="center">
        <atlas-icon-mail slot='bottom-adornment' />
        Contained
      </atlas-button>
      <atlas-button size='medium' variant='outlined' href='#' bottom-adornment="center">
        <atlas-icon-mail slot='bottom-adornment' />
        Outlined
      </atlas-button>
    </>
  );
}
