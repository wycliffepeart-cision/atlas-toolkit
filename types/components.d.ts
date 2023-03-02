import React from 'react';
import {HTMLElement} from 'happy-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'atlas-icon-home': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-icon-mail': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-icon-chevron-down': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        disabled?: boolean;
        expanded?: boolean;
        onExpand?: () => void;
      };
      'atlas-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        href?: string,
        disabled?: boolean;
        size?: 'small' | 'medium' | 'large';
        'top-adornment'?: 'center' | 'left' | 'right',
        'bottom-adornment'?: 'center' | 'left' | 'right',
        variant?: 'outlined' | 'contained' | 'text'
      };
      'atlas-accordions': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {};
      'atlas-collapsable': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        expanded?: boolean;
        float?: string;
      };
      'atlas-accordion-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { disabled?: boolean };
      'atlas-typography': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
