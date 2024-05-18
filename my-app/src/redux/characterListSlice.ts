import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

interface ToDoStateType {
  isListed: boolean;
  isClear: boolean;
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

    toDoList: {
      symbol: {
        daily: {
          acane: {},
          grandis: {},
        },
        weekly: {
          acane: {},
        },
      },
      boss: {
        daily: {},
        weekly: {},
        monthly: {},
      },
    },
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

        toDoList: {
          symbol: {
            daily: {
              acane: {
                "소멸의 여로": {
                  isListed: false,
                  isClear: false,
                },
                "츄츄 아일랜드": {
                  isListed: false,
                  isClear: false,
                },
                레헬른: {
                  isListed: false,
                  isClear: false,
                },
                아르카나: {
                  isListed: false,
                  isClear: false,
                },
                모라스: {
                  isListed: false,
                  isClear: false,
                },
                에스페라: {
                  isListed: false,
                  isClear: false,
                },
              },
              grandis: {
                세르니움: {
                  isListed: true,
                  isClear: false,
                },
                아르크스: {
                  isListed: true,
                  isClear: false,
                },
                오디움: {
                  isListed: true,
                  isClear: false,
                },
                도원경: {
                  isListed: true,
                  isClear: false,
                },
                아르테리아: {
                  isListed: true,
                  isClear: false,
                },
                카르시온: {
                  isListed: true,
                  isClear: false,
                },
              },
            },
            weekly: {
              acane: {
                "에르다 스펙트럼": {
                  isListed: true,
                  isClear: false,
                },
                "배고픈 무토": {
                  isListed: true,
                  isClear: false,
                },
                "미드나잇 체이서": {
                  isListed: true,
                  isClear: false,
                },
                "스피릿 세이비어": {
                  isListed: true,
                  isClear: false,
                },
                "엔하임 디펜스": {
                  isListed: true,
                  isClear: false,
                },
                "프로텍트 에스페라": {
                  isListed: true,
                  isClear: false,
                },
              },
            },
          },
          boss: {
            daily: {
              자쿰: {
                isListed: true,
                isClear: false,
              },
              매그너스: {
                isListed: true,
                isClear: false,
              },
              힐라: {
                isListed: true,
                isClear: false,
              },
              카웅: {
                isListed: true,
                isClear: false,
              },
              파풀라투스: {
                isListed: true,
                isClear: false,
              },
              피에르: {
                isListed: true,
                isClear: false,
              },
              반반: {
                isListed: true,
                isClear: false,
              },
              블러디퀸: {
                isListed: true,
                isClear: false,
              },
              벨룸: {
                isListed: true,
                isClear: false,
              },
              "반 레온": {
                isListed: true,
                isClear: false,
              },
              혼테일: {
                isListed: true,
                isClear: false,
              },
              아카이럼: {
                isListed: true,
                isClear: false,
              },
              핑크빈: {
                isListed: true,
                isClear: false,
              },
            },
            weekly: {
              자쿰: {
                isListed: true,
                isClear: false,
              },
              매그너스: {
                isListed: true,
                isClear: false,
              },
              힐라: {
                isListed: true,
                isClear: false,
              },
              파풀라투스: {
                isListed: true,
                isClear: false,
              },
              피에르: {
                isListed: true,
                isClear: false,
              },
              반반: {
                isListed: true,
                isClear: false,
              },
              블러디퀸: {
                isListed: true,
                isClear: false,
              },
              벨룸: {
                isListed: true,
                isClear: false,
              },
              핑크빈: {
                isListed: true,
                isClear: false,
              },
              시그너스: {
                isListed: true,
                isClear: false,
              },
              스우: {
                isListed: true,
                isClear: false,
              },
              데미안: {
                isListed: true,
                isClear: false,
              },
              "가디언 엔젤 슬라임": {
                isListed: true,
                isClear: false,
              },
              루시드: {
                isListed: true,
                isClear: false,
              },
              윌: {
                isListed: true,
                isClear: false,
              },
              더스크: {
                isListed: true,
                isClear: false,
              },
              "진 힐라": {
                isListed: true,
                isClear: false,
              },
              듄켈: {
                isListed: true,
                isClear: false,
              },
              "선택받은 세렌": {
                isListed: true,
                isClear: false,
              },
              "감시자 칼로스": {
                isListed: true,
                isClear: false,
              },
              카링: {
                isListed: true,
                isClear: false,
              },
            },
            monthly: {
              "검은 마법사": {
                isListed: true,
                isClear: false,
              },
            },
          },
        },
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
