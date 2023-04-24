import { Icon } from './icon';
import { iconMappings } from './mappings';

Icon.mappings = iconMappings;

if (!customElements.get('atlas-icon')) customElements.define('atlas-icon', Icon);
