const { default: uiErrorTypes } = require('../types/uiErrorTypes');

const initialState = {
  errorMsg: '',
  loading: false,
};

const uiErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiErrorTypes.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case uiErrorTypes.REMOVE_ERROR:
      return {
        ...state,
        errorMsg: '',
      };
    case uiErrorTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case uiErrorTypes.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default uiErrorReducer;
