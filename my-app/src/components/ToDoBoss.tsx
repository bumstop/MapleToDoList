import styled from "styled-components";
import { boss } from "../data/boss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContentsNothing } from "./ContentsNothing";

export function ToDoBoss() {
  const dispatch = useDispatch();
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find(
    (key) => characterList[key].isToDoOpened
  );

  let listedTodoBossDaily: string[] = [];
  let listedTodoBossWeekly: string[] = [];
  let listedTodoBossMonthly: string[] = [];

  if (listOpenedCharacter) {
    const toDoBossDaily =
      characterList[listOpenedCharacter].toDoList.boss.daily;
    const toDoBossWeekly =
      characterList[listOpenedCharacter].toDoList.boss.weekly;
    const toDoBossMonthly =
      characterList[listOpenedCharacter].toDoList.boss.monthly;

    listedTodoBossDaily = Object.keys(toDoBossDaily).filter(
      (key) => toDoBossDaily[key].isListed
    );
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
        <div>일간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.daily} toDos={listedTodoBossDaily} />
        ) : (
          <ContentsNothing />
        )}
      </div>
      <div className="weekly">
        <div>주간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.weekly} toDos={listedTodoBossWeekly} />
        ) : (
          <ContentsNothing />
        )}
      </div>
      <div className="monthly">
        <div>월간</div>
        {listedTodoBossDaily.length > 0 ? (
          <ContentsSection data={boss.monthly} toDos={listedTodoBossMonthly} />
        ) : (
          <ContentsNothing />
        )}
      </div>
    </ToDoBossDiv>
  );
}

const ToDoBossDiv = styled.div`
  padding: 10px;
`;

interface DataType {
  data: { name: string; image: string }[];
  toDos: string[];
}

function ContentsSection({ data, toDos }: DataType) {
  return (
    <ContentsSectionDiv>
      {data.map((v) => {
        if (toDos.includes(v.name)) {
          return (
            <ContentsBoxDiv key={v.name}>
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
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0 30px;
`;

const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 5px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }

  img {
    width: 58px;
    height: 58px;
    border-radius: 0.5rem;
  }
  .name {
    flex-grow: 1;
    text-align: center;
  }
`;
