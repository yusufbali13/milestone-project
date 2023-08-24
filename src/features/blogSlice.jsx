import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    details: [],
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getBlogSuccess } = stockSlice.actions;
export default stockSlice.reducer;
