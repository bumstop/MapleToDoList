import { configureStore } from "@reduxjs/toolkit";
import { searchInfoSlice } from "./searchInfoSlice";

export const store = configureStore({
  reducer: {
    searchInfo: searchInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
