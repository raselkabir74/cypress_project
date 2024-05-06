## E2E / Smoke Cypress Test for DSP

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or newer)
-   [NPM](https://www.npmjs.com/) (usually comes bundled with Node.js)

### Installation

1.  Install the dependencies:
       
    `npm install` 
    

## Running the Tests

Before you run the tests,  update the `cypress.env.json` file based on your environment. The scripts provided will automatically copy the right environment file to `cypress.env.json`.

Test exchange endpoint: https://--------/test_qa

### Local Environment

For debugging purpose run test within cypress app:
`npm run cy:open:local` 

Headless:
`npm run cy:run:local`

### Staging Environment

`npm run cy:open:stage` 
`npm run cy:run:stage`

### Prod Environment

`npm run cy:open:prod` 
`npm run cy:run:prod`

Currently stage tests are configured to run on [https://------.com](https://-------.com/), as this environment contains  `data-qa` attribute needed for end-to-end testing.

