import { Feed } from './feed.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-feed'))
    customElements.define('atlas-feed', Feed);
