import { SectionPage } from './SectionPage';
import { ButtonSlotsSection } from './api/ButtonSlotsSection';
import { ButtonPartsSection } from './api/ButtonPartsSection';
import { TextButtonSection } from './text-example/TextButtonSection';
import { BasicButtonSection } from './basic-example/BasicButtonSection';
import { OutlinedButtonSection } from './outlined-example/OutlinedButtonSection';
import { ContainedButtonSection } from './contained-example/ContainedButtonSection';

export function ButtonPage() {
  return (
    <SectionPage
      title='Atlas Button'
      description={`
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias aliquam, assumenda dolores eligendi hic libero minus 
    molestiae nesciunt nulla obcaecati odio omnis optio pariatur perferendis quos saepe totam unde. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Ab, alias aliquam, assumenda dolores eligendi hic libero minus molestiae nesciunt nulla obcaecati odio omnis optio pariatur perferendis quos saepe totam unde.
    `}
    >
      <BasicButtonSection />
      <TextButtonSection />
      <OutlinedButtonSection />
      <ContainedButtonSection />
      <ButtonPartsSection />
      <ButtonSlotsSection />
    </SectionPage>
  );
}
