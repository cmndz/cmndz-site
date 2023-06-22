import styled from "styled-components";
import ListaComplete from "./../common/ListComplete";
import Text from "./../common/Text"

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
		min-width: 250px;
		.title {
			margin: 0.75rem 0 3rem 0;
			width: 100%;
			max-width: 1200px;
			min-width: 250px;
		}
		.bloque {
			width: 100%;
			
		}
	}
	@media only screen and (min-width: 750px) {
		.container {
			align-items: center;
			.bloque {
				max-width: 650px;
			}
		}
	}
	@media only screen and (min-width: 850px) {
		.container {
			.bloque {
				max-width: none;
			}
		}
	}
	@media only screen and (min-width: 1200px) {
		.container {
			.bloque {
				max-width: 1200px;
			}
		}
	}
`;

export default function MenuFormExp({ title, lista_complete_items }) {
	return (
		<Wrapper id="FormExp">
			<div className="container">
				<div className="title">
					<Text size="p1">{title}</Text>
				</div>
				<div className="bloque">
					<ListaComplete item={lista_complete_items[0]} />
					<ListaComplete item={lista_complete_items[1]} />
					<ListaComplete item={lista_complete_items[2]} />
					<ListaComplete item={lista_complete_items[3]} />
					<ListaComplete item={lista_complete_items[4]} />
					<ListaComplete item={lista_complete_items[5]} />
					<ListaComplete item={lista_complete_items[6]} />
					<ListaComplete item={lista_complete_items[7]} />
				</div>
			</div>
		</Wrapper>
	);
}
