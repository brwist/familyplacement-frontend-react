export default class PlacementActions {
  static GET_PLACEMENTS = 'GET_PLACEMENTS'
  static GET_PLACEMENTS_SUCCESS = 'GET_PLACEMENTS_SUCCESS'
  static GET_PLACEMENTS_FAILED = 'GET_PLACEMENTS_FAILED'
  static GET_PLACEMENT = 'GET_PLACEMENT'
  static GET_PLACEMENT_SUCCESS = 'GET_PLACEMENT_SUCCESS'
  static GET_PLACEMENT_FAILED = 'GET_PLACEMENT_FAILED'
  static CREATE_PLACEMENT = 'CREATE_PLACEMENT'
  static CREATE_PLACEMENT_SUCCESS = 'CREATE_PLACEMENT_SUCCESS'
  static CREATE_PLACEMENT_FAILED = 'CREATE_PLACEMENT_FAILED'
  static EDIT_PLACEMENT = 'EDIT_PLACEMENT'
  static EDIT_PLACEMENT_SUCCESS = 'EDIT_PLACEMENT_SUCCESS'
  static EDIT_PLACEMENT_FAILED = 'EDIT_PLACEMENT_FAILED'

  static getPlacements() {
    return {
      type: this.GET_PLACEMENTS,
    }
  }

  static getPlacementsSuccess({ placements }) {
    return {
      type: this.GET_PLACEMENTS_SUCCESS,
      payload: { placements },
    }
  }

  static getPlacementsFailed({ errorMessage }) {
    return {
      type: this.GET_PLACEMENTS_FAILED,
      payload: { errorMessage },
    }
  }

  static getPlacement() {
    return {
      type: this.GET_PLACEMENT,
    }
  }

  static getPlacementSuccess({ placement }) {
    return {
      type: this.GET_PLACEMENT_SUCCESS,
      payload: { placement },
    }
  }
  static getPlacementFailed({ errorMessage }) {
    return {
      type: this.GET_PLACEMENT_FAILED,
      payload: { errorMessage },
    }
  }

  static createPlacement() {
    return {
      type: this.CREATE_PLACEMENT,
    }
  }

  static createPlacementSuccess({ successMessage }) {
    return {
      type: this.CREATE_PLACEMENT_SUCCESS,
      payload: { successMessage },
    }
  }

  static createPlacementFailed({ errorMessage }) {
    return {
      type: this.CREATE_PLACEMENT_FAILED,
      payload: { errorMessage },
    }
  }

  static editPlacement() {
    return {
      type: this.EDIT_PLACEMENT,
    }
  }

  static editPlacementSuccess({ successMessage }) {
    return {
      type: this.EDIT_PLACEMENT_SUCCESS,
      payload: { successMessage },
    }
  }

  static editPlacementFailed({ errorMessage }) {
    return {
      type: this.EDIT_PLACEMENT_FAILED,
      payload: { errorMessage },
    }
  }
}
