import '../../src/chip-group';

const ATLAS_CHIP_GROUP_TAG = 'atlas-chip-group';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

const setupElement = async () => {
  await customElements.whenDefined(ATLAS_CHIP_GROUP_TAG);
  const chipGRoupElement = document.createElement(ATLAS_CHIP_GROUP_TAG);
  document.body.appendChild(chipGRoupElement);

  return chipGRoupElement;
};

afterEach(() => {
  const element = document.querySelector(ATLAS_CHIP_GROUP_TAG);
  if (element) {
    element.remove();
  }
});

describe('Atlas Chip Group', () => {
  it('is correctly appended in the DOM', async () => {
    const chipGRoupElement = await setupElement();

   ( expect(chipGRoupElement) as any).toBeInTheDocument();
  });

  it('is capable of being selected', async () => {
    await setupElement();

    const selectedElement = document.querySelector(ATLAS_CHIP_GROUP_TAG);
    (expect(selectedElement) as any).toBeInTheDocument();
  });

  it('has the correct content when created', async () => {
    const chipGRoupElement = await setupElement();

    (expect(chipGRoupElement) as any).toContainHTML('<atlas-chip-group></atlas-chip-group>');
    (expect(chipGRoupElement) as any).toBeEmptyDOMElement();
    (expect(getShadowDomContent(chipGRoupElement)) as any).toMatchSnapshot();
  });

});
