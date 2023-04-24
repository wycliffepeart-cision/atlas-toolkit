import '../../src/component/workflow-step/workflow-step';

const WORKFLOW_STEP_TAG = 'atlas-workflow-step';

afterEach(() => {
  const elem = document.querySelector('body > *:first-child');
  elem?.remove();
});

describe('Workflow Step', () => {
  it('is correctly appended in the DOM', () => {
    const elem = document.createElement(WORKFLOW_STEP_TAG);
    document.body.appendChild(elem);

    (expect(elem) as any).toBeInTheDocument();
  });

  it('is matches snapshot', () => {
    const elem = document.createElement(WORKFLOW_STEP_TAG);
    document.body.appendChild(elem);

    (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });

  it('to respect having attributes ', () => {
    const elem = document.createElement(WORKFLOW_STEP_TAG);

    document.body.appendChild(elem);

    elem.toggleAttribute('hero', true);
    elem.toggleAttribute('active', true);

    (expect(elem.shadowRoot.innerHTML) as any).toMatchSnapshot();
  });
});
