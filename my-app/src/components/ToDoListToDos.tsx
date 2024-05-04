import styled from "styled-components"
import { symbol } from "../data/symbol"


export function ToDoListToDos() {
	return (
		<ToDoListToDosDiv>
			<SymbolToDosDiv>
				{symbol.daily.acane.map((v) => (
					<img key={v.text} src={process.env.PUBLIC_URL + v.image}></img>
				))}
			</SymbolToDosDiv>
			<BossToDosDiv>

			</BossToDosDiv>
			<ContentsToDosDiv>

			</ContentsToDosDiv>
		</ToDoListToDosDiv>
	)
}

const ToDoListToDosDiv = styled.div`
	
`

const SymbolToDosDiv = styled.div`
	
`

const BossToDosDiv = styled.div`
	
`
const ContentsToDosDiv = styled.div`
	
`
