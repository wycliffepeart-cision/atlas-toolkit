export function ButtonTopAdornment() {
  return (
    <>
      <atlas-button size='medium' variant='text' top-adornment="center">
        <atlas-icon-mail slot='top-adornment' />
        Text
      </atlas-button>
      <atlas-button size='medium' variant='contained' top-adornment="center">
        <atlas-icon-mail slot='top-adornment' />
        Contained
      </atlas-button>
      <atlas-button size='medium' variant='outlined' href='#' top-adornment="center">
        <atlas-icon-mail slot='top-adornment' />
        Outlined
      </atlas-button>
    </>
  );
}
