import { useState } from "react";
import MenuHome from "./comp/MenuHome.jsx";
import MenuAbout from "./comp/MenuAbout.jsx";
import MenuFormExp from "./comp/MenuFormExp.jsx";
import MenuContact from "./comp/MenuContact.jsx";
import NavBar from "./comp/NavBar.jsx";

import CV from "./resources/CV-202210.pdf";

import { GlobalStyle } from "./comp/GlobalStyles.jsx";

const version = "00.01.00";

let menus = [
	{
		id: "menuHome",
		name: "Inicio",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "menuAbout",
		name: "Sobre mi",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "menuFormExp",
		name: "Formación y Experiencia",
		type: "menu",
		visible: true,
		file: "",
		posy: 0,
	},
	{
		id: "menuContact",
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
		file: CV,
		posy: 0,
	},
];

function updateMenusPosy() {
	const menusmenus = menus.filter((menu) => menu.type === "menu");
	for (let i = 0; i < menusmenus.length; i++) {
		const element = document.getElementById(menusmenus[i].id);
		if (element) {
			const menuposy = element.offsetTop;
			menus[i].posy = menuposy;
		}
	}
}

function updateCurrentMenu(setCurrentMenu) {
	const posy = document.documentElement.scrollTop;
	const menusmenus = menus.filter((menu) => menu.type === "menu");
	const modificador = 100;

	if (posy >= 0 && posy <= menusmenus[1].posy - modificador) {
		setCurrentMenu(menusmenus[0].id);
		return;
	}
	if (posy >= menusmenus[menusmenus.length - 1].posy - modificador) {
		setCurrentMenu(menusmenus[menusmenus.length - 1].id);
		return;
	}
	for (let i = 1; i < menusmenus.length; i++) {
		if (posy >= menusmenus[i].posy - modificador && posy <= menusmenus[i + 1].posy - modificador) {
			setCurrentMenu(menusmenus[i].id);
			return;
		}
	}
}

function App() {
	const [currentMenu, setCurrentMenu] = useState(menus[0].id);
	window.addEventListener("load", () => {
		updateMenusPosy();
	});
	window.addEventListener("resize", () => {
		updateMenusPosy();
	});
	window.addEventListener("scroll", () => {
		updateCurrentMenu(setCurrentMenu);
	});
	return (
		<div className="App">
			<GlobalStyle />
			<MenuHome contact={menus[3]} download={menus[4]} />
			<MenuAbout />
			<MenuFormExp />
			<MenuContact menus={menus} version={version} />
			{/* <ControlMusic /> */}
			<NavBar menus={menus} currentMenu={currentMenu} version={version} />
		</div>
	);
}

export default App;
