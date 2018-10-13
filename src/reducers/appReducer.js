import { ERR_NOT_FOUND } from '../actions/types';

const initialState = { hasError: false };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERR_NOT_FOUND:
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;