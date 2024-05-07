import styled from "styled-components";
import { symbol } from "../data/symbol";

export function ToDoSymbol() {
  return (
    <ToDoSymbolDiv>
      <div className="daily">
        <div>아케인 일일퀘스트</div>
        <div className="acane-symbol">
          {symbol.daily.acane.map((v) => (
            <div className="symbol-box" key={v.text}>
              <img src={process.env.PUBLIC_URL + v.image} />
            </div>
          ))}
        </div>
        <div>그란디스 일일퀘스트</div>
        <div className="grandis-symbol">
          {symbol.daily.grandis.map((v) => (
            <div className="symbol-box" key={v.text}>
              <img src={process.env.PUBLIC_URL + v.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="weekly"></div>
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div`
  font-family: "Maplestory", sans-serif;

  & .acane-symbol,
  .grandis-symbol {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }

  & img {
    width: 38px;
    height: 38px;
  }

  & .symbol-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    background-color: #fff;
  }
  & .symbol-box:hover {
    background-color: #e5e7eb;
  }
`;
