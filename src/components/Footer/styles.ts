import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: #ffffff;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;

	&:first-child {
		flex-direction: row;
		gap: 1rem;
	}
`;

export const FooterTitle = styled.h4`
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 1rem;
	color: #212529;
`;

export const FooterLink = styled.a`
	font-size: 0.875rem;
	color: #212529;
	margin: 0.25rem 0;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const FooterBottom = styled.div`
	width: 100%;
	background-color: #f8f9fa;
	padding: 1rem;
	text-align: center;
	margin-top: 2rem;
`;

export const FooterText = styled.p`
	font-size: 0.875rem;
	color: #6c757d;
	margin: 0;
`;
