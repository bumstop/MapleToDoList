import styled from "styled-components";
import { symbol } from "../data/symbol";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContentsNothing } from "./ContentsNothing";
import {
  ToDoDetailStateType,
  ToDoCategoryType,
  toggleIsClearState,
} from "../redux/characterListSlice";
import { useEffect } from "react";

export function ToDoSymbol() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);
  let toDoSymbolDailyAcane: { [key: string]: ToDoDetailStateType } = {};
  let toDoSymbolDailyGrandis: { [key: string]: ToDoDetailStateType } = {};
  let toDoSymbolWeeklyAcane: { [key: string]: ToDoDetailStateType } = {};
  let listedToDoSymbolDailyAcane: string[] = [];
  let listedToDoSymbolDailyGrandis: string[] = [];
  let listedToDoSymbolWeeklyAcane: string[] = [];

  if (listOpenedCharacter) {
    toDoSymbolDailyAcane = characterList[listOpenedCharacter].toDoList.symbol.daily.acane;
    toDoSymbolDailyGrandis = characterList[listOpenedCharacter].toDoList.symbol.daily.grandis;
    toDoSymbolWeeklyAcane = characterList[listOpenedCharacter].toDoList.symbol.weekly.acane;

    listedToDoSymbolDailyAcane = Object.keys(toDoSymbolDailyAcane).filter(
      (key) => toDoSymbolDailyAcane[key].isListed
    );

    listedToDoSymbolDailyGrandis = Object.keys(toDoSymbolDailyGrandis).filter(
      (key) => toDoSymbolDailyGrandis[key].isListed
    );

    listedToDoSymbolWeeklyAcane = Object.keys(toDoSymbolWeeklyAcane).filter(
      (key) => toDoSymbolWeeklyAcane[key].isListed
    );
  }
  useEffect(() => {
    if (listOpenedCharacter) {
      console.log(toDoSymbolDailyAcane);
      Object.keys(toDoSymbolDailyAcane).map((v) => console.log(toDoSymbolDailyAcane[v].isClear));
    }
  }, [toDoSymbolDailyAcane]);
  
  return (
    <ToDoSymbolDiv>
      {/* 일간 */}
      <div className="daily">
        {/* 아케인 일일퀘스트 */}
        <div className="daily-acane">
          <div>아케인 일일퀘스트</div>
          {listedToDoSymbolDailyAcane.length > 0 ? (
            <ContentsSection
              data={symbol.daily.acane}
              calledBy="daily-acane"
              toDos={toDoSymbolDailyAcane}
            />
          ) : (
            <ContentsNothing calledBy="ToDos" />
          )}
        </div>

        {/* 그란디스 일일퀘스트 */}
        <div className="daily-grandis">
          <div>그란디스 일일퀘스트</div>
          {listedToDoSymbolDailyGrandis.length > 0 ? (
            <ContentsSection
              data={symbol.daily.grandis}
              calledBy="daily-grandis"
              toDos={toDoSymbolDailyGrandis}
            />
          ) : (
            <ContentsNothing calledBy="ToDos" />
          )}
        </div>
      </div>

      {/* 주간 */}
      <div className="weekly">
        {/* 아케인 주간퀘스트 */}
        <div className="weekly-acane">
          <div>아케인 주간컨텐츠</div>
          {listedToDoSymbolWeeklyAcane.length > 0 ? (
            <ContentsSection
              data={symbol.weekly.acane}
              calledBy="weekly-acane"
              toDos={toDoSymbolWeeklyAcane}
            />
          ) : (
            <ContentsNothing calledBy="ToDos" />
          )}
        </div>
      </div>
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div`
  padding: 10px;
`;

interface DataType {
  data: { text: string; image: string }[];
  calledBy: ToDoCategoryType;
  toDos: { [key: string]: ToDoDetailStateType };
}

function ContentsSection({ data, calledBy, toDos }: DataType) {
  const dispatch = useDispatch();
  const listedToDos = Object.keys(toDos).filter((key) => toDos[key].isListed);

  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        if (listedToDos.includes(v.text)) {
          return (
            <ContentsBoxDiv
              key={v.text}
              onClick={() => dispatch(toggleIsClearState([v.text, calledBy]))}
            >
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
