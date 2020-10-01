import AuthTypes from '../types/AuthTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case AuthTypes.LOGOUT: {
      return {};
    }

    default:
      return state;
  }
};

export default authReducer;
