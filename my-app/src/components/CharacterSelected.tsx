import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { returnWorldIcon } from "../func/returnWorldIcon";
import { ContentsNothing } from "./ContentsNothing";

export function CharacterSelected() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find(
    (key) => characterList[key].isToDoOpened
  );
  let character_class: string = "";
  let character_guild_name: string = "";
  let character_image: string = "";
  let character_level: number = 0;
  let world_name: string = "";
  let guild_mark: string = "";

  if (listOpenedCharacter) {
    character_class = characterList[listOpenedCharacter].character_class;
    character_guild_name =
      characterList[listOpenedCharacter].character_guild_name;
    character_image = characterList[listOpenedCharacter].character_image;
    character_level = characterList[listOpenedCharacter].character_level;
    world_name = characterList[listOpenedCharacter].world_name;
    guild_mark = characterList[listOpenedCharacter].guild_mark;
  }
  return (
    <CharacterSelectedDiv>
      {listOpenedCharacter ? (
        <>
          {/* 캐릭터 이미지 */}
          <div className="image-wrap">
            <img src={character_image} />
          </div>
          {/* 캐릭터 정보 */}
          <div className="info-wrap">
            <div className="info info-1">
              <div className="name">{listOpenedCharacter}</div>
              <div className="worldname-wrap">
                <img src={returnWorldIcon(world_name)} />
                <div>{world_name}</div>
              </div>
            </div>
            <div className="info info-2">
              <div className="level">Lv. {character_level}</div>
              <DivideBar />
              <div className="class">{character_class}</div>
              {character_guild_name && <DivideBar />}
              <div className="guildname-wrap">
                {character_guild_name && (
                  <>
                    <img src={guild_mark} />
                    <span>{character_guild_name}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <ContentsNothing calledBy="CharacterSelected"/>
      )}
    </CharacterSelectedDiv>
  );
}

const CharacterSelectedDiv = styled.div`
  position: relative;
  width: 100%;
	min-height: 150px;
  padding: 10px;
  display: flex;

  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;

  & {
    .image-wrap {
      flex-shrink: 0;
      width: 128px;
      height: 128px;
      padding: 10px;

      img {
        width: 100%;
        transform: scaleX(-1);
      }
    }
    .info-wrap {
      flex-grow: 1;
      padding: 10px;

      .info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: 100%;
      }

      .info-1 {
        height: 30px;
        margin-bottom: 8px;
      }

      .name {
        font-size: 2rem;
        font-weight: 700;
        text-align: end;
        line-height: 30px;
      }
      .worldname-wrap {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 8px;
        border-radius: 2rem;
        border: 2px solid rgba(0, 0, 0, 0.1);
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 1.2rem;
        font-weight: 600;

        img {
          width: 12px;
          height: 12px;
        }
        div {
          line-height: 12px;
        }
      }
      .class {
        font-size: 1.6rem;
        font-weight: 500;
      }
      .level {
        font-size: 1.6rem;
        font-weight: 500;
      }
      .guildname-wrap {
        display: flex;
        align-items: center;
        font-weight: 500;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
    }
  }
`;

const DivideBar = styled.div`
  width: 1px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.3);
`;
