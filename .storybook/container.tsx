import { DocsContainer } from '@storybook/addon-docs';
import { BackToTop, TableOfContents } from 'storybook-docs-toc';

import { useEffect, useRef, useState } from 'react';

// AtlasUI

// "attachedCSFFile": {
//   "meta": {
//     "id": "components-button",
//       "title": "Components/Button",
//       "parameters": {
//       "fileName": "./stories/mdx/button.stories.mdx",
//         "tableOfContent": false,

export function Container({ children, ...props }) {
  // console.log('rest',  JSON.stringify(props, null, 2))
  console.log('props', props);
  const ref = useRef<HTMLElement>(null);
  const [tableOfContents, setTableOfContents] = useState<string[]>([]);
  const enable = props?.context?.attachedCSFFile?.meta?.parameters?.tableOfContent?.enable;
  console.log('enable', enable);
  useEffect(() => {
    const elements: NodeList = ref.current.querySelectorAll('h1, h2, h3, h4, h5, h6');

    setTableOfContents((state) => {
      elements.forEach((el) => state.push(el.textContent));

      return [...state];
    });
  }, []);

  return (
    <div className='my-container'>
      <DocsContainer context={{ ...props } as any} {...props}>
        <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
          <div style={{ flexGrow: 1 }}>
            <div ref={ref as any} style={{ maxWidth: '900px', margin: 'auto' }}>
              {children}
            </div>
          </div>
          {enable ? (
            <div
              className='.js-toc'
              style={{
                width: '240px',
                height: '100vh',
                borderLeft: '1px solid #eeeeee',
                backgroundColor: '#f5fbff',
                position: 'sticky',
                top: 0,
              }}
            >
              <ul className='atlas-toc'>
                {tableOfContents.map((value, i) => (
                  <li key={i}>
                    <a href={`#${(value.toLowerCase() as any).replaceAll(' ', '-')}`} className={`${false ? 'active' : ''}`} target='_self'>
                      {value}
                    </a>
                  </li>
                ))}
              </ul>

              {/* @ts-ignore */}
              <TableOfContents className='sbdocs sbdocs-toc--custom' />
              {/* @ts-ignore */}
              <BackToTop className='sbdocs sbdocs-top--custom' />
            </div>
          ) : null}
        </div>
      </DocsContainer>
    </div>
  );
}
