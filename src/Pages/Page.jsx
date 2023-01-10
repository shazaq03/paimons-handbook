import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ShowcaseContainer from "../Components/ShowcaseContainer";
import PaimonBg from "../Components/PaimonBg";

function Page({ activeCharacter }) {
	const location = useLocation();

	return (
		<Routes location={location} key={location.pathname}>
			<Route
				path="/"
				element={<PaimonBg activeCharacter={activeCharacter} />}
			/>
			<Route
				path="/character/:INFO"
				element={
					<ShowcaseContainer activeCharacter={activeCharacter} />
				}
			/>
		</Routes>
	);
}

export default Page;
