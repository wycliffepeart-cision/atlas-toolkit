import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { TextButton } from './TextButton';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

export function TextButtonSection() {
  return (
    <Section
      title='Text Button'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <TextButton />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}