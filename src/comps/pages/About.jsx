import TempAbout from "../templates/TempAbout.jsx";
import imgProfile from "./../../resources/profile.png";

const TECNOLOGIES = {
	p: "Tengo conocimientos en las siguientes tecnologias:",
	elements: [
		{
			type_icon: "HTML",
			text: "HTML",
		},
		{
			type_icon: "CSS",
			text: "CSS",
		},
		{
			type_icon: "JS",
			text: "Javascript",
		},
		{
			type_icon: "REACT",
			text: "React",
		},
		{
			type_icon: "SASS",
			text: "SASS",
		},
		{
			type_icon: "C",
			text: "C",
		},
		{
			type_icon: "PYTHON",
			text: "Python",
		},
		{
			type_icon: "VB",
			text: "Visual Basic",
		},
		{
			type_icon: "TSQL",
			text: "T-SQL",
		},
		{
			type_icon: "GIT",
			text: "Git",
		},
	],
};

const TOOLS = {
	p: "Y en las siguientes herramientas:",
	elements: [
		{
			type_icon: "VB6",
			text: "Visual Basic 6.0",
		},
		{
			type_icon: "VS",
			text: "Visual Studio 2019",
		},
		{
			type_icon: "VSC",
			text: "Visual Studio Code",
		},
		{
			type_icon: "SQLS",
			text: "SQL SMS",
		},
		{
			type_icon: "ILLUS",
			text: "Adobe Illustrator",
		},
		{
			type_icon: "PHOTO",
			text: "Adobe Photoshop",
		},
		{
			type_icon: "FIGMA",
			text: "Figma",
		},
		{
			type_icon: "WORD",
			text: "Microsoft Word",
		},
		{
			type_icon: "EXCEL",
			text: "Microsoft Excel",
		},
	],
};

const TEXT = [
	"Carlos Alfredo Méndez",
	"Programador argentino de 28 años.",
	"Tengo preferencia por el ",
	"Front-End",
	", aunque cuento con algunos conocimientos de ",
	"Back-End",
	".",
	"Me considero una persona responsable, creativa y perfeccionista.",
];

const LIST_LISTICON = [
	{
		type_icon: "LOCAT",
		text: ["Vivo en ", "Quilmes", ", Buenos Aires."],
	},
	{
		type_icon: "EDUC",
		text: ["Estudiante de ", "Ingenieria en Informatica", "."],
	},
	{
		type_icon: "WORK",
		text: ["Empleado en ", "X-Project S.A.", ""],
	},
];
export default function About() {
	return (
		<TempAbout
			tecnologies={TECNOLOGIES}
			tools={TOOLS}
			title={"Sobre mi"}
			text={TEXT}
			profile_pic={imgProfile}
			list_listicon={LIST_LISTICON}
		/>
	);
}
