import "./scss/App.scss";

import styled from "styled-components";

const Headers = styled.h1`
	color: #fbfe56;
`;
function App() {
	return (
		<div className="App">
			<Headers>OMO main 입니다.</Headers>
		</div>
	);
}

export default App;
