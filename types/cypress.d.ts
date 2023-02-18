import {mount} from 'cypress/react18';

declare global {

  namespace Cypress {

    interface cy {
      mount: typeof mount;

    }
  }
}

//# sourceMappingURL=index.d.ts.map

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {

  namespace Cypress {

    interface cy {
      mount: typeof mount;

    }

    interface Chainable {
      mount: typeof mount;
    }
  }
}