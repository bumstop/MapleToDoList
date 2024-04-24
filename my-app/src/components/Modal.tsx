import styled from "styled-components";
import { CharacterCard } from "./CharacterCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export function Modal() {
  const modalIsOpen = useSelector((state: RootState) => state.modalState.isOpen);
  useEffect(() => {
    console.log("modalIsOpen:", modalIsOpen);
  }, [modalIsOpen]);
  return (
    <ModalDiv $isOpen={modalIsOpen}>
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
