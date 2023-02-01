import TempHome from "../templates/TempContact.jsx";
const MENUS = [
	{
		id: "Home",
		name: "Inicio",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "About",
		name: "Sobre mi",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "FormExp",
		name: "Formación y Experiencia",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "Contact",
		name: "Contacto",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "CV",
		name: "Descargar CV",
		type: "download",
		visible: false,
		//file: CV,
		posy: 0,
	},
];

export default function Contact({ version }) {
	return <TempHome title={"Contacto"} menus={MENUS} version={version} />;
}
