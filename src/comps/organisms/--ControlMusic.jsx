import { useState } from "react";
import Icon from "../atoms/Icon";
import styled from "styled-components";
import track01 from "./../../resources/track02.mp3";
import btnPlay from "./../../resources/btnPlay.svg";
import btnPause from "./../../resources/btnPause.svg";

let ctx, source, analyser, dataArray;
let req;
let promAnt = 0;
let prom = 0;

const Wrapper = styled.div`
	width: 250px;
	height: 250px;
	min-width: 250px;
	min-height: 250px;
	position: relative;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	.logo-container {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--white);
		z-index: 2;
		.icon {
			transition: 0.25s;
			&.--beat {
				transform: scale(1.2);
			}
		}
	}
	.element {
		position: absolute;
		top: 50%;
		left: 50%;
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: var(--black);
		//border-radius: 50px;
		z-index: 1;
		transform-origin: top left;
		transition: 0.25s;
	}
	.button {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: var(--white);
		border: solid 2px var(--black);
		display: flex;
		align-items: center;
		justify-content: center;
		right: 15px;
		bottom: 15px;
		z-index: 2;
		cursor: pointer;
		img {
			max-width: 75%;
			max-height: 75%;
			&.hidden {
				display: none;
			}
		}
	}
`;

function Elements({ cant_elements }) {
	let elems = [];
	for (let i = 0; i < cant_elements; i++) {
		let key = i;
		elems.push(<span key={key} className="element"></span>);
	}
	return <div>{elems}</div>;
}
function elementsInitPos(cant_elements) {
	const elems = document.querySelectorAll(".element");
	for (let i = 0; i < cant_elements; i++) {
		let calc = Math.trunc(i * (360 / cant_elements));
		elems[i].style.transform = `rotateZ(${calc}deg) translate(115px)`;
	}
}
function elementsUpdate(cant_elements) {
	const elems = document.querySelectorAll(".element");
	const logo = document.querySelector(".logo-container .icon");
	req = requestAnimationFrame(() => {
		elementsUpdate(cant_elements);
	});
	analyser.getByteFrequencyData(dataArray);
	for (let i = 0; i < cant_elements; i++) {
		let item = dataArray[i * 2];
		item = 7 + (item * 400) / 250; // 150) * 25;
		//item = 7 + (item > 250? 75 : item > 200 ? 40 : item > 150 ? 20 : item > 100 ? 10 :  0);
		elems[i].style.width = `${item}px`;
		prom = prom + item;
	}
	prom = prom / cant_elements;
	if (prom > promAnt + 1) {
		logo.classList.add("--beat");
	} else {
		logo.classList.remove("--beat");
	}
	promAnt = prom;
}

function handlePlay(play, setPlay, cant_elements) {
	setPlay(!play);
	const audio = document.querySelector("audio");
	if (play === false) {
		if (source === undefined) {
			ctx = new (window.AudioContext || window.webkitAudioContext)();
			analyser = ctx.createAnalyser();
			analyser.fftSize = 2048; //32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, and 32768
			dataArray = new Uint8Array(analyser.frequencyBinCount);
			source = ctx.createMediaElementSource(audio);
			source.connect(analyser);
			analyser.connect(ctx.destination);
		}
		audio.play();
		elementsUpdate(cant_elements);
	} else {
		audio.pause();
		promAnt = 0;
		prom = 0;
		setTimeout(() => {
			cancelAnimationFrame(req);
		}, 1000);
	}
}

export default function ControlMusic({ cant_elements }) {
	window.addEventListener("load", () => {
		elementsInitPos(cant_elements);
	});
	const [play, setPlay] = useState(false);
	return (
		<Wrapper className="controlMusic">
			<audio src={track01}></audio>
			<div className="logo-container">
				<Icon type="LOGOB" size="maxmax"/>
			</div>
			<Elements cant_elements={cant_elements} />
			<div
				className="button"
				onClick={() => {
					handlePlay(play, setPlay, cant_elements);
				}}
			>
				{play === true ? (
					<img src={btnPlay} alt="" className="btnPlay" />
				) : (
					<img src={btnPause} alt="" className="btnPause" />
				)}
			</div>
		</Wrapper>
	);
}
