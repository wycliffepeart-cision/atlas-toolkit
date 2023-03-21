import SnackbarTemplate from './snackbar.html';
import { Template } from '../decorators/template';

@Template(SnackbarTemplate)
export class Snackbar extends HTMLElement {}
