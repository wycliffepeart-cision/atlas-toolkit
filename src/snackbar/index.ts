import { Snackbar } from './snackbar';

if (!customElements.get('atlas-snackbar')) customElements.define('atlas-snackbar', Snackbar);
