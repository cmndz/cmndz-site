import styled from "styled-components";

import imgWork from "./../resources/work.svg";
import imgEduc from "./../resources/education.svg";

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

let listaItems = [
	{
		id: 0,
		icon: 1,
		header: "Bristol, Instituto de Cultura Inglesa",
		interval: "Marzo 2022 - Actualidad",
		detail: "Llevo a cabo mis estudios en el idioma Ingles.",
		list: "",
		tags: "",
	},
	{
		id: 1,
		icon: 0,
		header: "X-Project S.A.",
		interval: "Marzo 2022 - Actualidad",
		detail: "Desempeño tareas tales como:",
		list:
			"Brindar soporte tecnico a clientes;|Desarrollar parches de actualización;|Administrar base de datos;|Documentar y elaborar instructivos de uso de los aplicativos.",
		tags: "VB|TSQL|VB6|SQLS|VS|WORD|EXCEL",
	},
	{
		id: 2,
		icon: 1,
		header: "Educacion IT - Centro de Formación Profesional",
		interval: "Marzo 2021 - Agosto 2021",
		detail:
			"Dentro del plan de estudios de la carrera **Front End Web Developer**, realice los siguientes cursos:",
		list:
			"Desarrollo Web con HTML;|Introduccion al Paradigma de Objetos;|Javascript desde Cero;|Javascript Desarrollador Avanzado;|Maquetacion Web: HTML5 y CSS;|Maquetado Avanzado: SASS y LESS;|Git: Desarrollo Colaborativo;|Javascript AWS (Aplicaciones Web Progresivas);|Responsive Web Design y Bootstrap;|ReactJS Developer;|ReactJS Avanzado;|Introduccion a UX;|UI: Interfaz de Usuario;|Presupuesto Web.",
		tags: "HTML|CSS|JS|REACT|SASS|GIT|VSC|FIGMA",
	},
	{
		id: 3,
		icon: 1,
		header: "Universidad de Buenos Aires",
		interval: "Marzo 2016 - Actualidad",
		detail:
			"En la carrera de **Ingenieria en Informatica** de la Facultad de Ingenieria, hasta el momento, aprove las siguientes materias:",
		list:
			"Algoritmos y Programacion I;|Algoritmos y Programacion II;|CBC - Analisis Matematico;|CBC - Algebra;|CBC - Fisica;|CBC - Quimica;|CBC - Introducción al Pensamiento Científico;|CBC - Introducción al Conocimiento de la Sociedad y el Estado.",
		tags: "C|PYTHON|GIT|VSC",
	},
	{
		id: 4,
		icon: 1,
		header: "Universidad Nacional de La Plata",
		interval: "Marzo 2014 - Diciembre 2015",
		detail:
			"En la carrera de **Licenciatura en Diseño Multimedial** de la Facultad de Artes, hasta el momento, aprove las siguientes materias:",
		list:
			"Taller de Diseño Multimedial I;|Taller de Diseño Multimedial II;|Tecnologia Multimedial I;|Tecnologia Multimedial II;|Lenguaje Multimedial I;|Historia Social General;|Produccion de Textos;|Arte Contemporaneo.",
		tags: "HTML|CSS|JS|ILLUS|PHOTO|WORD",
	},
	{
		id: 5,
		icon: 1,
		header: "Universidad Nacional de La Plata",
		interval: "Marzo 2013 - Diciembre 2013",
		detail:
			"En la carrera de **Licenciatura en Diseño en Comunicacion Visual** de la Facultad de Artes, hasta el momento, aprove las siguientes materias:",
		list: "Diseño en Comunicación Visual I;|Lenguaje Visual I;|Dibujo I.",
		tags: "ILLUS|PHOTO|WORD",
	},
	{
		id: 6,
		icon: 1,
		header: "Instituto Nuestra Señora del Perpetuo Socorro",
		interval: "Marzo 2010 - Diciembre 2012",
		detail:
			"Complete mis estudios secundarios con el titulo **Bachiller con orientación en Economia y Adminsitracion**.",
		list: "",
		tags: "",
	},
	{
		id: 7,
		icon: 1,
		header: "Centro de Formación Profesional Nª406",
		interval: "Marzo 2011 - Diciembre 2011",
		detail: "Realice los siguientes cursos:",
		list:
			"Operador de PC bajo entorno grafico;|Diseño Grafico de Sistema Informaticos;|Diseño de Web.",
		tags: "PHOTO",
	},
];

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
		.title {
			margin: 10px 0 30px 0;
			width: 100%;
			max-width: 1460px;
		}
		.bloque {
			width: 100%;
			.lista-item {
				display: grid;
				grid-template-columns: 60px 1fr;
				border-bottom: solid 3px var(--color-b01);
				margin: 25px 0 25px 0;
				.icono-wrapper {
					grid-column: 1 / 2;
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
				.lista-header {
					grid-column: 2 / 3;
				}
				.lista-detalle {
					grid-column: 2 / 3;
					margin: 10px 0 0 0;
					p {
						line-height: 25px;
					}
				}
				.lista-tags {
					grid-column: 2 / 3;
					margin: 25px 0 25px 0;
					img {
						max-width: 25px;
						max-height: 25px;
						margin: 0 5px;
					}
				}
				&:nth-last-child(1) {
					border-bottom: none;
					margin: 0;
				}
			}
		}
	}
	@media only screen and (min-width: 750px) {
		.container {
			align-items: center;
			.bloque {
				max-width: 650px;
				.lista-item {
					display: grid;
					grid-template-columns: 60px 1fr 2fr 70px;
					justify-content: start;
					align-content: start;
					.lista-header {
						grid-column: 2 / 3;
						margin: 0 20px 50px 0;
					}
					.lista-detalle {
						grid-column: 3 / 4;
						margin: 0 15px 50px 0;
					}
					.lista-tags {
						grid-column: 4 / 5;
						margin: 0 0 50px 0;
						img {
							margin: 3px 5px;
						}
					}
				}
			}
		}
	}
	@media only screen and (min-width: 850px) {
		.container {
			.bloque {
				max-width: none;
			}
		}
	}

	@media only screen and (min-width: 1250px) {
		.container {
			.bloque {
				max-width: 1350px;
				.lista-item {
					display: grid;
					grid-template-columns: 60px 1fr 3fr 70px;
					.lista-header {
						margin: 0 20px 50px 0;
					}
					.lista-detalle {
						grid-column: 3 / 4;
						margin: 0 15px 50px 50px;
					}
					.lista-tags {
						grid-column: 4 / 5;
						margin: 0 0 50px 0;
					}
				}
			}
		}
	}
