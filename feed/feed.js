import { _ as __decorate } from '../tslib.es6-806de115.js';
import { Template } from '../decorators/template.js';

var FeedTemplate = "<template>\n  <slot name=\"prefix\" part=\"prefix\"></slot>\n  <slot name=\"filter\" part=\"filter\"></slot>\n  <slot name=\"body\" part=\"body\"></slot>\n</template>\n";

let Feed = class Feed extends HTMLElement {
};
Feed = __decorate([
    Template(FeedTemplate)
], Feed);

export { Feed };