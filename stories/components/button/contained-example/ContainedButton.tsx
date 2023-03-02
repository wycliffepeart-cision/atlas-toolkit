import React, { useCallback } from 'react';

export function ContainedButton() {
  const handleLinkOnClick = useCallback(
    (value: string) => (e: any) => {
      e.preventDefault();

      alert(value);
    },
    []
  );

  return (
    <>
      <atlas-button size='medium' variant='contained' onClick={handleLinkOnClick('Contained Clicked')}>
        Contained
      </atlas-button>
      <atlas-button size='medium' variant='contained' onClick={handleLinkOnClick('Disabled Clicked')} disabled>
        Disabled
      </atlas-button>
      <atlas-button size='medium' variant='contained' href='#' onClick={handleLinkOnClick('Link Clicked')}>
        Link
      </atlas-button>
    </>
  );
}
