import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ButtonAdornment } from './ButtonAdornment';
import { SectionSourceControl } from '../SectionSourceControl';

export function ButtonAdornmentSection() {
  return (
    <Section
      title='Adornment'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ButtonAdornment />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}