import styled from "styled-components";
import { Main } from "./Main";
import { Modal } from "../components/Modal";
import { CharacterList } from "../components/CharacterList";

export function Layout() {
  return (
    <AppBackground>
      {/* 앱 사이드 */}
      <AppAside>
        <CharacterList />
      </AppAside>
      {/* 앱 바디 */}
      <AppBody>
        <Main />
      </AppBody>
      {/* 모달창 */}
      <Modal />
    </AppBackground>
  );
}

const AppBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5%;
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
`;

const AppBody = styled.div`


  width: 68%;
  height: 98%;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

const AppAside = styled.div`


  width: 30%;
  height: 98%;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
`;
