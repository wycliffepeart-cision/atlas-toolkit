import { Template } from '../../decorators/template';
import ProfileControlTemplate from './profile-control.html';

@Template(ProfileControlTemplate)
export class ProfileControl extends HTMLElement {}

if (!customElements.get('atlas-profile-control')) customElements.define('atlas-profile-control', ProfileControl);