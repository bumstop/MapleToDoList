import styled from "styled-components";

interface ContentsNothingPropsType {
  calledBy: "ToDos" | "CharacterList" | "CharacterSelected";
}

export function ContentsNothing({ calledBy }: ContentsNothingPropsType) {
  let returnElement: JSX.Element = <></>;

  if (calledBy === "ToDos")
    returnElement = <ContentsNothingDiv>추가한 목록이 없습니다 !</ContentsNothingDiv>;

  if (calledBy === "CharacterList")
    returnElement = (
      <CharacterListNothingDiv>캐릭터 검색으로 캐릭터를 추가해보세요 !</CharacterListNothingDiv>
    );

  if (calledBy === "CharacterSelected")
    returnElement = (
      <CharacterSelectedNothingDiv>캐릭터 카드를 클릭해보세요 !</CharacterSelectedNothingDiv>
    );

  return returnElement;
}

const ContentsNothingDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Maplestory";
  font-weight: normal;
`;
const CharacterListNothingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding-top: 40px;
  font-family: "Maplestory";
  font-weight: normal;
`;
const CharacterSelectedNothingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
  font-family: "Maplestory";
  font-weight: normal;
`;
