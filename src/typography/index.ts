import './typography.css'
import { Typography } from './typography';

if (!customElements.get('atlas-typography')) customElements.define('atlas-typography', Typography);
