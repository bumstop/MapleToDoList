import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

export interface CharacterListState {
  [key: string]: {
    // 키값으로 캐릭터 닉네임을 사용
    class: string | undefined;
    guildName: string | undefined;
    image: string | undefined;
    level: number | undefined;
    worldName: string | undefined;
  };
}

const initialState: CharacterListState = {
  nickname: {
    class: undefined,
    guildName: undefined,
    image: undefined,
    level: undefined,
    worldName: undefined,
  },
};

export const CharacterListSlice = createSlice({
  name: "CharacterList",
  initialState: initialState,
  reducers: {
    addCharacterList(state, action: PayloadAction<SearchInfoState>) {
      state.nickname && delete state.nickname;

      state[action.payload.name] = {
        class: action.payload.class,
        guildName: action.payload.guildName,
        image: action.payload.image,
        level: action.payload.level,
        worldName: action.payload.worldName,
      };
    },
    removeCharacterList(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
  },
});

export let { addCharacterList, removeCharacterList } =
  CharacterListSlice.actions;
