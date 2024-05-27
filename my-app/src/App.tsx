import styled from "styled-components";
import { CharacterSelected } from "./components/CharacterSelected";
import { CharacterList } from "./components/CharacterList";
import { ToDos } from "./components/ToDos";
import { Modal } from "./components/Modal";
import { Footer } from "./layout/Footer";
import useResetTaskIsClear from "./func/useResetTaskIsClear";

export function App() {
  useResetTaskIsClear();

  return (
    <div className="app">
      <Main>
        {/* 앱 사이드 */}
        <AppAside>
          <CharacterSelected />
          <CharacterList />
        </AppAside>
        {/* 앱 메인 */}
        <AppMain>
          <ToDos />
        </AppMain>
        {/* 모달창 */}
        <Modal />
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.div`
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

const AppMain = styled.div`
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
