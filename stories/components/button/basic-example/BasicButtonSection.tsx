import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { BasicButton } from './BasicButton';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

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