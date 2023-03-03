import { full, partial } from './snippt';
import { Section } from '../../../docs/Section';
import { BasicAccordion } from './BasicAccordion';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

export function BasicAccordionSection() {
  return (
    <Section
      title='Basic Accordion'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <BasicAccordion />
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}