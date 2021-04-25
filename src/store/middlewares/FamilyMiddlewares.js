import Axios from 'config/config'
import Path from 'config/Path'
import FamilyActions from 'store/actions/FamilyActions'

export default class FamilyMiddlewares {
  static getFamilies() {
    return async (dispatch) => {
      dispatch(FamilyActions.getFamilies())
      try {
        const response = await Axios.get(Path.GET_FAMILIES)
        dispatch(
          FamilyActions.getFamiliesSuccess({
            families: response.data.families,
          }),
        )
      } catch (error) {
        dispatch(
          FamilyActions.getFamiliesFailed({
            errorMessage: error?.response?.data?.message,
          }),
        )
      }
    }
  }

  static getFamily(id) {
    return async (dispatch) => {
      dispatch(FamilyActions.getFamily())
      try {
        const response = await Axios.get(Path.GET_FAMILY + id)
        console.log('response', response)
        dispatch(
          FamilyActions.getFamilySuccess({ family: response.data.family }),
        )
      } catch (error) {
        dispatch(
          FamilyActions.getFamilyFailed({
            errorMessage: error?.response?.data?.message,
          }),
        )
      }
    }
  }
  static createFamilies() {}
  static editFamilies() {}
}
