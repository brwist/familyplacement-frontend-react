import NavigationActions from 'store/actions/NavigationActions'

const initialState = {
  isPlacement: false,
  isFamily: false,
  currentRoute: false,
}

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NavigationActions.SET_ACTIVE_ROUTE:
      return {
        ...state,
        ...action.payload,
      }
    case NavigationActions.RESET:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default navigationReducer
