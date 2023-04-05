import { NumberDisplay } from './number-display.js';
import './abbreviate-number.js';

if (!customElements.get('wh-number-display'))
    customElements.define('wh-number-display', NumberDisplay);
