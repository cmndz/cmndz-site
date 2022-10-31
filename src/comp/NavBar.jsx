import { useState } from "react";
import styled from "styled-components";

import imgMenuCollapse from "./../resources/menu-collapse.svg";
import imgMenuExpand from "./../resources/menu-expand.svg";
import imgLogo from "./../resources/logo.svg";

const Wrapper = styled.div`
	@media only screen and (max-width: 400px) {
		display:none;
	}
	.brand {
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
	.icon {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
	h4 {
		color: var(--color-b01);
		font-weight: 600;
		position: relative;
	}
	h4.selected::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 3px;
		background-color: var(--color-b01);
		bottom: -9px;
		opacity: 100;
		animation-name: Uping;
		animation-duration: 0.1s;
	}
	h4.no-selected {
		&::after {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			height: 3px;
			background-color: var(--color-w01);
			bottom: -20px;
			opacity: 0;

			animation-name: Dowing;
			animation-duration: 0.1s;
		}
	}

	@keyframes Uping {
		from {
			bottom: -20px;
			opacity: 0;
		}
		to {
			bottom: -9px;
			opacity: 100;
		}
	}
	@keyframes Dowing {
		from {
			bottom: -9px;
			opacity: 100;
		}
		to {
			bottom: -20px;
			opacity: 0;
		}
	}
	.top {
		width: 100vw;
		height: 60px;
		display: flex;
		flex-direction: row;
		background-color: var(--color-w01);
		box-shadow: 0px -5px 10px var(--color-b01);

		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		.side {
			height: 100%;
			display: flex;
			align-items: center;
		}
		.side-left {
			width: 10%;
			justify-content: flex-start;
			padding-left: var(--laterales);
		}
		.side-right {
			width: 90%;
			justify-content: flex-end;
			padding-right: var(--laterales);
			a {
				display: none;
			}
		}
	}
	.body {
		width: 100vw;
		height: 100vh;
		top: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-w01);
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 2;
		a {
			margin-top: 60px;
			
		}
		.versionNro {
			position: absolute;
			bottom: 0;
			margin-bottom: 100px;
		}
	}
	.body.hidden {
		animation-name: sideOut;
		animation-duration: 0.5s;
		right: -100%;
	}
	.body.visible {
		animation-name: sideIn;
		animation-duration: 0.5s;
		right: 0;
	}
	@keyframes sideOut {
		from {
			right: 0;
		}
		to {
			right: -100%;
		}
	}
	@keyframes sideIn {
		from {
			right: -100%;
		}
		to {
			right: 0;
		}
	}

	@media only screen and (min-width: 800px) {
		.body,
		.collapse-icon {
			display: none;
		}
		.top .side-right a {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 0 13px;
			&:hover {
				background-color: #ffffff15;
				transition: all 0.5s;
			}
		}
	}
	@media only screen and (min-width: 1000px) {
		.top {
			justify-content: center;
			.side-left {
				max-width: 150px;
			}
			.side-right {
				max-width: 1350px;
			}
		}
	}
`;

function Menus({ menus, setCollapse, currentMenu }) {
	const menusvisibles = menus.filter((menu) => menu.visible === true);
	return (
		<>
			{menusvisibles.map((menu) => {
				if (menu.type === "download") {
					return (
						<a
							key={menu.id}
							href={menu.file}
							target="_blank"
							rel="noreferrer noopener"
							onClick={() => setCollapse(true)}
						>
							<h4 className="no-selected">{menu.name}</h4>
						</a>
					);
				}
				return (
					<a
						key={menu.id}
						href={`#${menu.id}`}
						onClick={() => {
							setCollapse(true);
						}}
					>
						<h4 className={`${menu.id === currentMenu ? "selected" : "no-selected"}`}>{menu.name}</h4>
					</a>
				);
			})}
		</>
	);
}

export default function NavBar({ menus, currentMenu, version }) {
	const [isCollapse, setCollapse] = useState(true);
	return (
		<>
			<Wrapper>
				<div className="top">
					<div className="side side-left">
						<a
							href="#top"
							onClick={() => {
								setCollapse(true);
							}}
						>
							<img className="brand" src={imgLogo} alt="" />
						</a>
					</div>
					<div className="side side-right">
						{isCollapse ? (
							<img
								className="icon collapse-icon"
								onClick={() => setCollapse(!isCollapse)}
								src={imgMenuCollapse}
								alt=""
							/>
						) : (
							<img
								className="icon collapse-icon"
								onClick={() => setCollapse(!isCollapse)}
								src={imgMenuExpand}
								alt=""
							/>
						)}
						<Menus menus={menus} setCollapse={setCollapse} currentMenu={currentMenu} />
					</div>
				</div>
				<div className={`body ${isCollapse ? "hidden" : "visible"}`}>
					<Menus menus={menus} setCollapse={setCollapse} currentMenu={currentMenu} />
					<div className="versionNro">
						<h3>Version</h3>
						<h4>{version}</h4>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
