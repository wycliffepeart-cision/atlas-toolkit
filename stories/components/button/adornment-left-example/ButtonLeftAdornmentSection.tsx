import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { ButtonLeftAdornment } from './ButtonLeftAdornment';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

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