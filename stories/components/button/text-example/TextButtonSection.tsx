import { Section } from '../Section';
import { full, partial } from './snippt';
import { TextButton } from './TextButton';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { SectionSourceControl } from '../SectionSourceControl';

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