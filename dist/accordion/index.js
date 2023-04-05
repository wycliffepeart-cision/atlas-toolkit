import { Accordion } from './accordion.js';
import '../tslib.es6-806de115.js';
import '../decorators/template.js';
import './template.js';

if (!customElements.get('atlas-accordion'))
    customElements.define('atlas-accordion', Accordion);
