import { Template } from '../../decorators/template';
import TileBoardTileTemplate from './tile-board-tile.html';

@Template(TileBoardTileTemplate)
export class TileBoardTile extends HTMLElement {}

if (!customElements.get('atlas-tile-board-tile')) customElements.define('atlas-tile-board-tile', TileBoardTile);
