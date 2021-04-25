import { combineReducers } from 'redux'
import placementReducer from './reducers/placementReducer'
import familyReducer from './reducers/familyReducer'

const appReducer = combineReducers({
  placements: placementReducer,
  families: familyReducer,
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer
