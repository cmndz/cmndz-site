import styled from "styled-components";
import imgLogo from "./../resources/logo.svg";
import track01 from "./../resources/track01.mp3";
import btnPlay from "./../resources/btnPlay.svg";
import btnPause from "./../resources/btnPause.svg";

// function playMusic() {
// 	const ControlMusicControl = document.getElementById("ControlMusic");
// 	let music = document.getElementById("ControlMusicTrack01");
// 	music.volume = 0.3;
// 	if (ControlMusicControl.classList.contains("isPaused")) {
// 		ControlMusicControl.classList.remove("isPaused");
// 		ControlMusicControl.classList.add("isPlayed");
// 		// adjustControlMusicTrackName();
// 		music.play();
// 	} else {
// 		ControlMusicControl.classList.remove("isPlayed");
// 		ControlMusicControl.classList.add("isPaused");
// 		music.pause();
// 	}
// }

// function adjustControlMusicTrackName() {
// 	const ControlMusicTrackName = document.getElementsByClassName("ControlMusicTrackName");

// 	console.log(ControlMusicTrackName);
// }

const Wrapper = styled.div`
	background-color: white;
	width: 250px;
	height: 250px;
	position: relative;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	margin: auto;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		.visualizer {
			position: relative;
			width: 300px;
			height: 300px;
			border-radius: 50%;
			transition: 0.5s;
		}
	}
	.play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 250px;
		height: 250px;
		border-radius: 50%;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		.logo {
			width: 175px;
			height: auto;
		}
		.btn {
			position: absolute;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: var(--color-w01);
			//border: solid 1px var(--color-b01);
			display: flex;
			align-items: center;
			justify-content: center;
			right: 15px;
			bottom: 15px;
			z-index: 10;
			cursor: pointer;
			img {
				max-width: 75%;
				max-height: 75%;
				&.hidden {
					display: none;
				}
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
		background-color: var(--color-b01);
		border-radius: 50px;
		z-index: 1;
		transform-origin: top left;
		transition: 0.25s;
	}
`;

let ctx = null;
let source = null;
let analyser = null;

function initElements(e) {
	// const audio = document.querySelector("audio");

	// window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// ctx = new window.AudioContext();
	// source = ctx.createMediaElementSource(audio);
	// analyser = ctx.createAnalyser();
	// source.connect(analyser);
	// source.connect(ctx.destination);

	const visualizer = document.querySelector(".visualizer");

	const cant = 64;
	let elements = [];
	let elementExists = document.querySelector("span.element");

	if (!elementExists) {
		for (let i = 0; i < cant; i++) {
			const element = document.createElement("span");
			element.classList.add("element");
			elements.push(element);
			visualizer.appendChild(element);
			element.style.transform = `rotateZ(${i * (360 / cant)}deg) translate(147px)`;
		}
	}
}

function handleMusic(e) {
	//const btn = e.target;

	const audio = document.querySelector("audio");

	const btnPlay = document.querySelector(".btn img.btnPlay");
	const btnPause = document.querySelector(".btn img.btnPause");

	btnPlay.classList.toggle("hidden");
	btnPause.classList.toggle("hidden");

	audio.paused ? audio.play() : audio.pause();

	if (source) return;
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	ctx = new window.AudioContext();
	source = ctx.createMediaElementSource(audio);
	analyser = ctx.createAnalyser();
	source.connect(analyser);
	source.connect(ctx.destination);

	analyser.fftSize = 128;
	const bufferLength = analyser.frequencyBinCount;
	let dataArray = new Uint8Array(bufferLength);
	let elements = document.querySelectorAll("span.element");

	const update = () => {
		requestAnimationFrame(update);
		analyser.getByteFrequencyData(dataArray);

		for (let i = 0; i < 64; i++) {
			let item = dataArray[i];
			item = 7 + (item / 100) * 25;
			// let sum = 7 + item;//(clamp(item, 100, 150) == 100? 0: 25 );
			elements[i].style.width = `${item}px`;
		}
	};
	update();
}
export default function ControlMusic() {
	window.addEventListener("load", () => {
		initElements();
	});

	return (
		<Wrapper>
			<audio src={track01}></audio>
			<div className="box">
				<div className="visualizer"></div>
			</div>
			<div className="play">
				<img src={imgLogo} className="logo" alt="" />
				<div className="btn" onClick={handleMusic}>
					<img src={btnPlay} alt="" className="btnPlay hidden" />
					<img src={btnPause} className="btnPause " alt="" />
				</div>
			</div>
		</Wrapper>
	);
}
