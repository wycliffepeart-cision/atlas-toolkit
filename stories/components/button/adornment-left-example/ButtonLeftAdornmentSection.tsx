import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ButtonLeftAdornment } from './ButtonLeftAdornment';
import { SectionSourceControl } from '../SectionSourceControl';

export function ButtonLeftAdornmentSection() {
  return (
    <Section
      title='Left Adornment'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ButtonLeftAdornment />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}