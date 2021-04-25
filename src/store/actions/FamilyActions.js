export default class FamilyActions {
  static GET_FAMILIES = 'GET_FAMILIES'
  static GET_FAMILIES_SUCCESS = 'GET_FAMILIES_SUCCESS'
  static GET_FAMILIES_FAILED = 'GET_FAMILIES_FAILED'
  static GET_FAMILY = 'GET_FAMILY'
  static GET_FAMILY_SUCCESS = 'GET_FAMILY_SUCCESS'
  static GET_FAMILY_FAILED = 'GET_FAMILY_FAILED'
  static CREATE_FAMILY = 'CREATE_FAMILY'
  static CREATE_FAMILY_SUCCESS = 'CREATE_FAMILY_SUCCESS'
  static CREATE_FAMILY_FAILED = 'CREATE_FAMILY_FAILED'
  static EDIT_FAMILY = 'EDIT_FAMILY'
  static EDIT_FAMILY_SUCCESS = 'EDIT_FAMILY_SUCCESS'
  static EDIT_FAMILY_FAILED = 'EDIT_FAMILY_FAILED'

  static getFamilies() {
    return {
      type: this.GET_FAMILIES,
    }
  }

  static getFamiliesSuccess({ families }) {
    return {
      type: this.GET_FAMILIES_SUCCESS,
      payload: { families },
    }
  }

  static getFamiliesFailed({ errorMessage }) {
    return {
      type: this.GET_FAMILIES_FAILED,
      payload: { errorMessage },
    }
  }

  static getFamily() {
    return {
      type: this.GET_FAMILY,
    }
  }

  static getFamilySuccess({ family }) {
    return {
      type: this.GET_FAMILY_SUCCESS,
      payload: { family },
    }
  }
  static getFamilyFailed({ errorMessage }) {
    return {
      type: this.GET_FAMILY_FAILED,
      payload: { errorMessage },
    }
  }

  static createFamily() {
    return {
      type: this.CREATE_FAMILY,
    }
  }

  static createFamilySuccess({ successMessage }) {
    return {
      type: this.CREATE_FAMILY_SUCCESS,
      payload: { successMessage },
    }
  }

  static createFamilyFailed({ errorMessage }) {
    return {
      type: this.CREATE_FAMILY_FAILED,
      payload: { errorMessage },
    }
  }

  static editFamily() {
    return {
      type: this.EDIT_FAMILY,
    }
  }

  static editFamilySuccess({ successMessage }) {
    return {
      type: this.EDIT_FAMILY_SUCCESS,
      payload: { successMessage },
    }
  }

  static editFamilyFailed({ errorMessage }) {
    return {
      type: this.EDIT_FAMILY_FAILED,
      payload: { errorMessage },
    }
  }
}
