import React from "react";
import {HTMLElement} from "happy-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'atlas-icon-home': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-icon-mail': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}