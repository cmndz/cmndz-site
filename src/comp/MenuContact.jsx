import imgLogo from "./../resources/logo.svg";
import imgLinkedin from "./../resources/social-linkedin.svg";
import imgGithub from "./../resources/social-github.svg";

function MenuContact() {
	return (
		<div id="menucontact" className="menu menu-last">
			<div className="container">
				<div className="title">
					<h1>CONTACTO</h1>
				</div>
				<div className="bloque --menucontactbloqueA">
					<form
						action="https://formsubmit.co/b2eb15d9c2e4cd9de5e262f05696aafc"
						className="form"
						method="POST"
					>
						<h4>Correo</h4>
						<input
							className="input-text"
							type="text"
							name="email"
							placeholder="ejemplo@gmail.com"
							required
						/>
						<h4>Asunto</h4>
						<input className="input-text" type="text" name="subject" required />
						<h4>Mensaje</h4>
						<textarea
							className="input-textarea"
							name="comments"
							id=""
							cols="30"
							rows="10"
							required
						></textarea>
						<input className="input-submit" type="submit" value="Enviar" />
						<input type="hidden" name="_template" value="table" />
						<input type="hidden" name="_next" value="http://localhost:3000/"></input>
						<input type="hidden" name="_subject" value="Nuevo Mensaje de la mi sitio UwU"></input>
					</form>
					<img className="--menucontactLogo" src={imgLogo} alt="" />
				</div>
				<div className="bloque --menucontactbloqueB">
					<a href="https://www.linkedin.com/in/carlosalfredomendez/">
						<div className="list-icon social-icon">
							<div className="back-icon">
								<img className="icon-small" src={imgLinkedin} alt="" />
							</div>
						</div>
					</a>
					<a href="https://github.com/cmndz/">
						<div className="list-icon">
							<div className="back-icon social-icon">
								<img className="icon-small" src={imgGithub} alt="" />
							</div>
						</div>
					</a>
				</div>
			</div>
			<div className="footer">
				<p className="footer-p">Version 00.003</p>
			</div>
		</div>
	);
}

export default MenuContact;
