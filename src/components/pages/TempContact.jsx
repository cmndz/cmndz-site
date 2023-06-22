import styled from "styled-components";
import Form from "./../layouts/Form";
import Footer from "./../layouts/Footer";
import Text from "./../common/Text";

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	padding: var(--menu-top) 0 0 0;
	overflow: hidden;
	.container {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			margin: 10px 0 30px 0;
			width: 100%;
			padding: 0 var(--lats) 0 var(--lats);
			max-width: 1200px;
		}
		.footer {
			width: 100%;
			//max-width: 1200px;
			min-height: 50vh;
		}
		.bloque {
			width: 100%;
			min-width: 250px;
			&.bloqueA {
				padding: 0 var(--lats) 0 var(--lats);
				display: flex;
				justify-content: center;
				margin-bottom: 50px;
			}
		}
	}
	@media only screen and (min-width: 750px) {
		.container {
			.title {
				padding: 0;
			}

			.bloque {
				&.bloqueA {
					min-height: 60vh;
				}
			}
		}
	}
`;

export default function Contact({ title, menus, version }) {
	return (
		<Wrapper id="Contact">
			<div className="container">
				<div className="title">
					<Text size="p1">{title}</Text>
				</div>
				<div className="bloque bloqueA">
					<Form />
				</div>
				<Footer menus={menus} version={version} />
			</div>
		</Wrapper>
	);
}
