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
			>X</DeleteListBtn>
      <CharacterImageDiv src={characterImage} />
      {characterName} | Lv.{characterLevel} | {characterClass}
    </ToDoListCharacterDiv>
  );
}

const ToDoListCharacterDiv = styled.div``;

const CharacterWorldIconImg = styled.img`
  width: 14px;
  height: 14px;
`;
const DeleteListBtn = styled.div``;
const CharacterImageDiv = styled.img``;
