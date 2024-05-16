import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

interface ToDoStateType {
  isListed: boolean;
}

export interface CharacterListState {
  [key: string]: {
    // 키값으로 캐릭터 닉네임을 사용

    // 캐릭터 기본정보
    character_class: string;
    character_guild_name: string;
    character_image: string;
    character_level: number;
    world_name: string;
    guild_mark: string;
    
    // 투두리스트 오픈상태
    isToDoOpened: boolean;

    // 투두리스트
    toDoList: {
      symbol: {
        daily: {
          acane: {
            [key: string]: ToDoStateType;
          };
          grandis: {
            [key: string]: ToDoStateType;
          };
        };
        weekly: {
          acane: {
            [key: string]: ToDoStateType;
          };
        };
      };
      boss: {
        daily: {
          [key: string]: ToDoStateType;
        };
        weekly: {
          [key: string]: ToDoStateType;
        };
        monthly: {
          [key: string]: ToDoStateType;
        };
      };
    };
  };
}

const initialState: CharacterListState = {
  nickname: {
    character_class: "",
    character_guild_name: "",
    character_image: "",
    character_level: 0,
    world_name: "",
    guild_mark: "",

    isToDoOpened: false,
  },
};

export const characterListSlice = createSlice({
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

        isToDoOpened: false,
      };
    },
    removeCharacterList(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },
    changeToDoOpenState(state, action: PayloadAction<string>) {
      Object.keys(state).forEach((key) => {
        if (key !== action.payload) {
          state[key].isToDoOpened = false;
        }
      });
      state[action.payload].isToDoOpened = true;
    },
  },
});

export let { addCharacterList, removeCharacterList, changeToDoOpenState } =
  characterListSlice.actions;
