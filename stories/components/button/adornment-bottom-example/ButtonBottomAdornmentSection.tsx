import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { ButtonBottomAdornment } from './ButtonBottomAdornment';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

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