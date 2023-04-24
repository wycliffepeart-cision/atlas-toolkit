import { Feed } from './feed';

if (!customElements.get('atlas-feed')) customElements.define('atlas-feed', Feed);
