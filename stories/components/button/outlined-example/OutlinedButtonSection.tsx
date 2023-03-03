import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { SectionStack } from '../../../docs/SectionStack';
import { OutlinedButton } from './OutlinedButton';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

export function OutlinedButtonSection() {
  return (
    <Section
      title='Outlined Button'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <OutlinedButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}