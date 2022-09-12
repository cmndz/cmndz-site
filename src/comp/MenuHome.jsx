import imgLogo from "./../resources/logo.svg";
import vidHome from "./../resources/loop.mp4";

function MenuHome() {
	return (
		<div id="mnuHome" className="menu menu-first">
			<div className="back">
				<video className="back-video" src={vidHome} autoPlay loop muted></video>
			</div>
			<div className="container --mnuhomecontainer">
				<div className="bloque --mnuhomebloqueA">
					<img className="--mnuhomeLogo" src={imgLogo} alt="" />
				</div>
				<div className="bloque --mnuhomebloqueB">
					<div className="--mnuhomeSubbloque">
						<h1 className="--mnuhomeName">CARLOS MÉNDEZ</h1>
						<h2 className="--mnuhomeProfile">DESARROLLADOR WEB FRONT-END</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuHome;
