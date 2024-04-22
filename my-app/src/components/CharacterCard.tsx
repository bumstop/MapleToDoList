import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const CharacterCardDiv = styled.div`
  width: 400px;
  height: 640px;
  padding: 10px;
  background-color: #ccc;
`;
const CharacterImageDiv = styled.div`
  width: 100%;
  height: 70%;
  background: no-repeat center/contain url();
`;
const CharacterInfoDiv = styled.div`
  width: 100%;
  height: 30%;
`;

export function CharacterCard() {
  const searchCharacterClass = useSelector(
    (state: RootState) => state.searchInfo.class
  );
  const CharacterGuildName = useSelector(
    (state: RootState) => state.searchInfo.guildName
  );
  const CharacterImage = useSelector(
    (state: RootState) => state.searchInfo.image
  );
  const CharacterLevel = useSelector(
    (state: RootState) => state.searchInfo.level
  );
  const CharacterName = useSelector(
    (state: RootState) => state.searchInfo.name
  );
  const CharacterWorldName = useSelector(
    (state: RootState) => state.searchInfo.worldName
  );
	
  useEffect(() => {
    console.log();
  }, []);

  return (
    <CharacterCardDiv>
      <CharacterImageDiv></CharacterImageDiv>
      <CharacterInfoDiv></CharacterInfoDiv>
    </CharacterCardDiv>
  );
}
