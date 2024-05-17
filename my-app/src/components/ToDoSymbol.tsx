import styled from "styled-components";
import { symbol } from "../data/symbol";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export function ToDoSymbol() {
  const dispatch = useDispatch();
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find(
    (key) => characterList[key].isToDoOpened
  );

  let listedToDoSymbolDailyAcane: string[] = [];
  let listedToDoSymbolDailyGrandis: string[] = [];
  let listedToDoSymbolWeeklyAcane: string[] = [];

  if (listOpenedCharacter) {
    const toDoSymbolDailyAcane =
      characterList[listOpenedCharacter].toDoList.symbol.daily.acane;
    const toDoSymbolDailyGrandis =
      characterList[listOpenedCharacter].toDoList.symbol.daily.grandis;
    const toDoSymbolWeeklyAcane =
      characterList[listOpenedCharacter].toDoList.symbol.weekly.acane;

    listedToDoSymbolDailyAcane = Object.keys(toDoSymbolDailyAcane).filter(
      (key) => toDoSymbolDailyAcane[key].isListed
    );

    listedToDoSymbolDailyGrandis = Object.keys(toDoSymbolDailyGrandis).filter(
      (key) => toDoSymbolDailyGrandis[key].isListed
    );

    listedToDoSymbolWeeklyAcane = Object.keys(toDoSymbolWeeklyAcane).filter(
      (key) => toDoSymbolWeeklyAcane[key].isListed
    );

    console.log(toDoSymbolDailyAcane, listedToDoSymbolDailyAcane);
  }

  return (
    <ToDoSymbolDiv>
      <div className="daily">
        {listedToDoSymbolDailyAcane.length > 0 && (
          <div className="daily-acane">
            <div>아케인 일일퀘스트</div>
            <ContentsSection
              data={symbol.daily.acane}
              toDos={listedToDoSymbolDailyAcane}
            />
          </div>
        )}
        {listedToDoSymbolDailyGrandis.length > 0 && (
          <div className="daily-grandis">
            <div>그란디스 일일퀘스트</div>
            <ContentsSection
              data={symbol.daily.grandis}
              toDos={listedToDoSymbolDailyGrandis}
            />
          </div>
        )}
      </div>
      <div className="weekly">
        {listedToDoSymbolWeeklyAcane.length > 0 && (
          <div className="weekly-acane">
            <div>아케인 주간컨텐츠</div>
            <ContentsSection
              data={symbol.weekly.acane}
              toDos={listedToDoSymbolWeeklyAcane}
            />
          </div>
        )}
      </div>
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div`
  padding: 10px;
`;

interface DataType {
  data: { text: string; image: string }[];
  toDos: string[];
}

function ContentsSection({ data, toDos }: DataType) {
  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        if (toDos.includes(v.text)) {
          return (
            <ContentsBoxDiv key={v.text}>
              <div className="img">
                <img src={v.image} />
              </div>
              <div className="text">{v.text}</div>
            </ContentsBoxDiv>
          );
        }
      })}
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
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }
  .img {
    width: 44px;
    height: 44px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .text {
    flex-grow: 1;
    text-align: center;
  }
`;
