import styled from "styled-components";
import { CharacterCard } from "./CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { modalClose } from "../redux/modalStateSlice";

export function Modal() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(
    (state: RootState) => state.modalState.isOpen
  );

  useEffect(() => {
    console.log("modalIsOpen:", modalIsOpen);
  }, [modalIsOpen]);

  return (
    <ModalDiv
      $isOpen={modalIsOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(modalClose()); // 이벤트 타겟이 ModalDiv면 close
      }}
    >
      <ContentWrapDiv>
        <CharacterCard />
      </ContentWrapDiv>
    </ModalDiv>
  );
}

const ModalDiv = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);

  display: ${(props: { $isOpen: boolean }) =>
    props.$isOpen ? "block" : "none"};
`;
const ContentWrapDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
