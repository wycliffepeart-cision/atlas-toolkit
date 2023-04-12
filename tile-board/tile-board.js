import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var TileBoardTemplate = "<template>\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot part=\"dashboard\"></slot>\n</template>\n";

let TileBoard = class TileBoard extends HTMLElement {
};
TileBoard = __decorate([
    Template(TileBoardTemplate)
], TileBoard);

export { TileBoard };
