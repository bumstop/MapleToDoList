import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ToDoListCharacter } from "./ToDoListCharacter";
import styled from "styled-components";
import React from "react";

export function ToDoList() {
  const CharacterList = useSelector((state: RootState) => state.CharacterList);
  const ListedCharacterName = Object.keys(CharacterList);

  return (
    <ToDoListDiv>
      {ListedCharacterName.map((key) => (
        <div
          key={key}
          style={{
            width: "200px",
          }}
        >
          <ToDoListCharacter
            characterListKey={key}
            characterListValue={CharacterList[key]}
          />
        </div>
      ))}
    </ToDoListDiv>
  );
}

const ToDoListDiv = styled.div`
  display: flex;
  gap: 10px;
`;
