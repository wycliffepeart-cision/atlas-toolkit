import { Section } from '../../../docs/Section';
import { full, partial } from './snippt';
import { SectionStack } from '../../../docs/SectionStack';
import { SectionPreview } from '../../../docs/SectionPreview';
import { ButtonTopAdornment } from './ButtonTopAdornment';
import { SectionSourceControl } from '../../../docs/SectionSourceControl';

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