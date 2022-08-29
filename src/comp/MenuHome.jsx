import imgLogo from "./../resources/logo.svg";
import vidHome from "./../resources/loop.mp4";

function MenuHome() {
	return (
		<div id="menuhome">
			<div className="menuhome__back">
				<video className="menuhome__video" src={vidHome} autoPlay loop muted></video>
			</div>

			<div className="menuhome__container">
				<div className="menuhome__sidea">
					<img className="menuhome__logo" src={imgLogo} alt="" />
				</div>
				<div className="menuhome__sideb">
					<div className="menuhome__profilepic"></div>
					<div className="menuhome__presentation">
						<h2>CARLOS MÉNDEZ</h2>
						<p>DESARROLLADOR WEB FRONT-END</p>
					</div>
					<div className="menuhome__menu">
						<p className="menuhome__p">DESCARGAR CV</p>
					</div>
					<a href="#menuabout">
						<div className="menuhome__menu">
							<p className="menuhome__p">SOBRE MI</p>
						</div>
					</a>
					<a href="#menuformexp">
						<div className="menuhome__menu">
							<p className="menuhome__p">FORMACIÓN Y EXPERIENCIA</p>
						</div>
					</a>
					<a href="#menucontact">
						<div className="menuhome__menu">
							<p className="menuhome__p">CONTACTO</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default MenuHome;
