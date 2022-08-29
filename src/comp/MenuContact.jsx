import imgLinkedin from "./../resources/social-linkedin.svg";
import imgGithub from "./../resources/social-github.svg";

function MenuContact() {
	return (
		<div id="menucontact">
			<div className="menucontact__title">
				<h1>CONTACTO</h1>
			</div>

			<div className="menucontact__container">
				<div className="menucontact__sidea">
					<h2>ENVIAME UN MAIL</h2>
					<form className="menucontact__form" action="https://formsubmit.co/b2eb15d9c2e4cd9de5e262f05696aafc" method="POST">
						<h4>Tu correo</h4>
						<input className="menucontact__input" type="text" name="email" placeholder="ejemplo@gmail.com" required />
						<h4>Asunto</h4>
						<input className="menucontact__input" type="text" name="subject" required />
						<h4>Mensaje</h4>
						<textarea className="menucontact__textarea" name="comments" id="" cols="30" rows="10" required></textarea>
						<input className="menucontact__btn" type="submit" value="Enviar" />

						<input type="hidden" name="_template" value="table" />
						<input type="hidden" name="_next" value="http://localhost:3000/"></input>
						<input type="hidden" name="_subject" value="Nuevo Mensaje de la mi sitio UwU"></input>
					</form>
				</div>
				<div className="menucontact__sideb">
					<h2>O CONTACTAME EN MIS REDES</h2>
					<div className="menucontact__social">
						<a href="https://www.linkedin.com/in/carlosalfredomendez/">
							<div className="menucontact__socialitem">
								<img className="menucontact__img" src={imgLinkedin} alt="" />
								<p>/carlosalfredomendez</p>
							</div>
						</a>
						<a href="https://github.com/cmndz">
							<div className="menucontact__socialitem">
								<img className="menucontact__img" src={imgGithub} alt="" />
								<p>/cmndz</p>
							</div>
						</a>
					</div>
				</div>
			</div>

			<div className="menucontact__footer"></div>
		</div>
	);
}

export default MenuContact;
