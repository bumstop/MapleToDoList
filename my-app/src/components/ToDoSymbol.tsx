import styled from "styled-components";
import { symbol } from "../data/symbol";

export function ToDoSymbol() {
  return (
    <ToDoSymbolDiv>
      {symbol.daily.acane.map((v) => (
        <div key={v.text}>
          <img src={process.env.PUBLIC_URL + v.image} />
        </div>
      ))}
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div``;
