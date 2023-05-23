# Atlas Toolkit

This repository was created to consolidate `atlas-styles`, `atlas-raw-components` 
and `atlas-components` into one simple repository. The intent was to create a 
new formation that produce more optimize distribution, built in support for typescript and 
provided a better developer experience.

- [Installation](#Installation)
- [Usage](#Usage)
- [Typescript](#Typescript)
- [Testing](#Testing)
- [Cypress Component Testing](#Cypress-Component-Testing)
- [Building](#Building)

## Installation

```
npm i github:wycliffepeart-cision/atlas-toolkit#next
```

Target different version by targeting release tags:

> github:wycliffepeart-cision/atlas-toolkit#&lt;tag&gt;

## Usage

Import toolkit

```ts
import '@atlas/toolkit';
```

Import styles

```ts
import '@atlas/toolkit/assets/styles/index.css';
```

Individual components can be selected by specifying the component name:

```
import '@atlas/toolkit/components/<component-name>'
```

## Typescript

TypeScript is a statically typed superset of JavaScript that adds optional static typing, 
along with other features and enhancements, to JavaScript. It compiles down to plain JavaScript.

## Testing

```npm
npm test
```

It is primarily used to test the source code, including unit tests, integration tests,
and snapshot tests. Jest provides a comprehensive set of features and an intuitive API
that simplifies the process of writing and running tests.

To configure `jest` modification can be done to the `jest.config.ts` file. This `toolkit` 
is configured to support `typescript`, all test is written in a `.ts` file. 
The `babel.config` is used to enable the `typescript` support by utilising built 
in and community plugins.

## Cypress Component Testing

```npm
npm run cy:open
```

Cypress Component Testing provides a component workbench for you to quickly build
and test components from multiple front-end UI libraries — no matter how simple or complex.

The Test Runner is browser-based, allowing you to test not only your component's functionality
but also styles and appearance. You can visually see your component in action and interact with
it in the test runner:

The test configuration is done using multiple files.

- The `cypress.config.ts` is used to configure `cypress`.
- The `webpack.config.cjs` is used by cypress to build the solution.

## Building

```npm
npm run build
```

Rollup is the primary module bundler for the `toolkit`. It is designed to efficiently 
bundle the source code, enabling developers to create optimized and production-ready 
bundles for their projects. Rollup focuses on tree-shaking and creating smaller 
bundle sizes by eliminating unused code and optimizing the final output.