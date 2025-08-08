import { CREATE_VOLUNTEER_FAIL, CREATE_VOLUNTEER_REQUEST, CREATE_VOLUNTEER_SUCCESS, RESET_VOLUNTEER } from "./ActionType"
const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

export const createVolunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VOLUNTEER_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case CREATE_VOLUNTEER_SUCCESS:
      return { ...state, loading: false, success: true, data: action.payload };
    case CREATE_VOLUNTEER_FAIL:
      return { ...state, loading: false, error: action.payload, success: false };
    case RESET_VOLUNTEER:
      return initialState;
    default:
      return state;
  }
};

