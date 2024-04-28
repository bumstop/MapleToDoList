import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SearchInfoState {
  character_class: string;
  character_guild_name: string;
  character_image: string;
  character_level: number;
  character_name: string;
  world_name: string;
  guild_mark: string;
}

const initialState: SearchInfoState = {
  character_class: "",
  character_guild_name: "",
  character_image: "",
  character_level: 0,
  character_name: "",
  world_name: "",
  guild_mark: "",
};

export const searchInfoSlice = createSlice({
  name: "searchInfo",
  initialState: initialState,
  reducers: {
    setCharacterClass(state, action: PayloadAction<string>) {
      state.character_class = action.payload;
    },
    setCharacterGuildName(state, action: PayloadAction<string>) {
      state.character_guild_name = action.payload;
    },
    setCharacterImage(state, action: PayloadAction<string>) {
      state.character_image = action.payload;
    },
    setCharacterLevel(state, action: PayloadAction<number>) {
      state.character_level = action.payload;
    },
    setCharacterName(state, action: PayloadAction<string>) {
      state.character_name = action.payload;
    },
    setCharacterWorldName(state, action: PayloadAction<string>) {
      state.world_name = action.payload;
    },
    setGuildMark(state, action: PayloadAction<string>) {
      state.guild_mark = action.payload;
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
  setGuildMark
} = searchInfoSlice.actions;
