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
      description={`
      Button adornment is a decorative elements that can be added to a button to enhance its visual appeal, it can appear 
      at the left, top, right or bottom or the button to add more context and provided visual enhancements.
      
      While adornment can enhance the aesthetic appeal of a design, it is important to use it in moderation and to ensure that it does not distract from the overall function or message of the design.
      `}
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