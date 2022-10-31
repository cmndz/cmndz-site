import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles.jsx";

import imgLogo from "./../resources/logo-w.svg";
import imgLinkedin from "./../resources/social-linkedin.svg";
import imgGithub from "./../resources/social-github.svg";
import imgClose from "./../resources/menu-expand.svg";

import imgLoader from "./../resources/loader.svg";

const Wrapper = styled.div`
	@media only screen and (max-width: 400px) {
		display: none;
	}
	width: 100vw;
	min-height: 100vh;
	padding: 60px 0 0 0;
	overflow: hidden;
	.container {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			margin: 10px 0 30px 0;
			width: 100%;
			padding: 0 var(--laterales) 0 var(--laterales);
			max-width: 1460px;
		}
		.bloque {
			width: 100%;
			min-height: 50vh;
			&.bloqueA {
				padding: 0 var(--laterales) 0 var(--laterales);
				display: flex;
				justify-content: center;
				.form {
					width: 100%;
					max-width: 500px;
				}
				.input-text {
					background-color: #f0f0f0;
					border: none;
					border-bottom: solid var(--color-b01) 3px;
					width: 100%;
					height: 40px;
					margin: 5px 0 20px 0;
					padding: 5px 5px 0 5px;
				}
				.input-textarea {
					background-color: #f0f0f0;
					border: none;
					border-bottom: solid var(--color-b01) 3px;
					width: 100%;
					height: 200px;
					overflow: scroll;
					resize: none;
					margin: 5px 0 20px 0;
					padding: 12px 5px 0 5px;
				}
				.input-submit {
					background-color: var(--color-b01);
					color: var(--color-w01);
					font-size: 20px;
					font-weight: 600;
					border: none;
					border-radius: 10px;
					width: 100%;
					padding: 13px 0 13px 0;
					margin: 5px 0 25px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
			}
			&.bloqueB {
				background-color: var(--color-b01);
				padding: 0 var(--laterales) 0 var(--laterales);
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.seccionA {
					width: 100%;
					display: flex;
					justify-content: center;
					margin: 50px 0 100px 0;
					img {
						width: 100px;
						height: auto;
					}
				}
				.seccionB {
					width: 50%;
					h4 {
						padding: 5px 0 0 5px;
					}
				}
				.seccionC {
					width: 50%;

					img {
						width: 35px;
						height: auto;
						margin: 10px;
					}
				}
				.seccionD {
					width: 100%;
					margin: 30px 0 50px 0;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				h3,
				h4,
				p {
					color: var(--color-w01);
				}
			}
		}
	}
	@media only screen and (min-width: 750px) {
		.container {
			.bloque {
				&.bloqueA {
					min-height: 60vh;
				}
				&.bloqueB {
					min-height: 40vh;
					padding: 50px var(--laterales) 0 var(--laterales);
					flex-wrap: nowrap;
					.seccionA {
						width: 30%;
						display: flex;
						justify-content: start;
						align-items: start;
						margin: 0;
						padding: 0 0 0 20px;
					}
					.seccionB {
						width: 30%;
					}
					.seccionC {
						width: 20%;
					}
					.seccionD {
						width: 20%;
						margin: 0 0 50px 0;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 1540px) {
		.container {
			.bloque {
				&.bloqueB {
					justify-content: center;
					.seccionA {
						max-width: 438px;
					}
					.seccionB {
						max-width: 438px;
					}
					.seccionC {
						max-width: 292px;
					}
					.seccionD {
						max-width: 292px;
					}
				}
			}
		}
	}
`;

function Menus({ menus }) {
	const menusvisibles = menus.filter((menu) => menu.visible === true);
	return (
		<>
			{menusvisibles.map((menu) => {
				return (
					<a key={menu.id} href={`#${menu.id}`}>
						<h4>{menu.name}</h4>
					</a>
				);
			})}
		</>
	);
}

