import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ContainedButton } from './ContainedButton';
import { SectionSourceControl } from '../SectionSourceControl';

export function ContainedButtonSection() {
  return (
    <Section
      title='Contained Button'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ContainedButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}