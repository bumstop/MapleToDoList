import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { useEffect } from "react";

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

  return (
    <CharacterCardDiv>
      <CharacterWorldNameDiv>{characterWorldName}</CharacterWorldNameDiv>
      {/* 캐릭터 이미지 */}
      <CharacterImageSectionDiv>
        <CharacterImageDiv src={characterImage} />
      </CharacterImageSectionDiv>
      {/* 캐릭터 정보 */}
      <CharacterInfoSectionDiv>
        {/* <InfoBackgroundDiv /> */}
        <CharacterClassDiv>{searchCharacterClass}</CharacterClassDiv>
        <CharacterGuildNameDiv>
          {characterGuildName && "길드 " + characterGuildName}
        </CharacterGuildNameDiv>
        <InfoBottomDiv>
          <CharacterNameDiv>{characterName}</CharacterNameDiv>
          <CharacterLevelDiv>Lv. {characterLevel}</CharacterLevelDiv>
        </InfoBottomDiv>
      </CharacterInfoSectionDiv>
    </CharacterCardDiv>
  );
}

const CharacterCardDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 300px;
  padding: 15px;
  border-radius: 0.5rem;
  background: no-repeat center/cover
    url(${process.env.PUBLIC_URL}/image/xmas_03_2560x1440.jpg);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: #000;
    opacity: 0.5;
  }
`;
const CharacterImageSectionDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;
const CharacterInfoSectionDiv = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  color: #fff;
`;

const CharacterImageDiv = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const CharacterClassDiv = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const CharacterGuildNameDiv = styled.div`
  font-size: 14px;
  font-weight: 900;
`;

const CharacterWorldNameDiv = styled.div`
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
const InfoBottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const CharacterLevelDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: end;
`;
const CharacterNameDiv = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: end;
`;
