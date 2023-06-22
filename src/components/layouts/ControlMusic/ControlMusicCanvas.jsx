import React, { useState, useEffect, useRef } from "react";

export default function ControlMusicCanvas({
	play,
	trackName,
	audioAnalyser,
	cant_elements,
	enviarBeat,
}) {
	//const [canvasCtx, setCanvasCtx] = useState(null);
	const [canvasDimensions, setCanvasDimensions] = useState({
		width: null,
		height: null,
	});
	const canvasRef = useRef(null);
	const requestIdRef = useRef(null);
	const trackNameCurrent = useRef(null);
	const textAnimationParams = useRef({
		//text: "",
		textMov: 0,
		textMovSp: 0.4,
		textGapBCol: 50,
		textGapBRow: 50,
		textGapAdj: 40,
		textOpa: 0,
		textOpaSp: 0.02,
	});
	const decibelsAvgRef = useRef({
		current: 0,
		last: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			let wrapperDats = document
				.getElementsByClassName("ControlMusicCanvas")[0]
				.getBoundingClientRect();
			setCanvasDimensions({
				width: wrapperDats.width,
				height: wrapperDats.height,
			});
		};

		handleResize();
		window.addEventListener("resize", handleResize, false);

		trackNameCurrent.current = trackName;
		// eslint-disable-next-line
	}, []);

	const draw = () => {
		if (!canvasRef.current) return;
		const canvasCtx = canvasRef.current.getContext("2d");
		canvasCtx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);

		const drawTextOpacity = () => {
			const textAnimation = textAnimationParams.current;
			let textOpacity = textAnimation.textOpa;
			const textOpacitySpeed = textAnimation.textOpaSp;

			if (trackName !== trackNameCurrent.current) {
				if (play) {
					if (textOpacity > 0) {
						textOpacity -= textOpacitySpeed;
					} else {
						textOpacity = 0;
					}
					if (textOpacity === 0) {
						trackNameCurrent.current = trackName;
					}
				} else {
					trackNameCurrent.current = trackName;
				}
			} else {
				if (play) {
					if (textOpacity < 1) {
						textOpacity += textOpacitySpeed;
					} else {
						textOpacity = 1;
					}
				} else {
					if (textOpacity > 0) {
						textOpacity -= textOpacitySpeed;
					} else {
						textOpacity = 0;
					}
				}
			}

			canvasCtx.fillStyle = "rgba(150, 150, 150, " + textOpacity + ")";

			textAnimation.textOpa = textOpacity;
		};
		const drawTextMovement = () => {
			const textAnimation = textAnimationParams.current;
			let textMovement = textAnimation.textMov;
			const textMovementSpeed = textAnimation.textMovSp;
			const textGapBetweenCol = textAnimation.textGapBCol;
			const textGapBetweenRow = textAnimation.textGapBRow;
			const textGapAdjustFirstRow = textAnimation.textGapAdj;
			const text = trackNameCurrent.current;
			const textWidth = canvasCtx.measureText(text).width;
			const textCant = Math.trunc(canvasDimensions.width / (textWidth + 50)) + 2;
			canvasCtx.font = window.innerWidth > 550 ? "600 1.3rem Raleway" : "500 1rem Raleway";
			for (let i = 0; i < canvasDimensions.height / 50; i++) {
				if (i % 2 === 0) {
					for (let j = 0; j < textCant; j++) {
						//canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
						//if (j === textCant - 1) canvasCtx.fillStyle = "rgba(255, 0, 0, 1)";
						//if (j === 0) canvasCtx.fillStyle = "rgba(0, 255, 0, 1)";
						canvasCtx.fillText(
							text,
							(textWidth + textGapBetweenCol) * j -
								((textWidth + textGapBetweenCol) * textCant - canvasDimensions.width) +
								textMovement,
							i * textGapBetweenRow + textGapAdjustFirstRow
						);
					}
				} else {
					for (let j = 0; j < textCant; j++) {
						//canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
						//if (j === textCant - 1) canvasCtx.fillStyle = "rgba(255, 0, 0, 1)";
						//if (j === 0) canvasCtx.fillStyle = "rgba(0, 255, 0, 1)";
						canvasCtx.fillText(
							text,
							(textWidth + textGapBetweenCol) * j + textGapBetweenCol - textMovement,
							i * textGapBetweenRow + textGapAdjustFirstRow
						);
					}
				}
			}

			if (textMovement >= Math.trunc(textWidth + textGapBetweenCol)) {
				textMovement -= Math.trunc(textWidth + textGapBetweenCol);
			}

			textMovement += textMovementSpeed;
			textAnimation.textMov = textMovement;
		};
		const drawAudioArray = () => {
			if (!audioAnalyser) return;
			const bufferLength = audioAnalyser.frequencyBinCount;
			let audioDataArray = new Uint8Array(bufferLength);
			audioAnalyser.getByteFrequencyData(audioDataArray);
			canvasCtx.save();

			const init = window.innerWidth > 550 ? 120 : 75;
			const adjust = window.innerWidth > 550 ? 1 : 5 / 10;
			const barWidth = window.innerWidth > 550 ? 7 : 4;
			const cant = cant_elements;
			const ang = (2 * Math.PI) / cant;
			let val = [];

			canvasCtx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
			canvasCtx.rotate(Math.PI * 1.5);
			for (let i = 0; i < cant; i++) {
				let decibel;
				if (i <= cant / 2) {
					decibel = audioDataArray[i] * adjust;
					val[i] = decibel;
				} else {
					decibel = val[cant - i];
				}
				decibelsAvgRef.current.current += decibel;
				canvasCtx.beginPath();
				canvasCtx.fillStyle = "#000000";
				canvasCtx.rect(init, 0, decibel, barWidth);
				canvasCtx.fill();
				canvasCtx.rotate(ang);
			}

			canvasCtx.restore();
		};
		const logoBeat = () => {
			let decibelAvgCurrent = decibelsAvgRef.current.current / cant_elements;
			let decibelAvgLast = decibelsAvgRef.current.last;
			if (decibelAvgCurrent > decibelAvgLast) {
				enviarBeat(true);
			} else {
				enviarBeat(false);
			}
			decibelsAvgRef.current.current = decibelAvgCurrent;
			decibelsAvgRef.current.last = decibelAvgCurrent;
		};

		drawTextOpacity();
		drawTextMovement();
		drawAudioArray();
		logoBeat();

		requestIdRef.current = requestAnimationFrame(draw);
	};

	useEffect(() => {
		requestIdRef.current = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(requestIdRef.current);
		};
		// eslint-disable-next-line
	}, [play, trackName, canvasDimensions]);

	return (
		<canvas
			className="ControlMusicCanvas"
			ref={canvasRef}
			width={canvasDimensions.width}
			height={canvasDimensions.height}
		/>
	);
}
