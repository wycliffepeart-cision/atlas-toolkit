import { SectionPage } from './SectionPage';
import { ButtonSlotsSection } from './api/ButtonSlotsSection';
import { TextButtonSection } from './text-example/TextButtonSection';
import { BasicButtonSection } from './basic-example/BasicButtonSection';
import { OutlinedButtonSection } from './outlined-example/OutlinedButtonSection';
import { ContainedButtonSection } from './contained-example/ContainedButtonSection';
import { ButtonAttributeSection } from './api/ButtonAttributeSection';
import {SizedButtonSection} from "./size-example/SizedButtonSection";
import {DefaultButtonSection} from "./default-example/DefaultButtonSection";

export function ButtonPage() {
  return (
    <SectionPage
      title='Atlas Button'
      description={`
Component that can be used to create a clickable button on a webpage.
You can also add additional attributes to the button element to customize its appearance or behavior.
    `}
    >
      <DefaultButtonSection/>
      <BasicButtonSection />
      <TextButtonSection />
      <OutlinedButtonSection />
      <ContainedButtonSection />
      <SizedButtonSection/>
      <ButtonAttributeSection />
      <ButtonSlotsSection />
    </SectionPage>
  );
}
