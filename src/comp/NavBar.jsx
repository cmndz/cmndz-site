import btnPlay from "./../resources/btnPlay-w.svg";
import imgMenu from "./../resources/menu-collapse.svg";
import imgLogo from "./../resources/logo-w.svg";

function NavBar() {
	return (
		<div id="NavBar" className="Collapse">
			<div className="NavBarTop">
				<div className="NavBarTopSideA">
					<img src={btnPlay} alt="" />
				</div>
				<div className="NavBarTopCenter">
					<img src={imgLogo} alt="" />
				</div>
				<div className="NavBarTopSideB">
					<img src={imgMenu} alt="" />
				</div>
			</div>

			<div className="NavBarMenu"></div>
		</div>
	);
}

export default NavBar;
