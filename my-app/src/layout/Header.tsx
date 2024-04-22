import styled from "styled-components";
import { SearchBox, SearchBoxDiv } from "../components/SearchBox";

const HeaderDiv = styled.div`
  position: relative;
  height: 30px;
  margin-bottom: 10px;
`;
const SearchBoxWrap = styled(SearchBoxDiv)`
  position: absolute;
  top: 0;
  right: 0;
`;

export function Header() {
  return (
    <HeaderDiv>
      <SearchBoxWrap>
        <SearchBox />
      </SearchBoxWrap>
    </HeaderDiv>
  );
}
