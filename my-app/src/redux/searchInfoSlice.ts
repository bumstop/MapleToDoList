import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SearchInfoState {
  class: string;
  guildName: string | undefined;
  image: string;
  level: number;
  name: string;
  worldName: string;
}

const initialState: SearchInfoState = {
  class: "",
  guildName: undefined,
  image: "",
  level: 0,
  name: "",
  worldName: "",
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
