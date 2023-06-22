import styled from "styled-components";
import Icon from "./Icon";
import Text from "./Text";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 60px 1fr;
	border-bottom: solid 3px var(--black);
	margin: 25px 0 25px 0;
	.icono-wrapper {
		grid-column: 1 / 2;
		.icono {
			margin: 0 20px 0 0;
			.back {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: var(--black);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.lista-header {
		grid-column: 2 / 3;
	}
	.lista-detalle {
		grid-column: 2 / 3;
		margin: 10px 0 0 0;
		p {
			line-height: 25px;
		}
	}
	.lista-tags {
		grid-column: 2 / 3;
		margin: 25px 0 25px 0;
		img {
			margin: 0 5px;
		}
	}
	&:nth-last-child(1) {
		border-bottom: none;
		margin: 0;
	}
	@media only screen and (min-width: 750px) {
		display: grid;
		grid-template-columns: 60px 1fr 2fr 70px;
		justify-content: start;
		align-content: start;
		.lista-header {
			grid-column: 2 / 3;
			margin: 0 20px 50px 0;
		}
		.lista-detalle {
			grid-column: 3 / 4;
			margin: 0 15px 50px 0;
		}
		.lista-tags {
			grid-column: 4 / 5;
			margin: 0 0 50px 0;
			img {
				margin: 3px 5px;
			}
		}
	}
	@media only screen and (min-width: 1250px) {
		display: grid;
		grid-template-columns: 60px 1fr 3fr 70px;
		.lista-header {
			margin: 0 20px 50px 0;
		}
		.lista-detalle {
			grid-column: 3 / 4;
			margin: 0 15px 50px 50px;
		}
		.lista-tags {
			grid-column: 4 / 5;
			margin: 0 0 50px 0;
		}
	}
`;

export default function ListIcon({ item }) {
	let listalista = null;
	if (item.list !== "") {
		let aux = item.list.split("|");
		listalista = aux.map((elem, index) => (
			<li key={index}>
				<Text>{elem}</Text>
			</li>
		));
	}
	let detaildetail = item.detail;
	if (detaildetail.includes("**")) {
		let aux = item.detail.split("**");
		detaildetail = (
			<>
				{aux[0]}
				<strong>{aux[1]}</strong>
				{aux[2]}
			</>
		);
	}
	let tagstags = null;
	if (item.tags !== "") {
		let aux = item.tags.split("|");
		tagstags = aux.map((elem, index) => {
			switch (elem) {
				case "HTML":
					return <Icon key={index} type="HTML" size="min" alt="HTML" />;
				case "CSS":
					return <Icon key={index} type="CSS" size="min" alt="CSS" />;
				case "JS":
					return <Icon key={index} type="JS" size="min" alt="Javascript" />;
				case "REACT":
					return <Icon key={index} type="REACT" size="min" alt="React" />;
				case "SASS":
					return <Icon key={index} type="SASS" size="min" alt="SASS" />;
				case "C":
					return <Icon key={index} type="C" size="min" alt="C" />;
				case "PYTHON":
					return <Icon key={index} type="PYTHON" size="min" alt="Python" />;
				case "VB":
					return <Icon key={index} type="VB" size="min" alt="Visual Basic" />;
				case "TSQL":
					return <Icon key={index} type="TSQL" size="min" alt="T-SQL" />;
				case "GIT":
					return <Icon key={index} type="GIT" size="min" alt="Git" />;
				case "VB6":
					return <Icon key={index} type="VB6" size="min" alt="Visual Basic 6.0" />;
				case "VS":
					return <Icon key={index} type="VS" size="min" alt="Visual Strudio 2019" />;
				case "VSC":
					return <Icon key={index} type="VSC" size="min" alt="Visual Studio Code" />;
				case "SQLS":
					return <Icon key={index} type="SQLS" size="min" alt="SQL Server Management Studio" />;
				case "ILLUS":
					return <Icon key={index} type="ILLUS" size="min" alt="Adobe Illustrator" />;
				case "PHOTO":
					return <Icon key={index} type="PHOTO" size="min" alt="Adobe Photoshop" />;
				case "FIGMA":
					return <Icon key={index} type="FIGMA" size="min" alt="Figma" />;
				case "WORD":
					return <Icon key={index} type="WORD" size="min" alt="Microsoft Word" />;
				case "EXCEL":
					return <Icon key={index} type="EXCEL" size="min" alt="Microsoft Excel" />;
				default:
					return null;
			}
		});
	}

	return (
		<Wrapper>
			<div className="icono-wrapper">
				<div className="icono">
					<div className="back">
						<Icon type={item.icon === 0 ? "WORK" : "EDUC"} size="min" />
					</div>
				</div>
			</div>
			<div className="lista-header">
				<Text size="p5">{item.header}</Text>
				<Text size="p7">{item.interval}</Text>
			</div>

			<div className="lista-detalle">
				<Text size="p6">{detaildetail}</Text>
				{item.list !== null ? <ul>{listalista} </ul> : ""}
			</div>
			<div className="lista-tags">{tagstags}</div>
		</Wrapper>
	);
}
