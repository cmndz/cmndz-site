import styled from "styled-components";

const Wrapper = styled.p`
	color: var(--black);
	&.p1 {
		font-size: 2.25rem;
		font-weight: 800;
	}
	&.p2 {
		font-size: 2rem;
		font-weight: 600;
	}
	&.p3 {
		font-size: 1.8rem;
		font-weight: 700;
	}
	&.p4 {
		font-size: 1.5rem;
		font-weight: 600;
	}
	&.p5 {
		font-size: 1.3rem;
		font-weight: 600;
	}
	&.p6 {
		font-size: 1rem;
		font-weight: 500;
	}
	&.p7 {
		font-size: .8rem;
		font-weight: 600;
	}
	&.white {
		color: var(--white);
	}
	&.nofill {
		color: var(--white);
		text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000,
			-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
	}
`;

export default function Text({ size = "p6", variant = "", children }) {
	return <Wrapper className={`text ${size} ${variant}`}>{children}</Wrapper>;
}
