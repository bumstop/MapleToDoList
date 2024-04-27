import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

export interface CharacterListState {
  [key: string]: {
    // 키값으로 캐릭터 닉네임을 사용
    class: string;
    guildName: string | undefined;
    image: string;
    level: number;
    worldName: string;
  };
}

const initialState: CharacterListState = {
  nickname: {
    class: "",
    guildName: undefined,
    image: "",
    level: 0,
    worldName: "",
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
