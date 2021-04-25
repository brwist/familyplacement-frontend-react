import Axios from 'config/config'
import Path from 'config/Path'
import PlacementActions from 'store/actions/PlacementActions'

export default class PlacementMiddlewares {
  static getPlacements() {
    return async (dispatch) => {
      dispatch(PlacementActions.getPlacements())
      try {
        const response = await Axios.get(Path.GET_PLACEMENTS)
        console.log('response >>>', response.data)
        dispatch(
          PlacementActions.getPlacementsSuccess({
            placements: response.data.placements,
          }),
        )
      } catch (error) {
        dispatch(
          PlacementActions.getPlacementsFailed({
            errorMessage: error?.response?.data?.message,
          }),
        )
      }
    }
  }

  static getPlacement(id) {
    return async (dispatch) => {
      dispatch(PlacementActions.getPlacement())
      try {
        const response = await Axios.get(Path.GET_PLACEMENT + id)
        dispatch(
          PlacementActions.getPlacementSuccess({
            placement: response.data.placement,
          }),
        )
      } catch (error) {
        dispatch(
          PlacementActions.getPlacementFailed({
            errorMessage: error?.response?.data?.message,
          }),
        )
      }
    }
  }
  static createPlacements() {}
  static editPlacements() {}
}
