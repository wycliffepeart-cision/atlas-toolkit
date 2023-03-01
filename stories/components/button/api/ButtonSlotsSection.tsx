import {Section} from "../Section";

export function ButtonSlotsSection() {
  return (
    <Section
    title="Button Slots API"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid assumenda blanditiis, cum dignissimos dolor eius facere illo incidunt laudantium libero nihil numquam, odit pariatur reiciendis repellat sed tempora!"
    >
      <table className='sbdocs-table'>
        <thead>
        <tr>
          <th>Props</th>
          <th>Datatype</th>
          <th>Required</th>
          <th>Values</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>expended</td>
          <td>boolean</td>
          <td>No</td>
          <td>true, false</td>
          <td>If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td>No</td>
          <td>true, false</td>
          <td>Specifies that the accordion should be disabled</td>
        </tr>
        </tbody>
      </table>
    </Section>
  );
}
