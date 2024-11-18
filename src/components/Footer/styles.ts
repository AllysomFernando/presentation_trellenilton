import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: #ffffff;
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	height: 400px;

	@media (max-width: 768px) {
		padding: 1rem 0;
	}
`;

export const FooterMain = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 800px;
	height: 100%;
	@media (max-width: 768px) {
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
`;

export const FooterDivIcon = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem;
	height: 50%;
	@media (max-width: 768px) {
		margin: 1rem;
		width: 100%;
		max-width: 300px;
		height: auto;
		text-align: center;
	}

	&:first-child {
		align-items: flex-start;
		gap: 3rem;
		height: 38%;
		@media (max-width: 768px) {
			height: auto;
			align-items: center;
		}
	}
`;

export const FooterTitle = styled.h1`
	font-weight: bold;
	margin-bottom: 2rem;
	color: #212529;

	@media (max-width: 768px) {
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}
`;

export const FooterLink = styled.a`
	font-size: 0.875rem;
	color: #212529;
	margin: 0.25rem 0;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
