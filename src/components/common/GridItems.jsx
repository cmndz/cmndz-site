import styled from "styled-components";
import CellIcon from ".//CellIcon";
import Text from "./Text";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 250px;
	p:nth-child(1) {
		margin: 1.5rem 0 1.5rem 0;
		width: 100%;
		max-width: 500px;
	}
	.grid {
		width: 100%;
		max-width: 650px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 10px;
	}

	@media only screen and (min-width: 450px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media only screen and (min-width: 550px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media only screen and (min-width: 650px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
		}
	}

	@media only screen and (min-width: 850px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media only screen and (min-width: 1000px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media only screen and (min-width: 1050px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media only screen and (min-width: 1250px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
		}
	}
`;

export default function GridItems({ text, arrCellIcons }) {
	let cellIcons = arrCellIcons.map(function (item, index) {
		return <CellIcon key={index} type_icon={item.type_icon} text={item.text} />;
	});

	return (
		<Wrapper className="GridItems">
			<Text size="p6">{text}</Text>
			<div className="grid">{cellIcons}</div>
		</Wrapper>
	);
}
