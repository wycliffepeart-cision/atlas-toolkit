import { Section } from '../Section';
import { full, partial } from './snippt';
import { SectionStack } from '../SectionStack';
import { SectionPreview } from '../SectionPreview';
import { ButtonTopAdornment } from './ButtonTopAdornment';
import { SectionSourceControl } from '../SectionSourceControl';

export function ButtonTopAdornmentSection() {
  return (
    <Section
      title='Top Adornment'
      description={`Basic buttons are useful for initiating simple actions or navigation within an application or website.`}
    >
      <SectionPreview shouldCenter>
        <SectionStack>
          <ButtonTopAdornment />
        </SectionStack>
      </SectionPreview>
      <SectionSourceControl language='jsx' example={full} snippet={partial} />
    </Section>
  );
}