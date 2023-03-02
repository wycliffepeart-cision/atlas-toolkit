import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ButtonRightAdornment } from './ButtonRightAdornment';
import { SectionSourceControl } from '../SectionSourceControl';

export function ButtonRightAdornmentSection() {
  return (
    <Section
      title='Right Adornment'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ButtonRightAdornment />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}