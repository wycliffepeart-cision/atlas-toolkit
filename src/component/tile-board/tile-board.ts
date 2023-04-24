import { Template } from '../../decorators/template';
import TileBoardTemplate from './tile-board.html';

@Template(TileBoardTemplate)
export class TileBoard extends HTMLElement {}

if (!customElements.get('atlas-tile-board')) customElements.define('atlas-tile-board', TileBoard);
