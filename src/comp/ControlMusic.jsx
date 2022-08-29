import track01 from "./../resources/track01.mp3";
import btnPlay from "./../resources/btnPlay.svg";
import btnPause from "./../resources/btnPause.svg";

function playMusic() {
	const ControlMusicControl = document.getElementById("ControlMusic");
	let music = document.getElementById("ControlMusicTrack01");
	music.volume = 0.3;
	if (ControlMusicControl.classList.contains("isPaused")) {
		ControlMusicControl.classList.remove("isPaused");
		ControlMusicControl.classList.add("isPlayed");
		// adjustControlMusicTrackName();
		music.play();
	} else {
		ControlMusicControl.classList.remove("isPlayed");
		ControlMusicControl.classList.add("isPaused");
		music.pause();
	}
}

// function adjustControlMusicTrackName() {
// 	const ControlMusicTrackName = document.getElementsByClassName("ControlMusicTrackName");

// 	console.log(ControlMusicTrackName);
// }

function ControlMusic() {
	return (
		<div id="ControlMusic" className="isPaused">
			<div className="ControlMusicButtom" onClick={playMusic}>
				<img className="btnPlay" src={btnPlay} alt="" />
				<img className="btnPause" src={btnPause} alt="" />
			</div>
			<div className="ControlMusicTrackName">
				
					<h4>Miss Monique - Eclipse</h4>
					<h4>Miss Monique - Eclipse</h4>
				
			</div>
			<audio id="ControlMusicTrack01" src={track01}></audio>
		</div>
	);
}

export default ControlMusic;
