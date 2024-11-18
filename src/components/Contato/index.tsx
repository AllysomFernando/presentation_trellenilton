import React, { useState } from "react";
import {
	ContactContainer,
	ContactSubtitle,
	ContactForm,
	ContactInput,
} from "./styles";
import { Button } from "../Button";
import { sendEmail } from "@/axios";

export default function Contato() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	function handleSendEmail() {
		sendEmail({ toMail: email, content: message });
		alert("Email enviado com sucesso!");
		setEmail("");
		setMessage("");
	}
	return (
		<ContactContainer>
			<ContactSubtitle>Envie sua dúvida</ContactSubtitle>
			<h1>Entre em contato</h1>
			<ContactSubtitle>
				Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um
				orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à
				disposição para responder. 🙂
			</ContactSubtitle>
			<ContactForm>
				<ContactInput
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Seu melhor Email"
				/>
				<ContactInput
					onChange={(e) => setMessage(e.target.value)}
					type="text"
					placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
				/>
				<Button variant="Main" title="Enviar" onPress={handleSendEmail} />
			</ContactForm>
		</ContactContainer>
	);
}
