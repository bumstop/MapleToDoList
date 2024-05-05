import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";
import styled from "styled-components";
import { SearchBox } from "./SearchBox";
import { CharacterCard } from "./CharacterCard";

export function CharacterList() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const ListedCharacterName = Object.keys(characterList);

  return (
    <CharacterListDiv>
      <div className="searchbox-wrap">
        <SearchBox />
      </div>
      <div className="charactercard-wrap">
        {ListedCharacterName.map((key) => (
          <React.Fragment key={key}>
            <CharacterCard
              character_class={characterList[key].character_class}
              character_guild_name={characterList[key].character_guild_name}
              character_image={characterList[key].character_image}
              character_level={characterList[key].character_level}
              character_name={key}
              world_name={characterList[key].world_name}
              guild_mark={characterList[key].guild_mark}
            />
          </React.Fragment>
        ))}
      </div>
    </CharacterListDiv>
  );
}
const CharacterListDiv = styled.div`
  position: relative;

  & {
    .searchbox-wrap {
      position: absolute;
      top: 0;
      right: 0;
    }
    .charactercard-wrap {
      padding-top: 40px;
    }
  }
`;
