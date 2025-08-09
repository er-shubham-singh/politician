import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from "./ActionType";

const initialState = {
  isAuthenticated: false,
  role: null,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_REQUEST":
      return { ...state, loading: true };

    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        role: action.payload.role, 
        user: action.payload.user,
        token: action.payload.token,
      };

    case "ADMIN_LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
