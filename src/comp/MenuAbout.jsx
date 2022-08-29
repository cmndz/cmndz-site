import imgWork from "./../resources/work.svg";
import imgEduc from "./../resources/education.svg";
import imgLocat from "./../resources/location.svg";

import imgIllustrator from "./../resources/know-ai.svg";
import imgC from "./../resources/know-c.svg";
import imgCSharp from "./../resources/know-csharp.svg";
import imgCSS from "./../resources/know-css.svg";
import imgWord from "./../resources/know-doc.svg";
import imgGit from "./../resources/know-git.svg";
import imgHTML from "./../resources/know-html.svg";
import imgJs from "./../resources/know-js.svg";
import imgPhotoshop from "./../resources/know-ps.svg";
import imgPython from "./../resources/know-python.svg";
import imgReact from "./../resources/know-react.svg";
import imgSass from "./../resources/know-sass.svg";
import imgSQL from "./../resources/know-sqlserver.svg";
import imgVS from "./../resources/know-vs.svg";
import imgVSCode from "./../resources/know-vscode.svg";
import imgExcel from "./../resources/know-xls.svg";
import imgFigma from "./../resources/know-figma.svg";

function MenuAbout() {
	return (
		<div id="menuabout">
			<div className="menuabout__title">
				<h1>SOBRE MI</h1>
			</div>
			<div className="menuabout__container">
				<div className="menuabout__sidea">{/* <div className="menuabout__profilepic"></div> */}</div>
				<div className="menuabout__sideb">
					<div className="menuabout__myname">
						<h2>CARLOS ALFREDO MÉNDEZ</h2>
					</div>
					<p className="menuabout__p">Programador argentino de 28 años de edad.</p>
					<p className="menuabout__p">
						Con preferencia por el <strong>Front-End</strong>, aunque con algunos conocimientos de{" "}
						<strong>Back-End</strong>.
					</p>
					<p className="menuabout__p">Responsable, creativo, perfeccionista.</p>

					<div className="menuabout__list">
						<div>
							<div className="menuabout__listicon">
								<img className="menuabout__icon" src={imgLocat} alt="" />
							</div>
						</div>
						<p>
							Vivo en <strong>Quilmes</strong>, Buenos Aires.
						</p>
					</div>
					<div className="menuabout__list">
						<div>
							<div className="menuabout__listicon">
								<img className="menuabout__icon" src={imgEduc} alt="" />
							</div>
						</div>

						<p>
							Estudiante de <strong>Ingenieria en Informatica</strong>.
						</p>
					</div>
					<div className="menuabout__list">
						<div>
							<div className="menuabout__listicon">
								<img className="menuabout__icon" src={imgWork} alt="" />
							</div>
						</div>
						<p>
							Empleado en <strong>X-Project S.A.</strong>
						</p>
					</div>
					<p className="menuabout__p">Tengo conocimientos en:</p>
					<div className="menuabout__grid">
						<img className="menuabout__griditem" src={imgHTML} alt="HTML" />
						<img className="menuabout__griditem" src={imgCSS} alt="" />
						<img className="menuabout__griditem" src={imgJs} alt="" />
						<img className="menuabout__griditem" src={imgReact} alt="" />
						<img className="menuabout__griditem" src={imgSass} alt="" />
						<img className="menuabout__griditem" src={imgC} alt="" />
						<img className="menuabout__griditem" src={imgCSharp} alt="" />
						<img className="menuabout__griditem" src={imgPython} alt="" />
						<img className="menuabout__griditem" src={imgSQL} alt="" />
						<img className="menuabout__griditem" src={imgGit} alt="" />
						<img className="menuabout__griditem" src={imgVS} alt="" />
						<img className="menuabout__griditem" src={imgVSCode} alt="" />
						<img className="menuabout__griditem" src={imgIllustrator} alt="" />
						<img className="menuabout__griditem" src={imgPhotoshop} alt="" />
						<img className="menuabout__griditem" src={imgExcel} alt="" />
						<img className="menuabout__griditem" src={imgWord} alt="" />
						<img className="menuabout__griditem" src={imgFigma} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuAbout;
