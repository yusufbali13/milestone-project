import { createSlice } from "@reduxjs/toolkit";

const dashSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },

    // ? Products, categories ve brands state'lerini güncelleyen action fonks.
    getProdCatBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },

    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.firms = payload
    // },
    // getBrandsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.brands = payload
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getStockSuccess,
  getProdCatBrandsSuccess,
} = dashSlice.actions;
export default dashSlice.reducer;
