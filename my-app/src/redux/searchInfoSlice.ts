import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchInfoState {
  class: string | undefined;
  guildName: string | undefined;
  image: string | undefined;
  level: number | undefined;
  name: string | undefined;
  worldName: string | undefined;
}

const initialState: SearchInfoState = {
  class: undefined,
  guildName: undefined,
  image: undefined,
  level: undefined,
  name: undefined,
  worldName: undefined,
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
