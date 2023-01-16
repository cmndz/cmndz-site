import styled from "styled-components";
import Icon from "./../atoms/Icon";
import Text from "./../atoms/Text";

const Wrapper = styled.div`
	align-items: center;
	display: flex;
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
`;

export default function ListIcon({ type_icon, text }) {
	return (
		<Wrapper className="listIcon">
			<div className="icono-wrapper">
				<div className="icono">
					<div className="back">
						<Icon type={type_icon} size="min" />
					</div>
				</div>
			</div>
			<Text>
				{text[0]}
				<strong>{text[1]}</strong>
				{text[2]}
			</Text>
		</Wrapper>
	);
}
