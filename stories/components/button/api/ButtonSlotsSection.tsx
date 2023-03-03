import { Section } from '../../../docs/Section';

export function ButtonSlotsSection() {
  return (
    <Section
      title='Button Slots & Parts API'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid assumenda blanditiis, cum dignissimos dolor eius facere illo incidunt laudantium libero nihil numquam, odit pariatur reiciendis repellat sed tempora!'
    >
      <table className='sbdocs-table'>
        <thead>
          <tr>
            <th>Slots</th>
            <th>Parts</th>
            <th>Functionality</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>left-adornment</td>
            <td>left-adornment</td>
            <td>Slottable, Styllable</td>
            <td>Allow component to be slotted left of the main content and allow for styling using the css ::part selector</td>
          </tr>
          <tr>
            <td>top-adornment</td>
            <td>top-adornment</td>
            <td>Slottable, Styllable</td>
            <td>Allow component to be slotted top of the main content and allow for styling using the css ::part selector</td>
          </tr>
          <tr>
            <td>right-adornment</td>
            <td>right-adornment</td>
            <td>Slottable, Styllable</td>
            <td>Allow component to be slotted right of the main content and allow for styling using the css ::part selector</td>
          </tr>
          <tr>
            <td>bottom-adornment</td>
            <td>bottom-adornment</td>
            <td>Slottable, Styllable</td>
            <td>Allow component to be slotted bottom of the main content and allow for styling using the css ::part selector</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
