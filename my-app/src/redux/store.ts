import { configureStore } from "@reduxjs/toolkit";
import { searchInfoSlice } from "./searchInfoSlice";
import { modalStateSlice } from "./modalStateSlice";
import { CharacterListSlice } from "./characterListSlice";

export const store = configureStore({
  reducer: {
    searchInfo: searchInfoSlice.reducer,
    modalState: modalStateSlice.reducer,
    CharacterList: CharacterListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
