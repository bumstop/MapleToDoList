import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

export interface CharacterListState {
  [key: string]: {
    // 키값으로 캐릭터 닉네임을 사용
    character_class: string;
    character_guild_name: string | undefined;
    character_image: string;
    character_level: number;
    world_name: string;
    guild_mark: string;
  };
}

const initialState: CharacterListState = {
  nickname: {
    character_class: "",
    character_guild_name: undefined,
    character_image: "",
    character_level: 0,
    world_name: "",
    guild_mark: "",
  },
};

export const CharacterListSlice = createSlice({
  name: "CharacterList",
  initialState: initialState,
  reducers: {
    addCharacterList(state, action: PayloadAction<SearchInfoState>) {
      state.nickname && delete state.nickname;

      state[action.payload.character_name] = {
        character_class: action.payload.character_class,
        character_guild_name: action.payload.character_guild_name,
        character_image: action.payload.character_image,
        character_level: action.payload.character_level,
        world_name: action.payload.world_name,
        guild_mark: action.payload.guild_mark,
      };
    },
    removeCharacterList(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
  },
});

export let { addCharacterList, removeCharacterList } =
  CharacterListSlice.actions;
