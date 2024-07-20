import styled, { css } from "styled-components";
import { symbol } from "../data/symbol";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContentsNothing } from "./ContentsNothing";
import { TaskInterface, ToDoCategoryType, toggleIsClearState } from "../redux/characterListSlice";
import { checkIcon } from "../assets/images";
import { AllChecker } from "./AllChecker";

export function ToDoSymbol() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);
  let toDoSymbolDailyAcane: { [key: string]: TaskInterface } = {};
  let toDoSymbolDailyGrandis: { [key: string]: TaskInterface } = {};
  let toDoSymbolWeeklyAcane: { [key: string]: TaskInterface } = {};
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

  return (
    <ToDoSymbolDiv>
      {/* 일간 */}
      <div className="daily">
        {/* 아케인 일일퀘스트 */}
        <div className="daily-acane">
          <div className="cate-head">
            <div className="cate-title">아케인 일일퀘스트</div>
            <AllChecker toDos={toDoSymbolDailyAcane} calledBy="daily-acane" />
          </div>
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
          <div className="cate-head">
            <div className="cate-title">그란디스 일일퀘스트</div>
            <AllChecker toDos={toDoSymbolDailyGrandis} calledBy="daily-grandis" />
          </div>
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
          <div className="cate-head">
            <div className="cate-title">아케인 주간컨텐츠</div>
            <AllChecker toDos={toDoSymbolWeeklyAcane} calledBy="weekly-acane" />
          </div>
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

  & {
    .cate-head {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }
  }
`;

export interface DataType {
  data: { text: string; image: string }[];
  calledBy: ToDoCategoryType;
  toDos: { [key: string]: TaskInterface };
}

function ContentsSection({ data, calledBy, toDos }: DataType) {
  const dispatch = useDispatch();
  const listedToDos = Object.keys(toDos).filter((key) => toDos[key].isListed);
  const clearedToDos = Object.keys(toDos).filter((key) => toDos[key].isClear);

  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        if (listedToDos.includes(v.text)) {
          const isClear = clearedToDos.includes(v.text) ? true : false;

          return (
            <ContentsBoxDiv
              key={v.text}
              onClick={() => dispatch(toggleIsClearState([v.text, calledBy]))}
              $isClear={isClear}
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
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  margin: 20px 0 40px;
`;

const ContentsBoxDiv = styled.div<{ $isClear: boolean }>`
  display: flex;
  align-items: center;
  flex-basis: calc((100% / 3) - (5px * 2 / 3));
  // 100% / (아이템갯수) - (gap * gap갯수 / 아이템갯수)
  position: relative;
  padding: 5px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #ff890a;
    color: #ff890a;
  }

  .img {
    position: relative;
    width: 44px;
    height: 44px;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
  }
  .text {
    flex-grow: 1;
    text-align: center;
  }

  ${({ $isClear }) =>
    $isClear &&
    css`
      color: #ddd;

      .img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center/90% url(${checkIcon});
        backdrop-filter: grayscale(100%);
      }
    `}
`;
