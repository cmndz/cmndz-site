import { useState, useEffect, useRef } from "react";
import Icon from "../atoms/Icon";
import styled from "styled-components";
import track01 from "./../../resources/track02.mp3";
import btnPlay from "./../../resources/btnPlay.svg";
import btnPause from "./../../resources/btnPause.svg";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	canvas {
		position: absolute;
		background-color: var(--white);
		z-index: 1;
	}
	.logo-container {
		width: 150px;
		height: 150px;
		min-width: 150px;
		min-height: 150px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--white);
		z-index: 2;
		position: relative;
		.icon {
			width: 100px;
			height: 100px;
			min-width: 100px;
			min-height: 100px;
			transition: 0.25s;
			&.--beat {
				transform: scale(1.2);
			}
		}
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
		right: 1px;
		bottom: 1px;
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

	@media only screen and (min-width: 550px) {
		.logo-container {
			width: 250px;
			height: 250px;
			min-width: 250px;
			min-height: 250px;
			.icon {
				width: auto;
				height: auto;
				min-width: none;
				min-height: none;
			}
		}
		.button {
			right: 15px;
			bottom: 15px;
		}
	}
`;

let audioCtx, audioSrc, audioAnalyser, audioDataArray;

export default function ControlMusic({ cant_elements }) {
	const [play, setPlay] = useState(false);
	const [canvasCtx, setCanvasCtx] = useState(null);
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});
	const canvasRef = useRef(null);
	let prom = 0;
	let promAnt = 0;

	useEffect(function () {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		setCanvasCtx(ctx);
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		let wrapperDats = document.getElementsByClassName("ControlMusic")[0].getBoundingClientRect();
		setDimensions({
			width: wrapperDats.width,
			height: wrapperDats.height,
		});

		window.addEventListener("resize", handleResize, false);
	}, []);

	const drawAudio = (audioAnalyser) => {
		let animation = requestAnimationFrame(() => drawAudio(audioAnalyser));
		const audio = document.querySelector("audio");
		const bufferLength = audioAnalyser.frequencyBinCount;
		audioDataArray = new Uint8Array(bufferLength);
		//const barWidth = (WIDTH / bufferLength) * 3;
		audioAnalyser.getByteFrequencyData(audioDataArray);
		canvasCtx.fillStyle = "#ffffff";
		canvasCtx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

		let init = window.innerWidth > 550 ? 120 : 75;
		let adjust = window.innerWidth > 550 ? 1 : 3/5;

		canvasCtx.save();
		canvasCtx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
		canvasCtx.rotate(Math.PI * 1.5);
		let cant = cant_elements;
		let ang = (2 * Math.PI) / cant;
		let val = [];

		for (let i = 0; i < cant; i++) {
			let decibel;
			if (i <= cant / 2) {
				val[i] = audioDataArray[i] * adjust;
				decibel = audioDataArray[i] * adjust;
			} else {
				decibel = val[cant - i];
			}
			prom += decibel;
			canvasCtx.beginPath();
			canvasCtx.fillStyle = "#000000";
			canvasCtx.rect(init, 0, decibel, 7);
			canvasCtx.fill();
			canvasCtx.rotate(ang);
		}
		canvasCtx.restore();

		const logo = document.querySelector(".logo-container .icon");
		prom = prom / cant_elements;
		if (prom > promAnt) {
			logo.classList.add("--beat");
		} else {
			logo.classList.remove("--beat");
		}
		promAnt = prom;

		if (audio.paused) {
			let sumDecibel = 0;
			for (let i = 0; i < cant; i++) {
				let decibel = audioDataArray[i];
				sumDecibel += decibel;
			}
			if (sumDecibel === 0) {
				cancelAnimationFrame(animation);
				return;
			}
		}
	};

	const handlePlay = (play, setPlay) => {
		const audio = document.querySelector("audio");
		if (play === false) {
			if (!audioSrc) {
				audioCtx = new (window.AudioContext || window.webkitAudioContext)();
				audioAnalyser = audioCtx.createAnalyser();
				audioAnalyser.fftSize = 2048;
				audioSrc = audioCtx.createMediaElementSource(audio);
				audioSrc.connect(audioAnalyser);
				audioAnalyser.connect(audioCtx.destination);
			}
			audio.play();
			drawAudio(audioAnalyser);
		} else {
			audio.pause();
		}
		setPlay(!play);
	};

	const handleResize = () => {
		let wrapperDats = document.getElementsByClassName("ControlMusic")[0].getBoundingClientRect();
		setDimensions({
			width: wrapperDats.width,
			height: wrapperDats.height,
		});
	};

	return (
		<Wrapper className="ControlMusic">
			<audio>
				<source src={track01}></source>
			</audio>
			<canvas ref={canvasRef} width={dimensions.width} height={dimensions.height}></canvas>
			<div className="logo-container">
				<Icon type="LOGOB" size="maxmax" />
				<div
					className="button"
					onClick={() => {
						handlePlay(play, setPlay);
					}}
				>
					{play === true ? (
						<img src={btnPlay} alt="" className="btnPlay" />
					) : (
						<img src={btnPause} alt="" className="btnPause" />
					)}
				</div>
			</div>
		</Wrapper>
	);
}
