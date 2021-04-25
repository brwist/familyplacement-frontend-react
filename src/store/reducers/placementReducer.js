import PlacementActions from 'store/actions/PlacementActions'

const initialState = {
  placement: {
    isLoading: true,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
    data: {},
  },
  editPlacement: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
  totalPlacements: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
  createPlacement: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
}

const placementReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlacementActions.GET_PLACEMENTS:
      return {
        ...state,
        totalPlacements: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
          data: [],
        },
      }
    case PlacementActions.GET_PLACEMENTS_SUCCESS:
      return {
        ...state,
        totalPlacements: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: 'Placements Fetched Successfully',
          errorMessage: null,
          data: action.payload.placements,
        },
      }
    case PlacementActions.GET_PLACEMENTS_FAILED:
      return {
        ...state,
        totalPlacements: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
          data: [],
        },
      }
    case PlacementActions.GET_PLACEMENT:
      return {
        ...state,
        placement: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
          data: {},
        },
      }
    case PlacementActions.GET_PLACEMENT_SUCCESS:
      return {
        ...state,
        placement: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: 'Placement Fetched Successfully!',
          errorMessage: null,
          data: action.payload.placement,
        },
      }
    case PlacementActions.GET_PLACEMENT_FAILED:
      return {
        ...state,
        placement: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
          data: {},
        },
      }
    case PlacementActions.CREATE_PLACEMENT:
      return {
        ...state,
        createPlacement: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
        },
      }
    case PlacementActions.CREATE_PLACEMENT_SUCCESS:
      return {
        ...state,
        createPlacement: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: action.payload.successMessage,
          errorMessage: null,
        },
      }
    case PlacementActions.CREATE_PLACEMENT_FAILED:
      return {
        ...state,
        createPlacement: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
        },
      }
    case PlacementActions.EDIT_PLACEMENT:
      return {
        ...state,
        editPlacement: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
        },
      }
    case PlacementActions.EDIT_PLACEMENT_SUCCESS:
      return {
        ...state,
        editPlacement: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: action.payload.successMessage,
          errorMessage: null,
        },
      }
    case PlacementActions.EDIT_PLACEMENT_FAILED:
      return {
        ...state,
        editPlacement: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
        },
      }

    default:
      return state
  }
}

export default placementReducer
