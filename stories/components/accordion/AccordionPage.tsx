import { SectionPage } from '../../docs/SectionPage';
import { BasicAccordionSection } from './basic-accordion-example/BasicAccordionSection';
import {ControlledAccordionSection} from "./controlled-accordion-example/ControlledAccordionSection";

export function AccordionPage() {
  return (
    <SectionPage
      title='Accordion'
      description={`
Component that can be used to create a clickable button on a webpage.
You can also add additional attributes to the button element to customize its appearance or behavior.
    `}
    >
      <BasicAccordionSection />
      <ControlledAccordionSection/>
    </SectionPage>
  );
}