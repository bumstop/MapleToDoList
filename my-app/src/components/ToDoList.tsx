import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ToDoListCharacter } from "./ToDoListCharacter";
import styled from "styled-components";
import React from "react";
import { ToDoListToDos } from "./ToDoListToDos";

export function ToDoList() {
  const CharacterList = useSelector((state: RootState) => state.CharacterList);
  const ListedCharacterName = Object.keys(CharacterList);

  return (
    <ToDoListDiv>
      {ListedCharacterName.map((key) => (
        <div
          key={key}
          style={{
            width: "300px",
          }}
        >
          <ToDoListCharacter
            characterListKey={key}
            characterListValue={CharacterList[key]}
          />
          <ToDoListToDos />
        </div>
      ))}
    </ToDoListDiv>
  );
}

const ToDoListDiv = styled.div`
  display: flex;
  gap: 10px;
`;
