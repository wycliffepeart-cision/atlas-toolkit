import { Section } from '../Section';
import { full, partial } from './snippt';
import { DefaultButton } from './DefaultButton';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { SectionSourceControl } from '../SectionSourceControl';

export function DefaultButtonSection() {
  return (
    <Section
      title='Default Button'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <DefaultButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}