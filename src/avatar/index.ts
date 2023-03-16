import { Avatar } from './avatar';
import '../../theme/styles/avatar.css';

if (!customElements.get('atlas-avatar')) customElements.define('atlas-avatar', Avatar);
