import styled from "styled-components";
import ListListIcon from "../organisms/ListListIcon";
import GridItems from "../organisms/GridItems";
import Text from "../atoms/Text";

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	padding: var(--menu-top) 0 0 0;
	overflow: hidden;
	.container {
		width: 100vw;
		padding: 0 var(--lats) 0 var(--lats);
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			margin: 0.75rem 0 3rem 0;
			width: 100%;
			max-width: 1460px;
		}
		.bloque {
			width: 100%;
			min-width: 250px;
			&.bloqueA {
				width: 361px;
				height: 500px;
				background-color: var(--color-b01);
				border-radius: 15px;
				position: relative;
				img {
					width: 100%;
					top: -50px;
					position: absolute;
				}
				margin-bottom: 20px;
				overflow: hidden;
			}
			&.bloqueB {
				
				max-width: 500px;
				.text:nth-child(1) {
					text-align: center;
					margin: 0 0 20px 0;
				}

				p {
					margin: 20px 0 20px 0;
				}
			}
		}
	}

	@media only screen and (min-width: 850px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
			justify-items: center;
			.title {
				grid-column: 1 / 3;
			}
		}
	}

	@media only screen and (min-width: 1000px) {
		.container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
			justify-items: center;
			.title {
				grid-column: 1 / 3;
			}
			.bloque {
				&.bloqueA {
					justify-self: end;
					margin: 0 60px 20px 0;
				}
				&.bloqueB {
					justify-self: start;
					margin: 0 0 0 25px;
				}
			}
		}
	}

	@media only screen and (min-width: 1050px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					max-width: 650px;
					.grid {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
					}
				}

				&.bloqueC {
					justify-self: end;
					margin: 0 25px 0 0;
				}
				&.bloqueD {
					justify-self: start;
					margin: 0 0 0 25px;
				}
			}
		}
	}

	@media only screen and (min-width: 1250px) {
		.container {
			.bloque {
				&.bloqueC,
				&.bloqueD {
					.grid {
						display: grid;
						grid-template-columns: repeat(5, 1fr);
					}
				}
			}
		}
	}
`;

export default function TempAbout({ tecnologies, tools, title, text, profile_pic, list_listicon }) {
	return (
		<Wrapper id="About">
			<div className="container">
				<div className="title">
					<Text size="p1">{title}</Text>
				</div>
				<div className="bloque bloqueA">
					<img src={profile_pic} alt="" />
				</div>
				<div className="bloque bloqueB">
					<Text size="p3">{text[0]}</Text>
					<Text size="p6">{text[1]}</Text>
					<Text size="p6">
						{text[2]}
						<strong>{text[3]}</strong>
						{text[4]}
						<strong>{text[5]}</strong>
						{text[6]}
					</Text>
					<Text>{text[7]}</Text>
					<ListListIcon list_listicon={list_listicon} />
				</div>
				<div className="bloque bloqueC">
					<GridItems text={tecnologies.p} arrCellIcons={tecnologies.elements} />
				</div>
				<div className="bloque bloqueD">
					<GridItems text={tools.p} arrCellIcons={tools.elements} />
				</div>
			</div>
		</Wrapper>
	);
}
