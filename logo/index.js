import { Logo } from './logo.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-logo'))
    customElements.define('atlas-logo', Logo);