`;

function Lista({ listaItem }) {
	let listalista = null;
	if (listaItem.list !== "") {
		let aux = listaItem.list.split("|");
		listalista = aux.map((elem, index) => (
			<li key={index}>
				<p>{elem}</p>
			</li>
		));
	}
	let detaildetail = listaItem.detail;
	if (detaildetail.includes("**")) {
		let aux = listaItem.detail.split("**");
		detaildetail = (
			<>
				{aux[0]}
				<strong>{aux[1]}</strong>
				{aux[2]}
			</>
		);
	}
	let tagstags = null;
	if (listaItem.tags !== "") {
		let aux = listaItem.tags.split("|");
		tagstags = aux.map((elem, index) => {
			switch (elem) {
				case "HTML":
					return <img key={index} src={imgHTML} alt="HTML" />;
				case "CSS":
					return <img key={index} src={imgCSS} alt="CSS" />;
				case "JS":
					return <img key={index} src={imgJs} alt="Javascript" />;
				case "REACT":
					return <img key={index} src={imgReact} alt="React" />;
				case "SASS":
					return <img key={index} src={imgSass} alt="SASS" />;
				case "C":
					return <img key={index} src={imgC} alt="C" />;
				case "PYTHON":
					return <img key={index} src={imgPython} alt="Python" />;
				case "VB":
					return <img key={index} src={imgVB} alt="Visual Basic" />;
				case "TSQL":
					return <img key={index} src={imgSQL} alt="T-SQL" />;
				case "GIT":
					return <img key={index} src={imgGit} alt="Git" />;
				case "VB6":
					return <img key={index} src={imgVB6} alt="Visual Basic 6.0" />;
				case "VS":
					return <img key={index} src={imgVS} alt="Visual Strudio 2019" />;
				case "VSC":
					return <img key={index} src={imgVSCode} alt="Visual Studio Code" />;
				case "SQLS":
					return <img key={index} src={imgSQL} alt="SQL Server Management Studio" />;
				case "ILLUS":
					return <img key={index} src={imgIllustrator} alt="Adobe Illustrator" />;
				case "PHOTO":
					return <img key={index} src={imgPhotoshop} alt="Adobe Photoshop" />;
				case "FIGMA":
					return <img key={index} src={imgFigma} alt="Figma" />;
				case "WORD":
					return <img key={index} src={imgWord} alt="Microsoft Word" />;
				case "EXCEL":
					return <img key={index} src={imgExcel} alt="Microsoft Excel" />;
				default:
					return null;
			}
		});
	}

	return (
		<div className="lista-item">
			<div className="icono-wrapper">
				<div className="icono">
					<div className="back">
						<img src={listaItem.icon === 0 ? imgWork : imgEduc} alt="" />
					</div>
				</div>
			</div>
			<div className="lista-header">
				<h3>{listaItem.header}</h3>
				<h6>{listaItem.interval}</h6>
			</div>

			<div className="lista-detalle">
				<p>{detaildetail}</p>
				{listaItem.list !== null ? <ul>{listalista} </ul> : ""}
			</div>
			<div className="lista-tags">{tagstags}</div>
		</div>
	);
}

export default function MenuFormExp() {
	return (
		<>
			<Wrapper id="menuFormExp">
				<div className="container">
					<div className="title">
						<h1>Formación y Experiencia</h1>
					</div>
					<div className="bloque">
						<Lista listaItem={listaItems[0]}></Lista>
						<Lista listaItem={listaItems[1]}></Lista>
						<Lista listaItem={listaItems[2]}></Lista>
						<Lista listaItem={listaItems[3]}></Lista>
						<Lista listaItem={listaItems[4]}></Lista>
						<Lista listaItem={listaItems[5]}></Lista>
						<Lista listaItem={listaItems[6]}></Lista>
						<Lista listaItem={listaItems[7]}></Lista>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
