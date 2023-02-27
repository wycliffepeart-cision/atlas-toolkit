import { CSSProperties, PropsWithChildren } from 'react';

export function BasicAccordion() {
  return (
    <>
      <Stack>
        <AtlasAccordion
          expanded
          title='Accordion 1'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
        />

        <AtlasAccordion
          title='Accordion 2'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
        />

        <AtlasAccordion
          disabled
          title='Accordion 3'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus est eveniet exercitationem, itaque iusto maiores minus nemo sunt suscipit! Commodi delectus, error exercitationem laborum nisi numquam perferendis sapiente vitae.'
        />
      </Stack>
    </>
  );
}

const styles: CSSProperties = {
  padding: '1rem',
  borderRadius: '.5rem',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  lineHeight: "1.5rem"
};

interface AccordionComponentProps {
  title: string;
  content: string;
  disabled?: boolean;
  expanded?: boolean;
}

function AtlasAccordion({ title, content, disabled, expanded }: AccordionComponentProps) {
  return (
    <atlas-accordion expanded={expanded} disabled={disabled}>
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
