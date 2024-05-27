import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchInfoState } from "./searchInfoSlice";

export interface TaskInterface {
  isListed: boolean;
  isClear: boolean;
}
export type ToDoCategoryType =
  | "daily-acane"
  | "daily-grandis"
  | "weekly-acane"
  | "daily-boss"
  | "weekly-boss"
  | "monthly-boss";

export interface CharacterListState {
  // 키값으로 캐릭터 닉네임을 사용
  [key: string]: {
    // 캐릭터 기본정보
    character_class: string;
    character_guild_name: string;
    character_image: string;
    character_level: number;
    world_name: string;
    guild_mark: string;

    // 투두리스트 오픈상태
    isToDoOpened: boolean;

    // 메모
    memo: string;

    // 투두리스트
    toDoList: {
      symbol: {
        daily: {
          acane: Record<string, TaskInterface>;
          grandis: Record<string, TaskInterface>;
        };
        weekly: {
          acane: Record<string, TaskInterface>;
        };
      };
      boss: {
        daily: Record<string, TaskInterface>;
        weekly: Record<string, TaskInterface>;
        monthly: Record<string, TaskInterface>;
      };
    };
  };
}

const initialState: CharacterListState = {};

const resetIsClear = (tasks: Record<string, TaskInterface>) => {
  for (const task in tasks) {
    tasks[task].isClear = false;
  }
};

export const characterListSlice = createSlice({
  name: "CharacterList",
  initialState: initialState,
  reducers: {
    /** 캐릭터를 리스트에 추가함 - 기본정보, 투두리스트, 선택여부, 메모 정보 */
    addCharacterList(state, action: PayloadAction<SearchInfoState>) {
      state[action.payload.character_name] = {
        character_class: action.payload.character_class,
        character_guild_name: action.payload.character_guild_name,
        character_image: action.payload.character_image,
        character_level: action.payload.character_level,
        world_name: action.payload.world_name,
        guild_mark: action.payload.guild_mark,

        isToDoOpened: false,
        memo: "",
        toDoList: {
          symbol: {
            daily: {
              acane: {
                "소멸의 여로": {
                  isListed: true,
                  isClear: false,
                },
                "츄츄 아일랜드": {
                  isListed: true,
                  isClear: false,
                },
                레헬른: {
                  isListed: true,
                  isClear: false,
                },
                아르카나: {
                  isListed: true,
                  isClear: false,
                },
                모라스: {
                  isListed: true,
                  isClear: false,
                },
                에스페라: {
                  isListed: true,
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

    /** 캐릭터명을 입력받아 캐릭터 리스트에서 해당 속성을 삭제 */
    removeCharacterList(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },

    /** 캐릭터명을 입력받아 해당속성.isToDoOpened 를 true, 나머지 속성들은 false로 바꿈  */
    changeToDoOpenState(state, action: PayloadAction<string>) {
      Object.keys(state).forEach((key) => {
        if (key !== action.payload) {
          state[key].isToDoOpened = false;
        }
      });
      state[action.payload].isToDoOpened = true;
    },

    /** 캐릭터명과 문자열을 입력받아 메모를 수정함 */
    modifyMemo(state, action: PayloadAction<string, string>) {
      state[action.payload[0]].memo = action.payload[1];
    },

    /** isListed 속성을 바꿀 대상과 대상이 속해있는 카테고리를 입력받아 변경 */
    toggleIsListedState(state, action: PayloadAction<[string, ToDoCategoryType]>) {
      const listOpenedName = Object.keys(state).find((key) => state[key].isToDoOpened);
      if (listOpenedName) {
        const listOpenedCharacter = state[listOpenedName];
        let target: TaskInterface;

        switch (action.payload[1]) {
          case "daily-acane":
            target = listOpenedCharacter.toDoList.symbol.daily.acane[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;

          case "daily-grandis":
            target = listOpenedCharacter.toDoList.symbol.daily.grandis[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;

          case "weekly-acane":
            target = listOpenedCharacter.toDoList.symbol.weekly.acane[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;

          case "daily-boss":
            target = listOpenedCharacter.toDoList.boss.daily[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;

          case "weekly-boss":
            target = listOpenedCharacter.toDoList.boss.weekly[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;

          case "monthly-boss":
            target = listOpenedCharacter.toDoList.boss.monthly[action.payload[0]];
            target.isListed = target.isListed ? false : true;
            break;
        }
      }
    },

    /** isClear 속성을 바꿀 대상과 대상이 속해있는 카테고리를 입력받아 변경 */
    toggleIsClearState(state, action: PayloadAction<[string, ToDoCategoryType]>) {
      const listOpenedName = Object.keys(state).find((key) => state[key].isToDoOpened);
      if (listOpenedName) {
        const listOpenedCharacter = state[listOpenedName];
        let target: TaskInterface;

        switch (action.payload[1]) {
          case "daily-acane":
            target = listOpenedCharacter.toDoList.symbol.daily.acane[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;

          case "daily-grandis":
            target = listOpenedCharacter.toDoList.symbol.daily.grandis[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;

          case "weekly-acane":
            target = listOpenedCharacter.toDoList.symbol.weekly.acane[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;

          case "daily-boss":
            target = listOpenedCharacter.toDoList.boss.daily[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;

          case "weekly-boss":
            target = listOpenedCharacter.toDoList.boss.weekly[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;

          case "monthly-boss":
            target = listOpenedCharacter.toDoList.boss.monthly[action.payload[0]];
            target.isClear = target.isClear ? false : true;
            break;
        }
      }
    },

    // toDoList 주기별 isClear 속성 초기화
    resetDailyClear(state) {
      for (const character in state) {
        resetIsClear(state[character].toDoList.symbol.daily.acane);
        resetIsClear(state[character].toDoList.symbol.daily.grandis);
        resetIsClear(state[character].toDoList.boss.daily);
      }
      alert("일일 컨텐츠가 초기화 되었습니다.");
    },
    resetWeeklyByMondayClear(state) {
      for (const character in state) {
        resetIsClear(state[character].toDoList.symbol.weekly.acane);
      }
      alert("주간 컨텐츠(월) 가 초기화 되었습니다.");
    },
    resetWeeklyByThursdayClear(state) {
      for (const character in state) {
        resetIsClear(state[character].toDoList.boss.weekly);
      }
      alert("주간 컨텐츠(목) 가 초기화 되었습니다.");
    },
    resetMonthlyClear(state) {
      for (const character in state) {
        resetIsClear(state[character].toDoList.boss.monthly);
      }
      alert("월간 컨텐츠가 초기화 되었습니다.");
    },
  },
});

export let {
  addCharacterList,
  removeCharacterList,
  changeToDoOpenState,
  toggleIsListedState,
  toggleIsClearState,
  resetDailyClear,
  resetMonthlyClear,
  resetWeeklyByMondayClear,
  resetWeeklyByThursdayClear,
} = characterListSlice.actions;
