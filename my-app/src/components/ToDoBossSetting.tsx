import styled, { css } from "styled-components";
import { boss } from "../data/boss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import {
  ToDoCategoryType,
  TaskInterface,
  toggleIsListedState,
} from "../redux/characterListSlice";

export function ToDoBossSetting() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find((key) => characterList[key].isToDoOpened);

  let toDoBossDaily: { [key: string]: TaskInterface } = {};
  let toDoBossWeekly: { [key: string]: TaskInterface } = {};
  let toDoBossMonthly: { [key: string]: TaskInterface } = {};

  if (listOpenedCharacter) {
    toDoBossDaily = characterList[listOpenedCharacter].toDoList.boss.daily;
    toDoBossWeekly = characterList[listOpenedCharacter].toDoList.boss.weekly;
    toDoBossMonthly = characterList[listOpenedCharacter].toDoList.boss.monthly;
  }

  return (
    <ToDoBossDiv>
      <div className="daily">
        <div className="cate-head">일간</div>
        <ContentsSection data={boss.daily} toDos={toDoBossDaily} calledBy="daily-boss" />
      </div>
      <div className="weekly">
        <div className="cate-head">주간</div>
        <ContentsSection data={boss.weekly} toDos={toDoBossWeekly} calledBy="weekly-boss" />
      </div>
      <div className="monthly">
        <div className="cate-head">월간</div>
        <ContentsSection data={boss.monthly} toDos={toDoBossMonthly} calledBy="monthly-boss" />
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
  toDos: { [key: string]: TaskInterface };
}

function ContentsSection({ data, toDos, calledBy }: DataType) {
  const dispatch = useDispatch();
  const listedToDos = Object.keys(toDos).filter((key) => toDos[key].isListed);

  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        const isListed = listedToDos.includes(v.name) ? true : false;

        return (
          <ContentsBoxDiv
            key={v.name}
            onClick={() => dispatch(toggleIsListedState([v.name, calledBy]))}
            $isListed={isListed}
          >
            <div className="img">
              <img src={v.image} />
            </div>
            <div className="name">{v.name}</div>
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
  margin: 10px 0 30px;
`;

const ContentsBoxDiv = styled.div<{ $isListed: boolean }>`
  display: flex;
  align-items: center;
  flex-basis: calc((100% / 3) - (5px * 2 / 3));
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
`;
