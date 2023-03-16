import { Button } from './button';
import '../../theme/styles/button.css';

if (!customElements.get('atlas-button')) customElements.define('atlas-button', Button);
