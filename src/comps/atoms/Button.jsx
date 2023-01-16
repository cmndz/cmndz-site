import styled from "styled-components";
import Text from "./Text.jsx";

const Wrapper = styled.button`
	border-radius: 10px;
	width: 100%;
	padding: 0.8rem 1.5rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid 1px var(--black);
	&.primary {
		background-color: var(--black);
		&:hover {
			background-color: var(--black-hover);
			border-color: var(--black-hover);
		}
	}
	&.secondary {
		background-color: var(--white);
		&:hover {
			background-color: var(--white-hover);
			border-color: var(--white-hover);
		}
		
	}
`;

export default function Button({ variant = "primary", children, type = "button" }) {
	return (
		<Wrapper className={`button ${variant}`} type={type}>
			<Text size="p5" variant={variant === "primary" ? "white" : ""}>
				{children}
			</Text>
		</Wrapper>
	);
}
