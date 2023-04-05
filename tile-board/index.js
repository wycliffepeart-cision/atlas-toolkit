import { TileBoard } from './tile-board.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-tile-board'))
    customElements.define('atlas-tile-board', TileBoard);
