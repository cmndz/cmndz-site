import "./styles/normalize.css";
import "./styles/basics.css";
import Home from "./config/Home";
import About from "./config/About";
import FormExp from "./config/FormExp";
import Contact from "./config/Contact";
import Navbar from "./components/layouts/Navbar";
import { useState } from "react";

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

const version = "01.01.00";
export default function App() {
	const [theme, setTheme] = useState("light");
	const [play, setPlay] = useState(false);

	return (
		<div>
			<Home play={play} setPlay={setPlay} />
			<About />
			<FormExp />
			<Contact version={version} />
			<Navbar menus={menus} version={version} theme={theme} setTheme={setTheme} play={play} setPlay={setPlay} />
		</div>
	);
}
