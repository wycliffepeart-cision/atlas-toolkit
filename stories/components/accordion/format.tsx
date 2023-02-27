// import Highlight from 'react-highlight';
import prettier from 'prettier/standalone';
import parserTypescript from 'prettier/parser-typescript';
import Highlight, {defaultProps} from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/vsLight';

// import  'prismjs/themes/prism-dark.css'

export const formatTypescript = () =>
  prettier.format(
    `
import { CSSProperties, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

export function ControlledAccordion() {
  const [state, setState] = useState<string>('panel-1');

  const handlePanel1 = useCallback(() => setState('panel-1'), []);
  const handlePanel2 = useCallback(() => setState('panel-2'), []);
  const handlePanel3 = useCallback(() => setState('panel-3'), []);

  return (
    <Stack>
      <AtlasAccordion
        title='Accordion 1'
        onExpanded={handlePanel1}
        expanded={state === 'panel-1'}
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem.'
      />
    
      <AtlasAccordion
        title='Accordion 2'
        onExpanded={handlePanel2}
        expanded={state === 'panel-2'}
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem.'
      />
    
      <AtlasAccordion
        disabled
        title='Accordion 3'
        onExpanded={handlePanel3}
        expanded={state === 'panel-3'}
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem.'
      />
    </Stack>
  );
}

const styles: CSSProperties = {
  padding: '1rem',
  borderRadius: '.5rem',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
};

interface AccordionComponentProps {
  title: string;
  content: string;
  disabled?: boolean;
  expanded: boolean;
  onExpanded: () => void;
}

function AtlasAccordion({ expanded, onExpanded, title, content, disabled }: AccordionComponentProps) {
  const ref = useRef<{ button: HTMLButtonElement }>();

  useEffect(() => {
    if (ref.current) ref.current.button.addEventListener('click', onExpanded);

    return () => {
      if (ref.current) ref.current.button.removeEventListener('click', onExpanded);
    };
  }, []);

  return (
    <atlas-accordion ref={ref as any} expanded={expanded} disabled={disabled}>
      <atlas-typography slot='title'>{title}</atlas-typography>
      <atlas-icon-chevron-down slot='icon' />
      <div slot='content' style={styles}>
        {content}
      </div>
    </atlas-accordion>
  );
}

function Stack({ children }: PropsWithChildren) {
  return <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>;
}

  `,
    {
      parser: 'typescript',
      plugins: [parserTypescript],
      tabWidth: 4,
      jsxSingleQuote: true,
      singleQuote: true,
      printWidth: 140,
    }
  );

export function DemoCode() {
  return <Highlight {...defaultProps} theme={dracula} code={formatTypescript()} language="tsx">
    {({className, style, tokens, getLineProps, getTokenProps}) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  // return  Prism.highlight(formatTypescript(), Prism.languages.javascript, 'javascript');
  // return <Highlight language='typescript'>{formatTypescript()}</Highlight>;
  // return <pre><code className="language-typescript">{formatTypescript()}</code></pre>
}