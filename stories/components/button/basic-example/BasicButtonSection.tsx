import { Section } from '../Section';
import { full, partial } from './snippt';
import { BasicButton } from './BasicButton';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { SectionSourceControl } from '../SectionSourceControl';

export function BasicButtonSection() {
  return (
    <Section
      title='Basic Button'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <BasicButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}