import './button.css';
import { Button } from './Button';

if (!customElements.get('atlas-button')) customElements.define('atlas-button', Button);
