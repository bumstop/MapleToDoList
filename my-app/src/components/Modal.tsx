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

  const searchInfo = useSelector((state: RootState) => state.searchInfo);
  const characterImage = searchInfo.character_image;
  const characterClass = searchInfo.character_class;
  const characterGuildName = searchInfo.character_guild_name;
  const characterLevel = searchInfo.character_level;
  const characterName = searchInfo.character_name;
  const characterWorldName = searchInfo.world_name;
  const guildMark = searchInfo.guild_mark;

  return (
    <ModalDiv
      $isOpen={modalIsOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(modalClose()); // 이벤트 타겟이 ModalDiv면 close
      }}
    >
      <ContentWrapDiv>
        <CharacterCard
          character_class={characterClass}
          character_guild_name={characterGuildName}
          character_image={characterImage}
          character_level={characterLevel}
          character_name={characterName}
          world_name={characterWorldName}
          guild_mark={guildMark}
        />
      </ContentWrapDiv>
    </ModalDiv>
  );
}

const ModalDiv = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 99;
  display: ${(props: { $isOpen: boolean }) =>
    props.$isOpen ? "block" : "none"};
`;
const ContentWrapDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
