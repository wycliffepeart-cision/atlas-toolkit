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
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
      />

      <AtlasAccordion
        title='Accordion 2'
        onExpanded={handlePanel2}
        expanded={state === 'panel-2'}
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
      />

      <AtlasAccordion
        disabled
        title='Accordion 3'
        onExpanded={handlePanel3}
        expanded={state === 'panel-3'}
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
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
