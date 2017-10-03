# reducr

A simple helper function to create Redux-like reducers ⚙️

# Install

`yarn add reducr`
or
`npm install reducr`

# Usage

```js
  import reducr from 'reducr'

  // The first agument for reducr() is the initial state (used when undefined
  // is passed as the prevState)
  // You can use 3 syntaxes to define a reducing behaviour:
  // Either use a function:
  //   (prevState, action) => nextState
  // Or just the nextState if it does not depend on the prevState/action
  //   nextState
  //
  // The last one is for the default case:
  //
  // If the key 'default' is specified, it is used to reduce any unspecified
  // action.type
  // Else, if no 'default' key is specified, prevState is returned.

  // Example:
  const counterReducer = reducr(0, {
    'INC': (prevState, action) => (prevState + 1),
    'DEC': (prevState, action) => (prevState - 1),
    'RESET': 0
  });

  const initialState = undefined;
  const state1 = counterReducer(initialState, 'INC')
  // console.log(state1) -> 1
  const state2 = counterReducer(state1, 'DEC')
  // console.log(state2) -> 0
  const state3 = counterReducer(42, 'RESET')
  // console.log(state3) -> 0
```
