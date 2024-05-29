import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { returnWorldIcon } from "../func/returnWorldIcon";
import { ContentsNothing } from "./ContentsNothing";
import { modifyHoverIcon, modifyIcon } from "../assets/images";
import { useEffect, useRef, useState } from "react";
import { modifyMemo } from "../redux/characterListSlice";

export function CharacterSelected() {
  const dispatch = useDispatch();

  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);
  let character_class: string = "";
  let character_guild_name: string = "";
  let character_image: string = "";
  let character_level: number = 0;
  let world_name: string = "";
  let guild_mark: string = "";
  let character_memo: string = "";

  if (listOpenedCharacter) {
    character_class = characterList[listOpenedCharacter].character_class;
    character_guild_name = characterList[listOpenedCharacter].character_guild_name;
    character_image = characterList[listOpenedCharacter].character_image;
    character_level = characterList[listOpenedCharacter].character_level;
    world_name = characterList[listOpenedCharacter].world_name;
    guild_mark = characterList[listOpenedCharacter].guild_mark;
    character_memo = characterList[listOpenedCharacter].memo;
  }

  const [isModify, setIsModify] = useState(false);
  const modifyTextarea = useRef<HTMLTextAreaElement>(null);
  const modifyMaxLength = 100;
  const [modifyTextLength, setModifyTextLength] = useState(0);

  const saveModifyMemo = () => {
    if (listOpenedCharacter && modifyTextarea.current) {
      const memoText = modifyTextarea.current.value;
      dispatch(modifyMemo([listOpenedCharacter, memoText]));

      console.log(memoText);
    }
    setIsModify(false);
  };

  const cancelModifyMemo = () => {
    if (modifyTextarea.current) {
      modifyTextarea.current.value = character_memo;
    }
    setIsModify(false);
  };

  // 메모 수정창 기본값, 길이 랜더링
  useEffect(() => {
    if (modifyTextarea.current) {
      modifyTextarea.current.value = character_memo;
      setModifyTextLength(modifyTextarea.current.textLength);
    }
  }, [isModify]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsModify(false);
  }, [listOpenedCharacter]);

  return (
    <CharacterSelectedDiv>
      {listOpenedCharacter ? (
        <>
          <div className="character-selected">
            {/* 캐릭터 이미지 */}
            <div className="image-wrap">
              <img src={character_image} />
            </div>
            {/* 캐릭터 정보 */}
            <div className="info-wrap">
              <div className="info info-1">
                <div className="name">{listOpenedCharacter}</div>
                <div className="worldname-wrap">
                  <img src={returnWorldIcon(world_name)} />
                  <div>{world_name}</div>
                </div>
              </div>
              <div className="info info-2">
                <div className="level">Lv. {character_level}</div>
                <DivideBar />
                <div className="class">{character_class}</div>
                {character_guild_name && <DivideBar />}
                <div className="guildname-wrap">
                  {character_guild_name && (
                    <>
                      <img src={guild_mark} />
                      <span>{character_guild_name}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* 메모 */}
          <div className="memo-wrap">
            <div className="memo-head">
              <div>메모</div>
              <ModifyBtn onClick={() => setIsModify(true)} $isModify={isModify} />
            </div>
            <div className="memo">
              <MemoDiv $isModify={isModify}>{character_memo}</MemoDiv>
              <ModifyMemoTextarea
                $isModify={isModify}
                ref={modifyTextarea}
                maxLength={modifyMaxLength}
                onChange={() => {
                  if (modifyTextarea.current) {
                    setModifyTextLength(modifyTextarea.current.textLength);
                  }
                }}
              />
              <div className="modify-btn-wrap">
                <TextLengthDiv
                  $isModify={isModify}
                >{`${modifyTextLength} / ${modifyMaxLength}`}</TextLengthDiv>
                <CancelModifyBtn onClick={() => cancelModifyMemo()} $isModify={isModify}>
                  취소
                </CancelModifyBtn>
                <SaveModifyBtn onClick={() => saveModifyMemo()} $isModify={isModify}>
                  저장
                </SaveModifyBtn>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ContentsNothing calledBy="CharacterSelected" />
      )}
    </CharacterSelectedDiv>
  );
}

const CharacterSelectedDiv = styled.div`
  position: sticky;
  top: 10px;
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;
  z-index: 99;

  & {
    .character-selected {
      display: flex;
    }
    .image-wrap {
      flex-shrink: 0;
      width: 128px;
      height: 128px;
      padding: 10px;

      img {
        width: 100%;
        transform: scaleX(-1);
      }
    }
    .info-wrap {
      flex-grow: 1;
      padding: 10px;

      .info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: 100%;
      }

      .info-1 {
        height: 30px;
        margin-bottom: 8px;
      }

      .name {
        font-size: 2rem;
        font-weight: 700;
        text-align: end;
        line-height: 30px;
      }
      .worldname-wrap {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 8px;
        border-radius: 2rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 1.2rem;
        font-weight: 600;

        img {
          width: 12px;
          height: 12px;
        }
        div {
          line-height: 12px;
        }
      }
      .class {
        font-size: 1.6rem;
        font-weight: 500;
      }
      .level {
        font-size: 1.6rem;
        font-weight: 500;
      }
      .guildname-wrap {
        display: flex;
        align-items: center;
        font-weight: 500;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
    }

    .memo-wrap {
      padding: 0 30px 10px;

      .memo-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 5px;
        padding-bottom: 5px;
        font-family: "Maplestory";
        font-size: 2rem;
        color: #111;
      }
      .memo {
        position: relative;
        width: 100%;
        height: 130px;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-family: "Maplestory";
        font-weight: normal;
        font-size: 1.4rem;
      }
      .modify-btn-wrap {
        position: absolute;
        bottom: 5px;
        right: 5px;
        display: flex;
        align-items: center;
        gap: 3px;
      }
    }
  }
`;
const ModifyBtn = styled.button<{ $isModify: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 0.5rem;
  background: no-repeat center/cover url(${modifyIcon});
  visibility: ${({ $isModify }) => ($isModify ? "hidden" : "visible")};

  &:hover {
    background: no-repeat center/cover url(${modifyHoverIcon});
  }
`;

const MemoDiv = styled.div<{ $isModify: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: inherit;
  white-space: pre-wrap;
  overflow-y: scroll;
  scrollbar-width: none;
  overscroll-behavior: contain;
  visibility: ${({ $isModify }) => ($isModify ? "hidden" : "visible")};
`;

const ModifyMemoTextarea = styled.textarea<{ $isModify: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 25px);
  padding: 10px;
  border-radius: inherit;
  white-space: pre-wrap;
  scrollbar-width: none;
  overscroll-behavior: contain;
  visibility: ${({ $isModify }) => ($isModify ? "visible" : "hidden")};
`;

const TextLengthDiv = styled.div<{ $isModify: boolean }>`
  visibility: ${({ $isModify }) => ($isModify ? "visible" : "hidden")};
`;

const SaveModifyBtn = styled.button<{ $isModify: boolean }>`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  padding: 3px 5px;
  border-radius: 0.5rem;
  background-color: #ffa23f;
  visibility: ${({ $isModify }) => ($isModify ? "visible" : "hidden")};

  &:hover {
    background-color: #ff890a;
  }
`;

const CancelModifyBtn = styled.button<{ $isModify: boolean }>`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 3px 5px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  visibility: ${({ $isModify }) => ($isModify ? "visible" : "hidden")};
`;

const DivideBar = styled.div`
  width: 1px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.3);
`;
