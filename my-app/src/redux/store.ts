import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchInfoSlice } from "./searchInfoSlice";
import { modalStateSlice } from "./modalStateSlice";
import { CharacterListSlice } from "./characterListSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  searchInfo: searchInfoSlice.reducer,
  modalState: modalStateSlice.reducer,
  CharacterList: CharacterListSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["CharacterList"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
