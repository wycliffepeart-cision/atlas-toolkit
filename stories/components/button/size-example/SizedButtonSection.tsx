import { full, partial } from './snippt';
import { SizedButton } from './SizedButton';
import { Section } from '../../../docs/Section';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

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