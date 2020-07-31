# Ionic Framework React Data Attributes Issue

## Issue

If `data` attributes are added to Ionic Framework components, they will not render in the DOM tree unless a string value is assigned to them.

The following `data` attributes will not render in the DOM:

- `data-number-value={42}`
- `data-no-value-needed`

However, the following data attribute will render in the DOM:

- `data-explicit-string-value="myValue"`
- `data-variable-string-value={myStringTypedVariable}`

When using standard HTML tags, the data attributes will be rendered in the DOM.

## Relevant Code

`src/components/ExploreContainer.tsx` has been modified to reflect the issue listed above, capturing the behavior on both Ionic Components and standard HTML tags.
