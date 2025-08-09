import {
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_CREATE_RESET,
} from "./ActionType";

const initialState = {
  newsList: [],
  loading: false,       
  error: null,
  creating: false,      
  success:false,
  createdNews: null,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  pageSize: 10,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetching news
    case NEWS_FETCH_REQUEST:
      return { ...state, loading: true, error: null };

    case NEWS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.payload.newsList,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalItems: action.payload.totalItems,
        pageSize: action.payload.pageSize,
      };

    case NEWS_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case NEWS_CREATE_REQUEST:
      return { ...state, creating: true, error: null,success:false };

    case NEWS_CREATE_SUCCESS:
      return {
        ...state,
        creating: false,
        success:true,
        createdNews: action.payload,
        newsList: [action.payload, ...state.newsList],
        totalItems: state.totalItems + 1,
      };

    case NEWS_CREATE_FAIL:
      return { ...state, creating: false, error: action.payload, success:false };

    case NEWS_CREATE_RESET:
      return { ...state, creating: false, error: null, createdNews: null };

    default:
      return state;
  }
};

export default newsReducer;
