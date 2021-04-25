import FamilyActions from 'store/actions/FamilyActions'

const initialState = {
  family: {
    isLoading: true,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
    data: {},
  },
  editFamily: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
  totalFamilies: {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
  createFamily: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    successMessage: null,
    errorMessage: null,
  },
}

const familyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FamilyActions.GET_FAMILIES:
      return {
        ...state,
        totalFamilies: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
          data: [],
        },
      }
    case FamilyActions.GET_FAMILIES_SUCCESS:
      return {
        ...state,
        totalFamilies: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: 'Families Fetched Successfully',
          errorMessage: null,
          data: action.payload.families,
        },
      }
    case FamilyActions.GET_FAMILIES_FAILED:
      return {
        ...state,
        totalFamilies: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
          data: [],
        },
      }
    case FamilyActions.GET_FAMILY:
      return {
        ...state,
        family: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
          data: {},
        },
      }
    case FamilyActions.GET_FAMILY_SUCCESS:
      return {
        ...state,
        family: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: 'Family Fetched Successfully!',
          errorMessage: null,
          data: action.payload.family,
        },
      }
    case FamilyActions.GET_FAMILY_FAILED:
      return {
        ...state,
        family: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
          data: {},
        },
      }
    case FamilyActions.CREATE_FAMILY:
      return {
        ...state,
        createFamily: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
        },
      }
    case FamilyActions.CREATE_FAMILY_SUCCESS:
      return {
        ...state,
        createFamily: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: action.payload.successMessage,
          errorMessage: null,
        },
      }
    case FamilyActions.CREATE_FAMILY_FAILED:
      return {
        ...state,
        createFamily: {
          isLoading: false,
          isError: true,
          isSuccess: false,
          successMessage: null,
          errorMessage: action.payload.errorMessage,
        },
      }
    case FamilyActions.EDIT_FAMILY:
      return {
        ...state,
        editFamily: {
          isLoading: true,
          isError: false,
          isSuccess: false,
          successMessage: null,
          errorMessage: null,
        },
      }
    case FamilyActions.EDIT_FAMILY_SUCCESS:
      return {
        ...state,
        editFamily: {
          isLoading: false,
          isError: false,
          isSuccess: true,
          successMessage: action.payload.successMessage,
          errorMessage: null,
        },
      }
    case FamilyActions.EDIT_FAMILY_FAILED:
      return {
        ...state,
        editFamily: {
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

export default familyReducer
