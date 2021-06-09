const initialState = {
  age: 20,
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case 'AGE_UP':
      newState.age += action.value
      newState.loading = false
      break

    case 'AGE_DOWN':
      newState.age -= action.value
      break

    case 'LOADING':
      newState.loading = true
      break

    default:
      newState.age = 20
  }
  return newState
}

export default reducer
