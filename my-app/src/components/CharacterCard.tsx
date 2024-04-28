import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { addCharacterList } from "../redux/characterListSlice";
import { useEffect } from "react";
import { returnWorldIcon } from "../func/returnWorldIcon";

export function CharacterCard() {
  const dispatch = useDispatch();
  const characterImage = useSelector(
    (state: RootState) => state.searchInfo.character_image
  );
  const searchCharacterClass = useSelector(
    (state: RootState) => state.searchInfo.character_class
  );
  const characterGuildName = useSelector(
    (state: RootState) => state.searchInfo.character_guild_name
  );
  const characterLevel = useSelector(
    (state: RootState) => state.searchInfo.character_level
  );
  const characterName = useSelector(
    (state: RootState) => state.searchInfo.character_name
  );
  const characterWorldName = useSelector(
    (state: RootState) => state.searchInfo.world_name
  );
  const GuildMark = useSelector(
    (state: RootState) => state.searchInfo.guild_mark
  );
  const CharacterList = useSelector((state: RootState) => state.CharacterList);

  useEffect(() => {
    console.log("리스트에 저장된 캐릭터 정보:", CharacterList);
    console.log(GuildMark);
  }, [CharacterList]);

  return (
    <CharacterCardDiv>
      <CharacterWorldNameDiv>
        <CharacterWorldIconImg src={returnWorldIcon(characterWorldName)} />
        {characterWorldName}
      </CharacterWorldNameDiv>
      <AddListBtn
        onClick={() => {
          dispatch(
            addCharacterList({
              character_class: searchCharacterClass,
              character_guild_name: characterGuildName,
              character_image: characterImage,
              character_level: characterLevel,
              character_name: characterName,
              world_name: characterWorldName,
              guild_mark: GuildMark,
            })
          );
        }}
      >
        <svg
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 24 24"
          width="22px"
          height="22px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="#fff"
            d="M16.855,20.966c-0.224,0-0.443-0.05-0.646-0.146c-0.035-0.014-0.069-0.031-0.104-0.051l-4.107-2.343L7.891,20.77    c-0.035,0.02-0.07,0.037-0.106,0.053C7.297,21.051,6.7,20.997,6.264,20.68c-0.469-0.34-0.701-0.933-0.586-1.509l0.957-4.642    c-0.374-0.34-0.962-0.875-1.602-1.457l-1.895-1.725c-0.027-0.025-0.055-0.053-0.078-0.082c-0.375-0.396-0.509-0.97-0.34-1.492    C2.893,9.249,3.34,8.861,3.88,8.764C3.914,8.756,3.947,8.75,3.982,8.746l4.701-0.521l1.946-4.31    c0.017-0.038,0.036-0.075,0.06-0.11c0.262-0.473,0.764-0.771,1.309-0.771c0.543,0,1.044,0.298,1.309,0.77    c0.021,0.036,0.041,0.073,0.06,0.112l1.948,4.312l4.701,0.521c0.034,0.003,0.068,0.009,0.104,0.017    c0.539,0.1,0.986,0.486,1.158,1.012c0.17,0.521,0.035,1.098-0.34,1.494c-0.024,0.026-0.051,0.054-0.078,0.078l-3.498,3.184    l0.957,4.632c0.113,0.587-0.118,1.178-0.59,1.519C17.477,20.867,17.173,20.966,16.855,20.966z M8.706,14.402    c-0.039,0.182-0.466,2.246-0.845,4.082l3.643-2.077c0.307-0.175,0.684-0.175,0.99,0l3.643,2.075l-0.849-4.104    c-0.071-0.346,0.045-0.705,0.308-0.942l3.1-2.822l-4.168-0.461c-0.351-0.039-0.654-0.26-0.801-0.584l-1.728-3.821l-1.726,3.821    c-0.146,0.322-0.45,0.543-0.801,0.584l-4.168,0.461l3.1,2.822C8.676,13.682,8.788,14.053,8.706,14.402z"
          />
        </svg>
      </AddListBtn>
      {/* 캐릭터 이미지 */}
      <CharacterImageSectionDiv>
        <CharacterImageDiv src={characterImage} />
      </CharacterImageSectionDiv>
      {/* 캐릭터 정보 */}
      <CharacterInfoSectionDiv>
        {/* <InfoBackgroundDiv /> */}
        <CharacterClassDiv>{searchCharacterClass}</CharacterClassDiv>
        <CharacterGuildNameDiv>
          {characterGuildName && (
            <>
              <GuildMarkImg src={GuildMark} />
              <>{characterGuildName}</>
            </>
          )}
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
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 600;
`;
const CharacterGuildNameDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  font-size: 14px;
  font-weight: 900;
`;
const GuildMarkImg = styled.img`
  height: 100%;
  margin-right: 4px;
`;

const CharacterWorldNameDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
`;
const CharacterWorldIconImg = styled.img`
  width: 14px;
  height: 14px;
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

const AddListBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  /* cursor: pointer; */
  z-index: 1;
  &:hover > svg > path {
    fill: #dddd32;
  }
`;
