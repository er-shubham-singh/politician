// import axios from 'axios';
// import {
//   NEWS_CREATE_FAIL,
//   NEWS_CREATE_REQUEST,
//   NEWS_CREATE_SUCCESS,
//   NEWS_FETCH_FAIL,
//   NEWS_FETCH_REQUEST,
//   NEWS_FETCH_SUCCESS,
// } from './ActionType';

// // ✅ Correct way to access env variable in Vite
// const BASE_URL = import.meta.env.VITE_API_URL;

// // 🧹 Utility function to clean API text
// function cleanText(text) {
//   if (!text) return "";
//   return text
//     .replace(/<[^>]+>/g, "") // remove HTML tags
//     .replace(/\{\s*window\.open.*?\}\s*/g, "") // remove onclick handlers
//     .replace(/\[\+\d+\s*chars\]/g, "") // remove [+750 chars]
//     .replace(/&gt;/g, ">") // decode basic HTML entities
//     .replace(/&lt;/g, "<")
//     .replace(/&amp;/g, "&")
//     .trim();
// }

// // 🚀 Fetch all news (with pagination)
// export const fetchNews = (page = 1, limit = 10) => async (dispatch) => {
//   try {
//     dispatch({ type: NEWS_FETCH_REQUEST });

//     const { data } = await axios.get(
//       `${BASE_URL}/api/news/all-news?page=${page}&limit=${limit}`
//     );

//     // 🧹 Clean all news before sending to store
//     const cleanedNews = data.data.map(news => ({
//       ...news,
//       title: cleanText(news.title),
//       summary: cleanText(news.summary || news.content),
//     }));

//     dispatch({
//       type: NEWS_FETCH_SUCCESS,
//       payload: {
//         newsList: cleanedNews,
//         currentPage: data.currentPage,
//         totalPages: data.totalPages,
//         totalItems: data.totalItems,
//         pageSize: data.pageSize,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: NEWS_FETCH_FAIL,
//       payload: error.response?.data?.error || 'Something went wrong',
//     });
//   }
// };

// // 🔐 Create news (admin only)
// export const createNews = (newsData, token) => async (dispatch) => {
//   try {
//     dispatch({ type: NEWS_CREATE_REQUEST });

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.post(
//       `${BASE_URL}/api/news/create-news`,
//       newsData,
//       config
//     );

//     dispatch({
//       type: NEWS_CREATE_SUCCESS,
//       payload: data.news,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEWS_CREATE_FAIL,
//       payload: error.response?.data?.error || 'Failed to create news',
//     });
//   }
// };


import axios from 'axios';
import {
  NEWS_CREATE_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_RESET,
  NEWS_FETCH_FAIL,
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
} from './ActionType';

const BASE_URL = import.meta.env.VITE_API_URL;

// Utility to clean HTML tags and chars
function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/\{\s*window\.open.*?\}\s*/g, "")
    .replace(/\[\+\d+\s*chars\]/g, "")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .trim();
}

// Fetch all news with pagination
export const fetchNews = (page = 1, limit = 10) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_FETCH_REQUEST });

    const { data } = await axios.get(
      `${BASE_URL}/api/news/all-news?page=${page}&limit=${limit}`
    );

    const cleanedNews = data.data.map(news => ({
      ...news,
      title: cleanText(news.title),
      summary: cleanText(news.summary || news.content),
    }));

    dispatch({
      type: NEWS_FETCH_SUCCESS,
      payload: {
        newsList: cleanedNews,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalItems: data.totalItems,
        pageSize: data.pageSize,
      },
    });
  } catch (error) {
    dispatch({
      type: NEWS_FETCH_FAIL,
      payload: error.response?.data?.error || 'Something went wrong',
    });
  }
};

// Create news (admin only), accepts FormData for image upload
export const createNews = (newsData, token) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_CREATE_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // important for file upload
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/api/news/create-news`,
      newsData,
      config
    );

    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data.news,
    });
  } catch (error) {
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload:
        error.response?.data?.error || error.message || "Failed to create news",
    });
  }
};


// Optional reset action to clear create news state after success or when leaving page
export const resetNewsCreate = () => (dispatch) => {
  dispatch({ type: NEWS_CREATE_RESET });
};
