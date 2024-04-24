import { createSlice } from "@reduxjs/toolkit";

const initialState: { isOpen: boolean } = { isOpen: false };

export const modalStateSlice = createSlice({
  name: "modalState",
  initialState: initialState,
  reducers: {
    modalOpen(state) {
      state.isOpen = true;
    },
    modalClose(state) {
      state.isOpen = false;
    },
  },
});

export let { modalOpen, modalClose } = modalStateSlice.actions;