const Modal = styled.div`
	@media only screen and (max-width: 400px) {
		display: none;
	}
	background-color: rgba(0, 0, 0, 0.8);
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 3;
	position: fixed;
	justify-content: center;
	display: none;
	&.display {
		display: flex;
	}
	.loader {
		position: absolute;
		width: 75px;
		height: auto;
		animation-name: loading;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 40vh 49vw 0 49vw;
		z-index: 4;
	}
	@keyframes loading {
		100% {
			transform: rotate(360deg);
		}
	}
	.modal-box {
		background-color: var(--color-w01);
		margin: 25vh 20px 0 20px;
		width: 600px;
		height: 350px;
		border-radius: 15px;
		overflow: hidden;
		padding: 0 20px;
		z-index: 5;
		display: none;
		&.display {
			display: block;
		}
		.modal-title {
			height: 15%;
			display: flex;
			justify-content: flex-end;
			button {
				border: none;
				background-color: transparent;
				img {
					width: 50px;
					height: 50px;
					cursor: pointer;
				}
			}
		}
		.modal-body {
			height: 65%;
			padding: 40px;
			text-align: center;
		}
		.modal-footer {
			border-top: solid 2px var(--color-b01);
			height: 20%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			button {
				background-color: var(--color-b01);
				color: var(--color-w01);
				font-size: 20px;
				font-weight: 600;
				border: none;
				border-radius: 10px;
				//width: 175px;
				width: 100%;
				padding: 13px 0 13px 0;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}
		}
	}
	@media only screen and (min-width: 500px) {
		.modal-box {
			.modal-footer {
				button {
					width: 175px;
				}
			}
		}
	}
`;
function ModalTanks({ msg }) {
	return (
		<>
			<Modal>
				<img className="loader" src={imgLoader} alt="" />
				<div className="modal-box">
					<div className="modal-title">
						<button onClick={closeModal}>
							<img src={imgClose} alt="" />
						</button>
					</div>
					<div className="modal-body">
						<h1>{msg}</h1>
					</div>
					<div className="modal-footer">
						<button onClick={closeModal}>Continuar</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

function closeModal() {
	let bdy = document.querySelector("body");
	let modal = document.querySelector(".modal-box");
	let modal_back = modal.parentElement;
	let modal_msg = modal.querySelector("h1");
	let form = document.querySelector("form");

	modal_msg.innerHTML = "";
	modal.classList.remove("display");
	modal_back.classList.remove("display");
	bdy.style.overflow = "scroll";
	form.reset();
}

function handleSubmit(e) {
	e.preventDefault();
	let bdy = document.querySelector("body");
	let modal = document.querySelector(".modal-box");
	let modal_back = modal.parentElement;
	let modal_msg = modal.querySelector("h1");

	bdy.style.overflow = "hidden";
	modal_back.classList.add("display");
	fetch("https://formsubmit.co/ajax/b2eb15d9c2e4cd9de5e262f05696aafc", {
		method: "POST",
		body: new FormData(e.target),
	})
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			modal_msg.innerHTML = "Muchas gracias por el mensaje.";
			modal.classList.add("display");
		})
		.catch((error) => {
			// console.log(error);
			modal_msg.innerHTML = error;
			modal.classList.add("display");
		});
}

export default function MenuContact({ menus, version }) {
	return (
		<>
			<GlobalStyle />

			<Wrapper id="menuContact">
				<div className="container">
					<div className="title">
						<h1>Contacto</h1>
					</div>
					<div className="bloque bloqueA">
						<form className="form" onSubmit={handleSubmit}>
							<p>Tu Nombre</p>
							<input className="input-text" type="text" name="name" required />
							<p>Tu eMail</p>
							<input
								className="input-text"
								type="email"
								name="email"
								placeholder="ejemplo@gmail.com"
								required
							/>
							{/* <p>Asunto</p>
							<input className="input-text" type="text" name="subject" required /> */}
							<p>Mensaje</p>
							<textarea
								className="input-textarea"
								name="message"
								id=""
								cols="30"
								rows="10"
								required
							></textarea>
							<input className="input-submit" type="submit" value="Enviar" />
							<input type="hidden" name="_template" value="table" />
							<input type="hidden" name="_subject" value="From Site"></input>
						</form>
					</div>
					<div className="bloque bloqueB">
						<div className="seccionA">
							<img src={imgLogo} alt="" />
						</div>
						<div className="seccionB">
							<h3>Explorar</h3>
							<Menus menus={menus} />
						</div>
						<div className="seccionC">
							<h3>Redes</h3>
							<a href="https://github.com/cmndz/">
								<img src={imgGithub} alt="" />
							</a>
							<a href="https://www.linkedin.com/in/carlosalfredomendez/">
								<img src={imgLinkedin} alt="" />
							</a>
						</div>
						<div className="seccionD">
							<h3>Version</h3>
							<h4>{version}</h4>
						</div>
					</div>
				</div>
			</Wrapper>
			<ModalTanks />
		</>
	);
}
