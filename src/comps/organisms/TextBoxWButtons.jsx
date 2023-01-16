import styled from "styled-components";
import Text from "../atoms/Text.jsx";
import Button from "../atoms/Button.jsx";

const Wrapper = styled.div`
	background-color: var(--white);
	border-radius: 10px;
	width: 100%;
	min-width: 250px;
	padding: 0.5rem;
	.textBoxWButtons__block {
		width: 100%;
		&.blockA .text {
			margin-bottom: 0.2rem;
			&:nth-child(3) {
				width: 250px;
			}
		}
		&.blockB .button {
			margin-top: 0.4rem;
		}
	}
	@media only screen and (min-width: 340px) {
		.textBoxWButtons__block.blockA {
			.text {
				&:nth-child(1),
				&:nth-child(2) {
					display: inline;
				}
				&:nth-child(2) {
					margin-left: 0.5rem;
				}
				&:nth-child(3) {
					width: 300px;
				}
			}
		}
	}
	@media only screen and (min-width: 500px) {
		.textBoxWButtons__block.blockA .text {
			&:nth-child(3) {
				width: 450px;
			}
		}
	}
	@media only screen and (min-width: 550px) {
		max-width: 450px;
		.textBoxWButtons__block.blockB {
			display: flex;
			flex-direction: row;
			.button:nth-of-type(1) {
				width: 200px;
				margin-right: 0.5rem;
			}
			.button:nth-of-type(2) {
				width: 225px;
			}
		}
	}
`;

export default function TextBoxWButtons({
	text_nickname,
	text_name,
	text_profile,
	contact_link,
	cv_source,
}) {
	return (
		<Wrapper className="textBoxWButtons">
			<div className="textBoxWButtons__block blockA">
				<Text size="p1">{text_nickname}</Text>
				<Text size="p6">{text_name}</Text>
				<Text size="p3" variant="nofill">
					{text_profile}
				</Text>
			</div>
			<div className="textBoxWButtons__block blockB">
				<a href={`#${contact_link}`}>
					<Button>Contacto</Button>
				</a>
				<a href={cv_source} target="_blank" rel="noreferrer noopener">
					<Button variant="secondary">Descargar CV</Button>
				</a>
			</div>
		</Wrapper>
	);
}
