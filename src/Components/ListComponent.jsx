import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

function ListComponent({ searchTerm, activeCharacter, setactiveCharacter }) {
	let DATA;
	let temp;
	let charname;
	let charurl;
	const Navigate = useNavigate();
	const [CARDS, setCARDS] = useState("");
	useEffect(() => {
		populatecards();
	}, [searchTerm]);

	function handleSelection(INFO) {
		if (activeCharacter.name === INFO.name) {
			return;
		}
		setactiveCharacter(INFO);
		console.log(INFO);
		Navigate("/character/" + INFO.name);
	}

	async function populatecards() {
		DATA = await useFetch("https://api.genshin.dev/characters/all");

		temp = DATA.filter((character) => {
			if (
				character.name.toLowerCase().includes(searchTerm.toLowerCase())
			) {
				return character;
			} else if (searchTerm === "") {
				return character;
			}
		}).map((character, index) => {
			charurl = "/icon-big/";
			if (character.name === "Kamisato Ayaka") {
				charname = "ayaka";
			} else if (character.name === "Raiden Shogun") {
				charname = "raiden";
			} else if (character.name === "Collei") {
				charname = "collei";
			} else if (character.name === "Sangonomiya Kokomi") {
				charname = "kokomi";
			} else if (character.name === "Kujou Sara") {
				charname = "sara";
			} else if (character.name === "Traveler") {
				charname = "traveler-anemo";
				charurl = "/icon-big-lumine";
				charurl = "/icon";
				character.rarity = 5;
			} else if (character.name === "Kaedehara Kazuha") {
				charname = "kazuha";
			} else {
				charname = character.name.replaceAll(" ", "-").toLowerCase();
			}

			let imageUrl =
				"https://api.genshin.dev/characters/" + charname + charurl;
			return (
				<div
					className="character-card"
					key={index}
					onClick={() =>
						handleSelection({
							name: character.name,
							vision: character.vision_key,
							searchName: character.name
								.replaceAll(" ", "-")
								.toLowerCase(),
							data: character,
						})
					}
				>
					<div
						className={
							character.rarity === 5
								? "character-image-container five-rarity"
								: "character-image-container four-rarity"
						}
					>
						<img
							className="character-image"
							draggable="false"
							src={imageUrl}
							alt=""
						/>
						<div className="rarity-image-container">
							{character.rarity === 5 ? (
								<img
									className="rarity-image"
									draggable="false"
									src="/assets/images/rarity-five-star.png"
									alt=""
								/>
							) : (
								<img
									className="rarity-image"
									draggable="false"
									src="/assets/images/rarity-four-star.png"
									alt=""
								/>
							)}
						</div>
					</div>
					<p className="character-name">
						{character.name === "Traveler"
							? character.name + "-" + character.vision
							: character.name}
					</p>
				</div>
			);
		});
		setCARDS(temp);
	}

	return <div className="inner-scroll-container">{CARDS}</div>;
}

export default ListComponent;
