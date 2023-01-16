import styled from "styled-components";
import { useState } from "react";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

const Wrapper = styled.div`
	/* 

	h4 {
		color: var(--black);
		font-weight: 600;
		position: relative;
	}
	h4.selected::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 3px;
		background-color: var(--black);
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
			background-color: var(--white);
			bottom: -20px;
			opacity: 0;

			animation-name: Dowing;
			animation-duration: 0.1s;
		}
	} */

	/* @keyframes Uping {
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
	} */
	.navbar__top {
		width: 100vw;
		height: 4rem;
		display: flex;
		flex-direction: row;
		background-color: var(--white);
		box-shadow: 0px -5px 10px var(--black);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		.navbar__top__side {
			height: 100%;
			display: flex;
			align-items: center;
			&.side__left {
				width: 10%;
				justify-content: flex-start;
				padding-left: var(--lats);
			}
			&.side__right {
				width: 90%;
				justify-content: flex-end;
				padding-right: var(--lats);
				.navbar__menuitem {
					display: none;
				}
				.navbar__button {
					cursor: pointer;
				}
			}
		}
	}
	.navbar__body {
		width: 100vw;
		height: 100vh;
		top: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--white);
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 2;
		.navbar__menuitem {
			margin-top: 60px;
		}
		&.hide {
			animation-name: sideOut;
			animation-duration: 0.5s;
			right: -100%;
		}
		&.show {
			animation-name: sideIn;
			animation-duration: 0.5s;
			right: 0;
		}
		.navbar__body__version {
			position: absolute;
			bottom: 0;
			margin-bottom: 100px;
		}
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
		.navbar__top .navbar__top__side.side__right {
			.navbar__button {
				display: none;
			}
			.navbar__menuitem {
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
	}
	@media only screen and (min-width: 1000px) {
		.navbar__top {
			justify-content: center;
			.navbar__top__side {
				&.side__left {
					max-width: 150px;
				}
				&.side__right {
					max-width: 1350px;
				}
			}
		}
	}
`;

function Menus({ menus, setCollapse }) {
	const menusvisibles = menus.filter((menu) => menu.visible === true);
	return (
		<>
			{menusvisibles.map((menu) => {
				if (menu.type === "download") {
					return (
						<a
							key={menu.id}
							href={menu.file}
							onClick={() => setCollapse(true)}
							className="navbar__menuitem"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Text size="--p4">{menu.name}</Text>
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
						className="navbar__menuitem"
					>
						<Text size="p4">{menu.name}</Text>
						{/* <h4 className={`${menu.id === currentMenu ? "selected" : "no-selected"}`}>{menu.name}</h4> */}
					</a>
				);
			})}
		</>
	);
}

export default function NavBar({ menus, version }) {
	const [isCollapse, setCollapse] = useState(true);
	return (
		<Wrapper className="navbar">
			<div className="navbar__top">
				<div className="navbar__top__side side__left">
					<a
						href="#top"
						onClick={() => {
							setCollapse(true);
						}}
					>
						<Icon type="LOGOB" size="med" />
					</a>
				</div>
				<div className="navbar__top__side side__right">
					<div className="navbar__button" onClick={() => setCollapse(!isCollapse)}>
						{isCollapse ? <Icon type="COLLAP" size="--reg" /> : <Icon type="CLOSE" size="--reg" />}
					</div>
					<Menus menus={menus} setCollapse={setCollapse} />
				</div>
			</div>

			<div className={`navbar__body ${isCollapse ? "hide" : "show"}`}>
				<Menus menus={menus} setCollapse={setCollapse} />
				<div className="navbar__body__version">
					<Text size="p4">Version</Text>
					<Text size="p5">{version}</Text>
				</div>
			</div>
		</Wrapper>
	);
}
