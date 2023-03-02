import {CSSProperties} from "react";

const style: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  alignItems: 'start',
  columnGap: '1rem',
  rowGap: '1rem',
};

export function SizedButton() {
  return (
    <div style={style}>
      <atlas-button size='small' variant='text'>
        Small
      </atlas-button>
      <atlas-button size='medium' variant='text'>
        Medium
      </atlas-button>
      <atlas-button size='large' variant='text'>
        Large
      </atlas-button>
      <atlas-button size='small' variant='outlined'>
        Small
      </atlas-button>
      <atlas-button size='medium' variant='outlined'>
        Medium
      </atlas-button>
      <atlas-button size='large' variant='outlined'>
        Large
      </atlas-button>
      <atlas-button size='small' variant='contained'>
        Small
      </atlas-button>
      <atlas-button size='medium' variant='contained'>
        Medium
      </atlas-button>
      <atlas-button size='large' variant='contained'>
        Large
      </atlas-button>
    </div>
  );
}
