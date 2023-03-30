import '../../src/tile-board-tile';

const TILE_BOARD_TILE_TAG = 'atlas-tile-board-tile';
const getShadowDomContent = (element) => element.shadowRoot.innerHTML;

describe('Tile Board', () => {
  it('atlas-tile-board-tile exists', async () => {
    await customElements.whenDefined(TILE_BOARD_TILE_TAG);
    const dashboardElement = document.createElement(TILE_BOARD_TILE_TAG);
    document.body.appendChild(dashboardElement);

    (expect(dashboardElement) as any).toBeInTheDocument();
  });

  it('atlas-tile-board-tile selectable', async () => {
    await customElements.whenDefined(TILE_BOARD_TILE_TAG);
    const dashboardElement = document.createElement(TILE_BOARD_TILE_TAG);
    document.body.appendChild(dashboardElement);

    const selectedDashboardElement = document.querySelector(TILE_BOARD_TILE_TAG);
    (expect(selectedDashboardElement) as any).toBeInTheDocument();
  });

  it('atlas-tile-board-tile identity', async () => {
    await customElements.whenDefined(TILE_BOARD_TILE_TAG);
    const dashboardElement = document.createElement(TILE_BOARD_TILE_TAG);
    document.body.appendChild(dashboardElement);

    (expect(dashboardElement) as any).toContainHTML('<atlas-tile-board-tile></atlas-tile-board-tile>');
    (expect(dashboardElement) as any).toBeEmptyDOMElement();
  });

  it('supports child elements', async () => {
    await customElements.whenDefined(TILE_BOARD_TILE_TAG);
    const parentElement = document.createElement(TILE_BOARD_TILE_TAG);
    document.body.appendChild(parentElement);

    const romanNumerals = ['I', 'II', 'III', 'IV'];
    romanNumerals
      .map((numeral) => ({ numeral, element: document.createElement('div') }))
      .map(({ numeral, element }) => {
        const elementCopy = element;
        elementCopy.textContent = numeral;
        return elementCopy;
      })
      .forEach((element) => parentElement.appendChild(element));

    (expect(parentElement.childElementCount) as any).toEqual(romanNumerals.length);

    (expect(parentElement) as any).toContainHTML(
      '<atlas-tile-board-tile><div>I</div><div>II</div><div>III</div><div>IV</div></atlas-tile-board-tile>'
    );
    (expect(parentElement.innerHTML) as any).toMatchSnapshot('<div>I</div><div>II</div><div>III</div><div>IV</div>');
  });

});
