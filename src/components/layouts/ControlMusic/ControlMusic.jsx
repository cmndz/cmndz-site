import { useState , useEffect, useRef } from "react";
import Icon from "./../../common/Icon";
//import ControlMusicAudio from "./ControlMusicAudio";
import ControlMusicCanvas from "./ControlMusicCanvas";
import styled from "styled-components";

import track01 from "./../../../static/audio/Behind (Arcade Release) - by Thorne & Andrew A.mp3";
import track02 from "./../../../static/audio/Call On Me (NCS Circle) - by Thorne.mp3";
import track03 from "./../../../static/audio/Consume Me (NCS Release) - by CITYWLKR & Voicians.mp3";
import track04 from "./../../../static/audio/Dum Dum - by Raven & Kreyn, KDH (ft. Scarlett).mp3";
import track05 from "./../../../static/audio/Heart Robbery (Arcade Release) - by Harddope.mp3";
import track06 from "./../../../static/audio/Losing (NCS Release) - by jeonghyeon & Arya.mp3";
import track07 from "./../../../static/audio/Lost (Arcade Release) - by Andrew A & VIANI.mp3";
import track08 from "./../../../static/audio/Need You (Arcade Release) - by DigEx.mp3";
import track09 from "./../../../static/audio/Need You (NCS Release) - by Yonexx & lunar.mp3";

const TRACKLIST = [
	{
		id: 0,
		src: track01,
		name: "Behind (Arcade Release)",
		artist: "Thorne & Andrew A",
	},
	{
		id: 1,
		src: track02,
		name: "Call On Me (NCS Circle)",
		artist: "Thorne",
	},
	{
		id: 2,
		src: track03,
		name: "Consume Me (NCS Release)",
		artist: "CITYWLKR & Voicians",
	},

	{
		id: 3,
		src: track04,
		name: "Dum Dum",
		artist: "Raven & Kreyn, KDH (ft. Scarlett)",
	},
	{
		id: 4,
		src: track05,
		name: "Heart Robbery (Arcade Release)",
		artist: "Harddope",
	},
	{
		id: 5,
		src: track06,
		name: "Losing (NCS Release)",
		artist: "jeonghyeon & Arya",
	},
	{
		id: 6,
		src: track07,
		name: "Lost (Arcade Release)",
		artist: "Andrew A & VIANI",
	},
	{
		id: 7,
		src: track08,
		name: "Need You (Arcade Release)",
		artist: "DigEx",
	},
	{
		id: 8,
		src: track09,
		name: "Need You (NCS Release)",
		artist: "Yonexx & lunar",
	},
];

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	.ControlMusicCanvas {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
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
		z-index: 10;
		position: relative;
		> .icon {
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
	.console {
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		z-index: 2;
		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			&.center {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				z-index: 3;
				position: absolute;
				width: 150px;
				height: 150px;
				min-width: 150px;
				min-height: 150px;
				opacity: 0;
				transition: opacity 0.25s;
				&:active {
					opacity: 1;
				}
			}
			&.right {
				width: 50px;
				height: 35px;
				opacity: 0.3;
				margin-left: 38px;
				z-index: 3;
			}
			&.left {
				width: 50px;
				height: 35px;
				opacity: 0.3;
				margin-right: 38px;
				z-index: 4;
			}
		}
	}

	@media only screen and (min-width: 550px) {
		.logo-container {
			width: 250px;
			height: 250px;
			min-width: 250px;
			min-height: 250px;
			> .icon {
				width: auto;
				height: auto;
				min-width: none;
				min-height: none;
			}
		}
		.console .button {
			&.center {
				width: 250px;
				height: 250px;
				min-width: 250px;
				min-height: 250px;
			}
			&.right {
				margin-left: 75px;
			}
			&.left {
				margin-right: 75px;
			}
		}
	}
`;
let audioCtx, audioSrc, audioAnalyser;

export default function ControlMusic({ cant_elements, play, setPlay}) {
	const audioRef = useRef(null);
	const [track, setTrack] = useState(0);
	const [trackName, setTrackName] = useState(
		TRACKLIST[track].name + " - by " + TRACKLIST[track].artist
	);

	const initAudioCtx = () => {
		audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		audioAnalyser = audioCtx.createAnalyser();
		audioAnalyser.fftSize = 2048;
		audioSrc = audioCtx.createMediaElementSource(audioRef.current);
		audioSrc.connect(audioAnalyser);
		audioAnalyser.connect(audioCtx.destination);
	};

	useEffect(() => {
		if (play === false) {
			audioRef.current.pause();
		} 
	}, [play]);


	const handlePlay = () => {
		if (play === false) {
			if (!audioCtx) initAudioCtx();
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		setPlay(!play);
	};

	const handleChange = (isNext) => {
		let id = track;
		if (isNext) {
			id = id === TRACKLIST.length - 1 ? 0 : id + 1;
		} else {
			id = id === 0 ? TRACKLIST.length - 1 : id - 1;
		}
		audioRef.current.src = TRACKLIST[id].src;
		audioRef.current.load();
		setTrackName(TRACKLIST[id].name + " - by " + TRACKLIST[id].artist);
		setTrack(id);
		if (play) audioRef.current.play();
	};

	const recibirBeat = (isBeat) => {
		const logo = document.querySelector(".logo-container .icon");
		if (isBeat) {
			logo.classList.add("--beat");
		} else {
			logo.classList.remove("--beat");
		}
	};

	return (
		<Wrapper className="ControlMusic">
			<audio
				ref={audioRef}
				onEnded={() => {
					handleChange(true);
				}}
			>
				<source src={TRACKLIST[track].src}></source>
			</audio>
			<ControlMusicCanvas
				play={play}
				trackName={trackName}
				audioAnalyser={audioAnalyser}
				cant_elements={cant_elements}
				enviarBeat={recibirBeat}
			/>
			<div className="logo-container">
				<Icon type="LOGOB" size="maxmax" />
				<div className="console">
					{play === true ? (
						<div
							className="button left"
							onClick={() => {
								handleChange(false);
							}}
						>
							<Icon type="AUDIOPREV" size="min" className="btnPlay" />
						</div>
					) : (
						""
					)}

					<div
						className="button center"
						onClick={() => {
							handlePlay();
						}}
					>
						{play === true ? (
							<Icon type="AUDIOPLAY" size="maxmax" className="btnPlay" />
						) : (
							<Icon type="AUDIOPAUSE" size="maxmax" className="btnPlay" />
						)}
					</div>

					{play === true ? (
						<div
							className="button right"
							onClick={() => {
								handleChange(true);
							}}
						>
							<Icon type="AUDIONEXT" size="min" className="btnPlay" />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</Wrapper>
	);
}
