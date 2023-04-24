import FeedTemplate from './feed.html';
import { Template } from '../../decorators/template';

@Template(FeedTemplate)
export class Feed extends HTMLElement {}
