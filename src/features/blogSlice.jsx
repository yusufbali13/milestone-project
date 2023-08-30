import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  blogs: [],
  categories: [],
  activeBlog: {},
  comments: [],
  userBlogs: [],
  detail: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { dataName, data } }) => {
      state[dataName] = data;
    },

    getDetailSuccess: (state, { payload }) => {
      state.detail = payload;
    },

    getCategorySuccess: (state, { payload }) => {
      state.categories = payload;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  getDetailSuccess,
  getCategorySuccess,
  fetchFail,
} = blogSlice.actions;

export default blogSlice.reducer;
