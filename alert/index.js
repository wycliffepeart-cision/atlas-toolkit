import { Alert } from './alert.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-alert'))
    customElements.define('atlas-alert', Alert);