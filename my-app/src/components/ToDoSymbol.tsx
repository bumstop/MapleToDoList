import styled from "styled-components";
import { symbol } from "../data/symbol";
export function ToDoSymbol() {
  return (
    <ToDoSymbolDiv>
      <h1 className="heading">심볼</h1>
      <div className="daily">
        <div>아케인 일일퀘스트</div>
        <ContentsSection data={symbol.daily.acane} />
        <div>그란디스 일일퀘스트</div>
        <ContentsSection data={symbol.daily.grandis} />
      </div>
      <div className="weekly">
        <div>아케인 주간컨텐츠</div>
        <ContentsSection data={symbol.weekly.acane} />
      </div>
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div`
  padding: 10px;

  & {
    .heading {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
`;

interface DataType {
  data: { text: string; image: string }[];
}

function ContentsSection({ data }: DataType) {
  return (
    <ContentsSectionDiv>
      {data.map((v) => (
        <ContentsBoxDiv key={v.text}>
          <img src={v.image} />
          <div className="text">{v.text}</div>
        </ContentsBoxDiv>
      ))}
    </ContentsSectionDiv>
  );
}

const ContentsSectionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0 30px;
`;

const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 5px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #fff;

  &:hover {
    background-color: #e5e7eb;
  }
  img {
    width: 38px;
    height: 38px;
  }
  .text {
    flex-grow: 1;
    flex-basis: 100%;
    text-align: center;
  }
`;
