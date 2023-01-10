import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchComponent({ searchTerm, setsearchTerm }) {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			className="search-form"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className="input-container">
				<input
					type="text"
					placeholder="Search..."
					className="search-input"
					spellCheck="false"
					value={searchTerm}
					onChange={(e) => setsearchTerm(e.target.value)}
				/>
				<div className="search-icon">
					<AiOutlineSearch />
				</div>
			</div>
		</form>
	);
}

export default SearchComponent;
