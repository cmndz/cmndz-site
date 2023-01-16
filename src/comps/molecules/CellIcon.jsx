import styled from "styled-components";
import Icon from "./../atoms/Icon";
import Text from "./../atoms/Text";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	.grid-item {
		width: 7.5rem;
		height: 7.5rem;
		cursor: pointer;
		background-color: var(--white-bone);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-radius: 15px;
		padding: 1.5rem .5rem 1rem .5rem;
		p {
			margin: .2rem 0 0 0;
			text-align: center;
		}
	}
`;

export default function CellIcon({ type_icon, text }) {
	return (
		<Wrapper className="cellIcon">
			<div className="grid-item">
				<Icon type={type_icon} size="med" />
				<Text>{text}</Text>
			</div>
		</Wrapper>
	);
}
