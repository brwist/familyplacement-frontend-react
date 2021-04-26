import Axios from 'config/config'
import Path from 'config/Path'
import PlacementActions from 'store/actions/PlacementActions'
// import BrowserHistory from '../../History'

export default class PlacementMiddlewares {
  static getPlacements() {
    return async (dispatch) => {
      dispatch(PlacementActions.getPlacements())
      try {
        const response = await Axios.get(Path.GET_PLACEMENTS)
        return dispatch(
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
        return dispatch(
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
  static createPlacement({ name, country, criteria }) {
    return async (dispatch) => {
      const isCriteriaError =
        Object.keys(criteria).filter((key) => criteria[key]).length < 1
      if (isCriteriaError) {
        return dispatch(
          PlacementActions.createPlacementFailed({
            errorMessage: 'Kindly Check atleast one criteria',
          }),
        )
      }
      dispatch(PlacementActions.createPlacement())
      try {
        const response = await Axios.post(Path.CREATE_PLACEMENT, {
          name,
          country,
          criteria,
        })

        dispatch(
          PlacementActions.createPlacementSuccess({
            successMessage: response.data.message,
          }),
        )
        return dispatch(this.getPlacements())
        // BrowserHistory.push('/placements')
      } catch (error) {
        dispatch(
          PlacementActions.createPlacementFailed({
            errorMessage: error.response.data.message,
          }),
        )
      }
    }
  }
  static editPlacement({ id, name, country, criteria }) {
    return async (dispatch) => {
      const isCriteriaError =
        Object.keys(criteria).filter((key) => criteria[key]).length < 1
      if (isCriteriaError) {
        return dispatch(
          PlacementActions.editPlacementFailed({
            errorMessage: 'Kindly Check atleast one criteria',
          }),
        )
      }
      dispatch(PlacementActions.editPlacement())
      try {
        const response = await Axios.put(Path.EDIT_PLACEMENT + id, {
          name,
          country,
          criteria,
        })

        dispatch(
          PlacementActions.editPlacementSuccess({
            successMessage: response.data.message,
          }),
        )
        return dispatch(this.getPlacements())
      } catch (error) {
        dispatch(
          PlacementActions.editPlacementFailed({
            errorMessage: error.response.data.message,
          }),
        )
      }
    }
  }
}
