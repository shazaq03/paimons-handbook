import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function ShowcaseContainer({ activeCharacter }) {
	let params = useParams();
	let INFO = params.INFO;

	let DATA, tempImg, temp, flag;
	const [activeDATA, setactiveDATA] = useState("initia;");
	const [activeImage, setactiveImage] = useState("");
	const [activeTab, setactiveTab] = useState("info");

	useEffect(() => {
		// console.log(activeCharacter);
		getDATA();
	}, [activeCharacter]);

	async function getDATA() {
		//to change to using params
		// DATA = await useFetch(
		// 	`https://api.genshin.dev/characters/${activeCharacter.searchName}`
		// );
		// console.log(DATA);

		// if(flag === 1){
		// 	if (character.name === "Kamisato Ayaka") {
		// 		charname = "ayaka";
		// 	} else if (character.name === "Raiden Shogun") {
		// 		charname = "raiden";
		// 	} else if (character.name === "Collei") {
		// 		charname = "collei";
		// 	} else if (character.name === "Sangonomiya Kokomi") {
		// 		charname = "kokomi";
		// 	} else if (character.name === "Kujou Sara") {
		// 		charname = "sara";
		// 	} else if (character.name === "Traveler") {
		// 		charname = "traveler-anemo";
		// 		charurl = "/icon-big-lumine";
		// 		charurl = "/icon";
		// 		character.rarity = 5;
		// 	} else if (character.name === "Kaedehara Kazuha") {
		// 		charname = "kazuha";
		// 	}
		// }
		// setactiveDATA(DATA);
		// console.log(activeDATA);

		setactiveDATA(activeCharacter.data);
		tempImg = await useFetch(
			`https://api.genshin.dev/characters/${activeCharacter.searchName}/gacha-splash`
		);
		setactiveImage(
			`https://api.genshin.dev/characters/${activeCharacter.searchName}/gacha-splash`
		);
		if (activeCharacter.name === "Keqing") {
			setactiveImage(
				"https://api.genshin.dev/characters/keqing/outfit-opulent-splendor"
			);
		} else if (activeCharacter.name == "Ningguang") {
			setactiveImage(
				"https://api.genshin.dev/characters/ningguang/outfit-orchids-evening-gown"
			);
		}
		if (tempImg == null) {
			tempImg = await useFetch(
				`https://api.genshin.dev/characters/${activeCharacter.searchName}/card`
			);
			setactiveImage(
				`https://api.genshin.dev/characters/${activeCharacter.searchName}/card`
			);
			if (tempImg == null) {
				setactiveImage("src/assets/images/paimon-failed.png");
			}
			if (activeCharacter.name === "Kamisato Ayaka") {
				setactiveImage(
					"https://api.genshin.dev/characters/ayaka/gacha-splash"
				);
			} else if (activeCharacter.name === "Raiden Shogun") {
				setactiveImage(
					"https://api.genshin.dev/characters/raiden/gacha-splash"
				);
			} else if (activeCharacter.name === "Collei") {
				setactiveImage(
					"https://api.genshin.dev/characters/collei/card"
				);
			} else if (activeCharacter.name === "Sangonomiya Kokomi") {
				setactiveImage(
					"https://api.genshin.dev/characters/kokomi/gacha-splash"
				);
			} else if (activeCharacter.name === "Kujou Sara") {
				setactiveImage(
					"https://api.genshin.dev/characters/sara/gacha-splash"
				);
			} else if (activeCharacter.name === "Traveler") {
				setactiveImage(
					"https://api.genshin.dev/characters/traveler-anemo/portrait"
				);
			} else if (activeCharacter.name === "Kaedehara Kazuha") {
				setactiveImage(
					"https://api.genshin.dev/characters/kazuha/gacha-splash"
				);
			}
		}
	}
	return (
		<div
			className={
				activeCharacter === ""
					? "inner-showcase-container"
					: "inner-showcase-container active"
			}
		>
			<div className="image-section">
				<img
					src={activeImage}
					onError="this.style.borderWidth=0"
					alt=""
					draggable="false"
				/>
			</div>
			{/* <div className="basic-info-section">
				<div className="inner-border-container"></div>
			</div> */}
			<div className="detailed-info-section">
				<div className="tabs-container">
					<div
						className={
							activeTab === "info"
								? "Info tab active"
								: "Info tab"
						}
						onClick={() => setactiveTab("info")}
					>
						Info
					</div>
					<div
						className={
							activeTab === "constellation"
								? "constellation tab active"
								: "constellation tab "
						}
						onClick={() => setactiveTab("constellation")}
					>
						Constellations
					</div>
					<div
						className={
							activeTab === "skills"
								? "skills tab active"
								: "skills tab"
						}
						onClick={() => setactiveTab("skills")}
					>
						Skills
					</div>
					<div
						className={
							activeTab === "passives"
								? "passives tab active"
								: "passives tab"
						}
						onClick={() => setactiveTab("passives")}
					>
						Passive Talents
					</div>
				</div>
				<div className="section">
					{activeTab === "info" && (
						<div className="info ">
							<p>
								<span className="title">Name: </span>
								{activeDATA.name}
							</p>
							<p>
								<span className="title">Title: </span>
								{activeDATA.title}
							</p>
							<p>
								<span className="title">Vision: </span>
								{activeDATA.vision}
							</p>
							<p>
								<span className="title">Weapon: </span>
								{activeDATA.weapon}
							</p>
							<p>
								<span className="title">Constellation: </span>
								{activeDATA.constellation}
							</p>
							<p>
								{activeDATA.rarity === 5 ? (
									<img
										src="/assets/rarity-five-star.png"
										alt="5"
									/>
								) : (
									<img
										src="/assets/rarity-four-star.png"
										alt="4"
									/>
								)}
							</p>
							<p>
								<span className="title">Nation: </span>
								{activeDATA.nation}
							</p>
							<p>
								<span className="title">Affiliation: </span>
								{activeDATA.affiliation}
							</p>
							<p className="span-2">{activeDATA.description}</p>
						</div>
					)}
					{activeTab === "constellation" && (
						<div className="constellation ">
							{activeDATA.constellations.map((cons, index) => {
								return (
									<div className="cons-container">
										<div className="cons-name">
											{cons.name}
										</div>
										<div className="cons-des">
											{cons.description}
										</div>
									</div>
								);
							})}
						</div>
					)}
					{activeTab === "skills" && (
						<div className="skills ">
							{activeDATA.skillTalents.map((skill, index) => {
								return (
									<div
										className="skill-container"
										key={index}
									>
										<div className="skill-name">
											<p className="skill-type">
												{skill.unlock} :
											</p>
											{skill.name}
										</div>
										<div className="skill-des">
											{skill.description}
										</div>
									</div>
								);
							})}
						</div>
					)}
					{activeTab === "passives" && (
						<div className="passives ">
							{activeDATA.passiveTalents.map((passive, index) => {
								return (
									<div className="passive-container">
										<div className="passive-name">
											<p className="passive-unlock">
												{passive.unlock}
											</p>
											{passive.name}
										</div>
										<div className="passive-des">
											{passive.description}
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShowcaseContainer;
