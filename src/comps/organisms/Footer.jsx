import styled from "styled-components";
import Icon from "./../atoms/Icon";
import Text from "./../atoms/Text";

const Wrapper = styled.div`
	background-color: var(--black);
	padding: 0 var(--lats) 0 var(--lats);
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	.seccionA {
		width: 100%;
		display: flex;
		justify-content: center;
		margin: 50px 0 100px 0;
	}
	.seccionB {
		width: 50%;
		.text.p5 {
			padding:3px 0 0 15px;
		}
	}
	.seccionC {
		text-align: center;
		width: 50%;
		img {
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
	p {
		color: var(--white);
	}

	@media only screen and (min-width: 750px) {
		min-height: 25vh;
		padding: 50px var(--lats) 0 var(--lats);
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
	@media only screen and (min-width: 1540px) {
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
`;

function Menus({ menus }) {
	const menusvisibles = menus.filter((menu) => menu.visible === true);
	return (
		<>
			{menusvisibles.map((menu) => {
				return (
					<a key={menu.id} href={`#${menu.id}`}>
						<Text size="p5">{menu.name}</Text>
					</a>
				);
			})}
		</>
	);
}

export default function Footer({ menus, version }) {
	return (
		<Wrapper className="Footer">
			<div className="seccionA">
				<Icon type="LOGOW" size="max" />
			</div>
			<div className="seccionB">
				<Text size="p4">Explorar</Text>
				<Menus menus={menus} />
			</div>
			<div className="seccionC">
				<Text size="p4">Redes</Text>
				<a href="https://github.com/cmndz/">
					<Icon type="SGITHUB" size="min"></Icon>
				</a>
				<a href="https://www.linkedin.com/in/carlosalfredomendez/">
					<Icon type="SLINKEDIN" size="min"></Icon>
				</a>
			</div>
			<div className="seccionD">
				<Text size="p4">Version</Text>
				<Text size="p5">{version}</Text>
			</div>
		</Wrapper>
	);
}
