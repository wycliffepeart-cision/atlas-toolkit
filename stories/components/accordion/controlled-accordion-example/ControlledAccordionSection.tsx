import { full, partial } from './snippt';
import { Section } from '../../../docs/Section';
import { ControlledAccordion } from './ControlledAccordion';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

export function ControlledAccordionSection() {
  return (
    <Section
      title='Controlled Accordion'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <ControlledAccordion />
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}