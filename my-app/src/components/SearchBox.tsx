import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  setCharacterClass,
  setCharacterGuildName,
  setCharacterImage,
  setCharacterLevel,
  setCharacterName,
  setCharacterWorldName,
  setGuildMark,
} from "../redux/searchInfoSlice";
import { modalOpen } from "../redux/modalStateSlice";
import { getCharacterBasicInfo, getGuildId } from "../func/nexonOpenApi";
import { returnGuildMark } from "../func/returnGuildMark";

export function SearchBox() {
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // 검색 과정
  const search = async (searchValue: string) => {
    const characterBasicInfo = await getCharacterBasicInfo(searchValue);
    if (characterBasicInfo) {
      // 검색한 캐릭터 기본 정보 저장
      dispatch(setCharacterClass(characterBasicInfo.character_class));
      dispatch(setCharacterGuildName(characterBasicInfo.character_guild_name));
      dispatch(setCharacterImage(characterBasicInfo.character_image));
      dispatch(setCharacterLevel(characterBasicInfo.character_level));
      dispatch(setCharacterName(characterBasicInfo.character_name));
      dispatch(setCharacterWorldName(characterBasicInfo.world_name));

      // 길드 아이디 불러옴
      const guildId = await getGuildId(
        characterBasicInfo.character_guild_name,
        characterBasicInfo.world_name
      );

      if (guildId) {
        // 길드마크 불러옴
        const guildMark = await returnGuildMark(guildId);

        // 길드 마크 저장
        if (guildMark) dispatch(setGuildMark(guildMark));
      }

      // 캐릭터 카드가 있는 모달창 오픈
      dispatch(modalOpen());
    }
  };

  return (
    <SearchBoxDiv>
      <CharacterSearchInput
        ref={searchInputRef}
        type="text"
        placeholder="캐릭터 검색"
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchInputRef.current) {
            search(searchInputRef.current.value);
          }
        }}
      />
      <SearchButton
        onClick={(e) => {
          if (searchInputRef.current) {
            search(searchInputRef.current.value);
          }
        }}
      ></SearchButton>
    </SearchBoxDiv>
  );
}

export const SearchBoxDiv = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background-color: #eee;
`;
const CharacterSearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 12px;
  padding-right: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: 'Maplestory';
`;
const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: no-repeat center/contain
    url(${process.env.PUBLIC_URL}/image/magnifier_icon.png); // Copyright: Creative Stall Premium - Flaticon
  cursor: pointer;
`;
