import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const CharacterCardDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 300px;
  padding: 10px;
  border-radius: 0.5rem;
  background-color: #ccc;
`;
const CharacterImageSectionDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;
const CharacterInfoSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  color: #fff;
`;
const CharacterImageDiv = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const CharacterClassDiv = styled.div``;
const CharacterGuildNameDiv = styled.div``;

const CharacterWorldNameDiv = styled.div`
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
const InfoSection1 = styled.div`

`;
const InfoSection2 = styled.div`
  
`;
const CharacterLevelDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: end;
`;
const CharacterNameDiv = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: end;
`;
export function CharacterCard() {
  const characterImage = useSelector(
    (state: RootState) => state.searchInfo.image
  );
  const searchCharacterClass = useSelector(
    (state: RootState) => state.searchInfo.class
  );
  const characterGuildName = useSelector(
    (state: RootState) => state.searchInfo.guildName
  );
  const characterLevel = useSelector(
    (state: RootState) => state.searchInfo.level
  );
  const characterName = useSelector(
    (state: RootState) => state.searchInfo.name
  );
  const characterWorldName = useSelector(
    (state: RootState) => state.searchInfo.worldName
  );

  useEffect(() => {
    console.log();
  }, []);

  return (
    <CharacterCardDiv>
      <CharacterWorldNameDiv>{characterWorldName}</CharacterWorldNameDiv>
      <CharacterImageSectionDiv>
        <CharacterImageDiv src={characterImage} />
      </CharacterImageSectionDiv>
      <CharacterInfoSectionDiv> 
        <InfoSection1>
          <CharacterClassDiv>{searchCharacterClass}</CharacterClassDiv>
          <CharacterGuildNameDiv>{characterGuildName}</CharacterGuildNameDiv>
        </InfoSection1>
        <InfoSection2>
          <CharacterNameDiv>{characterName}</CharacterNameDiv>
          <CharacterLevelDiv>Lv. {characterLevel}</CharacterLevelDiv>
        </InfoSection2>
      </CharacterInfoSectionDiv>
    </CharacterCardDiv>
  );
}
