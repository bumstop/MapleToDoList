import styled, { css } from "styled-components";
import { boss } from "../data/boss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContentsNothing } from "./ContentsNothing";
import {
  ToDoCategoryType,
  ToDoDetailStateType,
  toggleIsClearState,
} from "../redux/characterListSlice";
import { checkIcon } from "../assets/images";

export function ToDoBoss() {
  const dispatch = useDispatch();
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);
  let toDoBossDaily: { [key: string]: ToDoDetailStateType } = {};
  let toDoBossWeekly: { [key: string]: ToDoDetailStateType } = {};
  let toDoBossMonthly: { [key: string]: ToDoDetailStateType } = {};
  let listedTodoBossDaily: string[] = [];
  let listedTodoBossWeekly: string[] = [];
  let listedTodoBossMonthly: string[] = [];

  if (listOpenedCharacter) {
    toDoBossDaily = characterList[listOpenedCharacter].toDoList.boss.daily;
    toDoBossWeekly = characterList[listOpenedCharacter].toDoList.boss.weekly;
    toDoBossMonthly = characterList[listOpenedCharacter].toDoList.boss.monthly;

    listedTodoBossDaily = Object.keys(toDoBossDaily).filter((key) => toDoBossDaily[key].isListed);
    listedTodoBossWeekly = Object.keys(toDoBossWeekly).filter(
      (key) => toDoBossWeekly[key].isListed
    );
    listedTodoBossMonthly = Object.keys(toDoBossMonthly).filter(
      (key) => toDoBossMonthly[key].isListed
    );
  }

  return (
    <ToDoBossDiv>
      <div className="daily">
        <div className="cate-head">일간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.daily} toDos={toDoBossDaily} calledBy="daily-boss" />
        ) : (
          <ContentsNothing calledBy="ToDos" />
        )}
      </div>
      <div className="weekly">
        <div className="cate-head">주간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.weekly} toDos={toDoBossWeekly} calledBy="weekly-boss" />
        ) : (
          <ContentsNothing calledBy="ToDos" />
        )}
      </div>
      <div className="monthly">
        <div className="cate-head">월간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.monthly} toDos={toDoBossMonthly} calledBy="monthly-boss" />
        ) : (
          <ContentsNothing calledBy="ToDos" />
        )}
      </div>
    </ToDoBossDiv>
  );
}

const ToDoBossDiv = styled.div`
  padding: 10px;

  & {
    .cate-head {
      font-size: 20px;
    }
  }
`;

interface DataType {
  data: { name: string; image: string }[];
  calledBy: ToDoCategoryType;
  toDos: { [key: string]: ToDoDetailStateType };
}

function ContentsSection({ data, toDos, calledBy }: DataType) {
  const dispatch = useDispatch();
  const listedToDos = Object.keys(toDos).filter((key) => toDos[key].isListed);
  const clearedToDos = Object.keys(toDos).filter((key) => toDos[key].isClear);

  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        if (listedToDos.includes(v.name)) {
          const isClear = clearedToDos.includes(v.name) ? true : false;

          return (
            <ContentsBoxDiv
              key={v.name}
              onClick={() => dispatch(toggleIsClearState([v.name, calledBy]))}
              $isClear={isClear}
            >
              <div className="img">
                <img src={v.image} />
              </div>
              <div className="name">{v.name}</div>
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
  margin: 10px 0 30px;
`;

const ContentsBoxDiv = styled.div<{ $isClear: boolean }>`
  display: flex;
  align-items: center;
  flex-basis: calc((100% / 3) - (5px * 2 / 3));
  padding: 5px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #f38a3c;
  }

  .img {
    position: relative;
    width: 58px;
    height: 58px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
  .name {
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
        background: no-repeat center/80% url(${checkIcon});
        backdrop-filter: grayscale(100%);
      }
    `}
`;
