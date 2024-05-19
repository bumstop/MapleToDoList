import styled from "styled-components"

export function ContentsNothing() {
	return (
		<ContentsNothingDiv>추가한 목록이 없습니다!</ContentsNothingDiv>
	)
}

const ContentsNothingDiv = styled.div`
	margin-top: 10px;
	margin-bottom: 30px;
	padding: 35px 0;
	text-align: center;
	
`