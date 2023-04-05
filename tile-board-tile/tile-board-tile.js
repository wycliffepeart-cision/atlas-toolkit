import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var TileBoardTileTemplate = "<template>\n  <slot part=\"body\"></slot>\n  <slot name=\"controls\" part=\"controls\"></slot>\n</template>\n";

let TileBoardTile = class TileBoardTile extends HTMLElement {
};
TileBoardTile = __decorate([
    Template(TileBoardTileTemplate)
], TileBoardTile);

export { TileBoardTile };
