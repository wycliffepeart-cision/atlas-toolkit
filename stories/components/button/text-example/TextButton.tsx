export function TextButton() {
  return (
    <>
      <atlas-button size='medium' variant="text">
        Text
      </atlas-button>
      <atlas-button size='medium' variant="text" disabled>
        Disabled
      </atlas-button>
      <atlas-button size='medium' variant="text" href="#">Link</atlas-button>
    </>
  );
}
