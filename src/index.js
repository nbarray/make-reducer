export default (initialState, reducers) => (state = initialState, action) => {
  const reducer = reducers[action.type]
  if (reducer) {
    if (typeof reducer !== 'function') {
      return reducer
    }
    return reducer(state, action)
  } else {
    if (reducers['default']) return reducers['default'](state, action)
    return state
  }
}
