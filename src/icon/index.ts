import { Icon } from './icon';
import { iconMappings } from './mappings';
import '../../theme/styles/icon.css'

Icon.mappings = iconMappings;

if (!customElements.get('atlas-icon')) customElements.define('atlas-icon', Icon);
