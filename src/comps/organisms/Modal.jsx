import styled from "styled-components";
import Icon from "./../atoms/Icon";
import Button from "./../atoms/Button";

const Wrapper = styled.div`
	/* @media only screen and (max-width: 400px) {
    display: none;
} */
	/* background-color: var(--black);
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
} */
	/* .loader {
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
} */

	position: fixed;
    left: 0;
	right: 0;
	top: 0;
	bottom: 0;
    margin: auto;
	background-color: var(--white);
	
	width: 600px;
	height: 350px;
	border-radius: 15px;
	overflow: hidden;
	padding: 0 20px;
	z-index: 5;
	display: none;
	&.display {
		display: block;
	}
    //display: block;
	.modal-title {
		height: 15%;
		display: flex;
		justify-content: flex-end;
		button {
			border: none;
			background-color: transparent;
			img {
				width: 50px;
				height: 50px;
				cursor: pointer;
			}
		}
	}
	.modal-body {
		height: 65%;
		padding: 40px;
		text-align: center;
	}
	.modal-footer {
		border-top: solid 2px var(--black);
		height: 20%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		/* button {
            background-color: var(--black);
            color: var(--white);
            font-size: 20px;
            font-weight: 600;
            border: none;
            border-radius: 10px;
            //width: 175px;
            width: 100%;
            padding: 13px 0 13px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        } */
	}

	@media only screen and (min-width: 500px) {
		.modal-footer {
			button {
				width: 175px;
			}
		}
	}
`;
export default function Modal({ show, setShow, message }) {
	return (
		<Wrapper className={`modal-box ${show ? "display" : ""}`}>
			<div className="modal-title">
				<button onClick={setShow}>
					<Icon type="CLOSE"></Icon>
				</button>
			</div>
			<div className="modal-body">
				<h1>{message}</h1>
			</div>
			<div className="modal-footer">
                <Button onClick={setShow}>Continuar</Button>
			</div>
		</Wrapper>
	);
}
