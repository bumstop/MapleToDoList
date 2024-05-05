import styled from "styled-components";
import { ToDoSymbol } from "./ToDoSymbol";

export function ToDos() {
  return (
    <ToDoListToDosDiv>
			<ToDoSymbol />
      <BossToDosDiv></BossToDosDiv>
      <ContentsToDosDiv></ContentsToDosDiv>
    </ToDoListToDosDiv>
  );
}

const ToDoListToDosDiv = styled.div``;

const BossToDosDiv = styled.div``;
const ContentsToDosDiv = styled.div``;
