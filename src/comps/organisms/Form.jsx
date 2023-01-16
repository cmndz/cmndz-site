import styled from "styled-components";
import Button from "./../atoms/Button";
import Loader from "./../molecules/Loader";
import Modal from "./Modal";
import Text from "./../atoms/Text"
import { useState } from "react";

const Wrapper = styled.form`
	width: 100%;
	max-width: 500px;
	.input-text {
		background-color: var(--white-bone);
		border: none;
		border-bottom: solid var(--black) 3px;
		width: 100%;
		height: 40px;
		margin: 5px 0 20px 0;
		padding: 5px 5px 0 5px;
	}
	.input-textarea {
		background-color: var(--white-bone);
		border: none;
		border-bottom: solid var(--black) 3px;
		width: 100%;
		height: 200px;
		overflow: scroll;
		resize: none;
		margin: 5px 0 20px 0;
		padding: 12px 5px 0 5px;
	}
`;

function handleSubmit(e, setShowLoader, setShowModal, setMessage) {
	e.preventDefault();
	setShowLoader(true);
	fetch("https://formsubmit.co/ajax/b2eb15d9c2e4cd9de5e262f05696aafc", {
		method: "POST",
		body: new FormData(e.target),
	})
		.then((response) => response.json())
		.then((data) => {
			setMessage("Muchas gracias por el mensaje.");
			setShowModal(true);
		})
		.catch((error) => {
			setMessage("Error");
			console.log(error);
		});
}
export default function Form() {
	const [showLoader, setShowLoader] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [message, setMessage] = useState("");
	function ModalClose() {
		setShowLoader(false);
		setShowModal(false);
		let form = document.querySelector("form");
		form.reset();
	}
	return (
		<>
			<Wrapper
				className="form"
				onSubmit={function (e) {
					handleSubmit(e, setShowLoader, setShowModal, setMessage);
				}}
			>
				<Text>Tu Nombre</Text>
				<input className="input-text" type="text" name="name" required />
				<Text>Tu eMail</Text>
				<input
					className="input-text"
					type="email"
					name="email"
					placeholder="ejemplo@gmail.com"
					required
				/>
				<Text>Mensaje</Text>
				<textarea
					className="input-textarea"
					name="message"
					id=""
					cols="30"
					rows="10"
					required
				></textarea>
				<Button type="submit">Enviar</Button>
				<input type="hidden" name="_template" value="table" />
				<input type="hidden" name="_subject" value="From Site"></input>
			</Wrapper>
			<Loader show={showLoader}></Loader>
			<Modal show={showModal} setShow={ModalClose} message={message}></Modal>
		</>
	);
}
