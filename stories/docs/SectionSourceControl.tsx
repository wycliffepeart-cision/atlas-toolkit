import { Source } from '@storybook/addon-docs';
import { PropsWithChildren, useState } from 'react';

export interface PreviewSourceControlProps {
  example?: string;
  snippet?: string;
  language?: string;
}

export function SectionSourceControl({ example, snippet, language }: PropsWithChildren<PreviewSourceControlProps>) {
  const [isSnippet, enableSnippet] = useState(true);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '.5rem', flexGrow: '1' }}>
          <atlas-button size='small' variant='text'>
            Web Component
          </atlas-button>
          <atlas-button size='small' variant='text'>
            React
          </atlas-button>
          <atlas-button size='small' variant='text'>
            Vue
          </atlas-button>
        </div>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <atlas-button
            size='small'
            variant='text'
            style={{ padding: '0 0rem' }}
            onClick={(e) => {
              e.preventDefault();
              enableSnippet((state) => !state);
            }}
          >
            Source
          </atlas-button>
          <atlas-button
            size='small'
            variant='text'
            style={{ padding: '0 0rem' }}
            onClick={(e) => {
              e.preventDefault();
              enableSnippet((state) => !state);
            }}
          >
            Github
          </atlas-button>
        </div>
      </div>
      <Source language={language || 'jsx'} dark format={false} code={isSnippet ? snippet : example} />
    </>
  );
}
