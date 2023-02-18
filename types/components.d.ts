import {HTMLElement} from "happy-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'atlas-icon-home': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Normal web component
      'atlas-icon-mail': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Web component extended from input
    }
  }
}