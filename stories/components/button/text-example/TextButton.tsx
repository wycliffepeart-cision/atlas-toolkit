export function TextButton() {
  return (
    <>
      <atlas-button size='medium'>
        Primary
      </atlas-button>
      <atlas-button size='medium' disabled>
        Disabled
      </atlas-button>
      <atlas-button size='medium' href="#">Link</atlas-button>
    </>
  );
}
