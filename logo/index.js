import { Logo } from './logo.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';

if (!customElements.get('atlas-brand-logo'))
    customElements.define('atlas-brand-logo', Logo);
