// import Highlight from 'react-highlight';
import prettier from 'prettier/standalone';
import parserTypescript from 'prettier/parser-typescript';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/vsDark';
import { PropsWithChildren, useState } from 'react';

// import  'prismjs/themes/prism-dark.css'

export const formatTypescript = () =>
  prettier.format(
    `
import { PropsWithChildren } from 'react';

export function BasicAccordion() {
  return (
    <Stack>
      <atlas-accordion>
        <button slot='header'>
          <atlas-typography>Accordion 1</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion>
        <button slot='header'>
          <atlas-typography>Accordion 2</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
      <atlas-accordion disabled>
        <button slot='header'>
          <atlas-typography>Disabled Accordion</atlas-typography>
          <atlas-icon-chevron-down />
        </button>
        <atlas-collapsable slot='collapsable'>
          <div
            style={{
              margin: '0 1rem 1rem',
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi
            eos esse explicabo, hic illo ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo
            ipsa necessitatibus perspiciatis reprehenderit sunt totam ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus, ad alias aliquam autem consequuntur culpa dolorum eligendi eos esse explicabo, hic illo ipsa necessitatibus
            perspiciatis reprehenderit sunt totam ut voluptas.
          </div>
        </atlas-collapsable>
      </atlas-accordion>
    </Stack>
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

export function DemoCode({ children }: PropsWithChildren) {
  const [state, setState] = useState(false);
  return (
    <div style={{ border: '1px solid #eee', overflow: 'hidden', borderRadius: '.5rem' }}>
      {children}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee',
          borderRadius: '0rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', flexGrow: '1', padding: '1rem' }}>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              setState((state) => !state);
            }}
          >
            React
          </a>
          <a href='#'>Vue</a>
          <a href='#'>Web Component</a>
        </div>
        <div style={{ padding: '0 1rem' }}>
          <button>Copy</button>
        </div>
      </div>
      <atlas-collapsable expanded={state}>
        <div style={{ maxHeight: '600px', overflow: 'scroll' }}>
          <div style={{ width: '2000px' }}>
            <Highlight {...defaultProps} theme={dracula} code={formatTypescript()} language='tsx'>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </atlas-collapsable>
    </div>
  );
  // return  Prism.highlight(formatTypescript(), Prism.languages.javascript, 'javascript');
  // return <Highlight language='typescript'>{formatTypescript()}</Highlight>;
  // return <pre><code className="language-typescript">{formatTypescript()}</code></pre>
}
