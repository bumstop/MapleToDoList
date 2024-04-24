import { configureStore } from "@reduxjs/toolkit";
import { searchInfoSlice } from "./searchInfoSlice";
import { modalStateSlice } from "./modalStateSlice";

export const store = configureStore({
  reducer: {
    searchInfo: searchInfoSlice.reducer,
    modalState: modalStateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
