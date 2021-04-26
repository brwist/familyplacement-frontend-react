import Axios from 'config/config'
import Path from 'config/Path'
import FamilyActions from 'store/actions/FamilyActions'
// import BrowserHistory from '../../History'

export default class FamilyMiddlewares {
  static getFamilies() {
    return async (dispatch) => {
      dispatch(FamilyActions.getFamilies())
      try {
        const response = await Axios.get(Path.GET_FAMILIES)
        return dispatch(
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
        return dispatch(
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
  static createFamily({ name, country, characteristics }) {
    return async (dispatch) => {
      dispatch(FamilyActions.createFamily())

      try {
        const response = await Axios.post(Path.CREATE_FAMILY, {
          name,
          country,
          characteristics,
        })

        dispatch(
          FamilyActions.createFamilySuccess({
            successMessage: response.data.message,
          }),
        )
        return dispatch(this.getFamilies())
      } catch (error) {
        dispatch(
          FamilyActions.createFamilyFailed({
            errorMessage: error.response.data.message,
          }),
        )
      }
    }
  }
  static editFamily({ id, name, country, characteristics }) {
    return async (dispatch) => {
      dispatch(FamilyActions.editFamily())
      try {
        const response = await Axios.put(Path.EDIT_FAMILY + id, {
          name,
          country,
          characteristics,
        })

        dispatch(
          FamilyActions.editFamilySuccess({
            successMessage: response.data.message,
          }),
        )
        return dispatch(this.getFamilies())
      } catch (error) {
        dispatch(
          FamilyActions.editFamilyFailed({
            errorMessage: error.response.data.message,
          }),
        )
      }
    }
  }
}
