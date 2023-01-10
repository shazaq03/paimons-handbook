import { useState } from "react";
import ListComponent from "./Components/ListComponent";
import SearchComponent from "./Components/SearchComponent";
import { Link, useNavigate } from "react-router-dom";
import Page from "./Pages/Page";
import "./styles/main.scss";

function App() {
	const [searchTerm, setsearchTerm] = useState("");
	const [activeCharacter, setactiveCharacter] = useState("");
	let navigate = useNavigate();

	window.onbeforeunload = (e) => {
		e.preventDefault();
		// setactiveCharacter("");
		navigate("/");
	};

	function handleRedirToHome() {
		setactiveCharacter("");
		navigate("/");
	}
	return (
		<div className="App">
			<div className="list-container top-level-container">
				<div className="title-container">
					<h1
						onClick={() => {
							handleRedirToHome();
						}}
						className="main-title"
					>
						Paimon's Handbook
					</h1>
					<div className="search-container">
						<SearchComponent
							searchTerm={searchTerm}
							setsearchTerm={setsearchTerm}
						/>
					</div>
				</div>
				<div className="scroll-container">
					<ListComponent
						searchTerm={searchTerm}
						activeCharacter={activeCharacter}
						setactiveCharacter={setactiveCharacter}
					/>
				</div>
			</div>
			<div className="showcase-container top-level-container">
				<Page activeCharacter={activeCharacter} />
			</div>
		</div>
	);
}

export default App;
