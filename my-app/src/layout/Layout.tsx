import styled from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { Modal } from "../components/Modal";

const AppBackground = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
`;

const AppBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  min-height: 95%;
  border-radius: 1rem;
  box-shadow: 0 1px 6px #20212447;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

export function Layout() {
  return (
    <AppBackground>
      {/* 앱 바디 */}
      <AppBody>
        <Header />
        <Main />
      </AppBody>
      {/* 모달창 */}
      <Modal />
    </AppBackground>
  );
}
