import { SectionPage } from '../../docs/SectionPage';
import { ButtonSlotsSection } from './api/ButtonSlotsSection';
import { TextButtonSection } from './text-example/TextButtonSection';
import {SizedButtonSection} from "./size-example/SizedButtonSection";
import { ButtonAttributeSection } from './api/ButtonAttributeSection';
import { BasicButtonSection } from './basic-example/BasicButtonSection';
import {DefaultButtonSection} from "./default-example/DefaultButtonSection";
import { OutlinedButtonSection } from './outlined-example/OutlinedButtonSection';
import {ButtonAdornmentSection} from "./adornment-example/ButtonAdornmentSection";
import { ContainedButtonSection } from './contained-example/ContainedButtonSection';
import {ButtonTopAdornmentSection} from "./adornment-top-example/ButtonTopAdornmentSection";
import {ButtonLeftAdornmentSection} from "./adornment-left-example/ButtonLeftAdornmentSection";
import {ButtonRightAdornmentSection} from "./adornment-right-example/ButtonRightAdornmentSection";
import {ButtonBottomAdornmentSection} from "./adornment-bottom-example/ButtonBottomAdornmentSection";

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
      <ButtonAdornmentSection/>
      <ButtonLeftAdornmentSection/>
      <ButtonRightAdornmentSection/>
      <ButtonTopAdornmentSection/>
      <ButtonBottomAdornmentSection/>
      <ButtonAttributeSection />
      <ButtonSlotsSection />
    </SectionPage>
  );
}
