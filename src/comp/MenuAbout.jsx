import styled from "styled-components";

import imgWork from "./../resources/work.svg";
import imgEduc from "./../resources/education.svg";
import imgLocat from "./../resources/location.svg";

import imgHTML from "./../resources/know-html.svg";
import imgCSS from "./../resources/know-css.svg";
import imgJs from "./../resources/know-js.svg";
import imgReact from "./../resources/know-react.svg";
import imgSass from "./../resources/know-sass.svg";
import imgC from "./../resources/know-c.svg";
import imgPython from "./../resources/know-python.svg";
import imgVB from "./../resources/know-vb.svg";
import imgSQL from "./../resources/know-sqlserver.svg";
import imgGit from "./../resources/know-git.svg";

import imgVB6 from "./../resources/know-vbS.svg";
import imgVS from "./../resources/know-vs.svg";
import imgVSCode from "./../resources/know-vscode.svg";
import imgIllustrator from "./../resources/know-ai.svg";
import imgPhotoshop from "./../resources/know-ps.svg";
import imgFigma from "./../resources/know-figma.svg";
import imgWord from "./../resources/know-doc.svg";
import imgExcel from "./../resources/know-xls.svg";

import imgProfile from "./../resources/profile.png";

const Wrapper = styled.div`
	@media only screen and (max-width: 400px) {
		display: none;
	}
	width: 100vw;
	min-height: 100vh;
	padding: 60px 0 0 0;
	overflow: hidden;
	.container {
		width: 100vw;
		padding: 0 var(--laterales) 0 var(--laterales);
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			margin: 10px 0 30px 0;
			width: 100%;
			max-width: 1460px;
		}
		.bloque {
			width: 100%;
			&.bloqueA {
				width: 361px;
				height: 500px;
				background-color: var(--color-b01);
				border-radius: 15px;
				position: relative;
				img {
					width: 100%;
					top: -50px;
					position: absolute;
				}
				margin-bottom: 20px;
				overflow: hidden;
			}
			&.bloqueB {
				max-width: 500px;
				h3 {
					text-align: center;
					margin: 0 0 20px 0;
				}
				p {
					margin: 20px 0 20px 0;
				}
				.lista {
					align-items: center;
					display: flex;
					.icono {
						margin: 0 20px 0 0;
						.back {
							width: 40px;
							height: 40px;
							border-radius: 50%;
							background-color: var(--color-b01);
							display: flex;
							justify-content: center;
							align-items: center;
							img {
								width: 24px;
								height: 24px;
							}
						}
					}
				}
			}
			&.bloqueC,
			&.bloqueD {
				display: flex;
				flex-direction: column;
				align-items: center;
				p {
					margin: 20px 0 20px 0;
					width: 100%;
					max-width: 500px;
				}
				.grid {
					width: 100%;
					max-width: 650px;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					row-gap: 10px;
					.grid-cell {
						display: flex;
						justify-content: center;
						.grid-item {
							width: 116px;
							height: 116px;
							cursor: pointer;
							background-color: var(--color-w02);
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: center;
							border-radius: 15px;
							padding: 20px 5px;
							img {
								max-width: 45px;
								max-height: 45px;
							}
							p {
								margin: 5px 0 0 0;
								line-height: 16px;
								text-align: center;
							}
						}
					}
				}
			}
		}
	}
	@media only screen and (min-width: 550px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
					}
				}
			}
		}
	}

	@media only screen and (min-width: 650px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(5, 1fr);
					}
				}
			}
		}
	}

	@media only screen and (min-width: 850px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
			justify-items: center;
			.title {
				grid-column: 1 / 3;
			}

			.bloque {
				&.bloqueA {
				}
				&.bloqueB {
				}
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
					}
				}
			}
		}
	}

	@media only screen and (min-width: 1000px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
			justify-items: center;
			.title {
				grid-column: 1 / 3;
			}
			.bloque {
				&.bloqueA {
					justify-self: end;
					margin: 0 60px 20px 0;
				}
				&.bloqueB {
					justify-self: start;
					margin: 0 0 0 25px;
				}
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
					}
				}
			}
		}
	}

	@media only screen and (min-width: 1050px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					max-width: 650px;
					.grid {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
					}
				}
				&.bloqueC {
					justify-self: end;
					margin: 0 25px 0 0;
				}
				&.bloqueD {
					justify-self: start;
					margin: 0 0 0 25px;
				}
			}
		}
	}

	@media only screen and (min-width: 1250px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(5, 1fr);
					}
				}
				&.bloqueC {
					justify-self: end;
				}
			}
		}
	}
`;

function Lista({ path, str }) {
	return (
		<div className="lista">
			<div className="icono-wrapper">
				<div className="icono">
					<div className="back">
						<img src={path} alt="" />
					</div>
				</div>
			</div>
			<p>
				{str[0]}
				<strong>{str[1]}</strong>
				{str[2]}
			</p>
		</div>
	);
}

function Item({ path, str }) {
	return (
		<div className="grid-cell">
			<div className="grid-item">
				<img src={path} alt="" />
				<p>{str}</p>
			</div>
		</div>
	);
}

export default function MenuAbout() {
	return (
		<>
			<Wrapper id="menuAbout">
				<div className="container">
					<div className="title">
						<h1>Sobre mi</h1>
					</div>
					<div className="bloque bloqueA">
						<img src={imgProfile} alt="" />
					</div>
					<div className="bloque bloqueB">
						<h3>Carlos Alfredo Méndez</h3>
						<p>Programador argentino de 28 años.</p>
						<p>
							Tengo preferencia por el <strong>Front-End</strong>, aunque cuento con algunos conocimientos
							de <strong>Back-End</strong>.
						</p>
						<p>Me considero una persona responsable, creativa y perfeccionista.</p>
						<Lista path={imgLocat} str={["Vivo en ", "Quilmes", ", Buenos Aires."]} />
						<Lista path={imgEduc} str={["Estudiante de ", "Ingenieria en Informatica", "."]} />
						<Lista path={imgWork} str={["Empleado en ", "X-Project S.A.", ""]} />
					</div>
					<div className="bloque bloqueC">
						<p>Tengo conocimientos en las siguientes tecnologias:</p>

						<div className="grid">
							<Item path={imgHTML} str={"HTML"} />
							<Item path={imgCSS} str={"CSS"} />
							<Item path={imgJs} str={"Javascript"} />
							<Item path={imgReact} str={"React"} />
							<Item path={imgSass} str={"SASS"} />
							<Item path={imgC} str={"C"} />
							<Item path={imgPython} str={"Python"} />
							<Item path={imgVB} str={"Visual Basic"} />
							<Item path={imgSQL} str={"T-SQL"} />
							<Item path={imgGit} str={"Git"} />
						</div>
					</div>
					<div className="bloque bloqueD">
						<p>Y en las siguientes herramientas:</p>
						<div className="grid">
							<Item path={imgVB6} str={"Visual Basic 6.0"} />
							<Item path={imgVS} str={"Visual Studio 2019"} />
							<Item path={imgVSCode} str={"Visual Studio Code"} />
							<Item path={imgSQL} str={"SQL Server Mngnt. Studio"} />
							<Item path={imgIllustrator} str={"Adobe Illustrator"} />
							<Item path={imgPhotoshop} str={"Adobe Photoshop"} />
							<Item path={imgFigma} str={"Figma"} />
							<Item path={imgWord} str={"Microsoft Word"} />
							<Item path={imgExcel} str={"Microsoft Excel"} />
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
