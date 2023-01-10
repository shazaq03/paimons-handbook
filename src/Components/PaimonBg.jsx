import React from "react";

function PaimonBg({ activeCharacter }) {
	return (
		<div
			className={
				activeCharacter === ""
					? "paimon-bg-container"
					: "paimon-bg-container active"
			}
		></div>
	);
}

export default PaimonBg;
