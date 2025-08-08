import axios from "axios";
import {
  CREATE_VOLUNTEER_FAIL,
  CREATE_VOLUNTEER_REQUEST,
  CREATE_VOLUNTEER_SUCCESS,
  RESET_VOLUNTEER,
} from "./ActionType";

const BASE_URL = import.meta.env.VITE_API_URL;
export const createVolunteer = (data) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_VOLUNTEER_REQUEST });

    const response = await axios.post(`${BASE_URL}/api/volunteer/create-volunteer`, data);

    dispatch({
      type: CREATE_VOLUNTEER_SUCCESS,
      payload: response.data.volunteer,  // your volunteer data here
    });
  } catch (error) {
    dispatch({
      type: CREATE_VOLUNTEER_FAIL,
      payload: error.response?.data?.error || "Something went wrong",
    });
  }
};

export const resetVolunteer = () => (dispatch) => {
  dispatch({ type: RESET_VOLUNTEER });
};
