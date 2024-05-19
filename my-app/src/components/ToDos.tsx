import styled from "styled-components";
import { ToDoSymbol } from "./ToDoSymbol";
import { ToDoBoss } from "./ToDoBoss";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// 어떤 캐릭터의 리스트를 받아올지 결정,
// 리스트에 있는 캐릭터 카드를 클릭하면 변경 되도록 해야함.
export function ToDos() {
  const characterList = useSelector((state: RootState) => state.characterList);
  const listedCharacterName = Object.keys(characterList);
  // 어떤 캐릭터의 리스트가 열려있는지, (characterList의 객체중 isToDoOpened 속성이 true인 객체)
  const listOpenedCharacter = listedCharacterName.find(
    (key) => characterList[key].isToDoOpened
  );
  const tabUl = useRef<HTMLUListElement>(null);
  const symbolTab = useRef<HTMLLIElement>(null);
  const bossTab = useRef<HTMLLIElement>(null);
  const [tabNow, setTabNow] = useState(symbolTab);
  let tabPrevRef = useRef(tabNow.current);

  const [hoverLineWidth, setHoverLineWidth] = useState<number>(69.59);
  const [hoverLineLeft, setHoverLineLeft] = useState<number>(0);

  const liMouseEnterEvent = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = e.target as HTMLLIElement;

    if (tabUl.current) {
      const tabUlRect = tabUl.current.getBoundingClientRect(); // 부모 ul
      const targetRect = target.getBoundingClientRect(); // 타겟 li

      const targetWidth = targetRect.width;
      const relativeLeft = targetRect.left - tabUlRect.left; // 부모로부터 상대위치

      setHoverLineLeft(relativeLeft);
      setHoverLineWidth(targetWidth);
    }
  };

  const liMouseLeaveEvent = () => {
    let targetRect: DOMRect;
    let relativeLeft: number = 0;
    let targetWidth: number = 0;
    if (tabUl.current) {
      const tabUlRect = tabUl.current.getBoundingClientRect(); // 부모 ul

      // if (tabNow === symbolTab && symbolTab.current) {
      //   targetRect = symbolTab.current.getBoundingClientRect();
      //   targetWidth = targetRect.width;
      //   relativeLeft = targetRect.left - tabUlRect.left;
      // }
      // if (tabNow === bossTab && bossTab.current) {
      //   targetRect = bossTab.current.getBoundingClientRect();
      //   targetWidth = targetRect.width;
      //   relativeLeft = targetRect.left - tabUlRect.left;
      // }

      // 위 코드에서 아래로 변경, 탭마다 같은 코드를 반복해야 하던것을 수정함.

      if (tabNow.current) {
        targetRect = tabNow.current.getBoundingClientRect();
        targetWidth = targetRect.width;
        relativeLeft = targetRect.left - tabUlRect.left;
      }

      setHoverLineLeft(relativeLeft);
      setHoverLineWidth(targetWidth);
    }
  };

  // useEffect(() => {

  //   if (tabUl.current) {
  //     const firstLi = tabUl.current.childNodes[1] as HTMLElement;
  //     if (firstLi) {
  //       const firstLiRect = firstLi.getBoundingClientRect();
  //       const firstLiWidth = firstLiRect.width;
  //       console.log('Layout Effect - First Li Width:', firstLiWidth);

  //       // set initial position and width
  //       setHoverLineWidth(firstLiWidth);
  //       setHoverLineLeft(0);
  //     }
  //   }
  // }, []);

  // 이전에 선택된 탭 폰트 normal, 현재 선택된 탭 폰트 bold 적용
  
  useEffect(() => {
    if (tabPrevRef.current) {
      tabPrevRef.current.style.cssText = `
      font-weight: normal;
    `;
    }

    tabPrevRef.current = tabNow.current; // 이전상태에 현재상태를 저장

    if (tabNow.current) {
      tabNow.current.style.cssText = `
        font-weight: bold;
      `;
    }
  }, [tabNow]);


  return (
    <ToDosDiv>
      <TabDiv>
        <ul ref={tabUl}>
          <li
            ref={symbolTab}
            onClick={() => setTabNow(symbolTab)}
            onMouseEnter={(e) => liMouseEnterEvent(e)}
            onMouseLeave={() => liMouseLeaveEvent()}
          >
            심볼
          </li>
          <li
            ref={bossTab}
            onClick={() => setTabNow(bossTab)}
            onMouseEnter={(e) => liMouseEnterEvent(e)}
            onMouseLeave={() => liMouseLeaveEvent()}
          >
            보스
          </li>
        </ul>
        <div className="header">📄 {listOpenedCharacter && listOpenedCharacter + "의"} Todo List</div>
        <HoverLine $width={hoverLineWidth} $left={hoverLineLeft} />
      </TabDiv>
      {tabNow === symbolTab && <ToDoSymbol />}
      {tabNow === bossTab && <ToDoBoss />}
    </ToDosDiv>
  );
}

const ToDosDiv = styled.div`
  font-family: "Maplestory", sans-serif;
  font-weight: bold;
`;

const TabDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: normal;

  ul {
    display: flex;
    gap: 10px;
  }

  li {
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }
  .header {
    padding: 10px;
  }
`;

interface HoverLineProps {
  $width: number;
  $left: number;
}

const HoverLine = styled.span<HoverLineProps>`
  position: absolute;
  left: ${({ $left }) => `${$left}px`};
  bottom: 0;
  width: ${({ $width }) => `${$width}px`};
  height: 5px;
  background-color: #434343;
  transition: 0.2s ease-in-out;
`;
