import { Section } from '../Section';
import { full, partial } from './snippt';
import { SizedButton } from './SizedButton';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { SectionSourceControl } from '../SectionSourceControl';

export function SizedButtonSection() {
  return (
    <Section title='Size' description={`For larger or smaller buttons, use the size prop.`}>
      <SectionPreview shouldCenter>
        <SectionStack>
          <SizedButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}