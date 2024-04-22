import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchInfoState {
  class: string | null;
  guildName: string | null;
  image: string | null;
  level: number | null;
  name: string | null;
  worldName: string | null;
}

const initialState: SearchInfoState = {
  class: null,
  guildName: null,
  image: null,
  level: null,
  name: null,
  worldName: null,
};

export const searchInfoSlice = createSlice({
  name: "searchInfo",
  initialState: initialState,
  reducers: {
    setCharacterClass(state, action: PayloadAction<string>) {
      state.class = action.payload;
    },
    setCharacterGuildName(state, action: PayloadAction<string>) {
      state.guildName = action.payload;
    },
    setCharacterImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setCharacterLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
    setCharacterName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCharacterWorldName(state, action: PayloadAction<string>) {
      state.worldName = action.payload;
    },
  },
});

// reducers export (수정방법)
export let {
  setCharacterClass,
  setCharacterGuildName,
  setCharacterImage,
  setCharacterLevel,
  setCharacterName,
  setCharacterWorldName,
} = searchInfoSlice.actions;
