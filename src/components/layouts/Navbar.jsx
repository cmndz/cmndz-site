import styled from "styled-components";
import { useState } from "react";
import Icon from "../common/Icon";
import Text from "../common/Text";

const Wrapper = styled.div`
	.navbar__top {
		width: 100vw;
		height: 4rem;
		display: flex;
		flex-direction: row;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 20;
		.navbar__top__side {
			height: 100%;
			display: flex;
			align-items: center;
			&.side__left {
				width: 40%;
				justify-content: flex-start;
				padding-left: var(--lats);
				a {
					width: 45px;
					height: 45px;
				}
				.btnPause {
					//background-color: red;
					margin-left: 30px;
					width: 45px;
					height: 25px;
					cursor: pointer;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.audioplay-rec {
						width: 5px;
						height: 100%;
						background-color: var(--black);
						&.rec01,
						&.rec05 {
							animation: loading 1.5s infinite;
						}
						&.rec02,
						&.rec04 {
							animation: loading 2s infinite;
						}
						&.rec03 {
							animation: loading 5s infinite;
						}
						@keyframes loading {
							0% {
								height: 25%;
							}
							50% {
								height: 100%;
							}
							100% {
								height: 25%;
							}
						}
					}
				}
			}
			&.side__right {
				width: 60%;
				justify-content: flex-end;
				padding-right: var(--lats);
				.navbar__menuitem {
					display: none;
				}
				.navbar__button {
					cursor: pointer;
				}
				.navbar__theme {
					display: none;
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
		z-index: 20;
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
	@media only screen and (min-width: 850px) {
		.navbar__top .navbar__top__side.side__left {
			width: 20%;
		}
		.navbar__top .navbar__top__side.side__right {
			width: 80%;
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
			.navbar__theme {
				margin-left: 10px;
				//background-color:red;
				display: flex;

				.theme-toogle-btn {
					display: none;
				}
				.theme-toogle-lbl {
					width: 50px;
					height: 30px;
					border-radius: 50px;

					background-color: var(--black);
					display: inline-block;
					cursor: pointer;
					position: relative;
					&:after {
						content: "";
						position: absolute;
						width: 24px;
						height: 24px;
						background-color: var(--white);
						border-radius: 50%;
						top: 3px;
						left: 2px;
					}
				}
				.theme-toogle-btn:checked ~ .theme-toogle-lbl {
					background-color: var(--white-hover);
					&:after {
						top: 3px;
						left: 23px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 1000px) {
		.navbar__top {
			justify-content: center;
			.navbar__top__side {
				&.side__left {
					padding-left: 0;
					max-width: 150px;
				}
				&.side__right {
					padding-right: 0;
					max-width: 1050px;
				}
			}
		}
	}

	&.theme-light {
		a:link,
		a:visited,
		a:active {
			color: var(--black);
		}
		.navbar__top {
			background-color: var(--white);
			box-shadow: 0px -5px 10px var(--black);
			color: var(--black);
		}
		/* .navbar__body {
			background-color: var(--white);
		} */
	}
	&.theme-dark {
		a:link,
		a:visited,
		a:active {
			color: var(--white);
		}
		.navbar__top {
			background-color: var(--black);
			box-shadow: 0px -5px 10px var(--black);
			color: var(--white) !important;
		}
	}
`;

const Menus = ({ menus, setCollapse }) => {
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
					</a>
				);
			})}
		</>
	);
};

export default function NavBar({ menus, version, theme, setTheme, play, setPlay }) {
	const [isCollapse, setCollapse] = useState(true);
	return (
		<Wrapper className={`navbar ${theme === "light" ? "theme-light" : "theme-dark"}`}>
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

					{play ? (
						<div
							className="btnPause"
							onClick={() => {
								setPlay(false);
							}}
						>
							{/* <Icon type="AUDIOPAUSE" size="med" /> */}
							<div className="audioplay-rec rec01"></div>
							<div className="audioplay-rec rec02"></div>
							<div className="audioplay-rec rec03"></div>
							<div className="audioplay-rec rec04"></div>
							<div className="audioplay-rec rec05"></div>
						</div>
					) : (
						""
					)}
				</div>
				<div className="navbar__top__side side__right">
					<div className="navbar__button" onClick={() => setCollapse(!isCollapse)}>
						{isCollapse ? <Icon type="COLLAP" size="--reg" /> : <Icon type="CLOSE" size="--reg" />}
					</div>
					<Menus menus={menus} setCollapse={setCollapse} />
					{/* <div className="navbar__theme">
						<input type="checkbox" className="theme-toogle-btn" id="theme-toogle-btn" />
						<label
							className="theme-toogle-lbl"
							htmlFor="theme-toogle-btn"
							onClick={() => {
								if (theme === "light") {
									setTheme("dark");
								} else {
									setTheme("light");
								}
							}}
						></label>
					</div> */}
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
