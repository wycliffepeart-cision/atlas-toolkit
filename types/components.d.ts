import React from 'react';
import { HTMLElement } from 'happy-dom';
import * as CSS from 'csstype';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'atlas-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-alert': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-application-frame': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-avatar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
      };
      'atlas-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        kind?: 'generic' | 'text';
        'box-type'?: 'secondary';
      };
      'atlas-button-set': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-chip-group': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-feed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name: 'chevronDownward';
      };
      'atlas-checkbox': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-input-chip-group': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-input-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-input-textarea': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-brand-logo': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-main-nav': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-main-nav-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'wh-number-display': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-profile-control': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-snackbar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-stepper': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-stepper-step': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-tile-board': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-tile-board-tile': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-workflow': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'atlas-workflow-step': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
