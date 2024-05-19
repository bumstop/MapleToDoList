import styled from "styled-components";
import { Main } from "./Main";
import { Modal } from "../components/Modal";
import { CharacterList } from "../components/CharacterList";
import { Footer } from "./Footer";
import { CharacterSelected } from "../components/CharacterSelected";

export function Layout() {
  return (
    <>
      <AppBackground>
        {/* 앱 사이드 */}
        <AppAside>
          <CharacterSelected />
          <CharacterList />
        </AppAside>
        {/* 앱 바디 */}
        <AppBody>
          <Main />
        </AppBody>
        {/* 모달창 */}
        <Modal />
      </AppBackground>
      <Footer />
    </>
  );
}

const AppBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
  min-width: 100%;
  min-height: 100vh;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f0f2f5;
`;

const AppBody = styled.div`
  width: 860px;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;
  padding: 10px;
`;

const AppAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 390px;
  min-width: 390px;
`;
