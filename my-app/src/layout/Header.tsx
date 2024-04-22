import styled from "styled-components";
import { SearchBox } from "../components/SearchBox";

const HeaderDiv = styled.div`
  position: relative;
  height: 30px;
  margin-bottom: 10px;
`;
const SearchBoxWrapDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export function Header() {
  return (
    <HeaderDiv>
      <SearchBoxWrapDiv>
        <SearchBox />
      </SearchBoxWrapDiv>
    </HeaderDiv>
  );
}
