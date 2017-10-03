# reducr

A simple helper function to create Redux-like reducers ⚙️

# Install

`yarn add reducr`
or
`npm install reducr`

# Usage

```js
  import reducr from 'reducr'

  // You can use 3 syntaxes to define a reducing behaviour:
  // Either use a function:
  //   (prevState, action) => nextState
  // Or just the nextState if it does not depends on the prevState/action
  //   nextState
  //
  // The last one is for the default case:
  //
  // If nothing is specified, prevState is return.
  // Else if the key 'default' is specified, it is used for any unspecified
  // action.type

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
