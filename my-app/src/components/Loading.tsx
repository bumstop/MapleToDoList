import { ClipLoader } from "react-spinners";
import styled from "styled-components";

export function Loading() {
  return (
    <LoadingDiv>
      <ClipLoader color="#ff890a" size={40} />
    </LoadingDiv>
  );
}

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
`;
