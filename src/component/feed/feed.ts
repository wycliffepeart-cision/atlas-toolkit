import FeedTemplate from './feed.html';
import { Template } from '../../decorators/template';

@Template(FeedTemplate)
export class Feed extends HTMLElement {}

if (!customElements.get('atlas-feed')) customElements.define('atlas-feed', Feed);