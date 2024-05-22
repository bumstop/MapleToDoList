import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

const GlobalStyles = createGlobalStyle`
${reset}
	* {
		box-sizing: border-box;
	}
	html{
		font-size: 62.5%;
	}
	html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, dl, dt, dd, ol, ul, li, form, label, table {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}
	body {
		font-family: "Noto Sans KR", sans-serif; 
		font-weight: 400;
		font-size: 1.6rem;
		letter-spacing: -.5px;
		-webkit-user-select:none;
  	-moz-user-select:none;
  	-ms-user-select:none;
  	user-select:none;
	}
	ol, ul {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		border: none;
		background: transparent;
		font-size: inherit;
		font-family: inherit;
		cursor: pointer;
		line-height: inherit;
	}
	input {
		border: none;
		border-color: transparent;
	}
`;

export default GlobalStyles;
