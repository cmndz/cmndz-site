import styled from "styled-components";
import TextBoxWButtons from "../organisms/TextBoxWButtons";
import ControlMusic from "../organisms/ControlMusic";

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	padding: var(--menu-top) 0 0 0;
	display: flex;
	overflow-y: hidden;
	.container {
		width: 100vw;
		height: calc(100vh - var(--menu-top));
		background-color: var(--white);
		padding: 0 var(--lats) 1rem var(--lats);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		position: relative;
		.block {
			width: 100vw;
			height: 100%;
			&.blockA {
				flex-grow: 1;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.textBoxWButtons {
			z-index: 2;
		}
	}
	@media only screen and (min-width: 550px) {
		.container {
			/* .block.blockA {
				padding-bottom: 5rem;
			} */

			.textBoxWButtons {
				position: absolute;
				left: var(--lats);
				bottom: 1rem;
			}
		}
	}

	@media only screen and (min-width: 1000px) {
		justify-content: center;
		.container {
			max-width: 1500px;
		}
	}
`;

export default function tempHome({ constrolmusic_cantelements, textboxwbuttons_text, textboxwbuttons_links }) {
	return (
		<Wrapper id="Home">
			<div className="container">
				<div className="block blockA">
					<ControlMusic cant_elements={constrolmusic_cantelements} />
				</div>
				<TextBoxWButtons
					text_nickname={textboxwbuttons_text[0]}
					text_name={textboxwbuttons_text[1]}
					text_profile={textboxwbuttons_text[2]}
					contact_link={textboxwbuttons_links[0]}
					cv_source={textboxwbuttons_links[1]}
				/>
			</div>
		</Wrapper>
	);
}
