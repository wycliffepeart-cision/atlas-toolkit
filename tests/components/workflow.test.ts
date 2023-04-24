import '../../src/component/workflow/workflow';

const WORKFLOW_TAG = 'atlas-workflow';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Workflow', () => {
  it('is correctly appended in the DOM', () => {
    const elem = document.createElement(WORKFLOW_TAG);
    document.body.appendChild(elem);

    (expect(elem) as any).toBeInTheDocument();
  });

  it('is matches snapshot', () => {
    const elem = document.createElement(WORKFLOW_TAG);
    document.body.appendChild(elem);

    (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });
});
