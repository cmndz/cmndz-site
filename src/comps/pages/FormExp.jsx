import TempFormExp from "../templates/TempFormExp.jsx";
const LISTA_ITEMS = [
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


export default function FormExp() {
	return <TempFormExp title={"Formación y Experiencia"} lista_complete_items = {LISTA_ITEMS} />;
}
