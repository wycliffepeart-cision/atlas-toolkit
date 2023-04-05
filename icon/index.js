import { Icon } from './icon.js';
import { iconMappings } from './mappings.js';
import '../tslib.es6-806de115.js';
import '../decorators/ShadowModeOpen.js';

Icon.mappings = iconMappings;
if (!customElements.get('atlas-icon'))
    customElements.define('atlas-icon', Icon);
