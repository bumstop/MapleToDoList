import styled from "styled-components";

export function Footer() {
  return (
    <FooterDiv>
      © All Rights Reserved. 메할일 is not associated with NEXON Korea. Data
      based on NEXON Open API.
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: #999;
  background-color: #f0f2f5;
`;
