import { combineReducers } from 'redux'
import placementReducer from './reducers/placementReducer'
import familyReducer from './reducers/familyReducer'
import navigationReducer from './reducers/NavigationActions'

const appReducer = combineReducers({
  placements: placementReducer,
  families: familyReducer,
  navigation: navigationReducer,
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
