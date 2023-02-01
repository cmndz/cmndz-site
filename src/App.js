import "./styles/normalize.css";
import "./styles/basics.css";
import Home from "./comps/pages/Home";
import About from "./comps/pages/About";
import FormExp from "./comps/pages/FormExp";
import Contact from "./comps/pages/Contact";
import Navbar from "./comps/organisms/Navbar";

let menus = [
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

const version = "00.02.01";
export default function App() {
	return (
		<div>
			<Home />
			<About />
			<FormExp />
			<Contact version={version} />
			<Navbar menus={menus} version={version} />
		</div>
	);
}
