import axios from "axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from "./ActionType";

const BASE_URL = import.meta.env.VITE_API_URL;

export const loginAdmin = ({ email, password }, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await axios.post(`${BASE_URL}/api/admin/login`, { email, password });

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: {
        token: data.token,
        role: data.admin.role || "admin",
        user: data.admin,
      },
    });

    localStorage.setItem("adminToken", data.token);

    if (navigate) {
      navigate("/admin/news/create");
    }
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response?.data?.error || "Login failed",
    });
  }
};
