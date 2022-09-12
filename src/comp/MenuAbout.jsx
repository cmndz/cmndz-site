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
		<div id="menuabout" className="menu menu-reg">
			<div className="container">
				<div className="title">
					<h1>SOBRE MI</h1>
				</div>
				<div className="bloque --menuaboutbloqueA"></div>
				<div className="bloque --menuaboutbloqueB">
					<p className="bloque-p --menuaboutPrename">Mi nombre es</p>
					<h3 className="--menuaboutName">Carlos Alfredo Méndez</h3>
					<p className="bloque-p">Soy un programador argentino de 28 años de edad.</p>
					<p className="bloque-p">
						Tengo preferencia por el <strong>Front-End</strong>, aunque cuento con algunos conocimientos
						de <strong>Back-End</strong>.
					</p>
					<p className="bloque-p">Me considero una persona responsable, creativa y perfeccionista.</p>

					<div className="bloque-list">
						<div className="list-icon">
							<div className="back-icon">
								<img className="icon-small" src={imgLocat} alt="" />
							</div>
						</div>
						<p className="list-p">
							Vivo en <strong>Quilmes</strong>, Buenos Aires.
						</p>
					</div>
					<div className="bloque-list">
						<div className="list-icon">
							<div className="back-icon">
								<img className="icon-small" src={imgEduc} alt="" />
							</div>
						</div>
						<p className="list-p">
							Estudiante de <strong>Ingenieria en Informatica</strong>.
						</p>
					</div>
					<div className="bloque-list">
						<div className="list-icon">
							<div className="back-icon">
								<img className="icon-small" src={imgWork} alt="" />
							</div>
						</div>
						<p className="list-p">
							Empleado en <strong>X-Project S.A.</strong>
						</p>
					</div>
				</div>

				<div className="bloque --menuaboutbloqueC">
					<p className="bloque-p">Tengo conocimientos en:</p>
					<div className="bloque-grid">
						<img className="icon-reg" src={imgHTML} alt="HTML" />
						<img className="icon-reg" src={imgCSS} alt="" />
						<img className="icon-reg" src={imgJs} alt="" />
						<img className="icon-reg" src={imgReact} alt="" />
						<img className="icon-reg" src={imgSass} alt="" />
						<img className="icon-reg" src={imgC} alt="" />
						<img className="icon-reg" src={imgCSharp} alt="" />
						<img className="icon-reg" src={imgPython} alt="" />
						<img className="icon-reg" src={imgSQL} alt="" />
						<img className="icon-reg" src={imgGit} alt="" />
						<img className="icon-reg" src={imgVS} alt="" />
						<img className="icon-reg" src={imgVSCode} alt="" />
						<img className="icon-reg" src={imgIllustrator} alt="" />
						<img className="icon-reg" src={imgPhotoshop} alt="" />
						<img className="icon-reg" src={imgExcel} alt="" />
						<img className="icon-reg" src={imgWord} alt="" />
						<img className="icon-reg" src={imgFigma} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuAbout;
