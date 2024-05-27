import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SearchBox } from "./SearchBox";
import { CharacterCard } from "./CharacterCard";
import { changeToDoOpenState } from "../redux/characterListSlice";
import { ContentsNothing } from "./ContentsNothing";

export function CharacterList() {
  const dispatch = useDispatch();
  const characterList = useSelector((state: RootState) => state.characterList);
  const ListedCharacterName = Object.keys(characterList);
  const characterListRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    if (characterListRef.current) {
      const divRect = characterListRef.current.getBoundingClientRect();
      setStickyTop(divRect.top);
    }
  }, []);

  function openToDoList(e: React.MouseEvent<HTMLElement, MouseEvent>, name: string) {
    const target = e.target as HTMLElement;
    const toggleButton = e.currentTarget.childNodes[0].childNodes[1];

    // 클릭한 대상이 토글버튼에 포함되지 않으면
    // (버튼의 자식요소 svg, fill이 클릭되면 toggleButton이 아니라고 인식함)
    if (!toggleButton.contains(target)) {
      dispatch(changeToDoOpenState(name)); // 투두 리스트에 해당 캐릭터의 투두 리스트를 뿌려줘야함.
    }
  }
  return (
    <CharacterListDiv ref={characterListRef} $top={stickyTop}>
      <div className="searchbox-wrap">
        <SearchBox />
      </div>
      {ListedCharacterName.length ? (
        <div className="charactercard-container">
          {ListedCharacterName.map((key) => (
            <div className="charactercard-wrap" onClick={(e) => openToDoList(e, key)} key={key}>
              <CharacterCard
                character_class={characterList[key].character_class}
                character_guild_name={characterList[key].character_guild_name}
                character_image={characterList[key].character_image}
                character_level={characterList[key].character_level}
                character_name={key}
                world_name={characterList[key].world_name}
                guild_mark={characterList[key].guild_mark}
              />
            </div>
          ))}
        </div>
      ) : (
        <ContentsNothing calledBy="CharacterList" />
      )}
    </CharacterListDiv>
  );
}
const CharacterListDiv = styled.div<{$top: number}>`
  position: sticky;
  top: ${({$top}) => `${$top}px`};
  width: 100%;
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;

  & {
    .searchbox-wrap {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .charactercard-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      padding-top: 40px;
    }
    .charactercard-wrap {
      z-index: 1;
    }
  }
`;
