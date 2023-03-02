import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ButtonBottomAdornment } from './ButtonBottomAdornment';
import { SectionSourceControl } from '../SectionSourceControl';

export function ButtonBottomAdornmentSection() {
  return (
    <Section
      title='Bottom Adornment'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ButtonBottomAdornment />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}