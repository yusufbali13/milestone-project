import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import stockReducer from "../features/blogReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; //? default : localStorage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
export default store;
