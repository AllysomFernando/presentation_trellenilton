import { colors } from "@/styles/colors";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ContactContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 3rem 1rem;
    flex-direction: column;
	@media (max-width: 768px) {
		padding: 2rem 1rem;
	}
`;

export const ContactTitle = styled.h3`
	font-weight: bold;
`;

export const ContactSubtitle = styled.p`
	font-weight: ${theme.main.font.weight.semiBold};
	color: ${colors.purple[500]};
	font-size: 1.25rem;

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 400px;
	gap: 1rem;
	margin-top: 1.5rem;
`;

export const ContactInput = styled.input`
	width: 93%;
	padding: 1rem;
	font-size: 1rem;
	border: 1px solid #ced4da;
	border-radius: 0.375rem;
	color: #495057;

	&::placeholder {
		color: #adb5bd;
	}
`;

export const ContactButton = styled.button`
	width: 100%;
	padding: 1rem;
	font-size: 1rem;
	color: #ffffff;
	background-color: ${theme.main.colors.primary};
	border: none;
	border-radius: 0.375rem;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${theme.main.colors.secondary};
	}
`;
