import axios, { AxiosError } from "axios";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCharacterClass, setCharacterGuildName, setCharacterImage, setCharacterLevel, setCharacterName, setCharacterWorldName } from "../redux/searchInfoSlice";

const SearchBoxDiv = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background-color: #eee;
`;
const CharacterSearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 12px;
  padding-right: 30px;
  outline: none;
  border: none;
  background-color: transparent;
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
  background: no-repeat center/contain url(../image/magnifier_icon.png); // Copyright: Creative Stall Premium - Flaticon
  cursor: pointer;
`;

const NEXONOPEN_API_SERVER = "https://open.api.nexon.com";
const NEXONOPEN_API_KEY = process.env.REACT_APP_NEXONOPEN_API_KEY;

export function SearchBox() {
  const dispatch = useDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getOcid = async (nickname: string): Promise<string | undefined> => {
    try {
      const response = await axios({
        method: "GET",
        headers: {
          accept: "application/json",
          "x-nxopen-api-key": NEXONOPEN_API_KEY,
        },
        url:
          NEXONOPEN_API_SERVER + "/maplestory/v1/id?character_name=" + nickname,
      });
      const ocid = response.data.ocid;
      console.log("ocid:", ocid);
      return ocid;
    } catch (error) {
      if (error instanceof AxiosError) {
        // response 가 AxiosError 의 속성이기 때문에 narrowing 해줌
        console.log("Error status:", error.response?.status);
        if (error.response?.status === 400)
          alert("닉네임이 존재하지 않습니다.");
      }
      return undefined;
    }
  };

  const getCharacterBasicInfo = async (str: string) => {
    const nickname = str.trim(); // 공백 제거
    if (!nickname) return; // 입력값이 없을 경우 함수를 빠져나옴
    const ocid = await getOcid(nickname);
    console.log(ocid);
    if (!ocid) return; // undefined일 경우 함수 빠져나옴

    try {
      const response = await axios({
        method: "GET",
        headers: {
          accept: "application/json",
          "x-nxopen-api-key": NEXONOPEN_API_KEY,
        },
        url:
          NEXONOPEN_API_SERVER + "/maplestory/v1/character/basic?ocid=" + ocid,
      });
      console.log(response.data);

      dispatch(setCharacterClass(response.data.character_class));
      dispatch(setCharacterGuildName(response.data.character_guild_name));
      dispatch(setCharacterImage(response.data.character_image));
      dispatch(setCharacterLevel(response.data.character_level));
      dispatch(setCharacterName(response.data.character_name));
      dispatch(setCharacterWorldName(response.data.world_name));
    } catch (error) {
      console.log("Error:", error);
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
            getCharacterBasicInfo(searchInputRef.current.value);
          }
        }}
      />
      <SearchButton
        onClick={() => {
          if (searchInputRef.current) {
            getCharacterBasicInfo(searchInputRef.current.value);
          }
        }}
      ></SearchButton>
    </SearchBoxDiv>
  );
}
