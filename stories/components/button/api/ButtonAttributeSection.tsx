import { Section } from '../Section';

export function ButtonAttributeSection() {
  return (
    <Section
      title='Button Attributes API'
      description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aliquid assumenda blanditiis, cum dignissimos dolor eius facere illo incidunt laudantium libero nihil numquam, odit pariatur reiciendis repellat sed tempora!'
    >
      <table className='sbdocs-table'>
        <thead>
          <tr>
            <th>Attributes</th>
            <th>Datatype</th>
            <th>Required</th>
            <th>Values</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>No</td>
            <td>true, false</td>
            <td>If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>No</td>
            <td>small, medium, large</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>variant</td>
            <td>string</td>
            <td>No</td>
            <td>text, contained, outlined</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>No</td>
            <td>primary, secondary, danger, success</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>left-adornment-align</td>
            <td>string</td>
            <td>No</td>
            <td>center, top, bottom</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>top-adornment-align</td>
            <td>string</td>
            <td>No</td>
            <td>center, left, right</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>right-adornment-align</td>
            <td>string</td>
            <td>No</td>
            <td>center, top, bottom</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
          <tr>
            <td>bottom-adornment-align</td>
            <td>string</td>
            <td>No</td>
            <td>left, center, right</td>
            <td>Specifies that the accordion should be disabled</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
