import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { OutlinedButton } from './OutlinedButton';
import { SectionPreview } from '../SectionPreview';
import { SectionSourceControl } from '../SectionSourceControl';

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