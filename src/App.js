import MenuHome from "./comp/MenuHome.jsx";
import MenuAbout from "./comp/MenuAbout.jsx";
import MenuFormExp from "./comp/MenuFormExp.jsx";
import MenuContact from "./comp/MenuContact.jsx";
import ControlSections from "./comp/ControlSections.jsx";
// import ControlMusic from "./comp/ControlMusic.jsx";
// import NavBar from "./comp/NavBar.jsx";

// import "./style/global-basic.css";
import "./style/menuhome-basic.css";
import "./style/menuabout-basic.css";
import "./style/menuformexp-basic.css";
import "./style/menucontact-basic.css";
import "./style/controls.css";

function App() {
	return (
		<div className="App">
			<MenuHome />
			<MenuAbout />
			<MenuFormExp />
			<MenuContact />
			<ControlSections />
			{/*<ControlMusic /> */}
			{/* <NavBar /> */}
		</div>
	);
}

export default App;
