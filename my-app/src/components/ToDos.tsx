import styled from "styled-components";
import { ToDoSymbol } from "./ToDoSymbol";

export function ToDos() {
  return (
    <ToDosDiv>
      <ToDoSymbol />
    </ToDosDiv>
  );
}

const ToDosDiv = styled.div`
  font-family: "Maplestory", sans-serif;
  font-weight: bold;
`;
