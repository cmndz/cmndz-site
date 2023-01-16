import styled from "styled-components";
import Icon from "./../atoms/Icon";
import { useEffect } from "react";

const Wrapper = styled.div`
	background-color: var(--black);
	opacity: 0.85;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 3;
	position: fixed;
	justify-content: center;
	display: none;
	&.display {
		display: flex;
	}
	//display: flex;
	.icon {
		position: absolute;
		width: 75px;
		height: auto;
		animation-name: loading;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 40vh 49vw 0 49vw;
		z-index: 4;
	}
	@keyframes loading {
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default function Loader({ show = false }) {
	useEffect(function () {
		let body = document.querySelector("body");
		if (show) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "scroll";
		}
	});

	return (
		<Wrapper className={`${show ? "display" : ""}`}>
			<Icon type="LOAD" size="--reg"></Icon>
		</Wrapper>
	);
}
