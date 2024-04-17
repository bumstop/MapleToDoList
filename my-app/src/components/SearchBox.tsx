import axios from "axios";
import { useEffect, useRef } from "react";
export function SearchBox() {
  const NEXONOPEN_API_SERVER = "https://open.api.nexon.com";
  const NEXONOPEN_API_KEY = process.env.REACT_APP_NEXONOPEN_API_KEY;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getOcid = async () => {
    const nickname = searchInputRef.current?.value;

    if (!nickname) {
      console.log("입력값없음");
      return;
    }
    console.log("입력값:", nickname);

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
			getCharacterBasicInfor(ocid);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const getCharacterBasicInfor = async (ocid: string) => {
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
			console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
	};

  useEffect(() => {}, []);

  return (
    <>
      <div className="search-box">
        <input
          id="search-input"
          ref={searchInputRef}
          type="text"
          placeholder="캐릭터 검색"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getOcid();
            }
          }}
        />
        <button className="search-btn" onClick={() => getOcid()}>
          검색
        </button>
      </div>
    </>
  );
}
