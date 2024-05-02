import styled from "styled-components";
import { returnWorldIcon } from "../func/returnWorldIcon";
import { useDispatch } from "react-redux";
import { removeCharacterList } from "../redux/characterListSlice";

interface ToDoListCharacterProps {
  characterListKey: string;
  characterListValue: {
    character_class: string;
    character_guild_name: string | undefined;
    character_image: string;
    character_level: number;
    world_name: string;
    guild_mark: string;
  };
}

export function ToDoListCharacter({
  characterListKey,
  characterListValue,
}: ToDoListCharacterProps) {
  const dispatch = useDispatch();
  const characterName = characterListKey;
  const characterImage = characterListValue.character_image;
  const characterClass = characterListValue.character_class;
  // const characterGuildName = characterListValue.character_guild_name;
  const characterLevel = characterListValue.character_level;
  const characterWorldName = characterListValue.world_name;
  // const guildMark = characterListValue.guild_mark;

  return (
    <ToDoListCharacterDiv>
      <CharacterWorldIconImg src={returnWorldIcon(characterWorldName)} />
      <DeleteListBtn
        onClick={() => {
          dispatch(removeCharacterList(characterName));
        }}
      >
        X
      </DeleteListBtn>
      <CharacterImageDiv src={characterImage} />
      <div className="name">{characterName}</div>
      <div className="info-wrap">
        <div className="level">Lv.{characterLevel}</div>
        <div className="class">{characterClass}</div>
      </div>
    </ToDoListCharacterDiv>
  );
}

const ToDoListCharacterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

	& > .info-wrap {
		display: flex;
		gap: 5px;
	}
`;

const CharacterWorldIconImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
`;
const DeleteListBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transform: translate(50%, -50%);
  width: 14px;
  height: 14px;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
`;
const CharacterImageDiv = styled.img`
  width: 96px;
  padding-top: 30px;
`;
