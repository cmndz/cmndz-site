import styled from "styled-components";


import ControlMusic from "./ControlMusic.jsx";

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
		height: calc(100vh - 60px);
		padding: 0 var(--laterales);
		display: flex;
		flex-direction: column;
		align-items: center;
		.bloque {
			width: 100%;
			&.bloqueA {
				height: 67%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			&.bloqueB {
				height: 16%;
				margin: 0 0 5px 0;
				h1 {
					display: inline;
					margin: 0 5px 0 0;
				}
				h2 {
					width: 250px;
				}
				h5 {
					display: inline;
				}
			}
			&.bloqueC {
				height: 15%;
				margin: 0 0 5px 0;
				display: flex;
				flex-direction: column;
				.btn {
					font-size: 20px;
					font-weight: 600;
					border-radius: 10px;
					width: 100%;
					padding: 13px 0 13px 0;
					margin: 0 0 10px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					&.btnA {
						background-color: var(--color-b01);
						color: var(--color-w01);
					}
					&.btnB {
						background-color: var(--color-w01);
						border: solid 1px var(--color-b01);
						color: var(--color-b01);
					}
				}
			}
		}
	}
	@media only screen and (min-width: 500px) {
		.container .bloque {
			&.bloqueA {
				height: 72%;
			}
			&.bloqueB {
				height: 11%;
				h2 {
					width: 450px;
				}
			}
		}
	}
	@media only screen and (min-width: 800px) {
		.container .bloque {
			&.bloqueA {
				height: 80%;
			}
			&.bloqueB {
				height: 11%;
				max-width: 1460px;
				h2 {
					width: 450px;
				}
			}
			&.bloqueC {
				height: 7%;
				max-width: 1460px;
				margin: 0 0 5px 0;
				flex-direction: row;
				.btn {
					padding: 13px 0 13px 0;
					margin: 0 0 10px 0;
					display: flex;
					justify-content: center;
					align-items: center;
					&.btnA {
						width: 150px;
						margin-right: 20px;
					}
					&.btnB {
						width: 200px;
					}
				}
			}
		}
	}
`;

export default function MenuHome({ contact, download }) {
	return (
		<>
			<Wrapper id="menuHome">
				<div className="container">
					<div className="bloque bloqueA">
						<ControlMusic />
					</div>
					<div className="bloque bloqueB">
						<h1 className="name">wwKORE</h1>
						<h5 className="name">(Carlos Méndez)</h5>
						<h2 className="--text-nofill">Desarrollador Web Front End</h2>
					</div>
					<div className="bloque bloqueC">
						<a href={`#${contact.id}`}>
							<div className="btn btnA">{contact.name}</div>
						</a>

						<a href={download.file} target="_blank" rel="noreferrer noopener">
							<div className="btn btnB">{download.name}</div>
						</a>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
