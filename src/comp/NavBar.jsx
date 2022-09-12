// import btnPlay from "./../resources/btnPlay-w.svg";
import { useState } from "react";
import imgMenuCollapse from "./../resources/menu-collapse.svg";
import imgMenuExpand from "./../resources/menu-expand.svg";
import imgLogo from "./../resources/logo-w.svg";
import React from "react";

function NavBar() {
	const [isCollapse, setCollapse] = useState(true);

	return (
		<div id="navbar">
			<div className="navbar-top">
				<div className="side --navbarsideA">
					<a href="#top" onClick={() => setCollapse(true)}>
						<img className="icon-med" src={imgLogo} alt="" />
					</a>
				</div>
				<div className="side --navbarsideB">
					{isCollapse ? (
						<img
							className="icon-med collapse-icon"
							onClick={() => setCollapse(!isCollapse)}
							src={imgMenuCollapse}
							alt=""
						/>
					) : (
						<img
							className="icon-med collapse-icon"
							onClick={() => setCollapse(!isCollapse)}
							src={imgMenuExpand}
							alt=""
						/>
					)}
					<a className="side-a" href="#menuabout">
						<p className="navbar-p">SOBRE MI</p>
					</a>
					<a className="side-a" href="#menuformexp">
						<p className="navbar-p">FORMACION Y EXPERIENCIA</p>
					</a>
					<a className="side-a" href="#menucontact">
						<p className="navbar-p">CONTACTO</p>
					</a>
					<a className="side-a" href="#top">
						<p className="navbar-p">DESCARGAR CV</p>
					</a>
				</div>
			</div>
			<div className={`navbar-body ${isCollapse ? "hidden" : "visible"}`}>
				<a className="body-a" href="#menuabout" onClick={() => setCollapse(!isCollapse)}>
					<p className="navbar-p">SOBRE MI</p>
				</a>
				<a className="body-a" href="#menuformexp" onClick={() => setCollapse(!isCollapse)}>
					<p className="navbar-p">FORMACION Y EXPERIENCIA</p>
				</a>
				<a className="body-a" href="#menucontact" onClick={() => setCollapse(!isCollapse)}>
					<p className="navbar-p">CONTACTO</p>
				</a>
				<a className="body-a" href="#top" onClick={() => setCollapse(!isCollapse)}>
					<p className="navbar-p">DESCARGAR CV</p>
				</a>
			</div>
		</div>
	);
}

export default NavBar;
