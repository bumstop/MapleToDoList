import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  ToDoCategoryType,
  ToDoDetailStateType,
  toggleIsListedState,
} from "../redux/characterListSlice";
import { symbol } from "../data/symbol";
import styled, { css } from "styled-components";

export function ToDoSymbolSetting() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);

  let toDoSymbolDailyAcane: { [key: string]: ToDoDetailStateType } = {};
  let toDoSymbolDailyGrandis: { [key: string]: ToDoDetailStateType } = {};
  let toDoSymbolWeeklyAcane: { [key: string]: ToDoDetailStateType } = {};

  if (listOpenedCharacter) {
    toDoSymbolDailyAcane = characterList[listOpenedCharacter].toDoList.symbol.daily.acane;
    toDoSymbolDailyGrandis = characterList[listOpenedCharacter].toDoList.symbol.daily.grandis;
    toDoSymbolWeeklyAcane = characterList[listOpenedCharacter].toDoList.symbol.weekly.acane;
  }

  return (
    <ToDoSymbolDiv>
      {/* 일간 */}
      <div className="daily">
        {/* 아케인 일일퀘스트 */}
        <div className="daily-acane">
          <div className="cate-head">아케인 일일퀘스트</div>
          {
            <ContentsSection
              data={symbol.daily.acane}
              calledBy="daily-acane"
              toDos={toDoSymbolDailyAcane}
            />
          }
        </div>

        {/* 그란디스 일일퀘스트 */}
        <div className="daily-grandis">
          <div className="cate-head">그란디스 일일퀘스트</div>
          {
            <ContentsSection
              data={symbol.daily.grandis}
              calledBy="daily-grandis"
              toDos={toDoSymbolDailyGrandis}
            />
          }
        </div>
      </div>
      {/* 주간 */}
      <div className="weekly">
        {/* 아케인 주간퀘스트 */}
        <div className="weekly-acane">
          <div className="cate-head">아케인 주간컨텐츠</div>
          {
            <ContentsSection
              data={symbol.weekly.acane}
              calledBy="weekly-acane"
              toDos={toDoSymbolWeeklyAcane}
            />
          }
        </div>
      </div>
    </ToDoSymbolDiv>
  );
}

const ToDoSymbolDiv = styled.div`
  padding: 10px;

  & {
    .cate-head {
      font-size: 20px;
    }
  }
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
        const isListed = listedToDos.includes(v.text) ? true : false;

        return (
          <ContentsBoxDiv
            key={v.text}
            onClick={() => dispatch(toggleIsListedState([v.text, calledBy]))}
            $isListed={isListed}
          >
            <div className="img">
              <img src={v.image} />
            </div>
            <div className="text">{v.text}</div>
          </ContentsBoxDiv>
        );
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

const ContentsBoxDiv = styled.div<{ $isListed: boolean }>`
  display: flex;
  align-items: center;
  flex-basis: calc((100% / 3) - (5px * 2 / 3));
  // 100% / (아이템갯수) - (gap * gap갯수 / 아이템갯수)
  position: relative;
  padding: 5px;
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;

  ${({ $isListed }) =>
    $isListed
      ? css`
          &::after {
            content: "추가됨";
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 1.2rem;
            color: #ff890a;
            letter-spacing: 0.5px;
          }
          border: 1px solid #ff890a;
        `
      : css`
          border: 1px solid #e5e7eb;
          color: #ccc;
        `}

  &:hover {
    border: 1px solid #e5e7eb;
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
`;
