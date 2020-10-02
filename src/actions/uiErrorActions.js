import uiErrorTypes from '../types/uiErrorTypes';

export const setError = (error) => ({
  type: uiErrorTypes.SET_ERROR,
  payload: error,
});

export const removeError = () => ({
  type: uiErrorTypes.REMOVE_ERROR,
});

export const startLoading = () => ({
  type: uiErrorTypes.START_LOADING,
});

export const finishLoading = () => ({
  type: uiErrorTypes.FINISH_LOADING,
});
