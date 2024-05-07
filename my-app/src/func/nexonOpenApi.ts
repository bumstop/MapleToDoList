import axios, { AxiosError } from "axios";
import { SearchInfoState } from "../redux/searchInfoSlice";

const NEXONOPEN_API_KEY = process.env.REACT_APP_NEXONOPEN_API_KEY!;

const getOcid = async (nickname: string): Promise<string | undefined> => {
  try {
    const response = await axios({
      method: "GET",
      headers: {
        accept: "application/json",
        "x-nxopen-api-key": NEXONOPEN_API_KEY,
      },
      baseURL: "https://open.api.nexon.com/maplestory/v1/id",
      params: {
        character_name: nickname,
      },
    });

    return response.data.ocid;
  } catch (error) {
    if (error instanceof AxiosError) {
      // response 가 AxiosError 의 속성이기 때문에 narrowing 해줌
      console.log("Error status:", error.response?.status);
      if (error.response?.status === 400) alert("닉네임이 존재하지 않습니다.");
    }
    return undefined;
  }
};

export const getCharacterBasicInfo = async (
  str: string
): Promise<SearchInfoState | undefined> => {
  const nickname = str.trim(); // 공백 제거
  if (!nickname) return; // 입력값이 없을 경우 함수를 빠져나옴

  const ocid = await getOcid(nickname);
  if (!ocid) return; // undefined일 경우 함수 빠져나옴

  try {
    const response = await axios({
      method: "GET",
      headers: {
        accept: "application/json",
        "x-nxopen-api-key": NEXONOPEN_API_KEY,
      },
      baseURL: "https://open.api.nexon.com/maplestory/v1/character/basic",
      params: {
        ocid: ocid,
      },
    });

     return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getGuildId = async (
  guildName: string,
  worldName: string
): Promise<string | undefined> => {
  try {
    const response = await axios({
      method: "GET",
      headers: {
        accept: "application/json",
        "x-nxopen-api-key": NEXONOPEN_API_KEY,
      },
      baseURL: "https://open.api.nexon.com/maplestory/v1/guild/id",
      params: {
        guild_name: guildName,
        world_name: worldName,
      },
    });

    return response.data.oguild_id;
  } catch (error) {
    console.log("Error:", error);
  }
};

interface GuildMakrType {
  guild_mark: string;
  guild_mark_custom: string;
}

export const getGuildBasicInfo = async (
  guildId: string
): Promise<GuildMakrType | undefined> => {
  try {
    const response = await axios({
      method: "GET",
      headers: {
        accept: "application/json",
        "x-nxopen-api-key": NEXONOPEN_API_KEY,
      },
      baseURL: "https://open.api.nexon.com/maplestory/v1/guild/basic",
      params: {
        oguild_id: guildId,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};
